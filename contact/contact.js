
const contactData = {
  label: 'Get in touch',
  title: "Let's <em>talk.</em>",
  sub: "Whether you're looking for a consultation, a co-authoring opportunity, or just want to say hello — I'm always open to meaningful conversations.",
  infos: [
    { icon: 'fa-solid fa-envelope', text: 'tokimahery@example.com', href: 'mailto:tokimahery@example.com' },
    { icon: 'fa-brands fa-linkedin', text: 'linkedin.com/in/tokimahery', href: 'https://linkedin.com' },
    { icon: 'fa-solid fa-location-dot', text: 'Antananarivo, Madagascar', href: null },
  ],
  form: {
    name: 'Full name',
    email: 'Email address',
    subject: 'Subject',
    message: 'Your message',
    submit: 'Send message',
  },
  reasons: {
    label: 'Why reach out',
    title: 'What I can help with',
    items: [
      { icon: 'fa-solid fa-chalkboard-user', title: 'Teaching & Courses', desc: 'Book a course, ask about custom training sessions, or discuss pedagogy and curriculum.' },
      { icon: 'fa-solid fa-flask', title: 'Research & Co-authoring', desc: 'Interested in multi-agent systems or normative frameworks? Let\'s collaborate on something meaningful.' },
      { icon: 'fa-solid fa-code', title: 'Consulting & Dev', desc: "Need a technical consultant or developer for your project? I'm available for focused engagements." },
    ]
  },
  cta: {
    title: 'Still hesitating?',
    sub: "There's no wrong reason to reach out. Let's start a conversation.",
    btn: 'Write to me',
  }
};


function fillContactLeft() {
  document.getElementById('contact-label').textContent = contactData.label;
  document.getElementById('contact-title').innerHTML = contactData.title;
  document.getElementById('contact-sub').textContent = contactData.sub;

  const infoList = document.getElementById('contact-info');
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

    infoList.appendChild(item);
  });
}


function fillForm() {
  const f = contactData.form;
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
  document.getElementById('reasons-title').innerHTML = contactData.reasons.title;

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


fillContactLeft();
fillForm();
fillReasons();
fillCTA();