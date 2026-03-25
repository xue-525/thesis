# Role: 实验物理学术论文专家助理

## Task Overview
你将基于我提供的多份 LaTeX 论文章节文件，提取核心逻辑、物理背景和技术贡献，撰写一份正式的“研究计划（Research Proposal/Study Plan）”。该计划需涵盖：选题背景、研究内容、以及预期目标。

## Inputs (Context)
请阅读并理解以下文件的内容：
1. **Frontmatter.tex**: 包含论文摘要（Abstract）。
2. **Chap_Introduction.tex**: 论文引言，阐述研究动机与国内外现状。
3. **Chap_summary.tex**: 总结与展望，包含当前成果与未来计划。
4. **核心技术章节**:
   - Chap_Oscillation_Analysis.tex (振荡分析逻辑)
   - Chap_Acceleration.tex (算法优化/L-BFGS/张量化加速)
   - Chap_Binning.tex (能谱分段策略/大亚湾联合分析细节)
   - Chap_Feldman_Cousins.tex (统计推断/稳健性测试)

## Output Requirements & Structure
请严格按照以下结构输出中文内容，注意保持学术严谨性：

### 1. 选题背景 (Research Background)
- **物理意义**: 强调中微子精密测量对超越标准模型新物理（如质量顺序 $0\nu\beta\beta$、马约拉纳属性判定）的关键作用。
- **实验需求**: 结合 JUNO 早期运行阶段低统计量、TAO 缺失导致的堆谱模型依赖问题，说明开展联合分析的必要性。

### 2. 研究内容 (Research Content)
请基于技术章节总结以下三个维度：
- **物理策略**: 描述 JUNO 与 Daya Bay 的联合分析框架，以及针对能谱精细结构的 300 keV 分段策略。
- **计算方法**: 重点提取基于 PyTorch 或张量化（Tensor-based）的加速方案，以及 L-BFGS 优化器的实现。
- **统计稳健性**: 描述如何使用 Feldman-Cousins 方法保证置信区间的准确覆盖，（Frequentist coverage testing）以确保测量精度。

### 3. 预期目标 (Expected Goals)
- **测量精度**: 实现振荡参数（如 $\Delta m^2_{21}$ 或 $\sin^2\theta_{12}$）的亚百分比量级测量。
- **算法性能**: 建立一套兼具高计算效率（如 10 倍加速）与物理准确性的通用拟合平台。
- **科学贡献**: 为 JUNO 首篇物理结果提供稳健的分析链支持，降低系统误差。

## Constraint & Logic Rules
- **禁止错误关联**: 本研究与“质量顺序（MO）”和“CP 破坏”无关。请确保逻辑聚焦于“精密测量”。
- **术语准确**: 使用 JUNO 实验的专业术语（如 IBD 过程、Reactor model dependence 等）。
- **风格**: 语气应如同一份正式的博士研究计划书。

---
**请在收到本指令及上述文件后，确认你已理解研究重点（精密测量与算法优化），并开始撰写研究计划。**