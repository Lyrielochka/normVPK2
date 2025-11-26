(() => {
  const escapeHTML = (value = "") =>
    value
      .toString()
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");

  const clampLevel = (value) => {
    const num = Number(value);
    if (!Number.isFinite(num)) return 1;
    return Math.min(10, Math.max(1, Math.round(num)));
  };

  const formatDate = (value) => {
    if (!value) return "";
    const date = new Date(value);
    if (Number.isNaN(date.getTime())) return "";
    return date.toLocaleDateString("ru-RU");
  };

  const calcDays = (value) => {
    const date = new Date(value);
    if (Number.isNaN(date.getTime())) return 0;
    const diff = Date.now() - date.getTime();
    return Math.max(0, Math.floor(diff / (1000 * 60 * 60 * 24)));
  };

  const normalizeSkills = (skills) =>
    Array.isArray(skills)
      ? skills
          .map((skill) => {
            if (typeof skill === "string") return { name: skill, level: 1 };
            if (skill && typeof skill === "object") {
              const name = skill.name || skill.title || "";
              const level = clampLevel(skill.level ?? skill.value ?? skill.progress ?? 1);
              if (!name) return null;
              return { name, level };
            }
            return null;
          })
          .filter(Boolean)
      : [];

  const renderTeamGrid = () => {
    const container = document.querySelector("[data-component='team-grid']");
    const members = typeof teamMembers !== "undefined" ? teamMembers : window.teamMembers;
    if (!container || !Array.isArray(members)) return;

    container.innerHTML = members
      .map((member) => {
        const profile = member.profile || {};
        const skills = normalizeSkills(profile.skills);
        const tokens = Array.isArray(profile.tokens) ? profile.tokens.filter(Boolean).slice(0, 8) : [];
        const joinDate = formatDate(profile.joinDate);
        const daysInClub = calcDays(profile.joinDate);
        const hours = profile.hoursInClub ?? "-";
        const classLevel = profile.classLevel ?? "-";
        const age = profile.age ?? "-";

        const skillsMarkup = skills
          .map(
            (skill) => `
              <div class="team-page__skillrow">
                <span class="skill-name">${escapeHTML(skill.name)}</span>
                <div class="team-page__skillbar">
                  <div class="team-page__skillbar-fill" style="width: ${skill.level * 10}%"></div>
                </div>
              </div>
            `
          )
          .join("");
        const tokensMarkup = tokens
          .map(
            (token) => `
              <div class="team-page__token">
                <img src="${token.icon}" alt="${escapeHTML(token.title || "Award")}" loading="lazy" decoding="async">
              </div>
            `
          )
          .join("");

        return `
          <article class="team__card team-page__card">
            <img src="${member.photo}" alt="${escapeHTML(member.name)}" loading="lazy" decoding="async">
            <h3>${escapeHTML(member.name)}</h3>
            <p class="team-page__role">${escapeHTML(member.role || "")}</p>
            ${
              member.rank
                ? `<div class="team-page__rank">
                    ${member.rank.icon ? `<img src="${member.rank.icon}" alt="${escapeHTML(member.rank.title || "")}" loading="lazy" decoding="async">` : ""}
                    <span>${escapeHTML(member.rank.title || "")}</span>
                  </div>`
                : ""
            }
            <div class="team-page__meta">
              ${joinDate ? `<div>В клубе с: <strong>${joinDate}</strong></div>` : ""}
              <div>Дней в клубе: <strong>${daysInClub}</strong></div>
              <div>Часов в клубе: <strong>${hours}</strong></div>
              <div>Класс: <strong>${classLevel}</strong></div>
              <div>Возраст: <strong>${age}</strong></div>
            </div>
            ${
              skills.length
                ? `<div class="team-page__skills">
                    <div class="team-profile-block__title">Навыки</div>
                    ${skillsMarkup}
                  </div>`
                : ""
            }
            ${
              tokens.length
                ? `<div class="team-page__tokens">
                    ${tokensMarkup}
                  </div>`
                : ""
            }
            <div class="team-page__card-footer">${escapeHTML(member.rank?.title || "Участник")}</div>
          </article>
        `;
      })
      .join("");
  };

  document.addEventListener("DOMContentLoaded", renderTeamGrid);
})();






