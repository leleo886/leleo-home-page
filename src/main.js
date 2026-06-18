// Vue 3 应用入口文件：创建应用实例并挂载到 DOM
import { createApp } from 'vue'
// 根组件
import App from './App.vue'

// Vuetify UI 组件库相关引入
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
// Material Design 图标字体
import '@mdi/font/css/materialdesignicons.css'


// 创建 Vuetify 实例，注册所有组件和指令
const vuetify = createVuetify({
    components,
    directives,
    icons: {
        defaultSet: 'mdi', // 使用 MDI 图标集合
    },
    defaults: {
        // 设置 VCard 组件的默认样式
        VCard: {
            variant: 'tonal',
        },
    },
})
// 创建 Vue 应用
const app = createApp(App);
// 忽略所有警告，保持控制台清爽
app.config.warnHandler = () => {};
// 注册 Vuetify 并挂载到 #app
app.use(vuetify).mount('#app')
