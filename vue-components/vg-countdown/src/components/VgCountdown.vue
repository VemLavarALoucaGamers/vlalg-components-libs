<template>
  <div
    v-if="vgId"
    :id="vgId"
    class="vg-countdown"
    :style="[ contentColor, borderStyle ]"
  >
    <div
      v-if="showDays"
      class="vg-countdown__items vg-countdown__days"
    >
      <span class="vg-countdown__items-number">
        {{ formatNumber(currentDay) }}
      </span>
      <span class="vg-countdown__items-text">
        {{ daysText }}
      </span>
    </div>

    <div
      v-if="separator"
      class="vg-countdown__separator"
    >
      {{ separatorType }}
    </div>

    <div
      v-if="showHours"
      class="vg-countdown__items vg-countdown__hours"
    >
      <span class="vg-countdown__items-number">
        {{ formatNumber(currentHour) }}
      </span>
      <span class="vg-countdown__items-text">
        {{ hoursText }}
      </span>
    </div>

    <div
      v-if="separator"
      class="vg-countdown__separator"
    >
      {{ separatorType }}
    </div>

    <div
      v-if="showMinutes"
      class="vg-countdown__items vg-countdown__minutes"
    >
      <span class="vg-countdown__items-number">
        {{ formatNumber(currentMinute) }}
      </span>
      <span class="vg-countdown__items-text">
        {{ minutesText }}
      </span>
    </div>

    <div
      v-if="separator"
      class="vg-countdown__separator"
    >
      {{ separatorType }}
    </div>

    <div
      v-if="showSeconds"
      class="vg-countdown__items vg-countdown__seconds"
    >
      <span class="vg-countdown__items-number">
        {{ formatNumber(currentSecond) }}
      </span>
      <span class="vg-countdown__items-text">
        {{ secondsText }}
      </span>
    </div>
  </div>
</template>
<script>
import { defineComponent, onMounted, ref, watch, computed, toRefs } from 'vue';
import { validDay, validMonth, validYear, validHour, validMinute, validSecond } from '@helpers/validation'

