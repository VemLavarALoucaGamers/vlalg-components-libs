<template>
  <div class="container-fluid test-page">
    <div class="row">
      <div class="col-md-10 col-md-offset-1 test-page__title">
        <h2>Test page</h2>
        <p class="test-page__component-name">
          <strong>Component:</strong> VgDeleteButton
        </p>
        <p class="test-page__warning">
          Warning: Look at the console to see the click event
        </p>
        Text: <input
          v-model="buttonTxt"
          type="text"
        /><br />
        Background (hex/name): <input
          v-model="activeBg"
          type="text"
        /><br />
        Color (hex/name): <input
          v-model="activeColor"
          type="text"
        />
      </div>
    </div>

    <div class="row">
      <div class="col-md-10 col-md-offset-1 test-page__content">
        <VgDeleteButton
          vg-id="asdas"
          :text="buttonTxt"
          :active-bg="activeBg"
          :active-color="activeColor"
          @clicked="changeStatus"
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
    VgDeleteButton: defineAsyncComponent(() => import('@components/VgDeleteButton.vue')),
  },
  emits: [],
  props: {},
  setup () {
    const buttonTxt = ref('Delete');
    const activeBg = ref('');
    const activeColor = ref('');

    const changeStatus = (value) => {
      console.log('clicked event: ', value)
    }

    return {
      buttonTxt,
      activeBg,
      activeColor,
      changeStatus
    };
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
