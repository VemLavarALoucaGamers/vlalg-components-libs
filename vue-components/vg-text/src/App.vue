<template>
  <div class="container-fluid test-page">
    <div class="row">
      <div class="col-md-10 col-md-offset-1 test-page__title">
        <h2>Test page</h2>
        <p class="test-page__component-name">
          <strong>Component:</strong> VgText
        </p>
        <p class="test-page__warning">
          Warning: Look at the console to see the click event
        </p>
      </div>
    </div>

    <div class="row">
      <div
        class="col-md-10 col-md-offset-1 test-page__content"
        style="margin-top: 50px; margin-bottom: 50px; overflow: hidden;"
      >
        <h4 style="text-align: left; font-weight: 800;">
          VgGradientText
        </h4>
        <VgGradientText
          vg-id="asdas"
          alignment="center"
          line-height="1"
          size="3.5em"
          padding-bottom="10"
          bg-first="magenta"
          bg-second="cyan"
        >
          <template #text>
            i love to<br />drink coffee<br />very much
          </template>
        </VgGradientText>

        <br /><br /><br /><br />
        <h4 style="text-align: left; font-weight: 800;">
          VgHighlightSelectedText
        </h4>
        <p style="font-size: 26px !important;">
          Select 
          <VgHighlightSelectedText
            vg-id="asdas"
            background-color="tomato"
            text-color="blue"
          >
            this part of the text
          </VgHighlightSelectedText> to see it in another color
        </p>
      </div>
    </div>
  </div>
</template>
<script>
import { defineComponent, defineAsyncComponent } from 'vue';

export default defineComponent({
  name: 'App',
  components: {
    VgGradientText: defineAsyncComponent(() => import('@components/VgGradientText.vue')),
    VgHighlightSelectedText: defineAsyncComponent(() => import('@components/VgHighlightSelectedText.vue'))
  },
  emits: [],
  props: {},
  setup () {
    return {}
  },
});
</script>

<style lang="scss" scoped>
.test-page {
  .test-page__title {
    font-family: 'Lato', sans-serif;
    margin-top: 40px;
    margin-bottom: 50px;

    h2 {
      font-weight: 700;
      text-transform: uppercase;
      margin-bottom: 5px;
    }

    p {
      font-weight: 500;
      font-size: 1.2em;

      &.test-page__component-name {
        margin-bottom: 0px;
      }
      &.test-page__warning {
        font-weight: 700;
        font-size: 1em;
        font-style: italic;
      }
    }
  }

  .test-page__content {
    text-align: center;
  }
}
</style>