export default defineComponent ({
  name: 'VgCountdown',
  inheritAttrs: true,
  emits: ['started', 'finished'],
  props: {
    vgId: {
      type: String,
      required: true,
    },
    day: {
      type: Number,
      required: true,
      default: 1,
      validator: value => validDay(value)
    },
    month: {
      type: String,
      default: 'jan',
      required: true,
      validator: value => validMonth(value)
    },
    year: {
      type: Number,
      default: 9999,
      required: true,
      validator: value => validYear(value)
    },
    hour: {
      type: Number,
      default: 0,
      required: true,
      validator: value => validHour(value)
    },
    minute: {
      type: Number,
      default: 0,
      required: true,
      validator: value => validMinute(value)
    },
    second: {
      type: Number,
      default: 0,
      required: true,
      validator: value => validSecond(value)
    },
    daysText: {
      type: String,
      default: 'days',
    },
    hoursText: {
      type: String,
      default: 'hours'
    },
    minutesText: {
      type: String,
      default: 'minutes'
    },
    secondsText: {
      type: String,
      default: 'seconds'
    },
    showDays: {
      type: Boolean,
      default: true
    },
    showHours: {
      type: Boolean,
      default: true
    },
    showMinutes: {
      type: Boolean,
      default: true
    },
    showSeconds: {
      type: Boolean,
      default: true
    },
    numberColor: {
      type: String,
      default: '#000'
    },
    textColor: {
      type: String,
      default: '#000'
    },
    border: {
      type: Boolean,
      default: false
    },
    borderColor: {
      type: String,
      default: '#000'
    },
    separator: {
      type: Boolean,
      default: false
    },
    separatorType: {
      type: String,
      default: ':'
    }
  },
  setup (props, { emit }) {
    const interval = ref(1000)
    const intervalId = ref('')
    const currentSecond = ref(0)
    const currentMinute = ref(0)
    const currentHour = ref(0)
    const currentDay = ref(0)
    const oldDistance = ref(0)
    const {
      day,
      month,
      year,
      hour,
      minute,
      second,
      border,
      borderColor,
      textColor
    } = toRefs(props)

    onMounted(() => {
      if (isValidProps.value) runInterval()
    })

    const isValidProps = computed(() => {
      const hasDay = validDay(day.value)
      const hasMonth = validMonth(month.value)
      const hasYear = validYear(year.value)
      const hasHour = validHour(hour.value)
      const hasMinute = validMinute(minute.value)
      const hasSecond = validSecond(second.value)

      return (hasDay && hasMonth && hasYear && hasHour && hasMinute && hasSecond)
    })

    const formatStringDate = computed(() => {
      return `${month.value} ${day.value}, ${year.value} ${hour.value}:${minute.value}:${second.value}`
    })

    const negativeNumber = computed(() => {
      const zeroDay = (!currentDay.value || currentDay.value <= 0)
      const zeroHour = (!currentHour.value || currentHour.value <= 0)
      const zeroMinute = (!currentMinute.value || currentMinute.value <= 0)
      const zeroSecond = (!currentSecond.value || currentSecond.value <= 0)

      return (zeroDay && zeroHour && zeroMinute && zeroSecond)
    })

    const borderStyle = computed(() => {
      const bColor = (borderColor.value) ? borderColor.value : '#000'
      const bStyle = 'solid'
      const bWidth = '1px'
      const defaultBorder = {
        padding: '9px 6px',
        border: `${bWidth} ${bStyle} ${bColor}`
      }

      if (border.value) return defaultBorder

      return {}
    })

    const contentColor = computed(() => {
      return {
        color: (textColor.value) ? textColor.value : '#000'
      }
    })

    const newYear = () => {
      const configS = interval.value

      const countDownDate = new Date(formatStringDate.value).getTime()
      const now = new Date().getTime()
      const distance = countDownDate - now
      oldDistance.value = distance
      
      const newDay = Math.floor(distance / (configS * 60 * 60 * 24))
      const newHour = Math.floor((distance % (configS * 60 * 60 * 24)) / (configS * 60 * 60))
      const newMinute = Math.floor((distance % (configS * 60 * 60)) / (configS * 60))
      const newSecond = Math.floor((distance % (configS * 60)) / configS)

      currentDay.value = (newDay >= 0) ? newDay : 0
      currentHour.value = (newHour >= 0) ? newHour : 0
      currentMinute.value = (newMinute >= 0) ? newMinute : 0
      currentSecond.value = (newSecond >= 0) ? newSecond : 0
    }

    const runInterval = () => {
      emit('started')
      intervalId.value = setInterval(() => {
        newYear()
      }, interval.value)
      
    }

    const formatNumber = (value) => {
      return (value >= 0 && value <= 9) ? `0${value}` : value
    }

    watch(oldDistance, () => {
      if (negativeNumber.value && intervalId.value) {
        clearInterval(intervalId.value)
        emit('finished')
      }
    })

    return {
      currentSecond,
      currentMinute,
      currentHour,
      currentDay,
      contentColor,
      borderStyle,
      formatNumber
    };
  },
})
</script>

<style scoped>
.vg-countdown {
  box-sizing: border-box;
  line-height: 1.42857143;
  font-family: 'Lato', sans-serif;
  position: relative;
  display: inline-block;
  vertical-align: baseline;
  height: auto;
  overflow: hidden;
  margin: 0;
}

.vg-countdown .vg-countdown__items {
  position: relative;
  display: inline-block;
  margin: 0 5px;
  padding: 0 5px;
}

.vg-countdown__items .vg-countdown__items-number,
.vg-countdown__items .vg-countdown__items-text {
  position: relative;
  display: block;
  margin: 0;
}

.vg-countdown__items .vg-countdown__items-number {
  font-size: 30px;
  font-weight: 900;
  letter-spacing: 2px;
  line-height: 23px;
  height: 26px;
}

.vg-countdown__items .vg-countdown__items-text {
  font-size: 12px;
  font-weight: 300;
  letter-spacing: 1px;
  height: 17px;
}

.vg-countdown .vg-countdown__separator {
  position: relative;
  display: inline-block;
  margin: 0;
  padding: 0;
  height: 43px;
  vertical-align: top;
  padding-top: 5px;
  font-size: 19px;
  font-weight: 900;
}

</style>
