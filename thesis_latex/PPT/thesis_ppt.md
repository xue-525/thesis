# 反应堆中微子振荡分析中的高性能拟合算法与统计方法研究
## ——基于 JUNO 实验的低统计量精密测量

- 答辩人：薛靖钦
- 导 师：[导师姓名]
- 培养单位：中国科学院大学

---

# 报告大纲

## Outline

- 第一章：引言 — 研究背景与科学问题
- 第二章：中微子振荡分析方法
- 第三章：反应堆中微子能谱拟合程序的加速
- 第四章：JUNO 实验能谱分 bin 策略
- 第五章：Feldman–Cousins 方法详述
- 第六章：总结与展望

---

# 第一章 引言

## 中微子的发现历程（一）：从假说到首次直接探测

- **1914 — Chadwick**：观测到 $\beta$ 衰变电子能谱呈连续分布，能量似乎"丢失"
- **1930 — Pauli**：为挽救能量--动量守恒，提出存在质量极小的中性粒子
- **1934 — Fermi**：建立 $\beta$ 衰变弱相互作用定量理论，正式纳入中微子
- **1956 — Reines & Cowan**：在反应堆旁利用逆 $\beta$ 衰变（IBD）首次直接探测到 $\bar{\nu}_e$

$$\bar{\nu}_e + p \to e^+ + n \qquad \text{（同一反应至今仍是反应堆中微子实验的核心通道）}$$

- 中微子物理由"理论假说"正式进入"实验科学"时代

---

# 第一章 引言

## 中微子的发现历程（二）：三代中微子与基本性质

- **三代中微子的相继确立**
  - 1956 — $\nu_e$（Reines & Cowan，反应堆）
  - 1962 — $\nu_\mu$（BNL，加速器，1988 诺贝尔奖）
  - 2000 — $\nu_\tau$（Fermilab DONUT 直接观测）
- **基本物理性质**
  - 电中性、自旋 $1/2$、仅参与弱相互作用 → 与物质相互作用截面极小
  - 1956 Lee–Yang 提出弱作用宇称破缺 → 1957 吴健雄实验证实
  - Goldhaber 实验直接测量手征性 → 中微子仅以左旋态存在
- 三代中微子构成标准模型轻子家族；但其**质量是否为零**长期悬而未决

---

# 第一章 引言

## 中微子振荡：唯一坚实的超出标准模型新物理

- **振荡现象的实验链条**
  - 1998 Super-Kamiokande：大气中微子振荡 → 中微子有非零质量
  - 2002 SNO：太阳中微子味态转换
  - 2003 KamLAND：~180 km 反应堆基线确证 $\Delta m^2_{21}$
  - 2012 Daya Bay / RENO / Double Chooz：测得非零的 $\theta_{13}$
- **PMNS 矩阵**：$|\nu_\alpha\rangle = \sum_k U^*_{\alpha k}|\nu_k\rangle$，由 $(\theta_{12},\theta_{23},\theta_{13},\delta_{CP})$ 参数化
- **超出标准模型的物理意义**
  - 标准模型中中微子假定无质量 → 振荡的存在直接要求扩展标准模型
  - "跷跷板"机制：$m_\nu \simeq m_D^2/M_R$，自然解释中微子质量极小
  - 关联 $0\nu\beta\beta$（Majorana 性质）、质量序、宇宙物质--反物质不对称
- 中微子物理已从"现象发现"步入"**高精度测量时代**"

---

# 第一章 引言

## JUNO 实验原理（一）：探测器与 IBD 反应

- **探测器结构**
  - 地下 700 m，20 kt 液体闪烁体（直径 35.4 m 有机玻璃球）
  - 35 kt 水切伦科夫池 + Top Tracker → 宇宙线 $\mu$ 子标记
  - $\sim 20{,}000$ 只 20 英寸 + $\sim 25{,}600$ 只 3 英寸 PMT，覆盖率 ~75%
  - **能量分辨率 ~3% @ 1 MeV**（设计指标）
- **核心探测反应：逆 $\beta$ 衰变（IBD）**

$$\bar{\nu}_e + p \to e^+ + n$$

- 正电子（快信号）+ 中子俘获 $\gamma$（慢信号）→ 快慢符合显著抑制本底
- **能量映射链**

$$E_{\bar{\nu}_e} \xrightarrow{\text{kinematics}} E_e \xrightarrow{\text{annihilation}} E_{\rm dep} \xrightarrow{\text{LSNL}} E_{\rm vis} \xrightarrow{\text{resolution}} E_{\rm rec}$$

---

# 第一章 引言

## JUNO 实验原理（二）：基线选择与振荡敏感性

- **平均基线 ~52.5 km**：接近太阳振荡极大值 → 同一能谱同时承载快、慢两类频率成分
- **反应堆中微子存活概率**

