const heroSlides = [
  {
    title: "Добро пожаловать на сайт ВПК «Вымпел»",
    text: "Здесь вы узнаете о нашей деятельности, традициях и возможностях для развития.",
    button: "Подробнее",
    image: "assets/img/fonVPK.webp",
  },
  {
    title: "ВПК «Вымпел»",
    text: "Воспитываем характер — формируем будущее.",
    button: "Подробнее",
    image: "assets/img/fonVPK.webp",
  },
  {
    title: "ВПК «Вымпел»",
    text: "Дисциплина сегодня — победа завтра.",
    button: "Подробнее",
    image: "assets/img/fonVPK.webp",
  },
  {
    title: "ВПК «Вымпел»",
    text: "Команда, где каждый важен.",
    button: "Подробнее",
    image: "assets/img/fonVPK.webp",
  },
];

const NEWS_STORAGE_KEY = "news-items-v1";
const NEWS_STORAGE_VERSION_KEY = "news-items-version";
const NEWS_STORAGE_VERSION = "v2";
const NEWS_ADMIN_SESSION_KEY = "news-admin-session";
const NEWS_ADMIN_CODE = "vimpel2025";
const NEWS_FILE_PATH = "news-data.json";

const defaultNews = [
  {
    id: "seed-1",
    title: "Городская олимпиада по инженерии",
    category: "Соревнования",
    author: "Калюжный Артём",
    date: "2025-11-18T10:00:00",
    summary:
      "Команда «Вымпел» заняла первое место в городском финале. Собрали роботизированный стенд и защитили проект перед жюри.",
    fullText:
      "Команда «Вымпел» выступила в городском финале инженерной олимпиады и взяла первое место. За два часа собрали роботизированный стенд, подключили датчики движения и презентовали проект жюри.\nПеред стартом ребята провели серию тренировок в мастерской, собрали макет, протестировали питание и написали резервный сценарий. Подготовка помогла быстро устранить неполадки прямо на площадке.\nСпасибо наставникам, которые сопровождали нас на этапе монтажа и помогли с логистикой оборудования. Теперь готовим улучшенную версию стенда к республиканскому этапу.",
    cover: "assets/img/fonVPK.webp",
    gallery: ["assets/img/fonVPK.webp", "assets/img/project2.webp"],
  },
  {
    id: "seed-2",
    title: "Открытый урок по радиотехнике",
    category: "Обучение",
    author: "Елизавета Травина",
    date: "2025-11-12T16:30:00",
    summary:
      "Провели мастер-класс по пайке и сборке простых радиосхем. Новички собрали свои первые платы под присмотром наставников.",
    fullText:
      "В мастерской прошел открытый урок по радиотехнике. Мы разобрали базовые правила пайки, показали, как работать с мультиметром и зачем нужен флюс.\nКаждый участник собрал простую радиосхему: установили резисторы, светодиоды и кнопку на макетную плату, после чего проверили все цепи. Ошибки фиксировали вместе, чтобы ребята сразу понимали, где искать неисправность.\nТем, кто захочет углубиться, выдали список ссылок и материалы для самостоятельной практики. Следующий шаг — собрать мини-прожектор и научиться рассчитывать питание.",
    cover: "assets/img/kkk.webp",
    gallery: ["assets/img/kkk.webp", "assets/img/project3.webp"],
  },
  {
    id: "seed-3",
    title: "Поездка на выставку «Армия будущего»",
    category: "Поездки",
    author: "Штаб клуба",
    date: "2025-11-03T09:00:00",
    summary:
      "Съездили на выставку, посмотрели новые образцы техники и пообщались с инженерами. Привезли идеи для новых макетов.",
    fullText:
      "Группа клуба съездила на выставку «Армия будущего». Мы увидели новинки беспилотных платформ, системы связи и шлемы дополненной реальности.\nСамое полезное — общение с инженерами. Ребята расспросили про материалы корпусов, способы защиты электроники и проверку батарей в полевых условиях.\nПо итогам собрали список идей: сделать модульную раму для макетов, пересмотреть охлаждение на квадрокоптерах и протестировать новый тип креплений. Часть решений попробуем на ближайших занятиях.",
    cover: "assets/img/project3.webp",
    gallery: ["assets/img/project3.webp", "assets/img/project4.webp"],
  },
  {
    id: "seed-4",
    title: "Волонтерская акция у мемориала",
    category: "Сообщество",
    author: "ВПК «Вымпел»",
    date: "2025-10-27T14:15:00",
    summary:
      "Провели уборку территории мемориала, восстановили подсветку и проверили крепления флага. Заодно рассказали младшим ребятам про правила строя.",
    fullText:
      "Команда клуба провела волонтерскую акцию у городского мемориала. Навели порядок на территории, обновили крепления флага и восстановили подсветку вдоль дорожек.\nПараллельно устроили для младших ребят короткий инструктаж: как правильно поднимать флаг, как работать в строю и почему важно следить за формой. Финализировали выезд общим построением и чаепитием.\nСпасибо всем, кто помог с организацией и инструментами. Планируем повторить выезд весной и добавить ремонт лавочек.",
    cover: "assets/img/project2.webp",
    gallery: ["assets/img/project2.webp"],
  },
];

