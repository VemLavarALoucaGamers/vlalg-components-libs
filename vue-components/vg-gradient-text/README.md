# Vg-Gradient-Text
> This component is only for [Vue.js 3+](https://vuejs.org/)
<p align="center">
  <img src="https://github.com/VemLavarALoucaGamers/vlalg-frontend-components/raw/main/vue-components/vg-gradient-text/images/example.png" width="200">
  <img src="https://github.com/VemLavarALoucaGamers/vlalg-frontend-components/raw/main/vue-components/vg-gradient-text/images/example2.png" width="200">
</p>

This is a component Gradient Text.

## Installation

```bash
npm install @vemlavaraloucagamers/vg-gradient-text

# or

yarn add @vemlavaraloucagamers/vg-gradient-text
```

## Usage
```js
// main.js
import { createApp } from 'vue'
import App from './App.vue'

import VgGradientText from '@vemlavaraloucagamers/vg-gradient-text'
import "@vemlavaraloucagamers/vg-gradient-text/dist/style.css";

const app = createApp(App)
app.use(VgGradientText)
app.mount('#app')
```

```jsx
// page.vue
<template>
  <VgGradientText>
    <template #text>
      Slot content
    </template>
  </VgGradientText>
</template>

<template>
  <vg-gradient-text>
    <template #text>
      Slot content
    </template>
  </vg-gradient-text>
</template>
```

## Props
> Items with an (*) mean they are required

| name    | Value type | Default | Description |
| ------- | :--------- | :------ | :---------------------------- |
| vgId (*)    | String     |        | Sets the id attribute to differentiate from other components |
| lineHeight    | String     |  '1.42857143'      | Defines text line-height, accepts any value greater than 0  |
| size    | String     |  '3rem'      | Defines text size, accepts any `value + type` (**px**, **em** or **...**)  |
| bgFirst   | String     | '#5639fc'       | Defines the first gradient background color. Accepts **Color name** and **Hex** |
| bgSecond   | String     | '#05f7ff'       | Defines the second gradient background color. Accepts **Color name** and **Hex** |
| alignment   | String     | 'left'       | Defines the text align. Accepts **center**, **left** and **left** |
| paddingBottom    | String     |  '5'      | Defines text padding-bottom. Depending on the font size (size prop) and if the last paragraph has a letter with a long leg, the leg of the letter will have a hidden part. This property allows to fix this. The minimum value is 5 |
| font    | String     |  'Fugaz One, cursive'      | Defines text font-family. Pass the font-family you want and that is configured in your project |



## Example

<p align="left">
  <img src="https://github.com/VemLavarALoucaGamers/vlalg-frontend-components/raw/main/vue-components/vg-gradient-text/images/props_example.png" width="150">
</p>

```jsx
// page.vue
<template>
  <VgGradientText
    vg-id="vg-gradient-text-one"
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
</template>

<script setup>
</script>
```


## License

[MIT](http://opensource.org/licenses/MIT)