$$P(\bar{\nu}_e\!\to\!\bar{\nu}_e) = 1 - \sin^2 2\theta_{12}\,c_{13}^4 \sin^2\!\frac{\Delta m^2_{21} L}{4E} - \sin^2 2\theta_{13}\!\left[c_{12}^2\sin^2\!\frac{\Delta m^2_{31} L}{4E} + s_{12}^2\sin^2\!\frac{\Delta m^2_{32} L}{4E}\right]$$

- **物理目标**
  - 中微子**质量序**判定（约 6 年运行达 $3$--$4\sigma$）
  - 亚百分比精度精测 $\sin^2\theta_{12}$、$\Delta m^2_{21}$、$\Delta m^2_{31}$
  - 多源中微子科学：太阳、大气、超新星、地球中微子，及惰性中微子等新物理
- **2025 年首篇物理结果（59.1 天数据，2379 IBD 事例）**
  - $\sin^2\theta_{12}=0.3092\pm0.0087$，$\Delta m^2_{21}=(7.50\pm0.12)\times10^{-5}\,\mathrm{eV}^2$
  - 太阳振荡参数测量精度较此前全球结果提升 **~1.6 倍**

---

# 第一章 引言

## 国际中微子实验格局：JUNO 的位置与竞争

| 类别 | 代表实验 | 基线 / 类型 | 主要物理目标 |
|------|----------|-------------|--------------|
| 短基线反应堆 | Daya Bay, RENO, Double Chooz | ~1--2 km | $\theta_{13}$ 精测、反应堆能谱模型 |
| 长基线反应堆 | KamLAND（已退役） | ~180 km | $\Delta m^2_{21}$ 首测 |
| **中基线反应堆** | **JUNO** | **~52.5 km** | **质量序 + $\theta_{12}$/$\Delta m^2_{21,31}$ 精测** |
| 长基线加速器 | T2K, NOvA, **DUNE**, **Hyper-K** | 数百--千 km | $\delta_{CP}$、质量序、$\theta_{23}$ 八重态 |
| 大气 / 望远镜 | Super-K, IceCube/PINGU, KM3NeT | 地球直径 | 大气振荡、质量序 |
| 太阳 / 低能 | SNO+, Borexino, Darwin | --- | 太阳模型、CNO、低能本底控制 |

- **JUNO 的独特优势**：唯一在单台探测器上**同时**对慢振荡（太阳）与快振荡（大气）敏感
- 对加速器实验形成**互补**：JUNO 用真空振荡测质量序，DUNE/HK 用物质效应；联合分析可显著增强 $\delta_{CP}$ 灵敏度

---

# 第一章 引言

## 本文要解决的三大科学问题

1. **低统计量下重建能谱分箱导致的拟合偏差**
   - 早期数据样本有限 → 分箱过细使每 bin 计数小 → 高斯近似失效
   - 直接结果：振荡参数（尤其幅度类参数 $\sin^2\theta_{12}$）估计出现系统偏差
2. **JUNO–Daya Bay 联合分析中的反应堆能谱分段（Wiggle 问题）**
   - JUNO 高分辨率 vs Daya Bay 有限分辨率 → 反应堆谱过细分段超出近点约束能力
   - 引入非物理"Wiggle"结构 → 模型依赖系统误差不可忽略
3. **Wilks 定理失效与振荡参数简并**
   - 低统计量下 $\Delta m^2_{31}$ 似然面非二次、多极小、置信区间可能不连续
   - 渐近阈值不再保证频率学覆盖率 → 须以 **Feldman–Cousins** 方法重建临界值
- 三大问题对应论文第四章（分箱）、第四章（分段）、第五章（FC）

---

# 第一章 引言

## 共性需求：海量 Toy-MC 与拟合算法加速

- 三大问题在方法上**统一指向**伪实验（Toy-MC）驱动的频率学评估
  - 分箱偏差研究：每个候选 bin 方案 $\to$ 数千次 Toy 拟合
  - 分段策略评估：固定/扰动反应堆模型 $\to$ 数千次 Toy 拟合
  - FC 覆盖性检验：参数网格 $\times$ 伪实验 $\to$ $10^5\sim10^6$ 量级拟合

$$N_{\rm fits}\sim N_{\rm pts}\times N_{\rm toys}\times N_{\rm init}\;\;\Rightarrow\;\;\mathcal{O}(10^6)\;\text{次完整拟合}$$

- 单次反应堆能谱拟合 $\sim 100$ s 量级 → 总计 $\sim 2\times10^5$ CPU·h
- **结论**：必须从算法 + 工程层面对前向折叠拟合器进行**极致加速**（第三章）
- **本文方法学路径**：高性能张量化拟合框架（第三章）+ 合理分箱/分段策略（第四章）+ 严格频率学覆盖（第五章）

