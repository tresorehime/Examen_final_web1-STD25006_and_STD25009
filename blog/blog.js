const POSTS_PER_PAGE = 5;
let currentPage = 1;

function formatDate(date) {
  return date.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
}


function fillHero() {
  document.getElementById('hero-label').textContent = 'Writing';
  document.getElementById('hero-title').innerHTML = 'The <em style="font-family:\'Playfair Display\',serif;font-style:italic;color:#b91c1c">blog</em>';
  document.getElementById('hero-sub').textContent = 'Thoughts on teaching, software engineering, languages, and everything in between.';
}


function buildPostItem(post) {
  const article = document.createElement('article');
  article.className = 'post-item flex gap-5';

  const img = document.createElement('img');
  img.src = post.thumbnail;
  img.alt = post.title;
  img.className = 'w-44 h-44 object-cover rounded flex-shrink-0';

  const content = document.createElement('div');
  content.className = 'flex-1 min-w-0';

  const title = document.createElement('h2');
  title.className = 'post-title mb-1';
  title.textContent = post.title;

  const date = document.createElement('p');
  date.className = 'text-sm text-gray-400 mb-2';
  date.textContent = formatDate(post.creationDate);

  const desc = document.createElement('p');
  desc.className = 'font-serif-body text-sm text-gray-600 leading-relaxed mb-3';
  desc.textContent = post.description;

  const tagGroup = document.createElement('div');
  tagGroup.className = 'flex gap-2 flex-wrap';
  post.tags.forEach(tag => {
    const pill = document.createElement('span');
    pill.className = 'blog-tag';
    pill.textContent = tag;
    tagGroup.appendChild(pill);
  });

  content.append(title, date, desc, tagGroup);
  article.append(img, content);
  return article;
}


function renderPosts() {
  const list = document.getElementById('post-list');
  list.innerHTML = '';

  const start = (currentPage - 1) * POSTS_PER_PAGE;
  const pagePosts = data.posts.slice(start, start + POSTS_PER_PAGE);

  pagePosts.forEach(post => list.appendChild(buildPostItem(post)));
  renderPagination();
}


function renderPagination() {
  const container = document.getElementById('pagination');
  container.innerHTML = '';

  const totalPages = Math.ceil(data.posts.length / POSTS_PER_PAGE);

  const prev = document.createElement('span');
  prev.className = 'page-nav' + (currentPage === 1 ? ' disabled' : '');
  prev.textContent = '← Prev';
  prev.onclick = () => goToPage(currentPage - 1);
  container.appendChild(prev);

  for (let i = 1; i <= totalPages; i++) {
    const btn = document.createElement('button');
    btn.className = 'page-btn' + (i === currentPage ? ' active' : '');
    btn.textContent = i;
    btn.onclick = () => goToPage(i);
    container.appendChild(btn);
  }

  const next = document.createElement('span');
  next.className = 'page-nav' + (currentPage === totalPages ? ' disabled' : '');
  next.textContent = 'Next →';
  next.onclick = () => goToPage(currentPage + 1);
  container.appendChild(next);
}

function goToPage(page) {
  currentPage = page;
  renderPosts();
}


function fillArchives() {
  const list = document.getElementById('archives-list');
  data.archives.forEach(a => {
    const li = document.createElement('li');
    li.className = 'flex justify-between text-gray-500';
    li.innerHTML = `<span>${a.label}</span><span>${a.count}</span>`;
    list.appendChild(li);
  });
}


function fillYoutube() {
  document.getElementById('youtube-sub').textContent = 'Latest videos from the channel.';

  const container = document.getElementById('youtube-list');
  data.youtubeVideos.forEach(video => {
    const wrap = document.createElement('div');

    const iframe = document.createElement('iframe');
    iframe.src = `https://www.youtube.com/embed/${video.id}`;
    iframe.title = video.title;
    iframe.className = 'w-full rounded';
    iframe.style.height = '160px';
    iframe.setAttribute('allowfullscreen', '');

    const label = document.createElement('p');
    label.className = 'text-sm text-gray-600 mt-1';
    label.textContent = video.title;

    wrap.append(iframe, label);
    container.appendChild(wrap);
  });

  document.getElementById('youtube-all').textContent = 'View all videos →';
}


function fillNewsletter() {
  document.getElementById('newsletter-sub').textContent = 'Get new articles straight to your inbox. No spam, ever.';
}


function fillCTA() {
  document.getElementById('cta-title').textContent = 'Want to go deeper?';
  document.getElementById('cta-sub').textContent = 'Explore the courses or get in touch for a consultation.';
  document.getElementById('cta-btn1').textContent = 'Browse courses';
  document.getElementById('cta-btn2').textContent = 'Collaborate';
}


fillHero();
renderPosts();
fillArchives();
fillNewsletter();
fillYoutube();
fillCTA();