import { defineConfig } from 'vitepress'

// 根据部署环境确定base路径
const isNetlify = process.env.NETLIFY === 'true' || 
                 (typeof window !== 'undefined' && window.location.hostname.includes('netlify.app'))
const base = isNetlify ? '/' : '/vitepress_website/'

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