---

# 第一章 本章小结

## 主要结论

- **发现历程**：从 Pauli 假说（1930）到 Reines–Cowan 直接探测（1956），再到三代中微子的相继确立，奠定了中微子物理的基础
- **新物理意义**：中微子振荡是**迄今唯一坚实的超出标准模型新物理证据**，关联 $0\nu\beta\beta$、质量序与宇宙物质--反物质不对称
- **JUNO 实验**：20 kt LS + ~3% @ 1 MeV 能量分辨率，借助 IBD 反应在 ~52.5 km 基线对 $\Delta m^2_{21}$、$\sin^2\theta_{12}$ 与 $\Delta m^2_{31}$ 同时敏感；2025 年首篇物理结果将太阳振荡参数精度提升 ~1.6 倍
- **国际格局**：JUNO 与短基线反应堆、长基线加速器、大气与太阳实验共同构成全球网络，并在质量序与精测能力上具有独特优势
- **三大科学问题**：低统计量拟合偏差、联合分析 Wiggle、Wilks 失效与参数简并 → **共性需求**：海量 Toy-MC、必须依赖**高性能拟合算法 + 严格频率学统计方法**

---

# 第二章 中微子振荡分析方法

## 反应堆中微子探测原理

- 探测反应：逆贝塔衰变 (Inverse Beta Decay)

$$\bar{\nu}_e + p \to e^+ + n$$

- 快慢符合显著抑制本底
- 能量映射链：

$$E_{\bar{\nu}_e} \xrightarrow{\text{kinematics}} E_e \xrightarrow{\text{annihilation}} E_{\rm dep} \xrightarrow{\text{LSNL}} E_{\rm vis} \xrightarrow{\text{resolution}} E_{\rm rec}$$

- 能量分辨率经验形式：

$$\sigma_{E_{\rm rec}}/E_{\rm vis} = \sqrt{a^2/E_{\rm vis} + b^2 + c^2/E_{\rm vis}^2}$$

---

# 第二章 中微子振荡分析方法

## 反应堆中微子通量预测

- 第 $r$ 个堆芯的产额谱：

$$\phi_r(E_{\bar{\nu}_e},t) = \frac{W_r(t)}{\sum_i f_{ir}(t)\,e_i}\sum_i f_{ir}(t)\,s_i(E_{\bar{\nu}_e})$$

- 探测器处的总到达通量：

$$\Phi(E_{\bar{\nu}_e},t)=\sum_r \frac{\phi_r(E_{\bar{\nu}_e},t)}{4\pi L_r^2}\,P_{\bar{\nu}_e\to\bar{\nu}_e}(E_{\bar{\nu}_e},L_r)$$

- 修正项：Non-Eq（非平衡态）、SNF（乏燃料）
- 基准模型：Huber–Müller；扰动比较：summation 法

---

# 第二章 中微子振荡分析方法

## 张量化能谱生成链（一）：总览

- 从反应堆出射谱到探测器重建谱的完整物理链 → 表达为四级张量运算

```
   反应堆 Φ_r(E_ν̄,t)              IBD 散射 M_ij              探测器响应 R_ij
[出射谱 + 振荡 + 几何]  ──►  [微分截面 + 角分布]  ──►  [LSNL + 能量分辨]  ──►  φ_rec
       Φ(E_ν̄)                       φ_dep(E_dep)                 φ_vis(E_vis)
```

| 阶段 | 物理过程 | 数学对象 |
|------|----------|----------|
| ① 出射 → 到达 | 同位素加权 + 振荡 + 几何衰减 | 通量向量 $\Phi_k$ |
| ② 到达 → 沉积 | IBD 微分截面 + 角分布 + 反冲 | **截面矩阵 $M_{jk}$** |
| ③ 沉积 → 可见 | 闪烁体非线性 LSNL | 标量函数 $f_{\rm LSNL}$ |
| ④ 可见 → 重建 | 能量分辨高斯展宽 | **响应矩阵 $R_{ij}$** |

- 链式核心公式（③④ 合并入 $R$）：

$$\boxed{\;\phi_{\rm rec,i} \;=\; \sum_{j,k} R_{ij}\,M_{jk}\,\Phi_k \;=\; (R\cdot M\cdot\Phi)_i\;}$$

- 多重积分卷积 → 三阶张量缩并 → 易并行、易缓存（为第三章加速奠基）

---

# 第二章 中微子振荡分析方法

## 张量化能谱生成链（二）：到达通量 Φ → 沉积能谱（IBD 散射矩阵 $M_{ij}$）

- **第①阶段**：堆芯出射谱 → 探测器到达通量

