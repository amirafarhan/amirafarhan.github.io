/* Portfolio data + interactions. Content comes from the CV and the GitHub repositories. */

const GH = "https://github.com/amirafarhan/";

const SKILLS = [
  { title: "AI & Machine Learning", icon: "i-spark", items: [
    "Machine Learning", "Deep Learning", "Predictive Modeling", "Logistic Regression", "Random Forest",
    "XGBoost", "Feature Engineering", "Model Optimization"] },
  { title: "Generative AI & LLMs", icon: "i-spark", items: [
    "Generative AI", "Large Language Models", "RAG", "Prompt Engineering", "Transformer Architecture",
    "Agentic AI", "Multi-Agent Systems", "Responsible AI"] },
  { title: "Computer Vision & NLP", icon: "i-eye", items: [
    "Computer Vision", "Object Detection (YOLO)", "OpenCV", "CNNs", "Transfer Learning",
    "Conditional Image Generation", "NLP", "Text Analytics"] },
  { title: "Data Science & Visualization", icon: "i-eye", items: [
    "Data Analysis", "EDA", "Data Preprocessing", "Data Visualization", "Dashboards", "Risk Analysis"] },
  { title: "Programming & Databases", icon: "i-spark", items: [
    "Python", "SQL", "PostgreSQL", "Solidity"] },
  { title: "Frameworks & Libraries", icon: "i-spark", items: [
    "PyTorch", "TensorFlow / Keras", "Scikit-learn", "Hugging Face", "LangChain", "ChromaDB",
    "pandas", "NumPy", "Dash", "Plotly", "Streamlit", "NLTK"] },
  { title: "Cloud & MLOps", icon: "i-spark", items: [
    "MLOps", "MLflow", "Azure AI", "Azure Machine Learning", "AWS Machine Learning",
    "Model Deployment & Monitoring", "Streamlit Community Cloud"] },
  { title: "Tools & Automation", icon: "i-spark", items: [
    "Jupyter", "Google Colab", "Git & GitHub", "n8n", "Workflow Automation", "API Integration"] },
  { title: "Teaching & Professional", icon: "i-cap", items: [
    "Training & Instruction", "Presentation", "Communication", "Leadership", "LMS"] },
];

const CATEGORIES = { all: "All", genai: "GenAI & RAG", cv: "Computer Vision", nlp: "NLP", ml: "Machine Learning", data: "Data & Dashboards" };

