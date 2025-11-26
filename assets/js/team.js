const teamMembers = [
  // 1. Егор Титов
  {
    name: "Джон Уик",
    role: "Основатель",
    photo: "assets/img/wik.webp",
    rank: {
      title: "Основатель",
      icon: "assets/img/lox.webp",
    },
    profile: {
      displayName: "Джон Уик",
      joinDate: "1914-08-01",
      hoursInClub: 9999,
      classLevel: 9999,
      age: 9999,
      skills: [{ name: "Тактика", level: 10 },{ name: "Строевая", level: 10 },{ name: "Медицина", level: 10 },{ name: "Идеология", level: 10 },],
      tokens: [
        { title: "Основатель", icon: "assets/img/жетоны/основание.webp" },
        { title: "Сила", icon: "assets/img/жетоны/сила.webp" },
        { title: "Ум", icon: "assets/img/жетоны/ум.webp" },
        { title: "Талант", icon: "assets/img/жетоны/талант.webp" },
        { title: "Красота", icon: "assets/img/жетоны/красота.webp" },
        { title: "Лидерство", icon: "assets/img/жетоны/лидерство.webp" },
      ],
    },
  },
  // 2. Бабич Алексей
  {
    name: "Бабич Алексей",
    role: "Командир II Отделения",
    photo: "assets/img/фотографии/бабич.webp",
    rank: {
      title: "Сержант",
      icon: "assets/img/звания/сержант.webp",
    },
    profile: {
      displayName: "Бабич Алексей",
      joinDate: "2024-11-26",
      hoursInClub: 321,
      classLevel: 11,
      age: 16,
      skills: [{ name: "Тактика", level: 5 },{ name: "Строевая", level: 7 },{ name: "Медицина", level: 3 },{ name: "Идеология", level: 3 },],
      tokens: [{ title: "1 год службы", icon: "assets/img/жетоны/1 год.webp" },
        { title: "Знамя", icon: "assets/img/жетоны/знамя.webp" },
        { title: "МЧС", icon: "assets/img/жетоны/МЧС.webp" },
      ],
    },
  },
  // 3. Гончар Даниил
  {
    name: "Гончар Даниил",
    role: "Командир Взвода",
    photo: "assets/img/фотографии/гончар.webp",
    rank: {
      title: "Сержант-инструктор",
      icon: "assets/img/звания/сержант-инструктор.webp",
    },
    profile: {
      displayName: "Гончар Даниил",
      joinDate: "2024-11-26",
      hoursInClub: 321,
      classLevel:11,
      age: 16,
      skills: [{ name: "Тактика", level: 5 },{ name: "Строевая", level: 6 },{ name: "Медицина", level: 6 },{ name: "Идеология", level: 6 },],
      tokens: [{ title: "1 год службы", icon: "assets/img/жетоны/1 год.webp" },
        { title: "Знамя", icon: "assets/img/жетоны/знамя.webp" },
        { title: "МЧС", icon: "assets/img/жетоны/МЧС.webp" },],  
      },
  },
  // 4. Герасенко Николай
  {
    name: "Герасенко Николай",
    role: "Командир III Отделения",
    photo: "assets/img/фотографии/герасенко.png",
    rank: {
      title: "Сержант",
      icon: "assets/img/звания/сержант.webp",
    },
    profile: {
      displayName: "Герасенко Николай",
      joinDate: "2024-11-26",
      hoursInClub: 321,
      classLevel: 11,
      age: 16,
      skills: [{ name: "Тактика", level: 6 },{ name: "Строевая", level: 5 },{ name: "Медицина", level: 4 },{ name: "Идеология", level: 6 },],
      tokens: [{ title: "1 год службы", icon: "assets/img/жетоны/1 год.webp" },
        { title: "Знамя", icon: "assets/img/жетоны/знамя.webp" },
        { title: "МЧС", icon: "assets/img/жетоны/МЧС.webp" },,],      },
  },
  // 5. Шилова Виктория
  {
    name: "Шилова Виктория",
    role: "Зам. Командира I Отделения",
    photo: "assets/img/фотографии/Без имени.webp",
    rank: {
      title: "Мл. сержант",
      icon: "assets/img/звания/мл.сержант.webp",
    },
    profile: {
      displayName: "Шилова Виктория",
      joinDate: "2024-11-26",
      hoursInClub: 321,
      classLevel: 11,
      age: 16,
      skills: [{ name: "Тактика", level: 4 },{ name: "Строевая", level: 3 },{ name: "Медицина", level: 7 },{ name: "Идеология", level: 5 },],
      tokens: [{ title: "1 год службы", icon: "assets/img/жетоны/1 год.webp" },
        { title: "МЧС", icon: "assets/img/жетоны/МЧС.webp" },
      ],  
    },
  },
  // 6. Быкова Елена
  {
    name: "Быкова Елена",
    role: "Зам. Командира III Отделения",
    photo: "assets/img/фотографии/быкова.webp",
    rank: {
      title: "Мл. сержант",
      icon: "assets/img/звания/мл.сержант.webp",
    },
    profile: {
      displayName: "Быкова Елена",
      joinDate: "2023-11-26",
      hoursInClub: 621,
      classLevel: 11,
      age: 16,
      skills: [{ name: "Тактика", level: 3 },{ name: "Строевая", level: 3 },{ name: "Медицина", level: 5 },{ name: "Идеология", level: 3 },],
      tokens: [{ title: "1 год службы", icon: "assets/img/жетоны/1 год.webp" },],  
    },
  },
  // 7. Бабенко Максим
  {
    name: "Бабенко Максим",
    role: "Командир I Отделения",
    photo: "assets/img/фотографии/бабенко.webp",
    rank: {
      title: "Мл. сержант",
      icon: "assets/img/звания/мл.сержант.webp",
    },
    profile: {
      displayName: "Бабенко Максим",
      joinDate: "2024-11-26",
      hoursInClub: 321,
      classLevel: 11,
      age: 17,
      skills: [{ name: "Тактика", level: 0 },{ name: "Строевая", level: 0 },{ name: "Медицина", level: 0 },{ name: "Идеология", level: 0 },],
      tokens: [{ title: "1 год службы", icon: "assets/img/жетоны/1 год.webp" },
        { title: "МЧС", icon: "assets/img/жетоны/МЧС.webp" },
      ],  
    },
  },
  // 8. Клименок Илья
  {
    name: "Клименок Илья",
    role: "Зам. Командира II Отделения",
    photo: "assets/img/фотографии/клименок.jpg",
    rank: {
      title: "Мл. сержант",
      icon: "assets/img/звания/Мл.сержант.webp",
    },
    profile: {
      displayName: "Клименок Илья",
      joinDate: "2024-11-26",
      hoursInClub: 321,
      classLevel: 11,
      age: 16,
      skills: [{ name: "Тактика", level: 5 },{ name: "Строевая", level: 6 },{ name: "Медицина", level: 3 },{ name: "Идеология", level: 3 },],
      tokens: [{ title: "1 год службы", icon: "assets/img/жетоны/1 год.webp" },
            { title: "МЧС", icon: "assets/img/жетоны/МЧС.webp" },
      ],  
    },
  },
  // 9. Кашперко Дарья
  {
    name: "Кашперко Дарья",
    role: "Участник команды",
    photo: "assets/img/фотографии/кашперко.webp",
    rank: {
      title: "Капрал",
      icon: "assets/img/звания/капрал.webp",
    },
    profile: {
      displayName: "Кашперко Дарья",
      joinDate: "2023-11-26",
      hoursInClub: 321,
      classLevel: 11,
      age: 17,
      skills: [{ name: "Тактика", level: 5 },{ name: "Строевая", level: 2 },{ name: "Медицина", level: 6 },{ name: "Идеология", level: 3 },],
      tokens: [
        { title: "10 подтягиваний", icon: "assets/img/жетоны/1 год.webp" },
        { title: "20 подтягиваний", icon: "assets/img/жетоны/2 год.webp" },  
      ],
    },
  },
  // 10. Титовец Анастасия
  {
    name: "Титовец Анастасия",
    role: "Участник команды",
    photo: "assets/img/фотографии/титовец.webp",
    rank: {
      title: "Капрал",
      icon: "assets/img/звания/капрал.webp",
    },
    profile: {
      displayName: "Титовец Анастасия",
      joinDate: "2023-11-26",
      hoursInClub: 321,
      classLevel: 10,
      age: 15,
      skills: [{ name: "Тактика", level: 5 },{ name: "Строевая", level: 3 },{ name: "Медицина", level: 7 },{ name: "Идеология", level: 3 },],
     tokens: [
        { title: "10 подтягиваний", icon: "assets/img/жетоны/1 год.webp" },
        { title: "20 подтягиваний", icon: "assets/img/жетоны/2 год.webp" },  
      ],
    },
  },
  // 11. Марченко Анастасия
  {
    name: "Марченко Анастасия",
    role: "Участник команды",
    photo: "assets/img/фотографии/марченко.webp",
    rank: {
      title: "Капрал",
      icon: "assets/img/звания/капрал.webp",
    },
    profile: {
      displayName: "Марченко Анастасия",
      joinDate: "2023-11-26",
      hoursInClub: 321,
      classLevel: 10,
      age: 16,
      skills: [{ name: "Тактика", level: 3 },{ name: "Строевая", level: 4 },{ name: "Медицина", level: 6 },{ name: "Идеология", level: 3 },],
      tokens: [
        { title: "10 подтягиваний", icon: "assets/img/жетоны/1 год.webp" },
        { title: "20 подтягиваний", icon: "assets/img/жетоны/2 год.webp" },  
      ],
    },
  },
  // 12. Клусевич Анастасия
  {
    name: "Клусевич Анастасия",
    role: "Участник команды",
    photo: "assets/img/фотографии/клусевич.webp",
    rank: {
      title: "Капрал",
      icon: "assets/img/звания/капрал.webp",
    },
    profile: {
      displayName: "Клусевич Анастасия",
      joinDate: "2024-11-26",
      hoursInClub: 321,
      classLevel: 11,
      age: 16,
      skills: [{ name: "Тактика", level: 5 },{ name: "Строевая", level: 3 },{ name: "Медицина", level: 6 },{ name: "Идеология", level: 4 },],
      tokens: [
        { title: "10 подтягиваний", icon: "assets/img/жетоны/1 год.webp" },
        { title: "20 подтягиваний", icon: "assets/img/жетоны/2 год.webp" },  
      ],
    },
  },
  // 13. Аниховская Александра
  {
    name: "Аниховская Александра",
    role: "Участник команды",
    photo: "assets/img/фотографии/гребенькова.webp",
    rank: {
      title: "Ефрейтор",
      icon: "assets/img/звания/ефрейтор.webp",
    },
    profile: {
      displayName: "Аниховская Александра",
      joinDate: "2023-11-26",
      hoursInClub: 621,
      classLevel: 11,
      age: 16,
      skills: [{ name: "Тактика", level: 3 },{ name: "Строевая", level: 3 },{ name: "Медицина", level: 7 },{ name: "Идеология", level: 7 },],
      tokens: [
        { title: "10 подтягиваний", icon: "assets/img/жетоны/1 год.webp" },
        { title: "20 подтягиваний", icon: "assets/img/жетоны/2 год.webp" },  
      ],
    },
  },
  // 15. Гребенькова Алина
  {
    name: "Гребенькова Алина",
    role: "Участник команды",
    photo: "assets/img/фотографии/аниховская.jpg",
    rank: {
      title: "Ефрейтор",
      icon: "assets/img/звания/Ефрейтор.webp",
    },
    profile: {
      displayName: "Гребенькова Алина",
      joinDate: "2023-11-26",
      hoursInClub: 621,
      classLevel: 11,
      age: 16,
      skills: [{ name: "Тактика", level: 2 },{ name: "Строевая", level: 2 },{ name: "Медицина", level: 7 },{ name: "Идеология", level: 8 },],
      tokens: [
        { title: "10 подтягиваний", icon: "assets/img/жетоны/1 год.webp" },
        { title: "20 подтягиваний", icon: "assets/img/жетоны/2 год.webp" },  
      ],
    },
  },
  // 16. Долбенько Виктория
  {
    name: "Долбенько Виктория",
    role: "Участник команды",
    photo: "assets/img/фотографии/долбенько.png",
    rank: {
      title: "Ефрейтор",
      icon: "assets/img/звания/ефрейтор.webp",
    },
    profile: {
      displayName: "Долбенько Виктория",
      joinDate: "2024-11-26",
      hoursInClub: 21,
      classLevel: 11,
      age: 16,
      skills: [{ name: "Тактика", level: 3 },{ name: "Строевая", level: 4 },{ name: "Медицина", level: 6 },{ name: "Идеология", level: 4 },],
      tokens: [],
    },
  },
  // 17. Шалухо Павел.
  {
    name: "Шалухо Павел.",
    role: "Участник команды",
    photo: "assets/img/gerb.webp",
    rank: {
      title: "Ефрейтор",
      icon: "assets/img/звания/ефрейтор.webp",
    },
    profile: {
      displayName: "Шалухо Павел.",
      joinDate: "2024-11-26",
      hoursInClub: 321,
      classLevel: 11,
      age: 17,
      skills: [{ name: "Тактика", level: 3 },{ name: "Строевая", level: 5 },{ name: "Медицина", level: 10 },{ name: "Идеология", level: 3 },],
      tokens: [
        { title: "10 подтягиваний", icon: "assets/img/жетоны/1 год.webp" },
      ],
    },
  },
  // 18. Балбушев Алесей
  {
    name: "Балбушев Алесей",
    role: "Участник команды",
    photo: "assets/img/фотографии/балбушев.jpg",
    rank: {
      title: "Рядовой",
      icon: "assets/img/звания/рядовой.webp",
    },
    profile: {
      displayName: "Балбушев Алесей",
      joinDate: "2025-11-26",
      hoursInClub: 21,
      classLevel: 11,
      age: 17,
      skills: [{ name: "Тактика", level: 3 },{ name: "Строевая", level: 3 },{ name: "Медицина", level: 3 },{ name: "Идеология", level: 3 },],
      tokens: [],
    },
  },
  // 19. Кайтанова Мария
  {
    name: "Кайтанова Мария",
    role: "Участник команды",
    photo: "assets/img/фотографии/кайтанова.jpg",
    rank: {
      title: "Ефрейтор",
      icon: "assets/img/звания/рядовой.webp",
    },
    profile: {
      displayName: "Кайтанова Мария",
      joinDate: "2025-11-26",
      hoursInClub: 21,
      classLevel: 11,
      age: 17,
      skills: [{ name: "Тактика", level: 3 },{ name: "Строевая", level: 3 },{ name: "Медицина", level: 6 },{ name: "Идеология", level: 6 },],
      tokens: [],
    },
  },
  // 20. Савенкова Мария
  {
    name: "Савенкова Мария",
    role: "Гл.редактор",
    photo: "assets/img/фотографии/cавенкова.jpg",
    rank: {
      title: "Мл. сержант",
      icon: "assets/img/звания/мл.сержант.webp",
    },
    profile: {
      displayName: "Савенкова Мария",
      joinDate: "2025-11-26",
      hoursInClub: 21,
      classLevel: 11,
      age: 17,
      skills: [{ name: "Тактика", level: 3 },{ name: "Строевая", level: 3 },{ name: "Медицина", level: 6 },{ name: "Идеология", level: 5 },],
      tokens: [ { title: "10 подтягиваний", icon: "assets/img/жетоны/патриот.webp"},
        {title: "10 подтягиваний", icon: "assets/img/жетоны/редактор.webp"
       },],
    },
  },

  
  {
    name: "Сивенков Игнат",
    role: "Участник",
    photo: "assets/img/фотографии/сивенков.jpg",
    rank: {
      title: "Рядовой",
      icon: "assets/img/звания/рядовой.webp",
    },
    profile: {
      displayName: "Сивенков Игнат",
      joinDate: "2025-11-26",
      hoursInClub: 0,
      classLevel: 0,
      age: 0,
      skills: [{ name: "Тактика", level: 3 },{ name: "Строевая", level: 3 },{ name: "Медицина", level: 6 },{ name: "Идеология", level: 5 },],
      tokens: [],
    },
  },
  
  // 21. Клемпач Алёна
  {
    name: "Клемпач Алёна",
    role: "Участник",
    photo: "assets/img/фотографии/клемпач.webp",
    rank: {
      title: "Капрал",
      icon: "assets/img/звания/капрал.webp",
    },
    profile: {
      displayName: "Клемпач Алёна",
      joinDate: "2025-11-26",
      hoursInClub: 0,
      classLevel: 10,
      age: 16,
      skills: [{ name: "Тактика", level: 3 },{ name: "Строевая", level: 3 },{ name: "Медицина", level: 6 },{ name: "Идеология", level: 5 },],
      tokens: [],
    },
  },
 
 
  // 23. Лаптева Анна
  {
    name: "Лаптева Анна",
    role: "Участник",
    photo: "assets/img/фотографии/лаптева.jpg",
    rank: {
      title: "Рядовой",
      icon: "assets/img/звания/рядовой.webp",
    },
    profile: {
      displayName: "Лаптева Анна",
      joinDate: "2025-11-26",
      hoursInClub: 0,
      classLevel: 10,
      age: 15,
      skills: [{ name: "Тактика", level: 3 },{ name: "Строевая", level: 3 },{ name: "Медицина", level: 6 },{ name: "Идеология", level: 5 },],
      tokens: [],
    },
  },
  // 24. Щербин Артём
  {
    name: "Щербин Артём",
    role: "Участник",
    photo: "assets/img/фотографии/щербин.png",
    rank: {
      title: "Рядовой",
      icon: "assets/img/звания/рядовой.webp",
    },
    profile: {
      displayName: "Щербин Артём",
      joinDate: "2025-11-26",
      hoursInClub: 0,
      classLevel: 0,
      age: 0,
      skills: [{ name: "Тактика", level: 3 },{ name: "Строевая", level: 3 },{ name: "Медицина", level: 6 },{ name: "Идеология", level: 5 },],
      tokens: [],
    },
  },
  // 25. Предеина Ангелина
  {
    name: "Предеина Ангелина",
    role: "Участник",
    photo: "assets/img/фотографии/предеина.jpg",
    rank: {
      title: "Рядовой",
      icon: "assets/img/звания/рядовой.webp",
    },
    profile: {
      displayName: "Предеина Ангелина",
      joinDate: "2025-11-26",
      hoursInClub: 0,
      classLevel: 0,
      age: 0,
      skills: [{ name: "Тактика", level: 3 },{ name: "Строевая", level: 3 },{ name: "Медицина", level: 6 },{ name: "Идеология", level: 5 },],
      tokens: [],
    },
  },
  // 26. Башлак Дарья
  {
    name: "Башлак Дарья",
    role: "Участник",
    photo: "assets/img/фотографии/башлак.jpg",
    rank: {
      title: "Рядовой",
      icon: "assets/img/звания/рядовой.webp",
    },
    profile: {
      displayName: "Башлак Дарья",
      joinDate: "2025-11-26",
      hoursInClub: 0,
      classLevel: 0,
      age: 0,
      skills: [{ name: "Тактика", level: 3 },{ name: "Строевая", level: 3 },{ name: "Медицина", level: 6 },{ name: "Идеология", level: 5 },],
      tokens: [],
    },
  },
  // 27. Федорцов Андрей
  {
    name: "Федорцов Андрей",
    role: "Участник",
    photo: "assets/img/фотографии/федорцов.jpg",
    rank: {
      title: "Рядовой",
      icon: "assets/img/звания/рядовой.webp",
    },
    profile: {
      displayName: "Федорцов Андрей",
      joinDate: "2025-11-26",
      hoursInClub: 0,
      classLevel: 0,
      age: 0,
      skills: [{ name: "Тактика", level: 3 },{ name: "Строевая", level: 3 },{ name: "Медицина", level: 6 },{ name: "Идеология", level: 5 },],
      tokens: [],
    },
  },
  // 28. Савченко Вероника
  {
    name: "Савченко Вероника",
    role: "Участник",
    photo: "assets/img/gerb.webp",
    rank: {
      title: "Рядовой",
      icon: "assets/img/звания/рядовой.webp",
    },
    profile: {
      displayName: "Савченко Вероника",
      joinDate: "2025-11-26",
      hoursInClub: 0,
      classLevel: 0,
      age: 0,
      skills: [{ name: "Тактика", level: 3 },{ name: "Строевая", level: 3 },{ name: "Медицина", level: 6 },{ name: "Идеология", level: 5 },],
      tokens: [],
    },
  },
  // 29. Кочко Валерия
  {
    name: "Кочко Валерия",
    role: "Участник команды",
    photo: "assets/img/gerb.webp",
    rank: {
      title: "Капрал",
      icon: "assets/img/звания/капрал.webp",
    },
    profile: {
      displayName: "Кочко Валерия",
      joinDate: "2025-11-26",
      hoursInClub: 0,
      classLevel: 0,
      age: 0,
      skills: [{ name: "Тактика", level: 3 },{ name: "Строевая", level: 3 },{ name: "Медицина", level: 6 },{ name: "Идеология", level: 5 },],
      tokens: [],
    },
  },
];

