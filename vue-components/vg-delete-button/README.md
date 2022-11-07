# Vg-Delete-Button
> This component is only for [Vue.js 3+](https://vuejs.org/)
<p align="center">
  <img src="https://github.com/VemLavarALoucaGamers/vlalg-frontend-components/raw/main/vue-components/vg-delete-button/images/example.gif" width="200">
</p>

This is a component delete button.

It doesn't have any logic internally, but it returns an event when clicked.

## Installation

```bash
npm install @vemlavaraloucagamers/vg-delete-button

# or

yarn add @vemlavaraloucagamers/vg-delete-button
```

## Usage
```js
// main.js
import { createApp } from 'vue'
import App from './App.vue'

import VgDeleteButton from '@vemlavaraloucagamers/vg-delete-button'

const app = createApp(App)
app.use(VgDeleteButton)
app.mount('#app')
```

```jsx
// page.vue
<template>
  <VgDeleteButton />
</template>

<template>
  <vg-delete-button />
</template>

<template>
  <vg-delete-button></vg-delete-button>
</template>
```

## Props
> Items with an (*) mean they are required

| name    | Value type | Description |
| ------- | :--------- | :---------------------------- |
| vgId (*)    | String     |        | Sets the id attribute to differentiate from other components |
| text    | String | Define text button |
| activeBg | String | Define active background color (Hex or Color name) |
| activeColor | String | Define active text color (Hex or Color name) |

## Events

| name    | Return type | Description |
| ------- | :--------- | :---------------------------- |
| clicked | Boolean | Triggered when the button is clicked, it returns the status (false for inactive and true for active) |

## Example

<p align="left">
  <img src="https://github.com/VemLavarALoucaGamers/vlalg-frontend-components/raw/main/vue-components/vg-delete-button/images/props_example.png" width="150">
</p>

```jsx
// page.vue
<template>
  <VgDeleteButton
    vg-id="vg-delete-button"
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
