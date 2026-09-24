/**
 * EDUCONNECT — CENTRO EDUCACIONAL
 * Validações de Formulários e Simulação de Envio (Vanilla JS)
 * Autores: Victor, Guilherme, Gustavo — Engenharia de Software 2026
 */

document.addEventListener("DOMContentLoaded", () => {
  inicializarValidacaoContato();
  inicializarValidacaoInteresse();
});

/**
 * Validador de formato de e-mail por expressão regular padrão RFC 5322 simplificada
 */
function validarEmail(email) {
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return regex.test(String(email).trim());
}

/**
 * Validador de número de telefone (mínimo 10 dígitos com DDD)
 */
function validarTelefone(telefone) {
  const numeros = String(telefone).replace(/\D/g, "");
  return numeros.length >= 10 && numeros.length <= 11;
}

/**
 * Aplica máscara de telefone (XX) XXXXX-XXXX
 */
function aplicarMascaraTelefone(input) {
  input.addEventListener("input", (e) => {
    let valor = e.target.value.replace(/\D/g, "");
    if (valor.length > 11) valor = valor.slice(0, 11);

    if (valor.length > 6) {
      valor = `(${valor.slice(0, 2)}) ${valor.slice(2, 7)}-${valor.slice(7)}`;
    } else if (valor.length > 2) {
      valor = `(${valor.slice(0, 2)}) ${valor.slice(2)}`;
    } else if (valor.length > 0) {
      valor = `(${valor}`;
    }
    e.target.value = valor;
  });
}

/**
 * Exibe ou limpa erro visual em um campo
 */
function definirErroCampo(inputEl, erroEl, mensagem) {
  if (!inputEl || !erroEl) return;
  if (mensagem) {
    inputEl.classList.add("input-error");
    erroEl.textContent = mensagem;
  } else {
    inputEl.classList.remove("input-error");
    erroEl.textContent = "";
  }
}

/**
 * Limpa erros ao digitar
 */
function vincularLimpezaAoDigitar(inputEl, erroEl) {
  if (!inputEl || !erroEl) return;
  inputEl.addEventListener("input", () => {
    definirErroCampo(inputEl, erroEl, "");
  });
  inputEl.addEventListener("change", () => {
    definirErroCampo(inputEl, erroEl, "");
  });
}

/* ==========================================================================
   1. FORMULÁRIO DE CONTATO (#form-contato)
   ========================================================================== */
function inicializarValidacaoContato() {
  const form = document.getElementById("form-contato");
  if (!form) return;

  const nomeInput = document.getElementById("contato-nome");
  const emailInput = document.getElementById("contato-email");
  const mensagemInput = document.getElementById("contato-mensagem");
  const alertaBox = document.getElementById("contato-alerta");

  const erroNome = document.getElementById("erro-contato-nome");
  const erroEmail = document.getElementById("erro-contato-email");
  const erroMensagem = document.getElementById("erro-contato-mensagem");
  const btnSubmit = document.getElementById("btn-submit-contato");

  vincularLimpezaAoDigitar(nomeInput, erroNome);
  vincularLimpezaAoDigitar(emailInput, erroEmail);
  vincularLimpezaAoDigitar(mensagemInput, erroMensagem);

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    let valido = true;

    // Validar Nome
    if (!nomeInput.value.trim()) {
      definirErroCampo(nomeInput, erroNome, "Por favor, informe seu nome completo.");
      valido = false;
    } else if (nomeInput.value.trim().length < 3) {
      definirErroCampo(nomeInput, erroNome, "O nome deve conter pelo menos 3 caracteres.");
      valido = false;
    } else {
      definirErroCampo(nomeInput, erroNome, "");
    }

    // Validar E-mail
    if (!emailInput.value.trim()) {
      definirErroCampo(emailInput, erroEmail, "Por favor, informe seu endereço de e-mail.");
      valido = false;
    } else if (!validarEmail(emailInput.value)) {
      definirErroCampo(emailInput, erroEmail, "Informe um e-mail válido (ex: seu@email.com).");
      valido = false;
    } else {
      definirErroCampo(emailInput, erroEmail, "");
    }

    // Validar Mensagem
    if (!mensagemInput.value.trim()) {
      definirErroCampo(mensagemInput, erroMensagem, "Por favor, digite sua mensagem.");
      valido = false;
    } else if (mensagemInput.value.trim().length < 10) {
      definirErroCampo(mensagemInput, erroMensagem, "A mensagem deve conter pelo menos 10 caracteres.");
      valido = false;
    } else {
      definirErroCampo(mensagemInput, erroMensagem, "");
    }

    if (!valido) {
      // Foca no primeiro campo com erro
      const primeiroErro = form.querySelector(".input-error");
      if (primeiroErro) primeiroErro.focus();
      return;
    }

    // Simulação de envio com estado de loading
    const textoOriginal = btnSubmit.textContent;
    btnSubmit.disabled = true;
    btnSubmit.textContent = "Enviando mensagem...";

    setTimeout(() => {
      btnSubmit.disabled = false;
      btnSubmit.textContent = textoOriginal;

      // Exibe mensagem de sucesso
      alertaBox.className = "alert-box alert-success";
      alertaBox.innerHTML = `
        <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
          <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
        </svg>
        <span><strong>Mensagem enviada com sucesso!</strong> Agradecemos seu contato e retornaremos em breve.</span>
      `;
      alertaBox.classList.remove("hidden");

      // Limpa formulário
      form.reset();

      // Esconde alerta após 8 segundos
      setTimeout(() => {
        alertaBox.classList.add("hidden");
      }, 8000);
    }, 700);
  });
}

