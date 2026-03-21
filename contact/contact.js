const contactData = {
  card: {
    title: "Teaching, research, and building",
    sub: "Let\'s create something together.",
  },
  
  infos: [
    { icon: 'fa-solid fa-envelope', text: 'tokimahery@gmail.com', href: 'mailto:tokimahery@gmail.com' },
    { icon: 'fa-brands fa-linkedin', text: 'linkedin.com/in/tokimahery', href: 'https://linkedin.com' },
    { icon: 'fa-solid fa-location-dot', text: 'Antananarivo, Madagascar', href: null },
  ],
  form: {
    heading: "Get in <em>touch</em>",
    sub: 'Feel free to drop us a line below!',
    name: 'Full name',
    email: 'Email address',
    subject: 'Subject',
    message: 'Your message',
    submit: 'Send',
  },
  reasons: {
    label: 'Why reach out',
    title: 'What I can help with',
    items: [
      { icon: 'fa-solid fa-chalkboard-user', title: 'Teaching & Courses', desc: 'Book a course, ask about custom training sessions, or discuss pedagogy and curriculum.' },
      { icon: 'fa-solid fa-flask', title: 'Research & Co-authoring', desc: "Interested in multi-agent systems or normative frameworks? Let's collaborate on something meaningful." },
      { icon: 'fa-solid fa-code', title: 'Consulting & Dev', desc: "Need a technical consultant or developer for your project? I'm available for focused engagements." },
    ]
  },
  cta: {
    title: 'Still hesitating?',
    sub: "There's no wrong reason to reach out. Let's start a conversation.",
    btn: 'Write to me',
  },

  availability: {
    label: 'Availability',
    title: 'When to reach me',
    items: [
      { icon: 'fa-solid fa-clock', title: 'Response time', desc: 'Usually responds within 24 hours on working days.' },
      { icon: 'fa-solid fa-calendar-check', title: 'Working hours', desc: 'Monday to Friday, 9:00 AM – 5:00 PM EAT (UTC+3).' },
      { icon: 'fa-solid fa-globe', title: 'Remote friendly', desc: 'Available for remote consultations worldwide via video call.' },
    ]
  },
  socials: {
    label: 'Find me online',
    title: 'Let\'s connect',
    items: [
      { icon: 'fa-brands fa-linkedin', label: 'LinkedIn', href: 'https://linkedin.com' },
      { icon: 'fa-brands fa-github', label: 'GitHub', href: 'https://github.com' },
      { icon: 'fa-brands fa-youtube', label: 'YouTube', href: 'https://youtube.com' }
    ]
  },
  faq: {
    label: 'FAQ',
    title: 'Common questions',
    items: [
      { q: 'How much does a consultation cost?', a: 'Rates vary depending on the type and duration. Reach out for a custom quote.' },
      { q: 'How quickly do you respond?', a: 'I typically reply within 24 hours on weekdays.' },
      { q: 'Do you offer group training?', a: 'Yes, I offer both individual and group sessions, online and offline.' },
      { q: 'Can we collaborate on research?', a: 'Absolutely. I am open to co-authoring and research partnerships.' },
    ]
  },
};


function fillCard() {
  document.getElementById('contact-title').innerHTML = contactData.card.title;
  document.getElementById('contact-sub').textContent = contactData.card.sub;

  const list = document.getElementById('contact-info');
  contactData.infos.forEach(info => {
    const item = document.createElement('div');
    item.className = 'contact-info-item';

    const icon = document.createElement('i');
    icon.className = info.icon;
    item.appendChild(icon);

    if (info.href) {
      const a = document.createElement('a');
      a.href = info.href;
      a.textContent = info.text;
      item.appendChild(a);
    } else {
      const span = document.createElement('span');
      span.textContent = info.text;
      item.appendChild(span);
    }

    list.appendChild(item);
  });
}


function fillForm() {
  const f = contactData.form;
  document.getElementById('form-heading').innerHTML = f.heading;
  document.getElementById('form-sub').textContent = f.sub;
  document.getElementById('label-name').textContent = f.name;
  document.getElementById('label-email').textContent = f.email;
  document.getElementById('label-subject').textContent = f.subject;
  document.getElementById('label-message').textContent = f.message;
  document.getElementById('submit-btn').textContent = f.submit;
  document.getElementById('input-name').placeholder = f.name;
  document.getElementById('input-email').placeholder = f.email;
  document.getElementById('input-subject').placeholder = f.subject;
  document.getElementById('input-message').placeholder = f.message;
}


