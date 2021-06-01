module.exports = {
    "title": "G-Blog",
    "description": "Go the extra mile.",
    "dest": "docs",
    "plugins": [['flowchart'],
    // ['cursor-effects',
    //      {
    //         size: 2, // size of the particle, default: 2
    //         shape: 'star' , // shape of the particle, default: 'star'
    //         zIndex: 999999999, // z-index property of the canvas, default: 999999999
    //      },
    // ],
    ["@vuepress-reco/vuepress-plugin-rss", {
        site_url: 'https://www.guanyuqian.com',
    }], ["vuepress-plugin-boxx"], ['sitemap', {
        hostname: 'https://www.guanyuqian.com',
        dateFormatter: val =>{
            return new Date().toISOString()
        }
    }],
    // 版权声明 
    // https://www.npmjs.com/package/vuepress-plugin-copyright
    ['copyright', {
        // noCopy: true,   // the selected text will be uncopiable
        // noSelect
        minLength: 100, // if its length is greater than 100
        authorName: {
          "en-US": "Guanyuqian",
          "zh-CN": "Guanyuqian"
        }
    }],
    // 代码复制弹窗插件
    ["vuepress-plugin-nuggets-style-copy", {
        copyText: "复制代码",
        tip: {
            content: "复制成功!"
        }
    }],
    // 动态标签页标题
    // [
    //   "dynamic-title",
    //   {
    //     showIcon: "/favicon.ico",
    //     showText: "(/≧▽≦/)咦！又好了！",
    //     hideIcon: "/failure.ico",
    //     hideText: "(●—●)喔哟，崩溃啦！",
    //     recoverTime: 200
    //   }
    // ],
    ['vuepress-plugin-medium-zoom'], ['@vuepress/last-updated', {
        transformer: (timestamp, lang) =>{
            // 不要忘了安装 moment
            const moment = require('moment') 
            moment.locale(lang) 
            return moment(timestamp).fromNow()
        }
    }], ['@vuepress/pwa', {
        serviceWorker: true,
        updatePopup: {
            message: "发现新内容可用",
            buttonText: "刷新"
        }
    }],

    ],
    "head": [
    // pwa
    ['link', {
        rel: 'manifest',
        href: '/manifest.webmanifest'
    }], ['meta', {
        name: 'theme-color',
        content: '#ffffff'
    }], ['meta', {
        name: 'apple-mobile-web-app-capable',
        content: 'yes'
    }], ['meta', {
        name: 'apple-mobile-web-app-status-bar-style',
        content: 'black'
    }], ['link', {
        rel: 'apple-touch-icon',
        href: '/apple-touch-icon.png'
    }],
    // ['link', { rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#3eaf7c' }],
    ['meta', {
        name: 'msapplication-TileImage',
        content: '/mstile-150x150.png'
    }],
    //['meta', { name: 'msapplication-TileColor', content: '#000000' }]
    // basic config
    ["link", {
        "rel": "icon",
        "href": "/favicon.ico"
    }], ["meta", {
        "name": "viewport",
        "content": "width=device-width,initial-scale=1,user-scalable=no"
    }],

    // markdown-it-KaTeX
    ['link', {
        rel: 'stylesheet',
        href: 'https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.7.1/katex.min.css'
    }], ['link', {
        rel: "stylesheet",
        href: "https://cdnjs.cloudflare.com/ajax/libs/github-markdown-css/2.10.0/github-markdown.min.css"
    }], ],
    "theme": "reco",
    "themeConfig": {
        "mode": "auto",
        // 默认 auto，auto 跟随系统，dark 暗色模式，light 亮色模式
        "modePicker": "true",
        // 默认 true，false 不显示模式调节按钮，true 则显示
        // 网站加密
        "keyPage": {
            // keys: ['32位的 md5 加密密文'], // 1.3.0 版本后需要设置为密文
            "color": '#c49664',
            // 登录页动画球的颜色
            "lineColor": '#c49664' // 登录页动画线的颜色
        },
        "valineConfig": {
            "appId": "epAryWjgupelWYSMFf6Io40n-gzGzoHsz",
            // your appId
            "appKey": "N8pebj2MJ6flzFWggvnJFMo5",
            // your appKey
            "placeholder": "说点什么吧...",
        },
        feed: {
            canonical_base: 'http://www.guanyuqian.com/',
        },
        "subSidebar": "auto",
        //在所有页面中启用自动生成子侧边栏，原 sidebar 仍然兼容
        "nav": [{
            "text": "主页",
            "link": "/",
            "icon": "reco-home"
        },
        {
            "text": "历史",
            "link": "/timeline/",
            "icon": "reco-date"
        },
        {
            "text": "联系",
            "icon": "reco-message",
            "items": [{
                "text": "关于",
                "icon": "reco-account",
                "link": "/content/about/"
            },
            {
                "text": "留言",
                "link": "/content/messageBoard/",
                "icon": "reco-suggestion"
            },
            {
                "text": "订阅",
                "link": "https://www.guanyuqian.com/rss.xml",
                "icon": "reco-rss"
            },
            {
                "text": "GitHub",
                "link": "https://github.com/guanyuqian",
                "icon": "reco-github"
            },
            {
                "text": "E-Mail",
                "link": "mailto:the_sam@foxmail.com",
                "icon": "reco-mail"
            }]
        }],
        "type": "blog",
        "blogConfig": {
            "tag": {
                "location": 3,
                "text": "标签"
            },
            "category": {
                "location": 3,
                "text": "分类"
            },
        },
        "friendLink": [
        {
            "title" :"G-Blog",
            "link"  :"https://www.guanyuqian.com",
            "desc"  :"Go the extra mile.",
            "email" :"yuqianguan@qq.com",
            "logo"  :"https://www.guanyuqian.com/logo.png"    
        },
        {
            "title":"妄越",
            "link":"http://rrazz.love",
            "desc":"平生蹉跎少年志，雨落樱花又一年。",
            "email":"736751542@qq.com",
            "logo":"http://rrazz.love/img/head.jpg"
        },
        {
            "title": "午后南杂",
            "desc": "Enjoy when you can, and endure when you must.",
            "email": "1156743527@qq.com",
            "logo":"http://www.recoluan.com/head.png",
            "link": "http://www.recoluan.com/"
        },
        {
            "title": "vuepress-theme-reco",
            "desc": "A simple and beautiful vuepress Blog & Doc theme.",
            "logo": "https://vuepress-reco.github.io/icon_vuepress_reco.png",
            "link": "https://vuepress-reco.github.io"
        }],
        "logo": "/logo.png",
        "search": true,
        "searchMaxSuggestions": 10,
        "lastUpdated": "上次更新于",
        "author": "Guanyuqian",
        "authorAvatar": "/avatar.png",
        // "record": "xxxx",
        "startYear": 2021,
        "noFoundPageByTencent": false,
    },
    markdown: {
        "lineNumbers": true,
        extendMarkdown: md => {
            md.set({html: true})
            md.use(require('markdown-it-katex'))
        },
    },
}