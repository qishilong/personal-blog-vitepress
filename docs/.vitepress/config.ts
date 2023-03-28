import { defineConfig } from 'vitepress';
import { github } from './meta';
// import path from 'node:path';
// const publicPath = path.resolve(__dirname, "./../public");
import sidebar from './sidebar';
// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "前端学习笔记",
  titleTemplate: false,
  description: "一个酷爱编程的前端小白",
  srcDir: "src",
  cleanUrls: true,
  locales: {
    root: { label: '简体中文', lang: 'zh-CN' },
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    outline: 'deep',
    docFooter: {
      prev: '上一篇',
      next: '下一篇',
    },
    returnToTopLabel: '返回顶部',
    outlineTitle: '导航栏',
    darkModeSwitchLabel: '外观',
    sidebarMenuLabel: '归档',
    editLink: {
      pattern: `${github}/tree/main/docs/:path`,
      text: '在 GitHub 上编辑此页',
    },
    lastUpdatedText: '最后一次更新于',
    footer: {
      message: `用心去做高质量的专业前端内容网站，欢迎 <a target="_blank" style="color: var(--vp-c-brand)" href="${github}">star ⭐</a> 让更多人发现`,
      copyright: `<a target="_blank" href="${github}/blob/main/LICENSE">MIT License</a> | 版权所有 © 2023-${new Date().getFullYear()} <a target="_blank" href="${github}">qishilong</a> | 京ICP备2023002610号`,
    },
    logo: "/logo.png",
    nav: [
      {
        text: '首页',
        link: '/index',
      },
      {
        text: '前端',
        items: [
          { text: 'HTML', link: '/html/' },
          { text: 'CSS', link: '/css/' },
          { text: 'JavaScript', link: '/javascript/' },
          { text: 'TypeScript', link: '/typescript/' },
          { text: 'Module', link: '/module/' },
          { text: 'Less', link: '/less/' },
          { text: 'Webpack', link: '/webpack/' },
          { text: 'Vite', link: '/vite/' },
          { text: 'MVVM 原理', link: '/mvvm/' },
          { text: 'Vue 全家桶', link: '/vue/' },
          { text: 'React 全家桶', link: '/react/' },
          { text: '浏览器', link: '/browser/' },
        ],
      },
      {
        text: '后端',
        items: [
          { text: 'NodeJS', link: '/nodejs/' },
          { text: 'Rust', link: '/rust/' }
        ],
      },
      {
        text: '移动端',
        items: [
          { text: 'React Native', link: '/react-native/' },
          { text: 'Flutter', link: '/flutter/' },
          { text: 'Web App', link: '/web-app/' },
          { text: '微信小程序', link: '/weixinapp/' },
        ],
      },
      {
        text: '数据可视化',
        items: [
          { text: 'Threejs', link: '/threejs/' },
          { text: 'WebGL', link: '/webgl/' },
        ],
      },
      {
        text: '算法',
        link: '/algorithm/'
      },
      {
        text: '网络',
        link: '/network/'
      },
      {
        text: '数据库',
        items: [
          { text: 'MySQL', link: '/mysql/' },
          { text: 'MongoDB', link: '/mongodb/' }
        ],
      },
      {
        text: '工具',
        items: [
          { text: 'Git', link: '/git/' },
          { text: 'Npm', link: '/npm/' },
          { text: 'Yarn', link: '/yarn/' },
          { text: 'Nvm', link: '/nvm/' },
          { text: 'Cnpm', link: '/cnpm/' },
          { text: 'Pnpm', link: '/pnpm/' }
        ],
      },
      {
        text: '工具库',
        items: [
          { text: 'Redux', link: '/redux/' },
          { text: 'Echarts', link: '/echarts/' },
          { text: 'Axios', link: '/axios/' },
          { text: 'Jquery', link: '/jquery/' },
          { text: 'BootStrap', link: '/bootstrap/' },
          { text: 'Moment', link: '/moment/' },
          { text: 'Dayjs', link: '/dayjs/' },
          { text: 'Lodash', link: '/lodash/' },
          { text: 'Ahooks', link: '/ahooks/' },
          { text: 'Usehooks-ts', link: '/usehook-ts/' },
          { text: 'Md5', link: '/md5/' },
          { text: 'Classnames', link: '/classnames/' },
          { text: 'Swiper', link: '/swiper/' },
          { text: 'Validate.js', link: '/validate/' },
          { text: 'Validator', link: '/validator/' },
          { text: 'Sequelize', link: '/sequelize/' },
          { text: 'Cheerio', link: '/cheerio/' },
        ]
      },
      {
        text: '计算机基础',
        link: '/computer/',
        items: [
          { text: '计算机组成原理', link: '/principles-of-computer-composition/' },
          { text: '操作系统', link: '/operating-system/' },
          { text: '数据库', link: '/database/' },
          { text: '计算机网络', link: '/computerNetworks/' },
        ],
      },
    ],

    sidebar: sidebar,

    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/qishilong'
      }
    ]
  },
  head: [
    ['link', { rel: 'icon', type: 'image/x-icon', href: '/sun.ico' }]
  ],
});
