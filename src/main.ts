import { createApp } from 'vue'

import ElementPlus from 'element-plus'
// 如果要使用.scss样式文件，则需要引入base.scss文件
// import 'element-plus/packages/theme-chalk/src/base.scss'

import App from './App.vue'
import router from './router'

createApp(App)
  .use(ElementPlus, { size: 'small', zIndex: 3000 })
  .use(router)
  .mount('#app')
