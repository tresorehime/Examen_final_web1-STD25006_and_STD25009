

function el(tag, classes, attrs) {
  const node = document.createElement(tag);
  if (classes) node.className = classes;
  if (attrs) Object.entries(attrs).forEach(([k, v]) => node.setAttribute(k, v));
  return node;
}

function formatDate(date) {
  return date.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
}



function fillHero() {
  document.getElementById('hero-label').textContent = 'Academic Work';

  const title = document.getElementById('hero-title');
  title.innerHTML = 'Research <em style="font-family:\'Playfair Display\',serif;font-style:italic;color:#b91c1c">papers</em>';

  const sub = document.getElementById('hero-sub');
  sub.textContent = 'My academic work focuses on multi-agent systems and normative frameworks, exploring how autonomous agents coordinate through norms and social structures in complex, distributed environments.';


  requestAnimationFrame(() => {
    sub.style.width = (title.offsetWidth + 60) + 'px';
  });
}



function buildPaperCard(paper) {
  const article = el('article', 'paper-item');

  const meta = el('div', 'flex items-center justify-between flex-wrap gap-2 mb-4');

  const tagGroup = el('div', 'flex gap-2 flex-wrap');
  paper.tags.forEach(tag => {
    const pill = el('span', 'tag-pill');
    pill.textContent = tag;
    tagGroup.appendChild(pill);
  });

  const date = el('span', 'text-sm tracking-wide text-gray-400');
  date.textContent = formatDate(paper.publishedDate);

  meta.append(tagGroup, date);


  const title = el('h2', 'font-display text-2xl font-bold text-gray-900 mb-2 leading-snug');
  title.textContent = paper.title;


  const authorsLine = el('p', 'text-sm text-gray-500 mb-3');
  authorsLine.appendChild(document.createTextNode(paper.authors.join(', ') + ' · '));
  const journalEm = el('em');
  journalEm.textContent = paper.journal;
  authorsLine.appendChild(journalEm);


  const abstract = el('p', 'font-serif-body text-gray-700 leading-relaxed text-sm mb-4');
  abstract.textContent = paper.abstract;


  const pdfLink = el('a', 'pdf-link', {
    href: paper.pdfUrl,
    target: '_blank',
    rel: 'noopener'
  });





  const iconSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  iconSvg.setAttribute('width', '14');
  iconSvg.setAttribute('height', '14');
  iconSvg.setAttribute('viewBox', '0 0 24 24');
  iconSvg.setAttribute('fill', '#b91c1c');
  iconSvg.innerHTML = '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zm-1 1.5L18.5 9H13V3.5zM6 20V4h5v7h7v9H6z"/>';

  pdfLink.append(iconSvg, document.createTextNode(' Read PDF'));

  article.append(meta, title, authorsLine, abstract, pdfLink);
  return article;
}


function fillPaperList() {
  const list = document.getElementById('paper-list');
  data.papers.forEach(paper => list.appendChild(buildPaperCard(paper)));
}



function fillCTA() {
  document.getElementById('cta-title').textContent = 'Interested in collaborating?';
  document.getElementById('cta-sub').textContent = 'Open to co-authoring, peer review, and academic consulting engagements.';
  document.getElementById('cta-btn').textContent = 'Get in touch';
}



fillHero();
fillPaperList();
fillCTA(); function el(tag, classes, attrs) {
  const node = document.createElement(tag);
  if (classes) node.className = classes;
  if (attrs) Object.entries(attrs).forEach(([k, v]) => node.setAttribute(k, v));
  return node;
}

function formatDate(date) {
  return date.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
}



function buildHero() {
  const section = el('section', 'text-center py-20 px-4');
  section.style.backgroundColor = '#fdf2f2';

  const label = el('p', 'label-line text-xs font-medium tracking-widest uppercase mb-6');
  label.style.color = '#9a3333';
  label.textContent = 'Academic Work';

  const heading = el('h1', 'font-display text-6xl font-bold mb-4');
  heading.style.color = '#1a1a1a';
  heading.style.display = 'inline-block';
  heading.innerHTML = 'Research <em style="font-family:\'Playfair Display\',serif;font-style:italic;color:#b91c1c">papers</em>';

  const sub = el('p', 'font-serif-body leading-relaxed text-base');
  sub.style.color = '#6b4444';
  sub.style.textAlign = 'justify';
  sub.textContent = 'My academic work focuses on multi-agent systems and normative frameworks, exploring how autonomous agents coordinate through norms and social structures in complex, distributed environments.';

  const inner = el('div');
  inner.style.display = 'inline-block';
  inner.style.textAlign = 'center';

  inner.append(heading, sub);
  section.append(label, inner);

  requestAnimationFrame(() => {
    sub.style.width = heading.offsetWidth + 'px';
  });

  return section;
}