function initTeamSlider() {
  const container = document.querySelector("[data-component='team-cards']");
  const prev = document.querySelector(".team__nav--left");
  const next = document.querySelector(".team__nav--right");
  const profileModal = document.querySelector("[data-team-profile-modal]");
  if (!container || !prev || !next) return;

  const profileFields = profileModal
    ? {
        name: profileModal.querySelector("[data-profile-name]"),
        rankTitle: profileModal.querySelector("[data-profile-rank-title]"),
        rankIcon: profileModal.querySelector("[data-profile-rank-icon]"),
        photo: profileModal.querySelector("[data-profile-photo]"),
        joinDate: profileModal.querySelector("[data-profile-join]"),
        days: profileModal.querySelector("[data-profile-days]"),
        hours: profileModal.querySelector("[data-profile-hours]"),
        classLevel: profileModal.querySelector("[data-profile-class]"),
        age: profileModal.querySelector("[data-profile-age]"),
        tokens: profileModal.querySelector("[data-profile-tokens]"),
        skills: profileModal.querySelector("[data-profile-skills]"),
      }
    : {};

  const profileClose = profileModal?.querySelector(".team-profile-close");

  const formatDate = (value) => {
    const date = new Date(value);
    if (Number.isNaN(date.getTime())) return value || "";
    return date.toLocaleDateString("ru-RU");
  };

  const calcDays = (value) => {
    const date = new Date(value);
    if (Number.isNaN(date.getTime())) return 0;
    const diff = Date.now() - date.getTime();
    return Math.max(0, Math.floor(diff / (1000 * 60 * 60 * 24)));
  };

  const clampSkillLevel = (value) => {
    const numeric = Number(value);
    if (!Number.isFinite(numeric)) return 1;
    return Math.min(10, Math.max(1, Math.round(numeric)));
  };

  const closeProfile = () => {
    if (!profileModal) return;
    profileModal.hidden = true;
    document.body.classList.remove("modal-open");
  };

  const openProfile = (member) => {
    if (!profileModal || !member?.profile) return;
    const { profile } = member;

    if (profileFields.rankIcon) {
      profileFields.rankIcon.src = member.rank?.icon || "";
      profileFields.rankIcon.alt = member.rank?.title ? `Ранг: ${member.rank.title}` : "";
    }
    if (profileFields.rankTitle) {
      profileFields.rankTitle.textContent = member.rank?.title || "";
    }
    if (profileFields.name) {
      profileFields.name.textContent = profile.displayName || member.name;
    }
    if (profileFields.photo) {
      profileFields.photo.src = member.photo;
      profileFields.photo.alt = profile.displayName || member.name;
    }
    if (profileFields.joinDate) profileFields.joinDate.textContent = formatDate(profile.joinDate);
    if (profileFields.days) profileFields.days.textContent = calcDays(profile.joinDate);
    if (profileFields.hours) profileFields.hours.textContent = profile.hoursInClub ?? "-";
    if (profileFields.classLevel) profileFields.classLevel.textContent = profile.classLevel ?? "-";
    if (profileFields.age) profileFields.age.textContent = profile.age ?? "-";

    if (profileFields.tokens) {
      const tokens = Array.isArray(profile.tokens) ? profile.tokens.slice(0, 10) : [];
      profileFields.tokens.innerHTML = tokens.length
        ? tokens
            .map(
              (token) => `
                <div class="team-profile-token">
                  <img src="${token.icon}" alt="${token.title}" loading="lazy" decoding="async">
                </div>
              `
            )
            .join("")
        : '<div class="team-profile-empty">Наград пока нет</div>';
    }

    if (profileFields.skills) {
      const skills = Array.isArray(profile.skills)
        ? profile.skills
            .map((skill) => {
              if (typeof skill === "string") {
                return { name: skill, level: 1 };
              }
              if (skill && typeof skill === "object") {
                const name = skill.name || skill.title || "";
                const level = clampSkillLevel(skill.level ?? skill.value ?? skill.progress ?? 1);
                if (!name) return null;
                return { name, level };
              }
              return null;
            })
            .filter(Boolean)
        : [];

      profileFields.skills.innerHTML = skills.length
        ? skills
            .map(
              (skill) => `
                <div class="team-profile-skillrow">
                  <span class="skill-name">${skill.name}</span>
                  <div class="skill-bar">
                    <div class="skill-bar-fill" style="width: ${skill.level * 10}%"></div>
                  </div>
                </div>
              `
            )
            .join("")
        : '<div class="team-profile-empty">Навыки пока не указаны</div>';
    }

    profileModal.hidden = false;
    document.body.classList.add("modal-open");
  };

  profileClose?.addEventListener("click", closeProfile);
  profileModal?.addEventListener("click", (event) => {
    if (event.target === profileModal) closeProfile();
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeProfile();
  });

  let startIndex = 0;
  const visible = 4;

  const render = () => {
    const cards = [];
    for (let i = 0; i < visible; i += 1) {
      const member = teamMembers[(startIndex + i) % teamMembers.length];
      cards.push(`
        <div class="team__card" data-index="${(startIndex + i) % teamMembers.length}">
          <img src="${member.photo}" alt="${member.name}" loading="lazy" decoding="async">
          <h3>${member.name}</h3>
          <p>${member.role}</p>
          ${
            member.rank
              ? `<div class="team__rank">
                  <img src="${member.rank.icon}" alt="Ранг: ${member.rank.title}" loading="lazy" decoding="async">
                  <span>${member.rank.title}</span>
                </div>`
              : ""
          }
        </div>
      `);
    }
    container.innerHTML = cards.join("");
  };

  prev.addEventListener("click", () => {
    startIndex = (startIndex - 1 + teamMembers.length) % teamMembers.length;
    render();
  });

  next.addEventListener("click", () => {
    startIndex = (startIndex + 1) % teamMembers.length;
    render();
  });

  container.addEventListener("click", (event) => {
    const card = event.target.closest(".team__card");
    if (!card) return;
    const member = teamMembers[Number(card.dataset.index)];
    if (member?.profile) openProfile(member);
  });

setInterval(() => {
    startIndex = (startIndex + 1) % teamMembers.length;
    render();
  }, 5000);

  render();
}

document.addEventListener("DOMContentLoaded", () => {
  initTeamSlider();
});



