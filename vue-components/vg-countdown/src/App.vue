<template>
  <div class="container-fluid test-page">
    <div class="row">
      <div class="col-md-10 col-md-offset-1 test-page__title">
        <h2>Test page</h2>
        <p class="test-page__component-name">
          <strong>Component:</strong> VgCountdown
        </p>
        <p class="test-page__warning">
          Warning: Look at the console to see the click event
        </p>
      </div>
    </div>

    <div class="row">
      <div
        class="col-md-10 col-md-offset-1 test-page__content"
        style="margin-top: 50px;"
      >
        <VgCountdown
          vg-id="test"
          :day="day"
          :month="month"
          :year="year"
          :hour="hour"
          :minute="minute"
          :second="second"
          border-color="blue"
          text-color="blue"
          border
          separator
          separator-type="/"
        />
      </div>
    </div>
  </div>
</template>
<script>
import { defineComponent, defineAsyncComponent, ref } from 'vue';

export default defineComponent({
  name: 'App',
  components: {
    VgCountdown: defineAsyncComponent(() => import('@components/VgCountdown.vue')),
  },
  emits: [],
  props: {},
  setup () {
    const day = ref(14)
    const month = ref('oct')
    const year = ref(2024)
    const hour = ref(19)
    const minute = ref(44)
    const second = ref(10)

    const toDate = ref('oct 11, 2022 16:05:00')

    return {
      day,
      month,
      year,
      hour,
      minute,
      second,
      toDate
    }
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
