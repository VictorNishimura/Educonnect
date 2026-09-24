/**
 * EDUCONNECT — CENTRO EDUCACIONAL
 * Aplicação Principal e Interações (Vanilla JS)
 * Autores: Victor, Guilherme, Gustavo — Engenharia de Software 2026
 */

document.addEventListener("DOMContentLoaded", () => {
  inicializarMenuMobile();
  inicializarModais();
  renderizarCursosDestaque();
  renderizarCursos("todos");
  inicializarFiltrosCursos();
  renderizarProfessores();
  renderizarEventos("todos");
  inicializarFiltrosEventos();
  inicializarScrollSpy();
});

/* ==========================================================================
   1. MENU MOBILE & NAVEGAÇÃO RESPONSIVA
   ========================================================================== */
function inicializarMenuMobile() {
  const hamburgerBtn = document.getElementById("hamburger-btn");
  const navMenu = document.getElementById("nav-menu");
  const navLinks = document.querySelectorAll(".nav-link");

  if (!hamburgerBtn || !navMenu) return;

  function toggleMenu() {
    const isExpanded = hamburgerBtn.getAttribute("aria-expanded") === "true";
    hamburgerBtn.setAttribute("aria-expanded", String(!isExpanded));
    hamburgerBtn.classList.toggle("active");
    navMenu.classList.toggle("is-active");
  }

  function fecharMenu() {
    hamburgerBtn.setAttribute("aria-expanded", "false");
    hamburgerBtn.classList.remove("active");
    navMenu.classList.remove("is-active");
  }

  hamburgerBtn.addEventListener("click", toggleMenu);

  // Fecha menu ao clicar em qualquer link
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      fecharMenu();
    });
  });

  // Fecha menu ao clicar fora
  document.addEventListener("click", (e) => {
    if (
      navMenu.classList.contains("is-active") &&
      !navMenu.contains(e.target) &&
      !hamburgerBtn.contains(e.target)
    ) {
      fecharMenu();
    }
  });

  // Fecha menu ao pressionar ESC
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && navMenu.classList.contains("is-active")) {
      fecharMenu();
    }
  });
}

/* ==========================================================================
   2. SISTEMA DE MODAIS ACESSÍVEIS (WCAG)
   ========================================================================== */
let modalAbertoAtual = null;

function inicializarModais() {
  // Botões com atributo data-open-modal
  document.addEventListener("click", (e) => {
    const trigger = e.target.closest("[data-open-modal]");
    if (trigger) {
      const modalId = trigger.getAttribute("data-open-modal");
      abrirModal(modalId);
    }
  });

  // Botões de fechar modal
  document.addEventListener("click", (e) => {
    const closeBtn = e.target.closest("[data-close-modal]");
    if (closeBtn) {
      const modal = closeBtn.closest(".modal-backdrop");
      if (modal) {
        fecharModal(modal.id);
      }
    }
  });

  // Fechar ao clicar fora (no backdrop)
  document.querySelectorAll(".modal-backdrop").forEach((backdrop) => {
    backdrop.addEventListener("click", (e) => {
      if (e.target === backdrop) {
        fecharModal(backdrop.id);
      }
    });
  });

  // Fechar com tecla ESC
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modalAbertoAtual) {
      fecharModal(modalAbertoAtual.id);
    }
  });
}

function abrirModal(modalId) {
  const modal = document.getElementById(modalId);
  if (!modal) return;

  if (modalAbertoAtual && modalAbertoAtual !== modal) {
    fecharModal(modalAbertoAtual.id, false);
  }

  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
  modalAbertoAtual = modal;

  // Foco no botão de fechar ou primeiro input para acessibilidade
  setTimeout(() => {
    const focusable = modal.querySelector("button, [href], input, select, textarea, [tabindex]:not([tabindex='-1'])");
    if (focusable) focusable.focus();
  }, 100);
}

function fecharModal(modalId, restaurarOverflow = true) {
  const modal = document.getElementById(modalId);
  if (!modal) return;

  modal.classList.remove("is-open");
  modal.setAttribute("aria-hidden", "true");
  if (modalAbertoAtual === modal) {
    modalAbertoAtual = null;
  }

  if (restaurarOverflow) {
    document.body.style.overflow = "";
  }
}

// Expõe globalmente para integração com validação de formulários
window.abrirModal = abrirModal;
window.fecharModal = fecharModal;

