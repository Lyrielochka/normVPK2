(() => {
  const escapeHTML = (value = "") =>
    value
      .toString()
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");

  const highlights = {
    "Гончар Даниил": "Лучший учащийся ВПК и пример уверенного лидерства.",
    "Бабенко Максим": "Надежный командир отделения и активный участник клуба.",
    "Бабич Алексей": "Призер конкурса «Снайпер» и сильный командный участник.",
    "Герасенко Николай": "Ответственный командир отделения и опора команды.",
    "Шилова Виктория": "Дисциплина, поддержка команды и стабильная работа на результат.",
    "Клименок Илья": "Победитель конкурса «Снайпер» и один из сильнейших участников.",
  };

  const graduationDate = "22.05.2026";

  const renderHonorBoard = () => {
    const container = document.querySelector("[data-component='honor-board']");
    const members =
      typeof honorBoardMembers !== "undefined"
        ? honorBoardMembers
        : typeof teamMembers !== "undefined"
          ? teamMembers
          : [];

    if (!container || !Array.isArray(members)) return;

    container.innerHTML = members
      .map((member, index) => {
        const rankTitle = member.rank?.title || "Выпускник ВПК";
        const rankIcon = member.rank?.icon || "";
        const highlight = highlights[member.name] || "Достойный вклад в историю клуба.";

        return `
          <article class="honor-card">
            <div class="honor-card__topline">
              <span>${String(index + 1).padStart(2, "0")}</span>
              <strong>Выпуск ${graduationDate}</strong>
            </div>
            <div class="honor-card__photo">
              <div class="honor-card__photo-frame">
                <img src="${member.photo}" alt="${escapeHTML(member.name)}" loading="lazy" decoding="async">
              </div>
            </div>
            <div class="honor-card__body">
              <h2>${escapeHTML(member.name)}</h2>
              <p>${escapeHTML(highlight)}</p>
              <div class="honor-card__rank">
                ${rankIcon ? `<img src="${rankIcon}" alt="${escapeHTML(rankTitle)}" loading="lazy" decoding="async">` : ""}
                <span>${escapeHTML(rankTitle)}</span>
              </div>
            </div>
          </article>
        `;
      })
      .join("");
  };

  document.addEventListener("DOMContentLoaded", renderHonorBoard);
})();