$$\Phi(E_{\bar{\nu}_e},t)=\sum_r \frac{\phi_r(E_{\bar{\nu}_e},t)}{4\pi L_r^2}\,P_{\bar{\nu}_e\to\bar{\nu}_e}(E_{\bar{\nu}_e},L_r)$$

- **第②阶段**：到达通量 $\Phi$ 与 IBD 截面卷积 → 沉积能量谱

$$\phi_{\rm dep}(E_{\rm dep})=N_p\!\int_{1.8\,\text{MeV}}^{13\,\text{MeV}}\!\!\!\mathrm{d}E_{\bar{\nu}_e}\,\Phi(E_{\bar{\nu}_e})\,\frac{\mathrm{d}\sigma}{\mathrm{d}E_{\rm dep}}(E_{\bar{\nu}_e},E_{\rm dep})$$

- **离散化构造 IBD 微分散射截面矩阵 $M_{ij}$**（双重采样 $E_{\bar{\nu}_e},\cos\theta$）：

$$M_{ij}=\sum_{k\in\text{samples}}\frac{\mathrm{d}\sigma(E_{\bar{\nu}_e,j},\cos\theta_k)}{\mathrm{d}\cos\theta}\,\Delta\cos\theta\,\mathbf{1}\!\left(E_{\rm dep}(E_{\bar{\nu}_e,j},\cos\theta_k)\in\text{bin}\,i\right)$$

  - 自然包含：截面能量依赖 + 角分布 + 质子反冲展宽
  - 模型采用 Vogel–Beacom 一阶修正
- **矩阵–向量映射**：$\;\boldsymbol{\phi}_{\rm dep}=M\,\boldsymbol{\Phi}\;\;\Leftrightarrow\;\;\phi_{{\rm dep},i}=\sum_j M_{ij}\,\Phi_j$
- 性质：$M$ 在 $E_{\rm dep}\!\approx\!E_{\bar{\nu}_e}\!-\!0.8$ MeV 附近呈**带状稀疏**结构（第三章加速关键）

---

# 第二章 中微子振荡分析方法

## 张量化能谱生成链（三）：沉积能谱 → 重建能谱（响应矩阵 $R_{ij}$）

- **第③阶段**：闪烁体非线性（LSNL）— 沉积能 → 可见能

$$E_{\rm vis}=E_{\rm dep}\,f_{\rm LSNL}(E_{\rm dep})\quad\text{(淬灭 + Cherenkov 等贡献)}$$

- **第④阶段**：能量分辨高斯展宽 — 可见能 → 重建能

$$\sigma_{E_{\rm rec}}/E_{\rm vis}=\sqrt{a^2/E_{\rm vis}+b^2+c^2/E_{\rm vis}^2}$$

- **响应矩阵元由高斯 CDF 差分给出**：

$$R_{ij}=\Phi_{\rm CDF}\!\left(E_{\rm rec}^{(i+1)}\,\big|\,E_{\rm dep}^{(j)}\right)-\Phi_{\rm CDF}\!\left(E_{\rm rec}^{(i)}\,\big|\,E_{\rm dep}^{(j)}\right),\quad \Phi_{\rm CDF}(x)=\tfrac{1}{2}\!\left[1+\operatorname{erf}\!\left(\tfrac{x-E_{\rm vis}}{\sqrt{2}\,\sigma}\right)\right]$$

  - $R_{ij}$ 同时编码 LSNL 引起的均值漂移 + 能量分辨引起的展宽
- **矩阵–向量映射**：$\;\boldsymbol{\phi}_{\rm rec}=R\,\boldsymbol{\phi}_{\rm dep}\;\;\Leftrightarrow\;\;\phi_{{\rm rec},i}=\sum_j R_{ij}\,\phi_{{\rm dep},j}$
- **完整链合成**：$\;\phi_{{\rm rec},i}=\sum_{j,k} R_{ij}\,M_{jk}\,\Phi_k\;\to\;$ 即可与观测分箱能谱直接比较
- 计算瓶颈：$\operatorname{erf}$ 批量评估 + 大尺寸矩阵乘 → 第三章三类优化的直接对象

---

# 第二章 中微子振荡分析方法

## 沉积能谱 → 重建能谱：积分公式与响应矩阵

- **连续形式（卷积积分）**：沉积谱与高斯响应函数的能量空间卷积

$$\phi_{\rm rec}(E_{\rm rec})=\int_{E_{\rm dep}^{\min}}^{E_{\rm dep}^{\max}}\!\!\mathrm{d}E_{\rm dep}\;\phi_{\rm dep}(E_{\rm dep})\;G\!\bigl(E_{\rm rec}\,\big|\,E_{\rm dep}\bigr)$$

  - LSNL 映射：$E_{\rm vis}(E_{\rm dep})=E_{\rm dep}\,f_{\rm LSNL}(E_{\rm dep})$
  - 高斯核：$\;G\!\bigl(E_{\rm rec}\,\big|\,E_{\rm dep}\bigr)=\dfrac{1}{\sqrt{2\pi}\,\sigma(E_{\rm vis})}\exp\!\left[-\dfrac{(E_{\rm rec}-E_{\rm vis})^2}{2\sigma^2(E_{\rm vis})}\right]$