const achievements = [
  { name: "Диплом I степени", img: "assets/img/diplom1.webp" },
  { name: "Диплом I степени", img: "assets/img/diplom2.webp" },
  { name: "Диплом I степени", img: "assets/img/дипломы/Диплом область.webp" },
  { name: "Диплом III степени", img: "assets/img/дипломы/Диплом Республика.webp" },
];

const newsState = {
  isAdmin: typeof sessionStorage !== "undefined" && sessionStorage.getItem(NEWS_ADMIN_SESSION_KEY) === "1",
  renderNews: null,
};

const storageAvailable = typeof window !== "undefined" && typeof localStorage !== "undefined";
let newsItems = loadNews();

document.addEventListener("DOMContentLoaded", () => {
  cleanupOldCaches();
  updateServiceWorkerRegistration();
  setupBurgerMenu();
  initHeroSlider();
  const openNewsModal = setupNewsModal();
  initNewsSlider(openNewsModal);
  setupNewsAdmin();
  initAchievements();
  initLazyMap();
  refreshNewsFromFile();
});

function setupBurgerMenu() {
  const burger = document.querySelector(".burger");
  const menuToggle = document.querySelector(".menu-toggle");
  const links = document.querySelector(".layout-links");

  if ((!burger && !menuToggle) || !links) return;

  const closeMenu = () => links.classList.remove("open");
  const toggleMenu = () => links.classList.toggle("open");

  [burger, menuToggle].forEach((btn) => {
    if (!btn) return;
    btn.addEventListener("click", toggleMenu);
  });

  links.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  document.addEventListener("click", (event) => {
    const isToggle = [burger, menuToggle].some((btn) => btn && btn.contains(event.target));
    if (!links.contains(event.target) && !isToggle) {
      closeMenu();
    }
  });
}

function initHeroSlider() {
  const slider = document.querySelector(".sloi-slider");
  if (!slider) return;

  slider.innerHTML = heroSlides
    .map(
      (slide, index) => `
      <div class="sloi-slide ${index === 0 ? "active" : ""}" style="background-image: url('${slide.image}')">
        <div class="content-wrapper">
          <div class="arrows">
            <button class="arrow left" data-action="prev">‹</button>
            <button class="arrow right" data-action="next">›</button>
          </div>
          <h2 class="title">${slide.title}</h2>
          <p class="description">${slide.text}</p>
          <button class="main-btn">${slide.button}</button>
          <div class="dots">
            ${heroSlides
              .map(
                (_, dotIndex) =>
                  `<span class="dot ${dotIndex === index ? "active" : ""}" data-index="${dotIndex}"></span>`
              )
              .join("")}
          </div>
        </div>
      </div>`
    )
    .join("");

  const slides = Array.from(slider.querySelectorAll(".sloi-slide"));
  const dots = Array.from(slider.querySelectorAll(".dot"));
  let current = 0;
  let timer = null;

  const setSlide = (index) => {
    current = (index + slides.length) % slides.length;
    slides.forEach((slide, idx) => slide.classList.toggle("active", idx === current));
    dots.forEach((dot) => dot.classList.toggle("active", Number(dot.dataset.index) === current));
  };

  const restartTimer = () => {
    if (timer) clearInterval(timer);
    timer = setInterval(() => setSlide(current + 1), 8000);
  };

  slider.addEventListener("click", (event) => {
    const target = event.target;
    if (target.classList.contains("arrow")) {
      setSlide(target.dataset.action === "prev" ? current - 1 : current + 1);
      restartTimer();
    }
    if (target.classList.contains("dot")) {
      setSlide(Number(target.dataset.index));
      restartTimer();
    }
  });

  restartTimer();
}