const PROJECTS = [
  {
    id: "movie-rag", title: "Movie Recommendation RAG Chatbot", cats: ["genai"], live: "https://movie-rag-chatbot98.streamlit.app/",
    repo: GH + "movies_recomandation_chatbot", img: "assets/img/movie-rag.webp",
    summary: "A retrieval-augmented chatbot that recommends movies and answers questions using only a curated catalog.",
    problem: "General-purpose LLMs invent titles, ratings and cast details. Recommendations should come from a known catalog and show where each answer came from.",
    approach: [
      "Movie catalog (JSON) converted to LangChain documents and embedded with sentence-transformers/all-MiniLM-L6-v2.",
      "ChromaDB vector store with semantic retrieval and an optional genre filter.",
      "Qwen2.5-0.5B-Instruct generates answers from a prompt restricted to the retrieved movies.",
      "Streamlit app: chat, retrieved sources with relevance scores, search-only mode and a catalog explorer.",
    ],
    results: ["Deployed live on Streamlit Community Cloud (CPU only, ~2 GB peak memory).", "Every answer lists the catalog entries it used."],
    stack: ["Python", "LangChain", "ChromaDB", "Hugging Face", "Qwen2.5", "Streamlit"],
  },
  {
    id: "restaurant-rag", title: "Restaurant Menu RAG Chatbot", cats: ["genai"],
    repo: GH + "restaurant_chatbot", art: "chat",
    summary: "A RAG assistant that answers questions about dishes, categories and prices from restaurant menu data.",
    problem: "Customers and staff need quick, accurate answers about menu items and prices, without an LLM making up dishes.",
    approach: [
      "Menu JSON turned into item-level and category-level LangChain documents.",
      "Hugging Face sentence-transformer embeddings stored in ChromaDB for semantic search.",
      "Retrieval QA chain with the Qwen2.5 Instruct model for context-aware answers.",
    ],
    results: ["Answers item, category and price questions from the menu data, e.g. “Spaghetti Bolognese for $160”."],
    stack: ["Python", "LangChain", "ChromaDB", "Hugging Face", "Qwen2.5"],
  },
  {
    id: "traffic-yolo", title: "Traffic Vehicle Detection with YOLO", cats: ["cv"],
    repo: GH + "Traffic_Police_yolo", art: "boxes",
    summary: "A real-time object detection pipeline that finds and labels vehicles in traffic video for smart traffic monitoring.",
    problem: "Monitoring traffic by hand doesn't scale. Automated detection of vehicles is the first step toward smart traffic enforcement.",
    approach: [
      "YOLOv8 (Ultralytics) detector trained on a custom dataset with five classes: ambulance, bus, car, motorcycle and truck.",
      "OpenCV pipeline reads video frame by frame, runs inference and draws boxes with confidence scores.",
      "Annotated output is written back to video for review.",
    ],
    results: ["Trained weights (best.pt) and the inference script are included in the repository."],
    stack: ["Python", "YOLOv8", "Ultralytics", "OpenCV"],
  },
  {
    id: "adr", title: "Adverse Drug Reaction Prediction & Dashboard", cats: ["ml", "data"],
    repo: GH + "Adverse-Drug-Reaction-ADR-Reporting", art: "pulse",
    summary: "A two-stage XGBoost system that predicts adverse drug reaction severity, with an interactive Dash dashboard for drug-safety monitoring.",
    problem: "Most reported ADR cases are mild (~80%), so rare severe and fatal reactions are easily missed by a single classifier.",
    approach: [
      "Stage 1: binary model separates mild from serious reactions.",
      "Stage 2: multi-class model grades serious cases as moderate, severe or fatal.",
      "Feature engineering, class rebalancing (undersampling) and XGBoost / Random Forest models.",
      "Dash & Plotly dashboard for risk analysis by age, drug and dosage.",
    ],
    results: ["Interactive dashboard for exploring severity patterns and serious-case rates."],
    stack: ["Python", "pandas", "Scikit-learn", "XGBoost", "imbalanced-learn", "Dash", "Plotly"],
  },
  {
    id: "tweet", title: "Tweet Sentiment Analyzer (LSTM)", cats: ["nlp"], live: "https://tweet-sentiment-89.streamlit.app/",
    repo: GH + "twitter", img: "assets/img/tweet-sentiment.webp",
    summary: "A deep-learning classifier that labels tweets as negative, positive, neutral or irrelevant toward an entity.",
    problem: "Brands need to track how people talk about them at scale, across four classes rather than just positive/negative.",
    approach: [
      "NLTK cleaning: URL/mention removal, hashtag text kept, stop-word removal and lemmatisation.",
      "Keras tokenizer (20k vocabulary) and an Embedding → LSTM → Dense network with padding masking.",
      "Streamlit app with single and batch analysis, class probabilities, confusion matrix and training curves.",
    ],
    results: ["82.8% test accuracy, macro F1 0.824 on 14,051 held-out tweets.", "Deployed live on Streamlit Community Cloud."],
    metrics: [["82.8%", "accuracy"], ["0.824", "macro F1"], ["70k", "tweets"]],
    stack: ["Python", "TensorFlow / Keras", "NLTK", "Scikit-learn", "Streamlit"],
  },
  {
    id: "agriledger", title: "AgriLedger — Smart Agriculture Supply Chain", cats: ["cv", "ml"],
    repo: GH + "agriledger", art: "chain",
    summary: "A blockchain-backed agricultural supply chain with an AI fruit-freshness inspector.",
    problem: "Agricultural supply chains lack transparent product tracking, and produce quality is checked by hand.",
    approach: [
      "Blockchain ledger with blocks, proof-of-work mining, wallets and supply-chain transactions for product tracking.",
      "Fruit-freshness image classifier: EfficientNetB0 with two-phase transfer learning and data augmentation.",
      "Model export to TFLite for mobile and edge inspection, plus a logistics-delay prediction notebook.",
    ],
    results: ["End-to-end prototype covering traceability, quality inspection and deployment to edge devices."],
    stack: ["Python", "TensorFlow / Keras", "EfficientNet", "TFLite", "Rust"],
  },
  {
    id: "irrigation", title: "Predicting Irrigation Need", cats: ["ml"],
    repo: GH + "Predicting-Irrigation-Need", art: "drops",
    summary: "Machine-learning models that predict whether crops need irrigation from soil and environmental data.",
    problem: "Static schedules and manual judgment lead to over-irrigation (wasted water) or under-irrigation (damaged crops).",
    approach: [
      "Kaggle tabular data with soil moisture, temperature and other environmental features.",
      "Class imbalance handled with SMOTE and class weights.",
      "Logistic Regression, Random Forest and XGBoost models, plus a Keras neural network with early stopping.",
    ],
    results: ["Supports data-driven irrigation decisions for better water management."],
    stack: ["Python", "Scikit-learn", "XGBoost", "TensorFlow", "imbalanced-learn"],
  },
  {
    id: "titanic", title: "Titanic Survival Predictor", cats: ["ml"], live: "https://titanic-survival-89.streamlit.app/",
    repo: GH + "titanic", img: "assets/img/titanic.webp",
    summary: "A neural-network classifier that estimates a passenger's survival probability, with what-if analysis.",
    problem: "Predict survival from passenger data, and show how factors such as class, sex and age change the odds.",
    approach: [
      "Fixed a preprocessing bug that dropped 79% of rows; imputation and encoding fitted on the training split only.",
      "Keras MLP with dropout and L1/L2 regularisation, trained with SGD and early stopping.",
      "Streamlit app with what-if age chart, batch CSV predictions, ROC curve and survival-rate insights.",
    ],
    results: ["Test accuracy 0.816, ROC AUC 0.880 (up from 0.62 before the data fix).", "Deployed live on Streamlit Community Cloud."],
    metrics: [["0.816", "accuracy"], ["0.880", "ROC AUC"], ["891", "passengers"]],
    stack: ["Python", "TensorFlow / Keras", "Scikit-learn", "Altair", "Streamlit"],
  },
  {
    id: "possum", title: "Possum Body Length Regression", cats: ["ml", "data"], live: "https://possum-length.streamlit.app/",
    repo: GH + "possum", img: "assets/img/possum.webp",
    summary: "A linear-regression model that predicts a possum's total body length from ten body measurements.",
    problem: "Estimate total length from measurements that are easier to take, and explain which features matter.",
    approach: [
      "Mean imputation and LinearRegression in a scikit-learn pipeline; row-ID column removed from the features.",
      "Shuffled 5-fold cross-validation for a reliable estimate on a 104-sample dataset.",
      "Streamlit app: single and batch prediction, training-range checks, coefficients and correlations.",
    ],
    results: ["Cross-validated R² 0.68 ± 0.14, test MAE 1.8 cm.", "Deployed live on Streamlit Community Cloud."],
    metrics: [["0.68", "CV R²"], ["1.8 cm", "MAE"], ["104", "samples"]],
    stack: ["Python", "Scikit-learn", "pandas", "Altair", "Streamlit"],
  },
];

