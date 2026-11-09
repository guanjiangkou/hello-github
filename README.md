<div align="center">

<img src="assets/banner.svg" alt="hello-github" width="820">

# hello-github

**一个零依赖的 Node 小项目 —— 我发到 GitHub 的第一个仓库**

[![CI](https://github.com/guanjiangkou/hello-github/actions/workflows/ci.yml/badge.svg)](https://github.com/guanjiangkou/hello-github/actions/workflows/ci.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-3da639.svg)](LICENSE)
[![Node](https://img.shields.io/badge/node-%3E%3D18-339933?logo=node.js&logoColor=white)](package.json)
[![Last commit](https://img.shields.io/github/last-commit/guanjiangkou/hello-github)](https://github.com/guanjiangkou/hello-github/commits/main)

</div>

---

## 这是什么

一个不到 20 行的 Node.js 脚本，做一件很小的事：打印一句问候和当前时间。

它的价值不在功能，而在**它完整走通了一条链路**：本地写代码 → Git 提交 → 推送 GitHub → GitHub Actions 自动跑测试。后面所有项目，都是这条链路的重复。

## 运行效果

```console
$ npm start

Hello, GitHub!
现在时间：2026-11-09T14:00:15.583+08:00
```

## 快速开始

需要 [Node.js](https://nodejs.org/) 18 或更高版本，**不需要 `npm install`**（零依赖）。

```bash
git clone https://github.com/guanjiangkou/hello-github.git
cd hello-github
npm start
```

## 项目结构

```text
hello-github/
├── .github/
│   └── workflows/
│       └── ci.yml       # 推送后自动跑：语法检查 + 运行
├── assets/
│   └── banner.svg       # 顶部横幅
├── index.js             # 入口，打印问候语与时间
├── package.json         # 元信息与 npm start
├── .gitignore           # 排除 node_modules、.env、日志
├── LICENSE              # MIT
└── README.md
```

## 特性

- **零依赖** —— 没有 `node_modules`，`clone` 下来就能跑
- **CI 自动验证** —— 每次 push 在 Node 18 / 20 / 22 三个版本上跑一遍
- **开箱即用的忽略规则** —— `.env`、密钥、日志默认不会被误提交

## 路线图

- [x] 初始化仓库与项目骨架
- [x] GitHub Actions 持续集成
- [ ] 支持 `--name` 参数自定义问候对象
- [ ] 支持 `--json` 输出，方便被其他程序调用

## 许可

[MIT](LICENSE) © 2026 [guanjiangkou](https://github.com/guanjiangkou)