- **离散化构造响应矩阵 $R_{ij}$**：$E_{\rm dep}\to j$ bin，$E_{\rm rec}\to i$ bin，由高斯 CDF 差分给出

$$R_{ij}=\int_{E_{\rm rec}^{(i)}}^{E_{\rm rec}^{(i+1)}}\!\!G\!\bigl(E_{\rm rec}\,\big|\,E_{\rm dep}^{(j)}\bigr)\,\mathrm{d}E_{\rm rec}=\frac{1}{2}\!\left[\operatorname{erf}\!\left(\frac{E_{\rm rec}^{(i+1)}-E_{\rm vis}^{(j)}}{\sqrt{2}\,\sigma^{(j)}}\right)-\operatorname{erf}\!\left(\frac{E_{\rm rec}^{(i)}-E_{\rm vis}^{(j)}}{\sqrt{2}\,\sigma^{(j)}}\right)\right]$$

  - $E_{\rm vis}^{(j)}=E_{\rm dep}^{(j)}f_{\rm LSNL}(E_{\rm dep}^{(j)})$，$\sigma^{(j)}=\sigma(E_{\rm vis}^{(j)})$
  - 同时编码 **均值漂移**（LSNL）与 **展宽**（能量分辨）
- **矩阵–向量映射（连续积分的离散对应）**：

$$\phi_{{\rm rec},i}=\sum_j R_{ij}\,\phi_{{\rm dep},j}\quad\Longleftrightarrow\quad \boldsymbol{\phi}_{\rm rec}=R\,\boldsymbol{\phi}_{\rm dep}$$

- **与上游链合成**：$\;\boldsymbol{\phi}_{\rm rec}=R\!\cdot\!M\!\cdot\!\boldsymbol{\Phi}\;\Leftrightarrow\;\phi_{{\rm rec},i}=\sum_{j,k}R_{ij}\,M_{jk}\,\Phi_k$

---

# 第二章 中微子振荡分析方法

## $\chi^2$ 拟合与 Pull terms

$$\chi^2 = (\boldsymbol{M}-\boldsymbol{T}(\boldsymbol{\theta},\boldsymbol{\alpha}))^T\,\boldsymbol{V}^{-1}\,(\boldsymbol{M}-\boldsymbol{T}(\boldsymbol{\theta},\boldsymbol{\alpha})) + \sum_k\left(\frac{\alpha_k}{\sigma_k}\right)^2$$

- CNP 统计方差组合（消除 Neyman/Pearson 偏差）：

$$V_{ii}^{\rm stat} \equiv 3\left(\frac{1}{M_i}+\frac{2}{T_i^{\rm IBD}+\sum_B T_i^B}\right)^{-1}$$

- Pull terms 涵盖：反应堆通量、能量响应、本底、SNF/Non-Eq、地球物质效应等
- 最小化器：iminuit (MIGRAD)

---

# 第二章 中微子振荡分析方法

## Wilks 定理与 FC 方法的角色

- **Wilks 定理**：渐近条件下 $\Delta\chi^2$ 服从卡方分布，可用固定阈值构造置信区间
- **失效条件**：参数边界、似然面非二次型、多重极小、低统计量
- **Feldman–Cousins 方法**：通过 Toy-MC 经验分布给出参数依赖的临界值
- 代价：需要 $10^5\sim10^6$ 量级的伪实验拟合 → 强烈呼唤拟合加速

---

# 第二章 本章小结

## 主要结论

- **完整张量化能谱生成链**：$\;\Phi\;\xrightarrow{M}\;\phi_{\rm dep}\;\xrightarrow{R}\;\phi_{\rm rec}\;$
  - 第①层 反应堆通量 $\Phi$：堆芯加权 + 振荡 + 几何衰减 + Non-Eq/SNF 修正
  - 第②层 IBD 微分散射截面矩阵 $M_{ij}$：含截面、角分布与反冲展宽，呈**带状稀疏**
  - 第③层 探测器响应矩阵 $R_{ij}$：合 LSNL 与高斯能量分辨于同一 CDF-差分构造
  - 合成核心公式：$\phi_{{\rm rec},i}=\sum_{j,k}R_{ij}\,M_{jk}\,\Phi_k$