/* ==========================================================================
   3. RENDERIZAÇÃO E FILTRO DE CURSOS
   ========================================================================= */

function criarCardCurso(curso) {
  const card = document.createElement("article");
  card.className = "course-card";
  card.setAttribute("data-id", curso.id);

  card.innerHTML = `
    <div class="course-image-wrap">
      <img src="${curso.imagem}" alt="${curso.nome}" class="course-image" loading="lazy">
      <div class="course-badge-overlay">
        <span class="badge badge-primary">${curso.categoria}</span>
      </div>
    </div>
    <div class="course-body">
      <h3 class="course-title">${curso.nome}</h3>
      <div class="course-meta">
        <span class="course-meta-item">
          <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor" aria-hidden="true">
            <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>
          </svg>
          ${curso.duracao}
        </span>
        <span class="course-meta-item">
          <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor" aria-hidden="true">
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
          </svg>
          ${curso.modalidade}
        </span>
      </div>
      <p class="course-desc">${curso.descricao}</p>
      <div class="course-actions">
        <button type="button" class="btn btn-outline btn-sm btn-detalhes-curso" data-id="${curso.id}">
          Ver detalhes
        </button>
        <button type="button" class="btn btn-primary btn-sm btn-interesse-curso" data-curso="${curso.nome}">
          Tenho interesse
        </button>
      </div>
    </div>
  `;

  // Listener do botão "Ver detalhes"
  const btnDetalhes = card.querySelector(".btn-detalhes-curso");
  btnDetalhes.addEventListener("click", () => {
    exibirDetalhesCurso(curso);
  });

  // Listener do botão "Tenho interesse"
  const btnInteresse = card.querySelector(".btn-interesse-curso");
  btnInteresse.addEventListener("click", () => {
    abrirModalInteresseComCurso(curso.nome);
  });

  return card;
}

function renderizarCursosDestaque() {
  const container = document.getElementById("cursos-destaque-grid");
  if (!container) return;

  container.innerHTML = "";
  // Exibe os 4 primeiros cursos em destaque
  const destaques = CURSOS_DADOS.filter((c) => c.destaque).slice(0, 4);
  destaques.forEach((curso) => {
    container.appendChild(criarCardCurso(curso));
  });
}

function renderizarCursos(categoriaFiltro = "todos") {
  const container = document.getElementById("cursos-grid");
  const emptyState = document.getElementById("cursos-empty");
  if (!container) return;

  container.innerHTML = "";

  const filtrados = categoriaFiltro.toLowerCase() === "todos"
    ? CURSOS_DADOS
    : CURSOS_DADOS.filter((c) => c.categoria.toLowerCase() === categoriaFiltro.toLowerCase());

  if (filtrados.length === 0) {
    if (emptyState) emptyState.classList.remove("hidden");
  } else {
    if (emptyState) emptyState.classList.add("hidden");
    filtrados.forEach((curso) => {
      container.appendChild(criarCardCurso(curso));
    });
  }
}

function inicializarFiltrosCursos() {
  const filterBtns = document.querySelectorAll("#cursos-filter-buttons .filter-btn");

  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      filterBtns.forEach((b) => {
        b.classList.remove("active");
        b.setAttribute("aria-selected", "false");
      });
      btn.classList.add("active");
      btn.setAttribute("aria-selected", "true");

      const filtro = btn.getAttribute("data-filter");
      renderizarCursos(filtro);
    });
  });
}

function exibirDetalhesCurso(curso) {
  const modal = document.getElementById("modal-curso");
  const tituloEl = document.getElementById("modal-curso-titulo");
  const catEl = document.getElementById("modal-curso-categoria");
  const conteudoEl = document.getElementById("modal-curso-conteudo");
  const btnInteresseModal = document.getElementById("btn-modal-curso-interesse");

  if (!modal || !conteudoEl) return;

  tituloEl.textContent = curso.nome;
  catEl.textContent = curso.categoria;

  const matrizHTML = curso.matriz && curso.matriz.length > 0
    ? `
      <div class="modal-detail-section">
        <h5>Principais Disciplinas e Competências</h5>
        <ul class="modal-curriculum-list">
          ${curso.matriz.map((m) => `<li>${m}</li>`).join("")}
        </ul>
      </div>
    `
    : "";

  conteudoEl.innerHTML = `
    <div class="modal-detail-banner">
      <img src="${curso.imagem}" alt="${curso.nome}">
    </div>
    <div class="modal-detail-meta">
      <div class="modal-detail-meta-item">
        <small>Categoria</small>
        <strong>${curso.categoria}</strong>
      </div>
      <div class="modal-detail-meta-item">
        <small>Duração estimada</small>
        <strong>${curso.duracao}</strong>
      </div>
      <div class="modal-detail-meta-item">
        <small>Modalidade</small>
        <strong>${curso.modalidade}</strong>
      </div>
    </div>
    <div class="modal-detail-section">
      <h5>Sobre o Curso</h5>
      <p>${curso.sobreCompleto || curso.descricao}</p>
    </div>
    ${matrizHTML}
  `;

  // Configura ação do botão de interesse interno do modal
  btnInteresseModal.onclick = () => {
    fecharModal("modal-curso", false);
    abrirModalInteresseComCurso(curso.nome);
  };

  abrirModal("modal-curso");
}

