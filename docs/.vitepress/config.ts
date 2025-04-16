import { defineConfig } from 'vitepress'

// 根据环境变量确定base路径
const base = process.env.NETLIFY === 'true' ? '/' : '/vitepress_website/'

// https://vitepress.vuejs.org/config/app-configs
export default defineConfig({
  base, // 动态设置base路径
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'About', link: '/about' },
      { text: 'Contact', link: '/contact' }
    ]
  }
})
