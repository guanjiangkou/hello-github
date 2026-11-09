# hello-github

第一个发到 GitHub 上的仓库，用来验证「本地提交 → 推送到远程」这条链路是否跑通。

## 运行

需要 Node.js 18 及以上。

```bash
npm start
```

输出：

```
Hello, GitHub!
现在时间：2026-11-09T14:02:31+08:00
```

## 文件说明

| 文件 | 作用 |
|---|---|
| `index.js` | 入口脚本，打印问候语和当前时间 |
| `package.json` | 项目元信息与 `npm start` 命令 |
| `.gitignore` | 排除 `node_modules/`、日志、本地环境变量等不该提交的内容 |
| `LICENSE` | MIT 许可，别人可以自由使用 |

## 接下来可以做的事

- 改 `index.js`，`git add . && git commit -m "改了问候语"`，再 `git push`，观察仓库更新
- 在 GitHub 仓库页 Settings 里改仓库名
- 加一个 `.github/workflows/ci.yml` 跑自动测试

## License

[MIT](LICENSE)
