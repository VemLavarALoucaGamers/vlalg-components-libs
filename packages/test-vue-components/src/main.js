import { createApp } from 'vue'
import App from './App.vue'

import LoggerFactory from '@vemlavaraloucagamers/md-log-manager'
const nodeEnv = process.env.VUE_APP_APPLICATION_ENV || process.env.NODE_ENV
const isDev = !!(nodeEnv === 'development')
const logOptions = {
  className: 'App Name',
  showLogs: 'Trace',
  nodeEnv: nodeEnv,
  showLogs: isDev ? 'Trace' : 'Warn'
}

let app = createApp(App)

app.config.globalProperties.$log = new LoggerFactory(logOptions).create()

app.mount('#app')