/* ---------- helpers ---------- */
const $ = (s, el = document) => el.querySelector(s);
const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const icon = (id, cls = "icon") => `<svg class="${cls}" aria-hidden="true"><use href="#${id}"/></svg>`;

const ART = {
  chat: `<svg viewBox="0 0 160 100"><rect x="18" y="20" width="78" height="24" rx="12"/><rect x="62" y="54" width="80" height="24" rx="12" class="a"/><circle cx="34" cy="32" r="3"/><circle cx="46" cy="32" r="3"/><circle cx="58" cy="32" r="3"/></svg>`,
  boxes: `<svg viewBox="0 0 160 100"><rect x="18" y="30" width="50" height="40" rx="3"/><rect x="80" y="18" width="62" height="52" rx="3" class="a"/><rect x="18" y="22" width="26" height="8"/><rect x="80" y="10" width="30" height="8" class="a"/></svg>`,
  pulse: `<svg viewBox="0 0 160 100"><path d="M10 60h30l10-30 14 50 12-36 8 16h66" fill="none" stroke-width="4" class="s"/></svg>`,
  chain: `<svg viewBox="0 0 160 100"><rect x="14" y="36" width="36" height="28" rx="6"/><rect x="62" y="36" width="36" height="28" rx="6" class="a"/><rect x="110" y="36" width="36" height="28" rx="6"/><path d="M50 50h12M98 50h12" stroke-width="4" class="s"/></svg>`,
  drops: `<svg viewBox="0 0 160 100"><path d="M60 20c12 18 20 28 20 40a20 20 0 0 1-40 0c0-12 8-22 20-40Z"/><path d="M108 36c8 12 13 19 13 27a13 13 0 0 1-26 0c0-8 5-15 13-27Z" class="a"/></svg>`,
};

