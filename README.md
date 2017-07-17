# vue-zwy

> 基于`Vue`的多面应用。

## 技术栈
* `vue`、`vuex`、`vue-router`、`axios`、`webpack`

## 项目参考地址
* [vue-cli-multi-page-2.0](https://github.com/bluefox1688/vue-cli-multi-page)
* [vue2.0-multi-page](https://github.com/luchanan/vue2.0-multi-page)
* [vue-zwy-pc](https://github.com/ttflowerboys/vue-demo/tree/zwy-pc)

## Root Folder Structure
```bash
├── build
│   └── ...
├── config
│   └── ...
├── src  # main folder
│   ├── assets  # common assets folder
│   │   ├── img
│   │   │   └── logo.png
│   │   ├── js
│   │   └── css
│   ├── components # common components folder
│   │   └── modal.vue
│   └── views  # pages
│       ├── user  # user part (folder name can be customized)
│       │   ├── login # login.html (folder name can be customized)
│       │   │   ├── app.js   # entry js (file name can't be customized unless you change the webpack.config.js)
│       │   │   ├── app.vue  # login vue (file name can be customized)
│       │   │   └── app.html # template html (file name can't be customized unless you change the webpack.config.js)
│       │   └── index # index.html
│       │       ├── index.js
│       │       ├── index.html
│       │       └── index.vue
│       └── customer # customer part (folder name can be customized)
│           └── home # home.html
│               ├── home.html
│               ├── home.js
│               └── home.vue
├── .babelrc
├── .editorconfig
├── .gitignore
├── index.html
├── package.json
└── README.md
```

## Quick setup — if you’ve done this kind of thing before
* …or `create a new repository` on the command line

 ```bash
echo "# aaa" >> README.md
git init
git add README.md
git commit -m "first commit"
git remote add origin git@github.com:infobigdata/vue-multi-page.git
git push -u origin master
```

* …or `push an existing repository` from the command line

 ```bash
git remote add origin git@github.com:infobigdata/vue-multi-page.git
git push -u origin master
```
