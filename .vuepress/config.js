module.exports = {
  "title": "G-Blog",
  "description": "go the extra mile.",
  "dest": "docs",
  "head": [
    [
      "link",
      {
        "rel": "icon",
        "href": "/favicon.ico"
      }
    ],
    [
      "meta",
      {
        "name": "viewport",
        "content": "width=device-width,initial-scale=1,user-scalable=no"
      }
    ]
  ],

  "theme": "reco",
  "themeConfig": {
    "mode": "auto", // 默认 auto，auto 跟随系统，dark 暗色模式，light 亮色模式
    "modePicker": "true", // 默认 true，false 不显示模式调节按钮，true 则显示
    // 网站加密
    "keyPage": {
      // keys: ['32位的 md5 加密密文'], // 1.3.0 版本后需要设置为密文
      "color": '#c49664', // 登录页动画球的颜色
      "lineColor": '#c49664' // 登录页动画线的颜色
    },
    "valineConfig": {
      "appId": "epAryWjgupelWYSMFf6Io40n-gzGzoHsz",// your appId
      "appKey": "N8pebj2MJ6flzFWggvnJFMo5", // your appKey
      "placeholder" : "说点什么吧...",
    },
    "subSidebar": "auto",//在所有页面中启用自动生成子侧边栏，原 sidebar 仍然兼容
    "nav": [
      {
        "text": "Home",
        "link": "/",
        "icon": "reco-home"
      },
      {
        "text": "TimeLine",
        "link": "/timeline/",
        "icon": "reco-date"
      },
      {
        "text": "About",
        "icon": "reco-account",
        "link": "/content/About/" 
      },
      {
        "text": "Contact",
        "icon": "reco-message",
        "items": [
          {
            "text": "GitHub",
            "link": "https://github.com/guanyuqian",
            "icon": "reco-github"
          },
          {
            "text": "E-Mail",
            "link": "mailto:the_sam@foxmail.com",
            "icon": "reco-mail"
          }
        ]
      }
    ],
    "type": "blog",
    "blogConfig": {
      "category": {
        "location": 2,
        "text": "Category"
      },
      "tag": {
        "location": 3,
        "text": "Tag"
      }
    },
    "friendLink": [
      {
        "title": "午后南杂",
        "desc": "Enjoy when you can, and endure when you must.",
        "email": "1156743527@qq.com",
        "link": "https://www.recoluan.com"
      },
      {
        "title": "vuepress-theme-reco",
        "desc": "A simple and beautiful vuepress Blog & Doc theme.",
        "avatar": "https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png",
        "link": "https://vuepress-theme-reco.recoluan.com"
      }
    ],
    "logo": "/logo.png",
    "search": true,
    "searchMaxSuggestions": 10,
    "lastUpdated": "Last Updated",
    "author": "Guanyuqian",
    "authorAvatar": "/avatar.png",
    // "record": "xxxx",
    "startYear": 2021,
    "noFoundPageByTencent": false,
  },
  "markdown": {
    "lineNumbers": true
  }
}