function abrirModalInteresseComCurso(nomeCurso) {
  const cursoSelect = document.getElementById("interesse-curso");
  if (cursoSelect && nomeCurso) {
    cursoSelect.value = nomeCurso;
  }
  abrirModal("modal-interesse");
}

/* ==========================================================================
   4. RENDERIZAÇÃO DE PROFESSORES
   ========================================================================= */
function renderizarProfessores() {
  const container = document.getElementById("professores-grid");
  if (!container) return;

  container.innerHTML = "";

  PROFESSORES_DADOS.forEach((prof) => {
    const card = document.createElement("article");
    card.className = "professor-card";

    card.innerHTML = `
      <div class="professor-avatar-wrap">
        <img src="${prof.imagem}" alt="${prof.nome}" class="professor-avatar" loading="lazy">
      </div>
      <h3 class="professor-name">${prof.nome}</h3>
      <span class="professor-role">${prof.cargo}</span>
      <p class="text-muted" style="font-size: var(--font-xs); margin-bottom: 0.5rem; font-weight: 500;">
        ${prof.titulacao}
      </p>
      <p class="professor-desc">${prof.descricao}</p>
      <button type="button" class="btn btn-outline btn-sm btn-ver-professor" data-id="${prof.id}">
        Ver mais
      </button>
    `;

    const btnVerMais = card.querySelector(".btn-ver-professor");
    btnVerMais.addEventListener("click", () => {
      exibirDetalhesProfessor(prof);
    });

    container.appendChild(card);
  });
}

function exibirDetalhesProfessor(prof) {
  const modal = document.getElementById("modal-professor");
  const nomeEl = document.getElementById("modal-prof-nome");
  const cargoEl = document.getElementById("modal-prof-cargo");
  const conteudoEl = document.getElementById("modal-prof-conteudo");

  if (!modal || !conteudoEl) return;

  nomeEl.textContent = prof.nome;
  cargoEl.textContent = prof.cargo;

  conteudoEl.innerHTML = `
    <div style="display: flex; gap: 1.5rem; align-items: center; margin-bottom: 1.5rem;">
      <div class="professor-avatar-wrap" style="width: 100px; height: 100px; margin-bottom: 0;">
        <img src="${prof.imagem}" alt="${prof.nome}" class="professor-avatar">
      </div>
      <div>
        <h4 style="font-size: var(--font-lg);">${prof.nome}</h4>
        <p style="color: var(--primary); font-weight: 600; font-size: var(--font-sm);">${prof.titulacao}</p>
        <p class="text-muted" style="font-size: var(--font-xs);">${prof.cargo}</p>
      </div>
    </div>
    <div class="modal-detail-section">
      <h5>Biografia e Trajetória Acadêmica</h5>
      <p>${prof.biografia}</p>
    </div>
    <div class="modal-detail-section">
      <h5>Disciplinas Ministradas</h5>
      <ul class="modal-curriculum-list">
        ${prof.disciplinas.map((d) => `<li>${d}</li>`).join("")}
      </ul>
    </div>
    <div class="modal-detail-section">
      <h5>Linhas de Pesquisa e Atuação</h5>
      <p>${prof.pesquisa}</p>
    </div>
  `;

  abrirModal("modal-professor");
}

/* ==========================================================================
   5. RENDERIZAÇÃO E FILTRO DE EVENTOS E NOTÍCIAS
   ========================================================================= */
