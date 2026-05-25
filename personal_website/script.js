/* ============== 语言切换 ============== */
(function () {
  const STORAGE_KEY = "site-lang";
  const ZH_STRINGS = {}; // 中文以 DOM 文本为准，首次访问时收集

  const html = document.documentElement;
  const toggleBtn = document.getElementById("langToggle");
  const titleEl = document.querySelector("title[data-i18n]");

  // 收集所有 data-i18n 节点的初始中文文本作为默认词典
  const i18nNodes = document.querySelectorAll("[data-i18n]");
  i18nNodes.forEach((node) => {
    const key = node.getAttribute("data-i18n");
    if (!ZH_STRINGS[key]) {
      ZH_STRINGS[key] = node.innerHTML;
    }
  });

  function applyLang(lang) {
    const dict = lang === "en" ? (window.I18N && window.I18N.en) || {} : ZH_STRINGS;
    i18nNodes.forEach((node) => {
      const key = node.getAttribute("data-i18n");
      const val = dict[key] || ZH_STRINGS[key];
      if (val !== undefined) node.innerHTML = val;
    });

    // <title> 单独处理
    if (titleEl) {
      const key = titleEl.getAttribute("data-i18n");
      const dictTitle = (lang === "en" ? window.I18N.en : ZH_STRINGS)[key];
      if (dictTitle) document.title = dictTitle.replace(/<[^>]+>/g, "");
    }

    html.setAttribute("lang", lang === "en" ? "en" : "zh-CN");
    html.setAttribute("data-lang", lang);
    toggleBtn.textContent = lang === "en" ? "中" : "EN";
    toggleBtn.setAttribute(
      "aria-label",
      lang === "en" ? "切换到中文" : "Switch to English"
    );

    try { localStorage.setItem(STORAGE_KEY, lang); } catch (_) {}
  }

  // 初始语言：localStorage > 浏览器偏好 > 默认中文
  let initial = "zh";
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === "en" || saved === "zh") {
      initial = saved;
    } else if (navigator.language && navigator.language.toLowerCase().startsWith("en")) {
      initial = "en";
    }
  } catch (_) {}

  applyLang(initial);

  toggleBtn.addEventListener("click", () => {
    const current = html.getAttribute("data-lang") || "zh";
    applyLang(current === "zh" ? "en" : "zh");
  });
})();

/* ============== 平滑滚动偏移补偿（粘性导航栏） ============== */
(function () {
  const navHeight = 56;
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (e) => {
      const targetId = link.getAttribute("href").slice(1);
      if (!targetId) return;
      const target = document.getElementById(targetId);
      if (!target) return;
      e.preventDefault();
      const y = target.getBoundingClientRect().top + window.pageYOffset - navHeight - 8;
      window.scrollTo({ top: y, behavior: "smooth" });
    });
  });
})();