function escapeHTML(value = "") {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function formatNewsDate(value) {
  if (!value) return "";
  const parsed = new Date(value);
  if (Number.isNaN(parsed)) return value;
  return parsed.toLocaleString("ru-RU", { dateStyle: "medium", timeStyle: "short" });
}

function normalizeNewsItem(item, index = 0) {
  const cover = item.cover || item.img || "";
  const gallery = Array.isArray(item.gallery) ? item.gallery.filter(Boolean) : cover ? [cover] : [];
  const summary = item.summary || item.text || "";
  const fullText = item.fullText || summary || "";

  return {
    id: item.id || `news-${Date.now()}-${index}`,
    title: item.title || "Без названия",
    category: item.category || "Новость",
    author: item.author || "Автор не указан",
    date: item.date || new Date().toISOString(),
    summary,
    fullText,
    cover: cover || "assets/img/project1.webp",
    gallery,
  };
}

function loadNews() {
  if (!storageAvailable) return defaultNews.map((item, idx) => normalizeNewsItem(item, idx));
  const storedVersion = localStorage.getItem(NEWS_STORAGE_VERSION_KEY);
  if (storedVersion !== NEWS_STORAGE_VERSION) {
    localStorage.removeItem(NEWS_STORAGE_KEY);
    localStorage.setItem(NEWS_STORAGE_VERSION_KEY, NEWS_STORAGE_VERSION);
  }
  try {
    const raw = localStorage.getItem(NEWS_STORAGE_KEY);
    if (!raw) return defaultNews.map((item, idx) => normalizeNewsItem(item, idx));
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return defaultNews.map((item, idx) => normalizeNewsItem(item, idx));
    return parsed.map((item, idx) => normalizeNewsItem(item, idx));
  } catch (error) {
    console.error("?? ??????? ????????? ???????", error);
    return defaultNews.map((item, idx) => normalizeNewsItem(item, idx));
  }
}

function persistNews(items) {
  if (!storageAvailable) return;
  try {
    localStorage.setItem(NEWS_STORAGE_KEY, JSON.stringify(items));
  } catch (error) {
    console.error("?? ??????? ????????? ???????", error);
  }
}

async function cleanupOldCaches() {
  if (typeof caches === "undefined") return;
  try {
    const whitelist = ["normvpk-static-v5"];
    const keys = await caches.keys();
    await Promise.all(keys.filter((key) => !whitelist.includes(key)).map((key) => caches.delete(key)));
  } catch (error) {
    console.warn("Не удалось очистить старый кэш сервис-воркера", error);
  }
}

function updateServiceWorkerRegistration() {
  if (!("serviceWorker" in navigator)) return;
  navigator.serviceWorker.getRegistration().then((registration) => {
    registration?.update();
  });
}

async function refreshNewsFromFile() {
  try {
    const url = new URL(NEWS_FILE_PATH, window.location.href);
    url.searchParams.set("v", Date.now().toString());
    const response = await fetch(url.toString(), { cache: "no-store" });
    if (!response.ok) throw new Error(`Failed to load ${NEWS_FILE_PATH}`);
    const parsed = await response.json();
    if (!Array.isArray(parsed)) throw new Error("Invalid news format");
    setNews(parsed);
  } catch (error) {
    console.warn("Не удалось загрузить новости из файла, используем локальные данные", error);
  }
}

function getNewsSnapshot() {
  if (!storageAvailable) return getSortedNews();
  try {
    const raw = localStorage.getItem(NEWS_STORAGE_KEY);
    if (!raw) return getSortedNews();
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return getSortedNews();
    const normalized = parsed.map((item, idx) => normalizeNewsItem(item, idx));
    return normalized.sort((a, b) => {
      const aTime = new Date(a.date).getTime();
      const bTime = new Date(b.date).getTime();
      return (Number.isNaN(bTime) ? 0 : bTime) - (Number.isNaN(aTime) ? 0 : aTime);
    });
  } catch (error) {
    console.error("Не удалось прочитать сохраненные новости", error);
    return getSortedNews();
  }
}

function setNews(items) {
  newsItems = items.map((item, idx) => normalizeNewsItem(item, idx));
  persistNews(newsItems);
  if (typeof newsState.renderNews === "function") {
    newsState.renderNews();
  }
}

async function addNews(item) {
  setNews([item, ...newsItems]);
}

async function removeNews(id) {
  setNews(newsItems.filter((item) => item.id !== id));
}

function getSortedNews() {
  return [...newsItems].sort((a, b) => {
    const aTime = new Date(a.date).getTime();
    const bTime = new Date(b.date).getTime();
    return (Number.isNaN(bTime) ? 0 : bTime) - (Number.isNaN(aTime) ? 0 : aTime);
  });
}

function prepareGallery(item) {
  const gallery = Array.isArray(item.gallery) && item.gallery.length ? item.gallery : [item.cover];
  return gallery.filter(Boolean);
}

function initLazyMap() {
  const iframe = document.querySelector("[data-lazy-map]");
  if (!iframe) return;

  const loadMap = () => {
    const src = iframe.dataset.mapSrc;
    if (!src || iframe.src === src) return;
    iframe.src = src;
  };

  const observer = new IntersectionObserver(
    (entries) => {
      if (entries.some((entry) => entry.isIntersecting)) {
        loadMap();
        observer.disconnect();
      }
    },
    { rootMargin: "200px 0px" }
  );

  observer.observe(iframe);
  iframe.addEventListener("pointerdown", loadMap, { once: true });
  iframe.addEventListener("keydown", loadMap, { once: true });
}

function setupNewsModal() {
  const modal = document.querySelector("[data-news-modal]");
  if (!modal) return () => {};

  const categoryEl = modal.querySelector("[data-news-modal-category]");
  const dateEl = modal.querySelector("[data-news-modal-date]");
  const authorEl = modal.querySelector("[data-news-modal-author]");
  const titleEl = modal.querySelector("[data-news-modal-title]");
  const summaryEl = modal.querySelector("[data-news-modal-summary]");
  const galleryEl = modal.querySelector("[data-news-modal-gallery]");
  const textEl = modal.querySelector("[data-news-modal-text]");
  const closeBtn = modal.querySelector("[data-news-modal-close]");
  const deleteBtn = modal.querySelector("[data-news-modal-delete]");
  let currentId = null;

  const renderText = (value = "") =>
    value
      .split(/\n+/)
      .map((line) => line.trim())
      .filter(Boolean)
      .map((line) => `<p>${escapeHTML(line)}</p>`)
      .join("");

  const open = (item) => {
    if (!item) return;
    currentId = item.id;
    categoryEl.textContent = item.category;
    dateEl.textContent = formatNewsDate(item.date);
    authorEl.textContent = `\u0410\u0432\u0442\u043e\u0440: ${item.author}`;
    titleEl.textContent = item.title;
    summaryEl.textContent = item.summary;
    if (deleteBtn) {
      deleteBtn.hidden = !newsState.isAdmin;
      deleteBtn.dataset.id = item.id;
    }

    galleryEl.innerHTML = prepareGallery(item)
      .map(
        (src, idx) =>
          `<figure class="news-modal__photo"><img src="${src}" alt="${escapeHTML(item.title)} ${idx + 1}" loading="lazy" decoding="async"></figure>`
      )
      .join("");

    textEl.innerHTML = renderText(item.fullText);
    modal.hidden = false;
  };

  const close = () => {
    currentId = null;
    modal.hidden = true;
  };

  modal.addEventListener("click", (event) => {
    if (event.target === modal) close();
  });

  closeBtn?.addEventListener("click", close);
  deleteBtn?.addEventListener("click", async () => {
    if (!currentId || !newsState.isAdmin) return;
    const confirmed = window.confirm("\u0423\u0434\u0430\u043b\u0438\u0442\u044c \u044d\u0442\u0443 \u043d\u043e\u0432\u043e\0441\u0442\u044c?");
    if (!confirmed) return;
    await removeNews(currentId);
    close();
  });

  return open;
}
function initNewsSlider(openNewsModal) {
  const container = document.querySelector("[data-component='news-cards']");
  const dotsContainer = document.querySelector("[data-component='news-dots']");
  const prev = document.querySelector("[data-news-nav='prev']");
  const next = document.querySelector("[data-news-nav='next']");
  if (!container || !prev || !next || !dotsContainer) return;

  const perPage = 3;
  const openModal = typeof openNewsModal === "function" ? openNewsModal : () => {};
  let page = 0;

  const render = () => {
    const items = getSortedNews();
    const totalPages = Math.max(1, Math.ceil(items.length / perPage));
    page = Math.min(page, totalPages - 1);
    const start = page * perPage;
    const slice = items.slice(start, start + perPage);

    if (!slice.length) {
      container.innerHTML = '<div class="news__empty">\u041d\u043e\u0432\u043e\u0441\u0442\u0435\u0439 \u043f\u043e\u043a\u0430 \u043d\u0435\u0442.</div>';
      dotsContainer.innerHTML = "";
      return;
    }

    container.innerHTML = slice
      .map(
        (item) => `
      <div class="news__card" data-id="${item.id}">
        <img src="${item.cover}" alt="${escapeHTML(item.title)}" loading="lazy" decoding="async" class="news__image" sizes="(max-width: 768px) 100vw, 33vw">
        <div class="news__meta">
          <span class="news__tag">${escapeHTML(item.category)}</span>
          <span class="news__tag">${formatNewsDate(item.date)}</span>
          <span class="news__tag">${escapeHTML(item.author)}</span>
        </div>
        <h3>${escapeHTML(item.title)}</h3>
        <p class="news__summary">${escapeHTML(item.summary)}</p>
        <button class="news__more" type="button">\u0427\u0438\u0442\u0430\u0442\u044c</button>
      </div>`
      )
      .join("");

    dotsContainer.innerHTML = Array.from({ length: totalPages })
      .map(
        (_, idx) =>
          `<span class="news__dot ${idx === page ? "active" : ""}" data-index="${idx}" aria-label="\u0421\u0442\u0440\u0430\u043d\u0438\u0446\u0430 ${idx + 1}"></span>`
      )
      .join("");
  };

  container.addEventListener("click", (event) => {
    const card = event.target.closest(".news__card");
    if (!card) return;
    const item = newsItems.find((news) => news.id === card.dataset.id);
    if (item) {
      openModal(item);
    }
  });

  prev.addEventListener("click", () => {
    page = Math.max(page - 1, 0);
    render();
  });

  next.addEventListener("click", () => {
    const totalPages = Math.max(1, Math.ceil(newsItems.length / perPage));
    page = Math.min(page + 1, totalPages - 1);
    render();
  });

  dotsContainer.addEventListener("click", (event) => {
    const dot = event.target.closest(".news__dot");
    if (!dot) return;
    page = Number(dot.dataset.index);
    render();
  });

  newsState.renderNews = render;
  render();
}

function buildNewsFromForm(formData) {
  const galleryRaw = formData.get("gallery")?.toString() || "";
  const gallery = galleryRaw
    .split(/[\n,]+/)
    .map((item) => item.trim())
    .filter(Boolean);

  const dateValue = formData.get("date")?.toString().trim();
  const parsedDate = dateValue ? new Date(dateValue) : new Date();
  const safeDate = Number.isNaN(parsedDate) ? new Date() : parsedDate;

  return normalizeNewsItem({
    id: `news-${Date.now()}`,
    title: formData.get("title")?.toString().trim() || "Без названия",
    summary: formData.get("summary")?.toString().trim() || "",
    fullText: formData.get("fullText")?.toString().trim() || "",
    author: formData.get("author")?.toString().trim() || "Админ",
    category: formData.get("category")?.toString().trim() || "Новость",
    cover: formData.get("cover")?.toString().trim() || "",
    gallery,
    date: safeDate.toISOString(),
  });
}

function setupNewsAdmin() {
  const adminBar = document.querySelector("[data-news-admin-bar]");
  const loginBtn = document.querySelector("[data-news-login]");
  const loginTrigger = document.querySelector("[data-news-login-trigger]");
  const addBtn = document.querySelector("[data-news-add]");
   const exportBtn = document.querySelector("[data-news-export]");
   const importLabel = document.querySelector("[data-news-import-label]");
   const importInput = document.querySelector("[data-news-import]");
  const loginModal = document.querySelector("[data-news-login-modal]");
  const loginForm = document.querySelector("[data-news-login-form]");
  const loginError = document.querySelector("[data-news-login-error]");
  const editor = document.querySelector("[data-news-editor]");
  const editorForm = document.querySelector("[data-news-editor-form]");

  if (!adminBar || !loginBtn || !addBtn) return;

  const applyState = () => {
    addBtn.hidden = !newsState.isAdmin;
    if (exportBtn) exportBtn.hidden = !newsState.isAdmin;
    if (importLabel) importLabel.hidden = !newsState.isAdmin;
    adminBar.classList.toggle("is-admin", newsState.isAdmin);
    loginBtn.textContent = newsState.isAdmin ? "\u0412\u044b\u0439\u0442\u0438" : "\u0412\u043e\u0439\u0442\u0438 \u0432 \u0430\u0434\u043c\u0438\u043d\u043a\u0443";
    if (loginTrigger) {
      loginTrigger.setAttribute("aria-label", newsState.isAdmin ? "\u0412\u044b\u0439\u0442\u0438 \u0438\u0437 \u0430\u0434\u043c\u0438\u043d\u043a\u0438" : "\u0410\u0434\u043c\u0438\u043d\u043a\u0430");
      loginTrigger.title = newsState.isAdmin ? "\u0412\u044b\u0439\u0442\u0438" : "\u0412\u043e\u0439\u0442\u0438";
    }
    const modalDelete = document.querySelector("[data-news-modal-delete]");
    if (modalDelete) modalDelete.hidden = !newsState.isAdmin;
  };

  const openLogin = () => {
    if (!loginModal) return;
    loginModal.hidden = false;
    loginError?.setAttribute("hidden", "");
  };

  const closeLogin = () => {
    if (!loginModal) return;
    loginModal.hidden = true;
    loginForm?.reset();
    loginError?.setAttribute("hidden", "");
  };

  const openEditor = () => {
    if (!newsState.isAdmin) {
      openLogin();
      return;
    }
    const dateInput = editor?.querySelector("input[name='date']");
    if (dateInput && !dateInput.value) {
      dateInput.value = new Date().toISOString().slice(0, 16);
    }
    if (editor) editor.hidden = false;
  };

  const closeEditor = () => {
    if (editor) editor.hidden = true;
    editorForm?.reset();
  };

  const handleLoginToggle = () => {
    if (newsState.isAdmin) {
      newsState.isAdmin = false;
      sessionStorage?.removeItem(NEWS_ADMIN_SESSION_KEY);
      applyState();
      return;
    }
    openLogin();
  };

  loginBtn.addEventListener("click", handleLoginToggle);
  if (loginTrigger) {
    loginTrigger.addEventListener("click", handleLoginToggle);
  }

  loginModal?.addEventListener("click", (event) => {
    if (event.target === loginModal) closeLogin();
  });

  loginModal?.querySelectorAll("[data-news-login-close]").forEach((btn) => {
    btn.addEventListener("click", closeLogin);
  });

  loginForm?.addEventListener("submit", (event) => {
    event.preventDefault();
    const code = new FormData(loginForm).get("code")?.toString().trim();
    if (code === NEWS_ADMIN_CODE) {
      newsState.isAdmin = true;
      sessionStorage?.setItem(NEWS_ADMIN_SESSION_KEY, "1");
      applyState();
      closeLogin();
      openEditor();
    } else {
      loginError?.removeAttribute("hidden");
    }
  });

  addBtn.addEventListener("click", openEditor);

  exportBtn?.addEventListener("click", () => {
    const snapshot = getNewsSnapshot();
    const blob = new Blob([JSON.stringify(snapshot, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "news-data.json";
    document.body.appendChild(link);
    link.click();
    link.remove();
    URL.revokeObjectURL(url);
  });

  importInput?.addEventListener("change", (event) => {
    const file = event.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      try {
        const parsed = JSON.parse(reader.result?.toString() || "[]");
        if (!Array.isArray(parsed)) throw new Error("Invalid format");
        setNews(parsed);
        window.alert("\u041d\u043e\u0432\u043e\u0441\u0442\u0438 \u043e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u044b \u0438\u0437 JSON.");
      } catch (error) {
        console.error("Failed to import news", error);
        window.alert("\u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u0438\u043c\u043f\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c JSON. \u041f\u0440\u043e\u0432\u0435\u0440\u044c\u0442\u0435 \u0444\u043e\u0440\u043c\u0430\u0442.");
      } finally {
        importInput.value = "";
      }
    };
    reader.readAsText(file);
  });

  editor?.addEventListener("click", (event) => {
    if (event.target === editor) closeEditor();
  });

  editor?.querySelectorAll("[data-news-editor-close]").forEach((btn) => {
    btn.addEventListener("click", closeEditor);
  });

  editorForm?.addEventListener("submit", async (event) => {
    event.preventDefault();
    const formData = new FormData(editorForm);
    const news = buildNewsFromForm(formData);
    await addNews(news);
    closeEditor();
  });

  applyState();
}

function initAchievements() {
  const container = document.querySelector("[data-component='achievements-cards']");
  const prev = document.querySelector("[data-achievement-nav='prev']");
  const next = document.querySelector("[data-achievement-nav='next']");
  const modal = document.querySelector("[data-component='achievement-modal']");
  if (!container || !prev || !next || !modal) return;

  const modalImg = modal.querySelector("img");
  const modalTitle = modal.querySelector("h3");
  const modalClose = modal.querySelector(".advunture__modal-close");

  let page = 0;
  const perPage = 3;
  const totalPages = Math.ceil(achievements.length / perPage);

  const openModal = (item) => {
    modalImg.src = item.img;
    modalImg.alt = item.name;
    modalTitle.textContent = item.name;
    modal.hidden = false;
  };

  const closeModal = () => {
    modal.hidden = true;
  };

  const render = () => {
    const start = page * perPage;
    const slice = achievements.slice(start, start + perPage);
    container.innerHTML = slice
      .map(
        (item, index) => `
      <div class="advunture__card" data-index="${start + index}">
        <img src="${item.img}" alt="${item.name}" loading="lazy" decoding="async">
        <h3>${item.name}</h3>
      </div>`
      )
      .join("");
  };

  container.addEventListener("click", (event) => {
    const card = event.target.closest(".advunture__card");
    if (!card) return;
    const idx = Number(card.dataset.index);
    const item = achievements[idx];
    if (item) openModal(item);
  });

  prev.addEventListener("click", () => {
    page = Math.max(page - 1, 0);
    render();
  });

  next.addEventListener("click", () => {
    page = Math.min(page + 1, totalPages - 1);
    render();
  });

  modal.addEventListener("click", (event) => {
    if (event.target === modal) {
      closeModal();
    }
  });

  modalClose?.addEventListener("click", closeModal);

  render();
}