/* ==========================================================================
   2. FORMULÁRIO "TENHO INTERESSE" (#form-interesse)
   ========================================================================== */
function inicializarValidacaoInteresse() {
  const form = document.getElementById("form-interesse");
  if (!form) return;

  const nomeInput = document.getElementById("interesse-nome");
  const emailInput = document.getElementById("interesse-email");
  const telInput = document.getElementById("interesse-telefone");
  const cursoSelect = document.getElementById("interesse-curso");
  const modalidadeSelect = document.getElementById("interesse-modalidade");
  const turnoSelect = document.getElementById("interesse-turno");
  const alertaBox = document.getElementById("interesse-alerta");

  const erroNome = document.getElementById("erro-interesse-nome");
  const erroEmail = document.getElementById("erro-interesse-email");
  const erroTel = document.getElementById("erro-interesse-telefone");
  const erroCurso = document.getElementById("erro-interesse-curso");
  const erroModalidade = document.getElementById("erro-interesse-modalidade");
  const erroTurno = document.getElementById("erro-interesse-turno");
  const btnSubmit = document.getElementById("btn-submit-interesse");

  aplicarMascaraTelefone(telInput);

  vincularLimpezaAoDigitar(nomeInput, erroNome);
  vincularLimpezaAoDigitar(emailInput, erroEmail);
  vincularLimpezaAoDigitar(telInput, erroTel);
  vincularLimpezaAoDigitar(cursoSelect, erroCurso);
  vincularLimpezaAoDigitar(modalidadeSelect, erroModalidade);
  vincularLimpezaAoDigitar(turnoSelect, erroTurno);

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    let valido = true;

    // Validar Nome
    if (!nomeInput.value.trim()) {
      definirErroCampo(nomeInput, erroNome, "Informe seu nome completo.");
      valido = false;
    } else {
      definirErroCampo(nomeInput, erroNome, "");
    }

    // Validar E-mail
    if (!emailInput.value.trim() || !validarEmail(emailInput.value)) {
      definirErroCampo(emailInput, erroEmail, "Informe um e-mail válido.");
      valido = false;
    } else {
      definirErroCampo(emailInput, erroEmail, "");
    }

    // Validar Telefone
    if (!telInput.value.trim() || !validarTelefone(telInput.value)) {
      definirErroCampo(telInput, erroTel, "Informe um telefone válido com DDD.");
      valido = false;
    } else {
      definirErroCampo(telInput, erroTel, "");
    }

    // Validar Curso
    if (!cursoSelect.value) {
      definirErroCampo(cursoSelect, erroCurso, "Selecione o curso de interesse.");
      valido = false;
    } else {
      definirErroCampo(cursoSelect, erroCurso, "");
    }

    // Validar Modalidade
    if (!modalidadeSelect.value) {
      definirErroCampo(modalidadeSelect, erroModalidade, "Selecione a modalidade.");
      valido = false;
    } else {
      definirErroCampo(modalidadeSelect, erroModalidade, "");
    }

    // Validar Turno
    if (!turnoSelect.value) {
      definirErroCampo(turnoSelect, erroTurno, "Selecione o turno desejado.");
      valido = false;
    } else {
      definirErroCampo(turnoSelect, erroTurno, "");
    }

    if (!valido) {
      const primeiroErro = form.querySelector(".input-error");
      if (primeiroErro) primeiroErro.focus();
      return;
    }

    // Simulação de envio com sucesso
    const textoOriginal = btnSubmit.textContent;
    btnSubmit.disabled = true;
    btnSubmit.textContent = "Registrando interesse...";

    setTimeout(() => {
      btnSubmit.disabled = false;
      btnSubmit.textContent = textoOriginal;

      alertaBox.className = "alert-box alert-success";
      alertaBox.innerHTML = `
        <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
          <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
        </svg>
        <span><strong>Interesse registrado com sucesso!</strong> Nossa equipe pedagógica entrará em contato para apresentar todas as opções e bolsas.</span>
      `;
      alertaBox.classList.remove("hidden");

      form.reset();

      // Fecha o modal automaticamente após 2.8 segundos de sucesso
      setTimeout(() => {
        if (typeof window.fecharModal === "function") {
          window.fecharModal("modal-interesse");
        }
        alertaBox.classList.add("hidden");
      }, 2800);
    }, 600);
  });
}