function renderizarEventos(filtro = "todos") {
  const container = document.getElementById("eventos-grid");
  const emptyState = document.getElementById("eventos-empty");
  if (!container) return;

  container.innerHTML = "";

  const filtrados = filtro.toLowerCase() === "todos"
    ? EVENTOS_DADOS
    : EVENTOS_DADOS.filter((ev) => ev.tipo.toLowerCase() === filtro.toLowerCase());

  if (filtrados.length === 0) {
    if (emptyState) emptyState.classList.remove("hidden");
  } else {
    if (emptyState) emptyState.classList.add("hidden");
    filtrados.forEach((ev) => {
      const card = document.createElement("article");
      card.className = "event-card";

      card.innerHTML = `
        <div class="event-media">
          <img src="${ev.imagem}" alt="${ev.titulo}" loading="lazy">
        </div>
        <div class="event-date-box" aria-label="Data: ${ev.dataDia} de ${ev.dataMes}">
          <span class="event-day">${ev.dataDia}</span>
          <span class="event-month">${ev.dataMes}</span>
        </div>
        <div class="event-info">
          <span class="badge ${ev.tipo === "Evento" ? "badge-primary" : "badge-accent"} event-meta-tag">
            ${ev.tipo}
          </span>
          <h3 class="event-title">${ev.titulo}</h3>
          <p class="event-desc">${ev.descricao}</p>
        </div>
        <div class="event-actions">
          <button type="button" class="btn btn-outline btn-sm btn-detalhes-evento" data-id="${ev.id}">
            Ver detalhes
          </button>
        </div>
      `;

      const btn = card.querySelector(".btn-detalhes-evento");
      btn.addEventListener("click", () => {
        exibirDetalhesEvento(ev);
      });

      container.appendChild(card);
    });
  }
}

function inicializarFiltrosEventos() {
  const filterBtns = document.querySelectorAll("#eventos-filter-buttons .filter-btn");

  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      filterBtns.forEach((b) => {
        b.classList.remove("active");
        b.setAttribute("aria-selected", "false");
      });
      btn.classList.add("active");
      btn.setAttribute("aria-selected", "true");

      const filtro = btn.getAttribute("data-filter");
      renderizarEventos(filtro);
    });
  });
}

function exibirDetalhesEvento(ev) {
  const modal = document.getElementById("modal-evento");
  const tituloEl = document.getElementById("modal-evento-titulo");
  const tipoEl = document.getElementById("modal-evento-tipo");
  const conteudoEl = document.getElementById("modal-evento-conteudo");

  if (!modal || !conteudoEl) return;

  tituloEl.textContent = ev.titulo;
  tipoEl.textContent = ev.tipo;

  const progHTML = ev.programacao && ev.programacao.length > 0
    ? `
      <div class="modal-detail-section">
        <h5>Cronograma das Atividades</h5>
        <ul class="modal-curriculum-list">
          ${ev.programacao.map((p) => `<li>${p}</li>`).join("")}
        </ul>
      </div>
    `
    : "";

  conteudoEl.innerHTML = `
    <div class="modal-detail-banner">
      <img src="${ev.imagem}" alt="${ev.titulo}">
    </div>
    <div class="modal-detail-meta">
      <div class="modal-detail-meta-item">
        <small>Data</small>
        <strong>${ev.dataCompleta}</strong>
      </div>
      <div class="modal-detail-meta-item">
        <small>Horário</small>
        <strong>${ev.horario}</strong>
      </div>
      <div class="modal-detail-meta-item">
        <small>Formato</small>
        <strong>${ev.tipo}</strong>
      </div>
    </div>
    <div class="modal-detail-section">
      <h5>Local</h5>
      <p>${ev.local}</p>
    </div>
    <div class="modal-detail-section">
      <h5>Sobre o Evento</h5>
      <p>${ev.detalhes || ev.descricao}</p>
    </div>
    ${progHTML}
  `;

  abrirModal("modal-evento");
}

/* ==========================================================================
   6. SCROLL SPY (INDICADOR DE SEÇÃO ATIVA NA NAVBAR)
   ========================================================================== */
function inicializarScrollSpy() {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-link");

  if (!sections.length || !navLinks.length) return;

  window.addEventListener("scroll", () => {
    let currentId = "";
    const scrollPos = window.scrollY + 120;

    sections.forEach((section) => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      if (scrollPos >= top && scrollPos < top + height) {
        currentId = section.getAttribute("id");
      }
    });

    if (currentId) {
      navLinks.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${currentId}`) {
          link.classList.add("active");
        }
      });
    }
  });
}
