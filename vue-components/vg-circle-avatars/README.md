# Vg-Delete-Button
<p align="center">
  <img src="https://github.com/VemLavarALoucaGamers/vlalg-frontend-components/raw/main/vue-components/vg-circle-avatar/images/example.gif" width="200">
</p>

This is a component circle avatar.

It doesn't have any logic internally, but it returns an event when clicked.

## Installation

```bash
npm install @vemlavaraloucagamers/vg-circle-avatar

# or

yarn add @vemlavaraloucagamers/vg-circle-avatar
```

## Usage
```js
// main.js
import { createApp } from 'vue'
import App from './App.vue'

import VgCircleAvatar from '@vemlavaraloucagamers/vg-circle-avatar'

const app = createApp(App)
app.use(TonhaoInputsThree)
app.mount('#app')
```

```jsx
// page.vue
<template>
  <VgCircleAvatar />
</template>

<template>
  <vg-circle-avatar />
</template>

<template>
  <vg-circle-avatar></vg-circle-avatar>
</template>
```

## Props

| name    | Value type | Description |
| ------- | :--------- | :---------------------------- |
| text    | String | Define text button |
| activeBg | String | Define active background color (Hex or Color name) |
| activeColor | String | Define active text color (Hex or Color name) |

## Events

| name    | Return type | Description |
| ------- | :--------- | :---------------------------- |
| clicked | Boolean | Triggered when the button is clicked, it returns the status (false for inactive and true for active) |

## Example

<p align="left">
  <img src="https://github.com/VemLavarALoucaGamers/vlalg-frontend-components/raw/main/vue-components/vg-circle-avatar/images/props_example.png" width="150">
</p>

```jsx
// page.vue
<template>
  <VgCircleAvatar
    text="Delete"
    activeBg="blue"
    activeColor="#E35BF9"
    @clicked="changeStatus"
  />
</template>

<script setup>
  const changeStatus = (value) => {
    console.log('clicked event: ', value)
  }

  return {
    changeStatus
  }
</script>
```

```bash
# console
clicked event: true
```

## License

[MIT](http://opensource.org/licenses/MIT)
