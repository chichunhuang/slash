// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion



// KaTex 數學函式繪製 1/4
//import remarkMath from 'remark-math';
//import rehypeKatex from 'rehype-katex';
// KaTex 數學函式繪製 2/4
const remarkMath = require('remark-math');
const rehypeKatex = require('rehype-katex');


const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  customFields:{
  home:'fff'  
},
    
  title: 'Insect Totem',
  tagline: '程式技巧與除錯',
  favicon: 'img/70_70.jpg',

  // Set the production url of your site here
  url: 'https://insect-totem.net',
  
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'chichunhuang', // Usually your GitHub org/user name.
  projectName: 'slash', // Usually your repo name.

  onBrokenLinks: 'throw',
  
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-tw',
    locales: ['zh-tw'],
  },
  
  stylesheets: [
    'https://cdn.jsdelivr.net/npm/cookieconsent@3/build/cookieconsent.min.css',
    
    
    // KaTex 數學函式繪製 3/4
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css', // 或是您本地 KaTeX CSS 的路徑
      type: 'text/css',
      integrity: 'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
      crossorigin: 'anonymous',
    },
    
  ],
  scripts: [
    {
      src: 'https://cdn.jsdelivr.net/npm/cookieconsent@3/build/cookieconsent.min.js',
      async: true,
    },
    {
      src: '/js/init-cookieconsent.js',
      async: true,
    },
  ],  

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          showLastUpdateTime: false,// not works, show wrong date
          
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          //editUrl:
          //  'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        
          // KaTex 數學函式繪製 4-1/4
          remarkPlugins: [remarkMath],
          // KaTex 數學函式繪製 4-2/4
          rehypePlugins: [rehypeKatex],
          
        },
        blog: {
          showReadingTime: true,
          
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          //editUrl:
          //  'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        
        gtag: {
          trackingID: 'G-Z1DF5K597H',
          anonymizeIP: true,
        },
      }),
    ],
  ],

  //簡易流程圖 meramaid 1/3
  themes: ['@docusaurus/theme-mermaid'],
  
  //簡易流程圖 meramaid 2/3
  markdown: {
    mermaid: true,
  },

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
		
	//匯入自定義(修改過, 可直接匯入指定元件 ex IconifyIcon) 的繼承 MDXComponents 元件
	//這是預設路徑,若未更改,其實是可以省略	
    MDXComponents: './src/theme/MDXComponents',
    		
    //讓 url/docs/xx 下的主題左側的 menu 預設為 hidden, 可自行決定何時彈出 
	docs: {
      sidebar: {
        hideable: true,
      },
    },
	
      //當 Docusaurus 發現失效的錨點連結時，它會在建置過程中輸出警告訊息，但不會終止建置。
      onBrokenAnchors :'warn',
      
      //簡易流程圖 meramaid 3/3
      mermaid: {
        // 你可以在這裡設定 Mermaid 的選項 (optional)
         theme: {light: 'neutral', dark: 'forest'},
      },
        
      // Replace with your project's social card
      image: 'img/800_374.jpg',
      navbar: {
        title: 'Totem\'s',
        logo: {
          alt: 'Site Logo of Totem\'s',
          src: 'img/70_70.jpg',
        },
		
		// when page scroll down, the menu banner will be displayed or not
        hideOnScroll: true,
		
        items: [
            
          {
            type: 'docSidebar', // 在 docs folder下的文章 
            sidebarId: 'totem_sidebar', //ref sidebar.js
            position: 'left',
            label: '程式技術文章',
          },
          {
            href: 'https://python.insect-totem.net/',
            label: 'Python 學習紀錄',
            position: 'left',
          },
          {
            href: 'https://rust.insect-totem.net/',
            label: 'Rust 學習紀錄',
            position: 'left',
          },
          
          {to: '/docs/Graphics/docs-map', label: 'Graphics', position: 'left'},
          {to: '/blog', label: 'Blog', position: 'left'},
          //{
          //  href: 'https://chichunhuang.github.io/slash/blog',
          //  label: 'GitHub',
          //  position: 'right',
          //},
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            items: [
              {
                label: '關於我',
                to: '/docs/GDPR/AboutMe',
              },
            ],
          },
          {
            items: [
              {
                label: '程式技術文章',
                to: '/docs/docs-map',
              },
            ],
          },
          {
            items: [
              {
                label: '我的插圖',
                to: '/docs/Graphics/docs-map',
              },
            ],
          },
          {
            items: [
              {
                label: 'Privacy Policy(English)',
                to: '/docs/GDPR/PrivacyPolicy_Eng',
              },
              
            ],
          },
          {
            items: [
              {
                   //*****TotemTemplate*****
                label: '隱私權政策',
                   //*****TotemTemplate*****
                to: '/docs/GDPR/PrivacyPolicy_zh_tw',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Insec Totem, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
