import re 
from pathlib import Path 
text = Path('assets/js/main.js').read_text(encoding='utf-8') 
new = '''const teamMembers = [ 
  { 
    name: 'ᥩ 묯', 
    role: ' ⤥', 
    photo: 'assets/img/lox.webp', 
    rank: { 
      title: '設', 
      icon: 'assets/img//設.webp', 
    }, 
    profile: { 
      displayName: 'ᥩ', 
      joinDate: '2023-04-15', 
      hoursInClub: 534, 
      classLevel: 3, 
      age: 24, 
      skills: ['५졠', '. ⮢', '⨪', '樭'], 
      tokens: [ 
        { title: '10 ', icon: 'assets/img/⮭/10 .webp' }, 
        { title: '20 ', icon: 'assets/img/⮭/20.webp' }, 
        { title: '30 ', icon: 'assets/img/⮭/30 .webp' }, 
        { title: '', icon: 'assets/img/⮭/.webp' }, 
        { title: '', icon: 'assets/img/⮭/.webp' }, 
        { title: 'ਮ', icon: 'assets/img/⮭/ਮ.webp' }, 
      ], 
    }, 
  }, 
  { 
    name: '਩ ', 
    role: '訩 ', 
    photo: 'assets/img/wik.webp', 
    rank: { 
      title: 'ঠ-', 
      icon: 'assets/img//ঠ-.webp', 
    }, 
  }, 
  { 
    name: ' ஢', 
    role: '孨᪨ ᯥ樠', 
    photo: 'assets/img/logo.webp', 
    rank: { 
      title: 'ঠ', 
      icon: 'assets/img//ঠ.webp', 
    }, 
  }, 
  { 
    name: ' 뫮', 
    role: '७   ⮢', 
    photo: 'assets/img/project1.webp', 
    rank: { 
      title: '. ঠ', 
      icon: 'assets/img//.ঠ.webp', 
    }, 
  }, 
  { 
    name: ' ', 
    role: '樠', 
    photo: 'assets/img/project2.webp', 
    rank: { 
      title: '३', 
      icon: 'assets/img//३.webp', 
    }, 
  }, 
];''' 
