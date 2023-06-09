# Vg-Countdown
> This component is only for [Vue.js 3+](https://vuejs.org/)

<br />

<div align="center">

![npm](https://img.shields.io/npm/v/@vemlavaraloucagamers/vg-countdown?style=for-the-badge) ![npm](https://img.shields.io/npm/dm/@vemlavaraloucagamers/vg-countdown?style=for-the-badge) ![Snyk Vulnerabilities for npm package](https://img.shields.io/snyk/vulnerabilities/npm/@vemlavaraloucagamers/vg-countdown?label=npm%20vulnerabilities&style=for-the-badge) ![Snyk Vulnerabilities for GitHub Repo](https://img.shields.io/snyk/vulnerabilities/github/VemLavarALoucaGamers/vlalg-frontend-components?label=Repo%20Vulnerabilities&style=for-the-badge)
</div>

<br />

<p align="center">
  <img src="https://github.com/VemLavarALoucaGamers/vlalg-frontend-components/raw/main/vue-components/vg-countdown/images/example.gif" width="200">
</p>

This is a component countdown.

## Installation

```bash
npm install @vemlavaraloucagamers/vg-countdown

# or

yarn add @vemlavaraloucagamers/vg-countdown
```

## Usage
```js
// main.js
import { createApp } from 'vue'
import App from './App.vue'

import VgCountdown from '@vemlavaraloucagamers/vg-countdown'
import "@vemlavaraloucagamers/vg-countdown/dist/style.css";

const app = createApp(App)
app.use(VgCountdown)
app.mount('#app')
```

```jsx
// page.vue
<template>
  <VgCountdown />
</template>

<template>
  <vg-countdown />
</template>

<template>
  <vg-countdown></vg-countdown>
</template>
```

## Props
> Items with an (*) mean they are required

| name    | Value type | Default | Description |
| ------- | :--------- | :------ | :---------------------------- |
| vgId (*)    | String     |        | Sets the id attribute to differentiate from other components |
| day (*)    | Number     | 0       | Completion day, from 1 to 31 |
| month (*)   | String    | jan     | Completion month, jan to dec |
| year (*)   | Number     | 9999    | Completion year, from an integer value representing a year to the number 9999 |
| hour (*)   | Number     | 0       | Completion hour, from 1 to 31 |
| minute (*)   | Number   | 0       | Completion minute, from 1 to 31 |
| second (*)   | Number   | 0       | Completion second, from 1 to 31 |
| daysText    | String   | 'day'     | The text that will appear under the number |
| hoursText    | String   | 'hours'     | The text that will appear under the number |
| minutesText    | String   | 'minutes'     | The text that will appear under the number |
| secondsText    | String   | 'seconds'     | The text that will appear under the number |
| showDays    | Boolean   | true     | Defines whether or not to show the **daysText** |
| showHours    | Boolean   | true     | Defines whether or not to show the **hoursText** |
| showMinutes    | Boolean   | true     | Defines whether or not to show the **minutesText** |
| showSeconds    | Boolean   | true     | Defines whether or not to show the **secondsText** |
| numberColor    | String   | '#000'     | Sets the color of numbers |
| textColor    | String   | '#000'     | Sets the color of texts |
| border    | Boolean   | false     | Defines whether or not to show the border |
| borderColor    | String   | '#000'     | Sets the color of border |
| separator    | Boolean   | false     | Defines whether or not to show the separator |
| separatorType    | String   | ':'    | Sets the type of separator |


## Events

| name    | Return type | Description |
| ------- | :--------- | :---------------------------- |
| started | Boolean | Triggered when the countdown is started |
| finished | Boolean | Triggered when the countdown is finished |

## Example

<p align="left">
  <img src="https://github.com/VemLavarALoucaGamers/vlalg-frontend-components/raw/main/vue-components/vg-countdown/images/props_example.png" width="150">
</p>

```jsx
// page.vue
<template>
  <VgCountdown
    vg-id="vg-countdown"
    :day="14"
    month="oct"
    :year="2024"
    :hour="19"
    :minute="44"
    :second="10"
    border-color="blue"
    text-color="blue"
    border
    separator
    separator-type="/"
    @started="somethingWhenStarting"
    @finished="somethingAtTheEnd"
  />
</template>

<script setup>
  const somethingWhenStarting = () => {
    console.log('VgCountdown Started')
  }
  const somethingAtTheEnd = () => {
    console.log('VgCountdown Finished')
  }

  return {
    somethingWhenStarting,
    somethingAtTheEnd
  }
</script>
```

```bash
# console when starting
VgCountdown Started
```

```bash
# console at the end
VgCountdown Finished
```

## License

[MIT](http://opensource.org/licenses/MIT)
