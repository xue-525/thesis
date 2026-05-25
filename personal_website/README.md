# 个人主页 (Personal Website)

> 薛景秦 · Jingqin Xue 的个人主页，纯静态 HTML/CSS/JS，零依赖、零构建。

## 目录结构

```
personal_website/
├── index.html      # 主页面（结构 + 内嵌中文文案）
├── styles.css      # 样式（仿 resume.tex 蓝色梯形章节标题）
├── i18n.js         # 英文词典
├── script.js       # 语言切换 + 平滑滚动
├── assets/
│   └── photo.jpg   # 头像（拷贝自 resume/photo.jpg）
└── README.md
```

## 本地预览

任选其一：

```bash
# 方式 1：直接用浏览器打开
xdg-open index.html        # Linux
open    index.html         # macOS

# 方式 2：起一个本地 HTTP 服务（推荐，避免文件协议下的 CORS 限制）
python3 -m http.server 8000
# 然后访问 http://localhost:8000
```

## 部署到 GitHub Pages

```bash
# 在仓库 personal_website 目录下，新建一个独立的 gh-pages 分支或推到 docs/ 目录
# 然后在 GitHub 仓库 Settings → Pages 中选择该分支/目录为发布源
```

## 内容来源

- 个人信息、教育、技能、荣誉：`resume/resume.tex`
- 项目详情（STAR 描述）：`thesis_latex/program_experience/project_experience.txt`

更新内容只需编辑 `index.html`（中文）与 `i18n.js`（英文）中对应 key。

## 设计要点

- **主色**：`#003264`（与 `resume.tex` 中 `MyDarkBlue` 完全一致）
- **辅色**：学术金 `#c8a464`，用于强调标签 / Tag 高亮
- **章节标题**：CSS `clip-path` 仿 LaTeX TikZ 蓝色梯形效果
- **响应式**：≥ 768 px 双栏 Hero / Skills，移动端自动堆叠
- **中英切换**：浏览器语言偏好 + localStorage 记忆，无刷新切换
- **打印样式**：可直接 Ctrl+P 输出近似简历版式的 PDF