/* ---------- render ---------- */
function renderSkills() {
  $("#skills-grid").innerHTML = SKILLS.map((g, i) => `
    <article class="skill card reveal" style="--d:${(i % 3) * 60}ms">
      <h3>${esc(g.title)}</h3>
      <ul class="chips">${g.items.map((s) => `<li>${esc(s)}</li>`).join("")}</ul>
    </article>`).join("");
}

function renderFilters() {
  const used = new Set(PROJECTS.flatMap((p) => p.cats));
  $("#filters").innerHTML = Object.entries(CATEGORIES)
    .filter(([k]) => k === "all" || used.has(k))
    .map(([k, v], i) => `<button role="tab" class="chip-btn" aria-selected="${i === 0}" data-filter="${k}">${esc(v)}</button>`).join("");
  $("#filters").addEventListener("click", (e) => {
    const b = e.target.closest("[data-filter]");
    if (!b) return;
    document.querySelectorAll("#filters [data-filter]").forEach((x) => x.setAttribute("aria-selected", x === b));
    const f = b.dataset.filter;
    document.querySelectorAll(".project").forEach((card) => {
      const show = f === "all" || card.dataset.cats.split(" ").includes(f);
      card.hidden = !show;
    });
  });
}

function thumb(p) {
  if (p.img) return `<img src="${p.img}" alt="Screenshot of the ${esc(p.title)} app" loading="lazy" width="960" height="600">`;
  return `<div class="art art--${p.art}" aria-hidden="true">${ART[p.art] || ""}</div>`;
}

function renderProjects() {
  $("#projects-grid").innerHTML = PROJECTS.map((p, i) => `
    <article class="project card reveal" data-cats="${p.cats.join(" ")}" style="--d:${(i % 3) * 60}ms">
      <button class="project__open" data-project="${p.id}" aria-label="Open details for ${esc(p.title)}">
        <div class="project__thumb">${thumb(p)}${p.live ? '<span class="badge badge--live">Live</span>' : ""}</div>
        <div class="project__body">
          <p class="project__cats">${p.cats.map((c) => esc(CATEGORIES[c])).join(" · ")}</p>
          <h3>${esc(p.title)}</h3>
          <p>${esc(p.summary)}</p>
          ${p.metrics ? `<dl class="metrics">${p.metrics.map(([v, l]) => `<div><dt>${esc(v)}</dt><dd>${esc(l)}</dd></div>`).join("")}</dl>` : ""}
          <ul class="tags">${p.stack.slice(0, 5).map((s) => `<li>${esc(s)}</li>`).join("")}</ul>
        </div>
      </button>
      <div class="project__links">
        <a href="${p.repo}" target="_blank" rel="noopener">${icon("i-github")} Code</a>
        ${p.live ? `<a href="${p.live}" target="_blank" rel="noopener" class="accent">${icon("i-external")} Live demo</a>` : ""}
        <button class="link-btn" data-project="${p.id}">Details →</button>
      </div>
    </article>`).join("");

  document.querySelectorAll("[data-project]").forEach((b) => b.addEventListener("click", () => openProject(b.dataset.project)));
}

/* ---------- modal ---------- */
const modal = $("#project-modal");
let lastFocus = null;