- 多重积分卷积 → **高维矩阵/张量缩并** → 易并行、易缓存，为第三章加速奠定数据结构基础
- 构建了含 **Pull terms 与 CNP 统计组合**的 $\chi^2$ 拟合框架，自洽吸纳反应堆、探测器、本底等多源系统不确定性
- 系统梳理了 **Wilks 定理的失效情形**，明确了在低统计量、非正则似然面下必须引入 Feldman–Cousins 方法
- 给出 Toy-MC 标准生成策略，为后续分 bin 策略与覆盖性研究提供统一接口

---

# 第三章 反应堆能谱拟合程序的加速

## 加速的迫切性

- FC 覆盖率检验 + 多起点扫描 → 计算量爆炸
- 典型规模：

$$N_{\rm fits} = N_{\rm pts} \times N_{\rm toys} \times N_{\rm init} = 50 \times 5000 \times 20 = 5\times10^6$$

- 单次拟合 ~150 s → 总计 $\sim 2\times10^5$ CPU·h
- 即便 1000 核集群仍需 ~200 小时
- **结论**：必须从算法与工程层面系统加速

---

# 第三章 反应堆能谱拟合程序的加速

## 性能瓶颈分析（Profiling）

- 谱计算 ≈ **98.6%**（~108.6 s）
- 最小化器仅 ~1.4%（~1.5 s）

## 谱计算内部两大热点

- **探测器响应矩阵构造**：~72.4 s（66.7%）
  - $\operatorname{erf}$ 批量评估
  - $560 \times 5600$ 阵列减/除运算
- **沉积能谱计算**：~33.4 s（30.8%）
  - $5600 \times 5600$ 密集矩阵乘法

---

# 第三章 反应堆能谱拟合程序的加速

## 三大优化策略

- **缓存技术（Caching）**
  - 静态量预计算常驻内存
  - 函数级 memoization（`lru_cache`）
- **稀疏矩阵存储**
  - IBD 微分散射截面矩阵呈带状结构
  - $E_{\rm dep,i} \approx E_{\bar{\nu}_e,j} - 0.8~\mathrm{MeV}$
  - 复杂度由 $O(N^2)$ 降至 $O(Nw)$
- **分块张量化构造**
  - 响应矩阵按列分块（block width = 512）
  - 充分利用 L1 cache 局部性

---

# 第三章 反应堆能谱拟合程序的加速

## 基准测试结果（Intel Xeon Gold 6338）

| 优化策略 | 加速比 |
|----------|--------|
| 缓存（Caching） | ~3× |
| 稀疏矩阵 | ~1.5× |
| 分块构造 | ~1.5× |
| **综合** | **~7×** |

- 单次拟合：**110.1 s → 15.2 s**
- 谱计算：108.6 s → 14.3 s（~8×）
- 响应矩阵：72.4 s → 8.1 s（~9×）
- 数值相对误差 $< 10^{-6}$（双精度基准）

---

# 第三章 反应堆能谱拟合程序的加速

## 数值稳定性与可迁移性

| 统计量 | Toy 数 | 成功率 |
|--------|--------|--------|
| 30 天 | 5000 | 99.18% |
| 50 天 | 5000 | 99.85% |
| 100 天 | 5000 | 100.00% |

- 框架核心组件（张量化前向折叠、稀疏化、分块、缓存）不依赖 JUNO 特定几何
- 可直接迁移：TAO 谱拟合、Daya Bay 惰性中微子搜索、Geo-$\nu$、超新星预警、JUNO–DUNE 联合分析

---

# 第三章 本章小结

## 主要结论

- 量化了 FC 覆盖率检验的计算挑战：原始方案需 $\sim 2\times10^5$ CPU·h，传统串行实现不可行
- 通过 Profiling 锁定两大瓶颈：**探测器响应矩阵构造（66.7%）+ 沉积能谱计算（30.8%）**
- 提出三类互补优化策略 — **缓存（~3×）+ 稀疏矩阵（~1.5×）+ 分块构造（~1.5×）**
- 综合加速比 **~7×**：单次拟合时间从 110.1 s → 15.2 s，且数值相对误差 $< 10^{-6}$
- 框架在 30/50/100 天统计量下的拟合成功率均 $\geq 99.18\%$，具有良好的数值稳定性
- 已发表于 **Eur. Phys. J. C (2025)**，并被 JUNO 合作组采纳为基础分析工具
- **使大规模 Feldman–Cousins 覆盖性研究在有限算力下成为现实**

---

# 第四章 JUNO 实验能谱分 bin 策略

## 分箱策略的两个维度

- **重建能谱分 bin（Binning）**
  - 决定观测统计量与似然近似有效性
  - 过细 → 高斯近似失效 → 拟合偏差
- **反应堆能谱分段（Segmentation）**
  - 决定模型依赖性与外部约束有效性
  - 过细 → 超出 Daya Bay 分辨能力 → 非物理 Wiggle
