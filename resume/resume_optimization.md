# LaTeX 简历迁移指令 (Skill File)

### 角色定位
你是一位精通 LaTeX 简历重构与校招简历优化的专家。你不仅精通 `tikz`、`titlesec` 等宏包的排版，还能精准捕捉科研项目中的工程亮点。

### 任务描述
请参考下方提供的 **【目标模板代码】** 的视觉风格和命令结构，将 **【我的原始 CV 内容】** 进行完美迁移与适配。

---

### 1. 核心迁移规则 (Structural Rules)
*   **教育背景 (Education)：** 使用 `\resumeEducationHeading`。
*   **个人技能 (Skills)：** 
    *   将技能按模板格式分类。
    *   请务必突出：**PyTorch (autograd)**、**C/C++**、**高性能计算 (HPC)**、**张量化表示**。
*   **科研与项目经历 (Experience)：**
    *   使用 `\resumeResearchHeading` 结构。
    *   **重点标注：** 在项目右侧使用模板特有的蓝色标签，例如：`\hfill \textbf{\color{MyDarkBlue}[第一作者]}` 或 `\hfill \textbf{\color{MyDarkBlue}[核心开发]}`。
    *   **成果体现：** 将发表于 **EPJC** 的论文作为科研经历的首要成果。
*   **荣誉奖项 (Honors)：** 使用 `\resumeProjectHeading` 格式列出 **国家奖学金**、**三好学生** 等。

### 2. 技术细节要求 (Technical Requirements)
*   **视觉一致性：** 完整保留目标模板中的 **TikZ 蓝色梯形标题** 定义、颜色设置（`MyDarkBlue`）及页面边距。
*   **命令规范：** 所有的列表点必须严格使用 `\resumeItemListStart` 和 `\resumeItem{...}`，禁止直接使用普通的 `itemize`。
*   **针对性优化：** 考虑到我正在申请 算法或者软件开发 岗位，请在描述物理研究（如 JUNO 或 ToyMC 模拟）时，强调 **算法效率提升（如 10 倍加速）**、**内存优化** 和 **大规模数据处理** 能力。

---

### 3. 输入数据 (Input Data)

#### 【我的原始 CV 内容】
resume/cv.tex

---