function openProject(id) {
  const p = PROJECTS.find((x) => x.id === id);
  if (!p) return;
  lastFocus = document.activeElement;
  $("#modal-content").innerHTML = `
    <div class="modal__thumb">${thumb(p)}</div>
    <p class="project__cats">${p.cats.map((c) => esc(CATEGORIES[c])).join(" · ")}</p>
    <h2 id="modal-title">${esc(p.title)}</h2>
    <p class="modal__summary">${esc(p.summary)}</p>
    <h3>Problem</h3><p>${esc(p.problem)}</p>
    <h3>Approach</h3><ul class="list">${p.approach.map((a) => `<li>${esc(a)}</li>`).join("")}</ul>
    <h3>Results</h3><ul class="list">${p.results.map((a) => `<li>${esc(a)}</li>`).join("")}</ul>
    <h3>Tech stack</h3><ul class="tags">${p.stack.map((s) => `<li>${esc(s)}</li>`).join("")}</ul>
    <div class="modal__actions">
      <a class="btn btn--ghost" href="${p.repo}" target="_blank" rel="noopener">${icon("i-github")} View code</a>
      ${p.live ? `<a class="btn btn--primary" href="${p.live}" target="_blank" rel="noopener">${icon("i-external")} Open live demo</a>` : ""}
    </div>`;
  if (typeof modal.showModal === "function") modal.showModal(); else modal.setAttribute("open", "");
  document.body.classList.add("no-scroll");
  modal.querySelector(".modal__inner").scrollTop = 0;
  $("[data-close]", modal).focus();
}

function closeModal() {
  if (modal.open) modal.close();
}
modal.addEventListener("close", () => {
  document.body.classList.remove("no-scroll");
  if (lastFocus) lastFocus.focus();
});
modal.addEventListener("click", (e) => {
  if (e.target === modal || e.target.closest("[data-close]")) closeModal();
});

/* ---------- nav ---------- */
function initNav() {
  const toggle = $(".nav__toggle");
  const menu = $("#nav-menu");
  const setOpen = (open) => {
    toggle.setAttribute("aria-expanded", open);
    toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    menu.classList.toggle("is-open", open);
  };
  toggle.addEventListener("click", () => setOpen(toggle.getAttribute("aria-expanded") !== "true"));
  menu.addEventListener("click", (e) => { if (e.target.closest("a")) setOpen(false); });

  const header = $(".nav");
  const onScroll = () => header.classList.toggle("is-scrolled", window.scrollY > 8);
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  const links = [...menu.querySelectorAll('a[href^="#"]')];
  const spy = new IntersectionObserver((entries) => {
    entries.forEach((en) => {
      if (en.isIntersecting) links.forEach((l) => l.classList.toggle("is-active", l.getAttribute("href") === "#" + en.target.id));
    });
  }, { rootMargin: "-45% 0px -50% 0px" });
  document.querySelectorAll("main section[id]").forEach((s) => spy.observe(s));
}

/* ---------- reveal on scroll ---------- */
function initReveal() {
  const els = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window) || matchMedia("(prefers-reduced-motion: reduce)").matches) {
    els.forEach((e) => e.classList.add("is-visible"));
    return;
  }
  const io = new IntersectionObserver((entries) => {
    entries.forEach((en) => { if (en.isIntersecting) { en.target.classList.add("is-visible"); io.unobserve(en.target); } });
  }, { threshold: 0.12 });
  els.forEach((e) => io.observe(e));
}

/* ---------- copy buttons ---------- */
function initCopy() {
  const toast = $("#toast");
  let t;
  document.querySelectorAll("[data-copy]").forEach((b) => b.addEventListener("click", async () => {
    try { await navigator.clipboard.writeText(b.dataset.copy); toast.textContent = "Copied to clipboard"; }
    catch { toast.textContent = b.dataset.copy; }
    toast.classList.add("is-visible");
    clearTimeout(t); t = setTimeout(() => toast.classList.remove("is-visible"), 1800);
  }));
}

renderSkills();
renderFilters();
renderProjects();
initNav();
initReveal();
initCopy();
$("#year").textContent = new Date().getFullYear();
