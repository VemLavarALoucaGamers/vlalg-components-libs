<template>
  <div 
    v-if="vgId"
    :id="vgId"
    class="vg-wrapper teste"
  >
    <div
      class="component vg-reset"
    >
      <slot></slot>
    </div>
  </div>
</template>
<script>
import { defineComponent, computed, toRefs } from 'vue';

const defaultValues = {
  backgroundColor: '#000000',
  textColor: '#ffffff'
}

export default defineComponent ({
  name: 'VgHighlightSelectedText',
  components: {},
  inheritAttrs: false,
  props: {
    vgId: {
      type: String,
      required: true,
    },
    backgroundColor: {
      type: String,
      default: defaultValues.backgroundColor
    },
    textColor: {
      type: String,
      default: defaultValues.textColor
    }
  },
  setup (props) {
    const {
      backgroundColor,
      textColor
    } = toRefs(props)

    const newColor = computed(() => {
      const newTextColor = (textColor.value) ? textColor.value : defaultValues.textColor
      return newTextColor
    })

    const newBackground = computed(() => {
      const newBackgroundColor = (backgroundColor.value) ? backgroundColor.value : defaultValues.backgroundColor
      return newBackgroundColor
    })

    return {
      newColor,
      newBackground
    }
  },
})
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Fugaz+One&display=swap');
.vg-wrapper {
  margin: 0;
  padding: 0;
  font-size: 62.5%;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  display: inline-block;
}

.vg-reset {
  font-family: 'Lato', sans-serif;
  font-style: normal;
  font-weight: light;
  line-height: 1.42857143;
  color: #333;

  * {
    margin: 0;
    padding: 0;
  }
  *,
  *::before,
  *::after {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }
}

.component {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  line-height: 1.42857143;
  display: inline-block;
  font-size: 1.5em;

  &::selection {
    color: v-bind(newColor);
    background-color: v-bind(newBackground);
  }
}
</style>
