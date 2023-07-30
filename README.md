## Project setup

node 版本 16.13.0
npm  版本 8.5.0

```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your unit tests
```
npm run test:unit
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


```
项目目录：
    - .husky            // 配合prettier和commitmsg进行提交控制
    - public [入口]
        - index.html    // 入口文件
    - src [源码]
        - api            // 请求相关
            - apiHandler    // 处理器
            - index         // 导出
            - interceptor   // 拦截器
            - mockData      // mock数据
        - assets            // 静态资源
            - images        // 图片
            - styles        // 公共样式
        - components\    // 组件
            - sideBar       // 侧边栏组件
            - ...
        - router        // 路由
        - store         // 公共全局state
        - utils    // 辅助函数
            - apiUtils      // 请求响应相关工具
            - constants     // 公共常量
        - pages    // 一些页面（比如404）
    - tests [测试脚本]
        - unit          // 分不同组件进行unit test     

其他配置项目：
    - .commitlintrc.js    // 约束commit的配置，配合husky使用
    - .eslintignore    // eslint忽略文件配置
    - .eslintrc.js    // eslint配置
    - .gitignore    // git不追踪的文件配置
    - .npmrc    // npm源，目前用的是淘宝源
    - .prettierrc    // 格式化代码，配合eslint使用
    - babel.config.js    // babel配置文件
    - jest.config.js    // jest配置文件
    - jsconfig.js   // javascript配置文件
    - package.json    // npm配置文件
    - README.md    // 项目介绍
    - commitlint-config.cjs     //
    - vue.config.js // vue配置文件
```


# commitmessage

commit message 格式
```
<type>(<scope>): <subject>
// 空一行
<Body>
// 空一行
<Footer>
```

示例：

```
$ git log HEAD --grep feat

commit 164b5f8245dff63a18360aa8434aa7066e305eb8
Author: XXXXXX <66666666666@qq.com>
Date:   Sat Apr 20 22:40:17 2019 +0800

    feat(treemap-component): 添加各区域鼠标悬停交互 
    
    - feature/add-tooltip-to-treemap-component
      1. 新增tooltip，描述人物在该区域的历史行为。 
      2. tooltip内容随鼠标指向区域变化而变化。

```