function buildPaperCard(paper) {
  const article = el('article', 'paper-item');


  const meta = el('div', 'flex items-center justify-between flex-wrap gap-2 mb-4');

  const tagGroup = el('div', 'flex gap-2 flex-wrap');
  paper.tags.forEach(tag => {
    const pill = el('span', 'tag-pill');
    pill.textContent = tag;
    tagGroup.appendChild(pill);
  });

  const date = el('span', 'text-sm tracking-wide');
  date.style.color = '#9ca3af';
  date.textContent = formatDate(paper.publishedDate);

  meta.append(tagGroup, date);


  const title = el('h2', 'font-display text-2xl font-bold text-gray-900 mb-2 leading-snug');
  title.textContent = paper.title;


  const authorsLine = el('p', 'text-sm text-gray-500 mb-3');
  authorsLine.appendChild(document.createTextNode(paper.authors.join(', ') + ' · '));
  const journalEm = el('em');
  journalEm.textContent = paper.journal;
  authorsLine.appendChild(journalEm);

  const abstract = el('p', 'font-serif-body text-gray-700 leading-relaxed text-sm mb-4');
  abstract.textContent = paper.abstract;


  const pdfLink = el('a', 'inline-flex items-center gap-1 text-sm font-medium tracking-wide uppercase', {
    href: paper.pdfUrl,
    target: '_blank',
    rel: 'noopener'
  });
  pdfLink.style.color = '#b91c1c';
  pdfLink.style.textDecoration = 'underline';
  pdfLink.style.textDecorationColor = '#b91c1c';
  pdfLink.style.textUnderlineOffset = '3px';


  const iconSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  iconSvg.setAttribute('width', '14');
  iconSvg.setAttribute('height', '14');
  iconSvg.setAttribute('viewBox', '0 0 24 24');
  iconSvg.setAttribute('fill', '#b91c1c');
  iconSvg.innerHTML = '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zm-1 1.5L18.5 9H13V3.5zM6 20V4h5v7h7v9H6z"/>';

  const linkText = document.createTextNode(' Read PDF');
  pdfLink.append(iconSvg, linkText);

  article.append(meta, title, authorsLine, abstract, pdfLink);
  return article;
}



function buildPaperList() {
  const section = el('section', 'max-w-3xl mx-auto px-6 py-12');
  data.papers.forEach(paper => section.appendChild(buildPaperCard(paper)));
  return section;
}


function buildCTA() {
  const section = el('section', 'text-white text-center py-20 px-6');
  section.style.backgroundColor = '#b91c1c';

  const title = el('h2', 'font-display text-4xl font-bold italic mb-4');
  title.textContent = 'Interested in collaborating?';

  const sub = el('p', 'mb-8 max-w-md mx-auto');
  sub.style.color = '#fecaca';
  sub.textContent = 'Open to co-authoring, peer review, and academic consulting engagements.';

  const btn = el('a', 'inline-block border border-white px-8 py-3 text-sm font-medium tracking-widest uppercase cursor-pointer', {
    href: '#'
  });
  btn.style.cssText = 'color:white; transition: background 0.2s, color 0.2s;';
  btn.textContent = 'Get in touch';
  btn.onmouseenter = () => { btn.style.background = 'white'; btn.style.color = '#b91c1c'; };
  btn.onmouseleave = () => { btn.style.background = 'transparent'; btn.style.color = 'white'; };

  section.append(title, sub, btn);
  return section;
}


function buildPage() {
  const app = document.getElementById('app');
  app.appendChild(buildHero());
  app.appendChild(buildPaperList());
  app.appendChild(buildCTA());
}

buildPage();



const menuBtn = document.getElementById('menuBtn');
const mobileMenu = document.getElementById('mobileMenu');

menuBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
  mobileMenu.classList.toggle('flex');

  const icon = menuBtn.querySelector('i');
  icon.classList.toggle('fa-bars');
  icon.classList.toggle('fa-xmark');
});