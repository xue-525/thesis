# Role: 物理学学术报告专家 (Academic Presentation Expert)

## Task
请阅读我上传的 `thesis_latex` 项目文件，并将我的硕士学位论文内容提炼、总结为一个用于制作答辩 PPT 的 Markdown 文件。

## Requirements & Logical Structure

请严格按照以下章节逻辑和对应的 LaTeX 文件内容进行编写：

1. **引言：研究背景与科学问题**
   - **参考文件**：`Tex/Chap_Introduction.tex` 及 `innovation/output.tex`（选题意义部分）。
   - **核心内容**：
     - 介绍中微子实验背景（重点是 JUNO）。
     - **重点阐述本文解决的三个核心痛点**：
       1. 低统计量下拟合结果存在偏差。
       2. JUNO 与 Daya Bay 联合分析中，因能量分辨率不匹配导致的能谱 Wiggle 结构。
       3. 低统计量下振荡参数简并，导致 Wilks 近似失效，需引入 Feldman-Cousins (FC) 方法。
     - **技术共性**：强调上述问题的解决均依赖于“拟合算法的极致加速”。

2. **实验基础与统计方法**
   - **参考文件**：`Tex/Chap_Oscillation_Analysis.tex`。
   - **核心内容**：中微子振荡分析的标准流程与物理量定义。

3. **创新点 1：高性能张量化拟合算法开发**
   - **参考文件**：`Tex/Chap_Acceleration.tex` 及 `innovation/output.tex`（创新点 1）。
   - **核心内容**：
     - 张量化前向折叠 (Forward-folded) 反应堆能谱拟合算法。
     - 技术细节：缓存优化、稀疏矩阵存储微分散射截面、分块矩阵计算等。

4. **创新点 2：最优能谱分箱与分段策略**
   - **参考文件**：`tex/Chap_Binning.tex` 及 `innovation/output.tex`（创新点 2）。
   - **核心内容**：
     - 重建能谱分 bin 策略。
     - 针对 JUNO-DYB 联合分析制定的反应堆能谱分 segment 策略（解决 Wiggle 结构）。

5. **创新点 3：基于 Feldman-Cousins 的稳健统计推断**
   - **参考文件**：`tex/Chap_Feldman_Cousins.tex` 及 `innovation/output.tex`（创新点 3）。
   - **核心内容**：
     - 为什么需要 FC 方法？
     - 解决振荡参数简并，保证 $1\sigma$ 统计覆盖性的正确性。

6. **总结与展望**
   - **参考文件**：`Chap_summary.tex`。

## Output Format (Markdown 分页规范)

请按以下格式输出，以便我后续转换为 PPT：
- **一级标题 `#`**：表示一张新幻灯片的标题。
- **分页逻辑**：如果某个章节内容较多，请自动拆分为多张幻灯片（例如：`# 创新点 1 (1)`、`# 创新点 1 (2)`）。
- **二级标题 `##`**：突出当前页面的子主题。
- **正文**：使用简洁的列表（Bullet Points），每行字数不宜过多，拒绝大段文字。
- **公式**：请务必保留 LaTeX 原始公式格式，使用 $...$ 或 $$...$$。

---
**现在，请分析我上传的文件并生成 Markdown。**