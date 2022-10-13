<template>
  <div
    id="VgDeleteButton"
    href="#"
    :class="['vg-delete-button', activeButton]"
    :style="[activeColors]"
    @click="btClicked"
  >
    <span class="vg-delete-button__text">{{ text }}</span>
    <span
      class="vg-delete-button__icon"
      :style="[activeBorderColor]"
    ></span>
  </div>
</template>
<script>
import { defineComponent, computed, ref, toRefs } from 'vue';

export default defineComponent ({
  name: 'VgDeleteButton',
  inheritAttrs: false,
  emits: ['clicked'],
  props: {
    text: String,
    activeBg: String,
    activeColor: String,
  },
  setup (props, { emit }) {
    const clicked = ref(false);
    const { activeBg, activeColor } = toRefs(props);

    const defultActiveBackground = '#2196f3';
    const defultActiveColor = '#fff';

    const activeButton = computed(() => {
      let currentClass = '';
      if (clicked.value) currentClass = 'active';
      return currentClass;
    });

    const isActive = computed(() => {
      return clicked.value;
    })

    const activeColors = computed(() => {
      let background = '';
      let color = '';

      if (isActive.value) {
        background = activeBg.value ? activeBg.value : defultActiveBackground.value;
        color = activeColor.value ? activeColor.value : defultActiveColor.value;
      }

      return {
        background,
        color
      };
    });

    const activeBorderColor = computed(() => {
      let borderColor = ''

      if (isActive.value) {
        borderColor = activeColor.value ? activeColor.value : defultActiveColor.value;
      }

      return {
        borderColor,
      };
    });

    const btClicked = () => {
      clicked.value = !clicked.value
      emit('clicked', clicked.value)
    }

    return {
      clicked,
      activeButton,
      activeColors,
      activeBorderColor,
      btClicked
    };
  },
})
</script>

<style scoped>
.vg-delete-button {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  line-height: 1.42857143;
  font-family: 'Lato', sans-serif;
  position: relative;
  width: 160px;
  background: #333;
  border-radius: 4px;
  transition: 0.5s;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  text-decoration: none;
  display: inline-block;
  padding: 25px 0px;
  vertical-align: bottom;
}

.vg-delete-button.active {
  background: #2196f3;
}

.vg-delete-button .vg-delete-button__icon {
  position: absolute;
  left: 19px;
  width: 18px;
  height: 20px;
  display: inline-block;
  background: #fff;
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  transition: 0.5s;
  top: 20px;
}

.vg-delete-button:hover {
  cursor: pointer;
}

.vg-delete-button:hover .vg-delete-button__icon {
  transform: scale(1.5) rotate(60deg);
}

.vg-delete-button.active .vg-delete-button__icon {
  left: 50%;
  transform: translateX(-50%) rotate(-45deg);
  border-radius: 0;
  width: 20px;
  height: 10px;
  background: transparent;
  border: 0;
  border-left: 2px;
  border-bottom: 2px;
  border-color: #fff;
  border-style: solid;
}

.vg-delete-button .vg-delete-button__icon::before {
  content: '';
  position: absolute;
  top: -3px;
  width: 100%;
  height: 2px;
  left: 0px;
  background: #fff;
  box-shadow: 12px -2px 0 #333, 12px -3px 0 #333, 15px -1px 0 #333, 6px -2px 0 #fff;
  transition: 0.5s;
}

.vg-delete-button.active:hover .vg-delete-button__icon::before,
.vg-delete-button.active .vg-delete-button__icon::before {
  transform: scale(0);
}

.vg-delete-button:hover .vg-delete-button__icon::before {
  transform: rotate(-90deg) translateX(50%) translateY(-10px);
}

.vg-delete-button .vg-delete-button__text {
  position: absolute;
  left: 45px;
  right: 40px;
  color: #fff;
  transition: 0.5s;
  top: 12px;
  width: 95px;
  overflow: hidden;
  /* background: tomato; */
  text-align: center;
  font-size: 20px;
}

.vg-delete-button:hover .vg-delete-button__text,
.vg-delete-button.active .vg-delete-button__text {
  transform: translateX(-70px) translateY(-5px) scale(0);
}

/*
.vg-delete-button {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
	position: relative;
	width: 160px;
	height: 50px;
	background: #333;
	border-radius: 4px;
	display: flex;
	justify-content: center;
	align-items: center;
	transition: 0.5s;
	box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
	overflow: hidden;
	text-decoration: none;
  }
  
  .vg-delete-button.active {
	background: #2196f3;
  }
  
  .vg-delete-button .vg-delete-button__icon {
	position: absolute;
	left: 40px;
	width: 18px;
	height: 20px;
	display: inline-block;
	background: #fff;
	border-bottom-left-radius: 3px;
	border-bottom-right-radius: 3px;
	transition: 0.5s;
  }
  
  .vg-delete-button:hover .vg-delete-button__icon {
	transform: scale(1.5) rotate(60deg);
  }
  
  .vg-delete-button.active .vg-delete-button__icon {
	left: 50%;
	transform: translateX(-50%) rotate(-45deg);
	border-radius: 0;
	width: 20px;
	height: 10px;
	background: transparent;
	border-left: 2px solid #fff;
	border-bottom: 2px solid #fff;
  }
  
  .vg-delete-button .vg-delete-button__icon::before {
	content: "";
	position: absolute;
	top: -3px;
	width: 100%;
	height: 2px;
	left: 0px;
	background: #fff;
	box-shadow: 12px -2px 0 #333, 12px -3px 0 #333, 15px -1px 0 #333, 6px -2px 0 #fff;
	transition: 0.5s;
  }
  
  .vg-delete-button.active:hover .vg-delete-button__icon::before,
  .vg-delete-button.active .vg-delete-button__icon::before {
	transform: scale(0);
  }
  
  .vg-delete-button:hover .vg-delete-button__icon::before {
	transform: rotate(-90deg) translateX(50%) translateY(-10px);
  }
  
  .vg-delete-button .vg-delete-button__text {
	position: absolute;
	left: 50px;
	right: 40px;
	color: #fff;
	transition: 0.5s;
  }
  
  .vg-delete-button:hover .vg-delete-button__text,
  .vg-delete-button.active .vg-delete-button__text {
	transform: translateX(-50px) translateY(-5px) scale(0);
  }
*/
</style>
