# mv-ui-builder

## 项目目录结构
```
├── README.md
├── dist                                  // 打包文件
├── index.html
├── package.json
├── public
├── src
│   ├── App.vue
│   ├── assets                            // 资源文件
│   ├── components                        // 组件
│   │   ├── Editor                        // 编辑模式下使用的元素组件
│   │   ├── IconSelect.vue
│   │   ├── Preview                       // 预览编辑模式下使用的元素组件
│   │   └── hooks                         // 预览编辑模式下公用脚本逻辑
│   ├── config                            // 元素组件配置参数
│   ├── data                              // 预览示例数据
│   ├── hooks                             // 公用逻辑代码
│   ├── main.ts                           // 入口文件
│   ├── store                             // 编辑数据存储
│   ├── types                             // 类型
│   ├── utils                             // 通用工具方法
│   │   ├── common.ts
│   │   ├── index.ts
│   │   └── outCodeFile                   // 导出代码的方法库
│   ├── views
│   │   ├── Editor                        // 编辑模块代码
│   │   │   ├── Canvas                    // 元素组件编辑显示区域
│   │   │   ├── Header                    // 导航栏
│   │   │   ├── LeftComponents            // 左边元素组件列表
│   │   │   ├── RightPanel                // 右边元素组件编辑
│   │   │   └── index.vue 
│   │   └── Preview                       // 预览模块代码
│   └── vite-env.d.ts
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
```