#### 【目标模板代码】
(请在此处粘贴你上面发给我的那段简历模板代码)
%------------------------
\documentclass[a4paper,11pt]{article}
% 1. 中文支持 (必须使用 XeLaTeX 编译)\usepackage[UTF8]{ctex}
% 2. 绘图包 (实现蓝色梯形标题)\usepackage{tikz}\usetikzlibrary{shapes, backgrounds}
% 3. 布局与格式包\usepackage{latexsym}\usepackage[empty]{fullpage}\usepackage[explicit]{titlesec}\usepackage{marvosym}\usepackage{verbatim}\usepackage{enumitem}\usepackage[hidelinks]{hyperref}\usepackage{fancyhdr}\usepackage{tabularx}\usepackage[usenames,dvipsnames]{xcolor}
%-------------------------------------------% 颜色定义\definecolor{MyDarkBlue}{RGB}{0, 50, 100}
% 页边距设置 (优化后让页面更饱满)\pagestyle{fancy}\fancyhf{} \fancyfoot{}\renewcommand{\headrulewidth}{0pt}\renewcommand{\footrulewidth}{0pt}
\addtolength{\oddsidemargin}{-0.6in}\addtolength{\evensidemargin}{-0.6in}\addtolength{\textwidth}{1.2in}\addtolength{\topmargin}{-.7in}\addtolength{\textheight}{1.4in}
\urlstyle{same}\raggedbottom\raggedright\setlength{\tabcolsep}{0in}
% --- 自定义 TikZ 标题样式 ---\titleformat{\section}  {}   {}   {0pt}   {%    \noindent     \begin{tikzpicture}[baseline=(t.base)]    \vspace{-2pt}      \node[inner xsep=10pt, inner ysep=3pt, text=white, font=\large\bfseries, align=left, anchor=base west] (t) at (0,0) {#1};      \begin{scope}[on background layer]         \fill[MyDarkBlue] (t.north west) -- (t.north east) -- ([xshift=8pt]t.south east) -- (t.south west) -- cycle;         \draw[MyDarkBlue, line width=2pt] ([xshift=-68.30pt]t.south east) -- (\linewidth, 0 |- t.south east);      \end{scope}    \end{tikzpicture}%  }  []
\titlespacing*{\section}{0pt}{12pt}{6pt}
%-------------------------------------------% 自定义命令
\newcommand{\resumeItem}[1]{  \item\small{{#1 \vspace{-1pt}}}}
\newcommand{\resumeEducationHeading}[4]{  \vspace{-2pt}\item    \begin{tabular*}{0.97\textwidth}[t]{l@{\extracolsep{\fill}}r}      \textbf{#1} & #2 \\      \textit{\small #3} & \textit{\small #4} \\    \end{tabular*}\vspace{-5pt}}
\newcommand{\resumeResearchHeading}[2]{  \vspace{-2pt}\item    \begin{tabular*}{0.97\textwidth}[t]{l@{\extracolsep{\fill}}r}      \textbf{#1} & \textbf{#2} \\    \end{tabular*}\vspace{-7pt}}
\newcommand{\resumeProjectHeading}[2]{    \item    \begin{tabular*}{0.97\textwidth}{l@{\extracolsep{\fill}}r}      \small#1 & #2 \\    \end{tabular*}\vspace{-7pt}}
\newcommand{\resumeSubHeadingListStart}{\begin{itemize}[leftmargin=0.15in, label={}]}\newcommand{\resumeSubHeadingListEnd}{\end{itemize}}\newcommand{\resumeItemListStart}{\begin{itemize}[leftmargin=*, label={\small\textbullet}]}\newcommand{\resumeItemListEnd}{\end{itemize}\vspace{-2pt}}
%-------------------------------------------%%%%%%  简历正文  %%%%%%%%%%%%%%%%%%%%%%%%%%%%
\begin{document}
%---------- 个人信息 ----------\begin{center}     \textbf{\Huge \scshape {\ziju{0.2} 你的姓名}} \\ \vspace{8pt}    \small     \href{mailto:yourname@example.edu.cn}{\underline{yourname@example.edu.cn}} $|$     +86 123-4567-8910 $|$     \href{https://github.com/yourusername}{\underline{github.com/yourusername}} $|$    \href{https://yourhomepage.com}{\underline{个人主页/Portfolio}}\end{center}
%----------- 教育背景 -----------\section{教育背景}  \resumeSubHeadingListStart    \resumeEducationHeading      {厦门大学 (985 / 双一流)}{202X.09 -- 202X.06}      {专业：计算机科学与技术}{厦门，福建}      \resumeItemListStart        \resumeItem{\textbf{GPA: 3.XX / 4.0} \ \ $|\ \ $ \textbf{专业排名: X / XXX (Top X\%)}}        \resumeItem{\textbf{英语水平：}雅思 X.X / CET-6 XXX}        \resumeItem{\textbf{研究兴趣：}人工智能、计算机视觉、多模态学习}      \resumeItemListEnd  \resumeSubHeadingListEnd
%----------- 技能清单 (有效增加页面垂直占据度) -----------\section{个人技能} \begin{itemize}[leftmargin=0.15in, label={}]    \small{\item{     \textbf{专业技能}{: 深度学习框架 (PyTorch/TensorFlow), 计算机视觉, 跨模态表征学习} \\     \textbf{编程/语言}{: Python (熟练), C/C++, SQL, LaTeX (精通), 英语 (雅思 7.0/CET-6)} \\     \textbf{工程工具}{: Linux 环境开发, Docker 容器化, Git 版本控制, AWS/GCP 云计算平台}    }} \end{itemize}
%----------- 科研经历 -----------\section{科研经历}  \resumeSubHeadingListStart
    \resumeResearchHeading      {厦门大学媒体分析与计算组 (MAC)}       {202X.08 -- 202X.01}      \resumeItemListStart        \resumeItem{\textbf{项目：基于 AIGC 的跨模态图像增强研究} \hfill \textbf{\color{MyDarkBlue}[第一作者]}}        \resumeItem{针对XX复杂环境下图像特征丢失问题，提出了一种基于稳定扩散 (Stable Diffusion) 的增强框架。}        \resumeItem{设计了全新的对比学习损失函数，在保证语义一致性的同时，将 PSNR 指标提升了 15\%。}        \resumeItem{该成果已投稿至 \textbf{CVPR 202X} 并获得审稿人正面评价。}      \resumeItemListEnd
    \resumeResearchHeading      {清华大学智能产业研究院 (AIR)}       {202X.02 -- 202X.07}      \resumeItemListStart        \resumeItem{\textbf{项目：面向智慧城市的自动驾驶场景建模} \hfill \textbf{\color{MyDarkBlue}[研究实习生]}}        \resumeItem{负责处理大规模雷达点云数据与视觉信息的多模态对齐，优化了感知算法在雨天环境下的鲁棒性。}        \resumeItem{主笔撰写了项目的技术报告，并参与了国家级重大科研课题的申报工作。}      \resumeItemListEnd
    \resumeResearchHeading      {中国政法大学 (跨学科交叉研究项目)}       {202X.09 -- 202X.12}      \resumeItemListStart        \resumeItem{\textbf{项目：法律文本的自动语义分析与知识图谱构建} \hfill \textbf{\color{MyDarkBlue}[核心成员]}}        \resumeItem{利用大语言模型 (LLM) 对非结构化法律判决书进行实体抽取，构建了包含 10 万+节点的知识图谱。}        \resumeItem{实现了跨学科背景下的技术落地，为法律人工智能助手提供了核心语义支持。}      \resumeItemListEnd
  \resumeSubHeadingListEnd
%----------- 项目经历 -----------\section{项目经历}  \resumeSubHeadingListStart    \resumeResearchHeading      {项目/竞赛名称}       {202X.03 -- 202X.06}      \resumeItemListStart        \resumeItem{\textbf{获得奖项：某某大赛一等奖 (Top 1\%)} \hfill \textbf{\color{MyDarkBlue}[队长/核心开发]}}        \resumeItem{项目背景描述：该系统旨在解决XX问题，填补了XX领域的空白。}        \resumeItem{个人职责：负责系统架构设计、核心算法实现以及前后端联调。}        \resumeItem{技术栈：UniApp, Python, PyTorch, Docker 等。}      \resumeItemListEnd  \resumeSubHeadingListEnd
%----------- 荣誉奖项 -----------\section{荣誉奖项}  \resumeSubHeadingListStart    \resumeProjectHeading      {\textbf{国家奖学金} (教育部颁发，Top 0.2\% 顶尖荣誉)}{202X}    \resumeProjectHeading      {\textbf{达美乐奖学金} (校级奖学金)}{202X}    \resumeProjectHeading      {\textbf{美国大学生数学建模竞赛 (MCM/ICM)} (Meritorious Winner)}{202X}    \resumeProjectHeading      {\textbf{中国高校计算机大赛 - AI 创意赛} (全国二等奖)}{202X}  \resumeSubHeadingListEnd
\end{document}
---

### 输出要求
请直接给出修改后的完整 `.tex` 代码，确保可以直接通过 XeLaTeX 编译运行。