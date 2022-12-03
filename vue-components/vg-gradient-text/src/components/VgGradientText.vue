<template>
  <div
    v-if="vgId"
    :id="vgId"
    class="vg-gradient-text"
    :style="[ newLineHeight, gradient, fontSize, textAlign, pBottom, family ]"
  >
    <slot name="text"></slot>
    <p v-if="!$slots.text">
      Default Text
    </p>
  </div> 
</template>
<script>
import { defineComponent, computed, toRefs } from 'vue';
import { isNumber } from '@vemlavaraloucagamers/helpers'

const defaultValues = {
  bgFirst: '#5639fc',
  bgSecond: '#05f7ff',
  lineHeight: '1.42857143',
  size: '3rem',
  align: 'left',
  paddingBottom: '5',
  font: 'Fugaz One, cursive'
}

const validsAlign = ['center', 'left', 'right']

export default defineComponent ({
  name: 'VgGradientText',
  components: {},
  inheritAttrs: false,
  props: {
    vgId: {
      type: String,
      required: true,
    },
    lineHeight: {
      type: String,
      default: defaultValues.lineHeight
    },
    size: {
      type: String,
      default: defaultValues.size
    },
    bgFirst: {
      type: String,
      default: defaultValues.bgFirst
    },
    bgSecond: {
      type: String,
      default: defaultValues.bgSecond
    },
    alignment: {
      type: String,
      default: defaultValues.align,
      validator: (value) => {
        return validsAlign.includes(value)
      }
    },
    paddingBottom: {
      type: String,
      default: defaultValues.paddingBottom
    },
    font: {
      type: String,
      default: defaultValues.font
    }
  },
  setup (props) {
    const {
      lineHeight,
      bgFirst,
      bgSecond,
      size,
      alignment,
      paddingBottom,
      font
    } = toRefs(props)

    const newLineHeight = computed(() => {
      const hasValue = !!(lineHeight.value && isNumber(parseFloat(lineHeight.value)))
      let convertedNumber = 0

      if (hasValue) convertedNumber = parseFloat(lineHeight.value)

      const value = (hasValue && convertedNumber >= 1) ? convertedNumber : defaultValues.lineHeight

      return {
        'line-height': value
      }
    })

    const gradient = computed(() => {
      const first = (bgFirst.value) ? bgFirst.value : defaultValues.bgFirst
      const second = (bgSecond.value) ? bgSecond.value : defaultValues.bgSecond

      return {
        'background': `-webkit-linear-gradient(${first},${second})`,
        'background-clip': 'text',
        '-webkit-background-clip': 'text',
        '-webkit-text-fill-color': 'transparent'
      }
    })

    const fontSize = computed(() => {
      const newSize = (size.value) ? size.value : defaultValues.size

      return {
        'font-size': newSize
      }
    })

    const textAlign = computed(() => {
      const newAlign = (alignment.value && validsAlign.includes(alignment.value)) ? alignment.value : defaultValues.align

      return {
        'text-align': newAlign
      }
    })

    const pBottom = computed(() => {
      const hasValue = !!(paddingBottom.value && isNumber(parseInt(paddingBottom.value, 10)))
      let convertedNumber = 0

      if (hasValue) convertedNumber = parseInt(paddingBottom.value, 10)

      const newPadding  = (hasValue && convertedNumber >= 5) ? convertedNumber : defaultValues.paddingBottom

      return {
        'padding-bottom': `${newPadding}px`
      }
    })

    const family = computed(() => {
      const newFont  = (font.value) ? font.value : defaultValues.font

      return {
        'font-family': newFont
      }
    })

    return {
      newLineHeight,
      gradient,
      fontSize,
      textAlign,
      pBottom,
      family
    };
  },
})
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Fugaz+One&display=swap');
.vg-gradient-text {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  display: inline-block;
  --tw-text-opacity: 1;
  color: rgb(88 28 135 / var(--tw-text-opacity));
  padding-top: 5px;
  padding-left: 5px;
  padding-right: 5px;
  vertical-align: bottom;
}
</style>
