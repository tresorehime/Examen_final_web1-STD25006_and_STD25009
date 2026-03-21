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
  const title = document.getElementById('hero-title');
  title.innerHTML = 'Research <span class="text-red-800 italic" style="font-family:\'Playfair Display\',serif">papers</span>';

  const sub = document.getElementById('hero-sub');
  sub.textContent = 'My academic work focuses on multi-agent systems and normative frameworks, exploring how autonomous agents coordinate through norms and social structures in complex, distributed environments.';
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
fillCTA();