- **核心矛盾**：保留谱形细节 vs 避免近似失效与模型依赖

---

# 第四章 JUNO 实验能谱分 bin 策略

## 偏差度量

- 统计偏差定义：

$$\text{Bias} = \frac{\langle\hat{\theta}\rangle - \theta_{\text{true}}}{\sigma_{68\%}}$$

- 基于 5000 次 Toy-MC 最佳拟合分布
- 采用对称分位数法：

$$\sigma_{68\%} = \frac{P_{84} - P_{16}}{2}$$

- 不依赖正态性假设，可反映非对称分布特征

---

# 第四章 JUNO 实验能谱分 bin 策略

## 重建能谱分 bin 研究（30 天统计量）

- $\Delta m^2_{21}$：所有统计量下偏差 $< 0.1\sigma$（频率类参数）
- $\sin^2\theta_{12}$：低统计量下显著偏差（幅度类参数）
  - 560 bins (20 keV) → ~0.8$\sigma$
  - 80 bins (~150 keV) → 显著降低
  - 56 bins (~200 keV) → < 0.2$\sigma$
- **结论**：bin 宽 $\geq 100~\mathrm{keV}$ 时偏差可接受

---

# 第四章 JUNO 实验能谱分 bin 策略

## JUNO–Daya Bay 联合分析框架

- 联合目标函数：

$$\chi^2_{\rm Total} = \chi^2_{\rm JUNO} + \chi^2_{\rm DYB} + \text{(外部先验)}$$

- 反应堆能谱分段：

$$S(E) \approx \sum_i \alpha_i\,S_i(E)$$

- "段内刚性、段间自由"：用 DYB 高统计量锚定局部谱形
- 关键挑战：Wiggle 结构 — DYB 能量分辨率有限，过细分段引入伪结构

---

# 第四章 JUNO 实验能谱分 bin 策略

## 最优段宽 Toy-MC 研究

- **固定模型**：使用名义 Summation 谱，评估方法本身行为
- **扰动模型**：bootstrap 重抽样 ~90% $\beta$ 衰变支级 + 分支比/裂变份额扰动
- 比较各候选段宽下的振荡参数精度

## 最优结论：300 keV

- 模型相关附加系统误差 **最小（$<0.3\%$）**
- 抑制 Wiggle 结构 + 保持充分统计约束的最佳折中
- **已被 JUNO 合作组采纳并用于首篇物理结果论文**

---

# 第四章 本章小结

## 主要结论

- 揭示了分箱策略的双维度本质：**重建能谱分 bin 控制统计近似有效性**，**反应堆能谱分段控制模型依赖性**
- **重建能谱分 bin 结论**：
  - $\Delta m^2_{21}$ 对分 bin 不敏感，偏差始终 $<0.1\sigma$
  - $\sin^2\theta_{12}$ 在 30 天统计量、20 keV 细分时偏差 $\sim 0.8\sigma$
  - bin 宽增至 **100 keV 及以上**时偏差可被压低至 $<0.2\sigma$
- **反应堆能谱分段结论**：
  - 段宽过细诱导 Wiggle，段宽过粗增强模型依赖
  - 最优段宽 **~300 keV**，模型相关系统误差 $<0.3\%$
- 上述策略已被 **JUNO 合作组采纳并应用于首篇物理结果论文**

---

# 第五章 Feldman–Cousins 方法详述

## 为什么需要 FC 方法

- Asimov 数据假定观测 = 期望，无统计涨落
- 真实数据：$\Delta m^2_{31}$ 轮廓出现多个局部极小值
- 直接套用 Wilks → 可能产生不连续置信区间，覆盖率失效

## 物理根源

- 振荡相位简并
- 反应堆中微子能谱精细结构 → 伪局部极小
- 低统计量下 $\Delta\chi^2$ 偏离卡方分布

---

# 第五章 Feldman–Cousins 方法详述

## FC 方法核心思想

- 检验统计量：

$$\Delta\chi^2_{ij} = \chi^2(x_{ij}\,|\,\delta_i,\hat{\hat{\boldsymbol{\eta}}}_{ij}) - \chi^2(x_{ij}\,|\,\hat{\delta}_{ij},\hat{\boldsymbol{\eta}}_{ij})$$

- 经验分布给出参数相关临界值：

$$\int_0^{\Delta\chi^{2,\alpha}_{\rm crit}(\delta_i)} P(\Delta\chi^2|\delta_i)\,d(\Delta\chi^2) = 1-\alpha$$

- 在物理边界、非二次似然面、多极小情形下严格保证频率学覆盖率
- 流程：参数空间网格 → 伪实验生成 → 统计量计算 → 临界值提取

---

