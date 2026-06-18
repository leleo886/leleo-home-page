// Vite 配置文件，定义项目构建相关选项
import { defineConfig } from 'vite'
// Vue 单文件组件支持插件
import vue from '@vitejs/plugin-vue'

// Vite 官方文档：https://vite.dev/config/
export default defineConfig({
  // 启用 Vue 插件
  plugins: [vue()],
})
