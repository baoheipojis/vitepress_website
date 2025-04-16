import { defineConfig } from 'vitepress'

// https://vitepress.vuejs.org/config/app-configs
export default defineConfig({
  base: '/vitepress_website/', // Changed from '/my-blog/' to match your repository name
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'About', link: '/about' },
      { text: 'Contact', link: '/contact' }
    ]
  }
})
