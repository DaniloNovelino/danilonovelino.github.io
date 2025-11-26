const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (menuToggle && navLinks) {
  menuToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
  });
}

const loginForm = document.querySelector('.login-form');
if (loginForm) {
  const alertBox = loginForm.querySelector('.form-alert');
  loginForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const email = loginForm.email.value.trim();
    const password = loginForm.password.value.trim();

    const isValidEmail = /.+@.+\..+/.test(email);

    if (!email || !password || !isValidEmail) {
      alertBox.textContent = 'Preencha e-mail corporativo válido e senha para continuar.';
      alertBox.classList.remove('success');
      alertBox.hidden = false;
      return;
    }

    loginForm.reset();
    alertBox.textContent = 'Login enviado com sucesso! Você receberá a confirmação em instantes.';
    alertBox.classList.add('success');
    alertBox.hidden = false;
  });
}

// Counters that animate when in view
const counters = document.querySelectorAll('.counter');
if (counters.length) {
  const animateCounter = (el) => {
    const target = Number(el.dataset.target || '0');
    const duration = 900;
    const start = performance.now();

    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const value = Math.floor(target * progress);
      el.textContent = value.toLocaleString('pt-BR');
      if (progress < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  };

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.4 });

  counters.forEach((counter) => observer.observe(counter));
}

// Dynamic live panel
const liveData = [
  {
    title: 'Protocolo #218 · Torre Norte',
    tag: 'Protocolos',
    type: 'protocolos',
    status: 'warning',
    statusLabel: 'Em análise pelo Corpo de Bombeiros',
    meta: ['Prazo estimado: 04/12', 'Responsável: Eng. Luana Ribeiro'],
  },
  {
    title: 'Vistoria executiva · Alpha Mall',
    tag: 'Vistorias',
    type: 'vistorias',
    status: 'success',
    statusLabel: 'Liberada e agendada',
    meta: ['Data: 28/11 às 10h', 'Equipe: Campo Leste'],
  },
  {
    title: 'Entrega AVCB · Campus Aurora',
    tag: 'Entregas',
    type: 'entregas',
    status: 'success',
    statusLabel: 'Documento emitido',
    meta: ['Envio digital concluído', 'Validade: 2026'],
  },
  {
    title: 'Checklist · Retrofit logística',
    tag: 'Vistorias',
    type: 'vistorias',
    status: 'alert',
    statusLabel: 'Pendências críticas',
    meta: ['3 itens aguardando fotos', 'Contato: cliente@log.com'],
  },
  {
    title: 'Projeto executivo · Hub Tech',
    tag: 'Protocolos',
    type: 'protocolos',
    status: 'warning',
    statusLabel: 'Revisão de memorial',
    meta: ['Lead time: 2 dias', 'Responsável: Eng. João Mendes'],
  },
];

const liveGrid = document.querySelector('.live-grid');
const chips = document.querySelectorAll('.chip');
const refreshButton = document.querySelector('.refresh');
const liveUpdated = document.querySelector('.live-updated');

const renderLiveCards = (filter = 'todos') => {
  if (!liveGrid) return;
  liveGrid.innerHTML = '';

  const filtered = filter === 'todos' ? liveData : liveData.filter((item) => item.type === filter);

  filtered.forEach((item) => {
    const card = document.createElement('article');
    card.className = 'live-card fade-in';
    card.innerHTML = `
      <span class="tag">${item.tag}</span>
      <h3 class="title">${item.title}</h3>
      <span class="status ${item.status}">${item.statusLabel}</span>
      <div class="meta">${item.meta.map((m) => `<span>${m}</span>`).join('')}</div>
    `;
    liveGrid.appendChild(card);
  });
};

if (liveGrid) {
  setTimeout(() => renderLiveCards('todos'), 500);
}

chips.forEach((chip) => {
  chip.addEventListener('click', () => {
    chips.forEach((c) => {
      c.classList.remove('active');
      c.setAttribute('aria-selected', 'false');
    });
    chip.classList.add('active');
    chip.setAttribute('aria-selected', 'true');
    const filter = chip.dataset.filter || 'todos';
    renderLiveCards(filter);
  });
});

const shuffle = (arr) => arr.sort(() => Math.random() - 0.5);

if (refreshButton) {
  refreshButton.addEventListener('click', () => {
    shuffle(liveData);
    const active = document.querySelector('.chip.active');
    const filter = active ? active.dataset.filter : 'todos';
    renderLiveCards(filter);
    if (liveUpdated) {
      const now = new Date();
      const time = now.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });
      liveUpdated.textContent = `Atualizado agora • ${time}`;
    }
  });
}