function fillReasons() {
  document.getElementById('reasons-label').textContent = contactData.reasons.label;
  document.getElementById('reasons-title').textContent = contactData.reasons.title;

  const list = document.getElementById('reasons-list');
  contactData.reasons.items.forEach(item => {
    const card = document.createElement('div');
    card.className = 'reason-card';

    const icon = document.createElement('div');
    icon.className = 'reason-icon';
    icon.innerHTML = `<i class="${item.icon}"></i>`;

    const title = document.createElement('p');
    title.className = 'reason-title';
    title.textContent = item.title;

    const desc = document.createElement('p');
    desc.className = 'reason-desc';
    desc.textContent = item.desc;

    card.append(icon, title, desc);
    list.appendChild(card);
  });
}


function fillCTA() {
  document.getElementById('cta-title').textContent = contactData.cta.title;
  document.getElementById('cta-sub').textContent = contactData.cta.sub;
  document.getElementById('cta-btn').textContent = contactData.cta.btn;
}


fillCard();
fillForm();
fillReasons();
fillCTA();


function fillAvailability() {
  document.getElementById('avail-label').textContent = contactData.availability.label;
  document.getElementById('avail-title').textContent = contactData.availability.title;

  const list = document.getElementById('avail-list');
  contactData.availability.items.forEach(item => {
    const card = document.createElement('div');
    card.className = 'reason-card';

    const icon = document.createElement('div');
    icon.className = 'reason-icon';
    icon.innerHTML = `<i class="${item.icon}"></i>`;

    const title = document.createElement('p');
    title.className = 'reason-title';
    title.textContent = item.title;

    const desc = document.createElement('p');
    desc.className = 'reason-desc';
    desc.textContent = item.desc;

    card.append(icon, title, desc);
    list.appendChild(card);
  });
}

function fillSocials() {
  document.getElementById('social-label').textContent = contactData.socials.label;
  document.getElementById('social-title').textContent = contactData.socials.title;

  const list = document.getElementById('social-list');
  contactData.socials.items.forEach(item => {
    const a = document.createElement('a');
    a.href = item.href;
    a.target = '_blank';
    a.className = 'social-btn';

    const icon = document.createElement('i');
    icon.className = item.icon + ' text-2xl';

    const label = document.createElement('span');
    label.className = 'text-sm font-medium';
    label.textContent = item.label;

    a.append(icon, label);
    list.appendChild(a);
  });
}

function fillFAQ() {
  document.getElementById('faq-label').textContent = contactData.faq.label;
  document.getElementById('faq-title').textContent = contactData.faq.title;

  const list = document.getElementById('faq-list');
  contactData.faq.items.forEach(item => {
    const div = document.createElement('div');
    div.className = 'faq-item';

    const q = document.createElement('p');
    q.className = 'faq-question';
    q.textContent = item.q;

    const a = document.createElement('p');
    a.className = 'faq-answer';
    a.textContent = item.a;

    div.append(q, a);
    list.appendChild(div);
  });
}

function fillHero() {
  document.getElementById('hero-title').innerHTML = "Let's <span class='text-red-800 italic font_title'>talk.</span>";
  document.getElementById('hero-sub').textContent = "Whether you're looking for a consultation, a collaboration, or just want to say hello — I'm always open to meaningful conversations.";
}

fillAvailability();
fillSocials();
fillFAQ();
fillHero();

document.getElementById('contact-form').addEventListener('submit', (e) => {
  e.preventDefault();

  const fields = [
    { id: 'input-name',    label: 'Full name' },
    { id: 'input-email',   label: 'Email address' },
    { id: 'input-subject', label: 'Subject' },
    { id: 'input-message', label: 'Message' },
  ];


  document.querySelectorAll('.field-error').forEach(el => el.remove());
  document.querySelectorAll('.form-input.invalid').forEach(el => el.classList.remove('invalid'));

  let valid = true;

  fields.forEach(({ id, label }) => {
    const input = document.getElementById(id);
    if (!input.value.trim()) {
      valid = false;
      input.classList.add('invalid');
      const err = document.createElement('p');
      err.className = 'field-error';
      err.textContent = `${label} is required.`;
      input.parentNode.appendChild(err);
    }
  });

  if (!valid) return;

  fields.forEach(({ id }) => {
    document.getElementById(id).value = '';
  });

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.textContent = 'Thank you for reaching out! I will get back to you as soon as possible.';
  document.body.appendChild(toast);

  setTimeout(() => {
    toast.classList.add('fade-out');
    setTimeout(() => toast.remove(), 400);
  }, 4000);
});