# 第五章 Feldman–Cousins 方法详述

## 太阳区参数二维 FC 检验

- $\Delta m^2_{21}$、$\sin^2\theta_{12}$ 之间皮尔逊相关系数 ~$-0.29$ → 必须二维构造
- 结果：经验 $\Delta\chi^2$ 分布与 $\chi^2(\text{ndf}=2)$ 高度一致
- 1$\sigma$ 临界值：$\Delta\chi^2 \approx 2.30$（与 Wilks 一致）

## 结论

- 太阳区参数 **Wilks 近似成立**
- 可安全使用渐近阈值构造置信域

---

# 第五章 Feldman–Cousins 方法详述

## $\Delta m^2_{31}$ 一维 FC 检验（50 天，JUNO+DYB 联合）

- **固定反应堆模型**：$\Delta\chi^2_{\rm crit, fixed} = 1.5379$
- **扰动反应堆模型**：$\Delta\chi^2_{\rm crit, sampled} = 1.5724$
- 显著高于 Wilks 期望值 $1.0$

## 物理结论

- $\Delta m^2_{31}$ 一维相对精度：**~1.4%**（50 天曝光）
- 反应堆模型不确定度对临界值影响极小（$<0.3\%$）
- 约 **8%** 伪实验产生不相交置信区间 → 必须用 FC

---

# 第五章 Feldman–Cousins 方法详述

## FC 临界值对扫描区间的依赖性

- 30 天单 JUNO 数据：宽扫描 $\Delta\chi^2_{\rm crit} = 6.58$，窄扫描 $\Delta\chi^2_{\rm crit} = 4.89$
- 临界值随扫描区间显著变化：扫描过窄 → 漏掉替代全局极小 → 覆盖不足
- **实践要求**：宽扫描区间 + 多起点初值，避免局部极小陷阱

---

# 第五章 本章小结

## 主要结论

- **Asimov 灵敏度在低统计量下不可靠**：无法再现真实数据的多重局部极小与置信区间不连续现象
- **太阳区参数（$\Delta m^2_{21}$、$\sin^2\theta_{12}$）二维 FC**：经验 $\Delta\chi^2$ 分布与 $\chi^2(\text{ndf}=2)$ 一致，**Wilks 近似成立**
- **$\Delta m^2_{31}$ 一维 FC（50 天 JUNO+DYB 联合）**：
  - 经验 1$\sigma$ 临界值 ~1.57，**显著高于** Wilks 的 1.0
  - 测量精度 **~1.4%**（略低于全球拟合 ~1.1%）
  - ~8% 伪实验出现不相交置信区间 → **必须采用 FC**
- 反应堆模型不确定度对 FC 临界值影响极小（$<0.3\%$）
- **建议被 JUNO 合作组采纳**：首篇物理结果暂不直接发布 $\Delta m^2_{31}$ 精测值
- FC 临界值对扫描区间敏感 → 实践中需宽扫描 + 多起点

---

# 第六章 总结

## 三大方法学贡献

1. **高性能张量化前向折叠拟合框架**（第三章）
   - 缓存 + 稀疏 + 分块 → ~7× 加速，相对误差 $<10^{-6}$
   - 已发表 EPJC (2025)，被合作组采纳为基础分析工具
2. **重建能谱分 bin 与反应堆能谱分段策略**（第四章）
   - 重建能谱：bin 宽 $\geq$ 100 keV
   - 反应堆能谱：segment 宽 ~300 keV，模型依赖 $<0.3\%$
   - 已应用于 JUNO 首篇物理结果论文
3. **Feldman–Cousins 覆盖性检验**（第五章）
   - 太阳区参数：Wilks 适用
   - $\Delta m^2_{31}$：FC 必需，临界值 ~1.57，精度 ~1.4%（50 天）

---

# 第六章 展望

## 后续可推进的研究方向

- **JUNO 持续运行**：$\Delta m^2_{31}$ 非渐近统计的演化监测
- **JUNO–TAO 联合分析**
  - 张量链扩展为"反应堆 → TAO → JUNO"
  - 重做最优 segment 宽度（TAO 分辨率更优 → 段宽更窄）
  - FC 检验：评估近点锚定能否回归 Wilks 渐近极限
- **国际前沿应用**
  - 中微子质量序判定（FC + Toy-MC）
  - $0\nu\beta\beta$ 实验解读（$m_{\beta\beta}$ 允许带）
  - 加速器–反应堆联合 CP 破坏测量（DUNE / Hyper-K + JUNO）

---

# 致谢

## Acknowledgments

- 感谢导师悉心指导
- 感谢 JUNO 合作组的支持与讨论
- 感谢实验室同事与同学的帮助
- 感谢答辩委员会专家的评议

# 谢谢聆听！

## 敬请批评指正
