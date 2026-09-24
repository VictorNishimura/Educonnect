# EduConnect — Centro Educacional

> **Projeto Acadêmico da Disciplina de Engenharia de Software (2026)**  
> Plataforma institucional educacional moderna, responsiva, funcional e acessível, desenvolvida exclusivamente com **HTML5, CSS3 puro (Design System proprietário) e JavaScript Vanilla**.

---

## 📌 Sumário
- [Sobre o Projeto](#-sobre-o-projeto)
- [Objetivo](#-objetivo)
- [Autores e Responsabilidades](#-autores-e-responsabilidades)
- [Tecnologias Utilizadas](#-tecnologias-utilizadas)
- [Design System & Identidade Visual](#-design-system--identidade-visual)
- [Funcionalidades e Requisitos](#-funcionalidades-e-requisitos)
- [Arquitetura da Aplicação](#-arquitetura-da-aplicação)
- [Fluxo de Navegação](#-fluxo-de-navegação)
- [Estrutura de Pastas](#-estrutura-de-pastas)
- [Estratégia Git & Branches](#-estratégia-git--branches)
- [Instruções para Execução Local](#-instruções-para-execução-local)
- [Informações de Deploy](#-informações-de-deploy)
- [Acessibilidade e Usabilidade](#-acessibilidade-e-usabilidade)

---

## 🏫 Sobre o Projeto

O **EduConnect — Centro Educacional** é uma instituição de ensino fictícia criada com a proposta de *"Transformar conhecimento em oportunidades"*. O site institucional foi projetado para aproximar a comunidade acadêmica de futuros estudantes, apresentando cursos de graduação, técnicos e pós-graduação, corpo docente qualificado, agenda de eventos/notícias e canais integrados de contato e matrícula.

---

## 🎯 Objetivo

Desenvolver uma aplicação frontend robusta, sem dependência de frameworks ou bibliotecas de UI externas, aplicando as melhores práticas de Engenharia de Software:
- Levantamento e rastreabilidade de requisitos funcionais e não-funcionais;
- Arquitetura limpa em camadas (HTML semântico + CSS Design System + Vanilla JS modular);
- Responsividade total para smartphones, tablets e desktops (320px a 1440px+);
- Acessibilidade conforme diretrizes WCAG (HTML semântico, foco navegável por teclado, atributos ARIA);
- Gerenciamento de versão profissional com Git Flow simplificado e Conventional Commits.

---

## 👥 Autores e Responsabilidades

Projeto desenvolvido pela equipe de Engenharia de Software:

| Integrante | Papel Principal | Atribuições |
| :--- | :--- | :--- |
| **Victor** | HTML & Estrutura | Estruturação semântica, acessibilidade ARIA, seções institucionais e metatags SEO. |
| **Guilherme** | CSS & Design System | Definição de tokens visuais, tipografia, paleta de cores, componentes e responsividade. |
| **Gustavo** | JavaScript & Lógica | Lógica de filtros, modais acessíveis, validações de formulário e controle de estado DOM. |

---

## 💻 Tecnologias Utilizadas

O projeto adota intencionalmente **zero dependências e zero frameworks** para demonstrar pleno domínio das tecnologias base da web:

- **HTML5**: Estrutura semântica (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<dialog>`, `<footer>`), SEO básico e atributos de acessibilidade.
- **CSS3 Puro**: Design System próprio com CSS Variables (`:root`), Flexbox, CSS Grid, media queries fluidas e micro-animações.
- **JavaScript Vanilla**: Manipulação direta do DOM, validação client-side, gestão assíncrona de modais e renderização dinâmica orientada a dados.
- **Google Fonts (Poppins)**: Tipografia moderna, institucional e de alta legibilidade.
- **SVG Icons**: Ícones vetoriais inline leves, nítidos em qualquer densidade de pixels.

---

## 🎨 Design System & Identidade Visual

O EduConnect conta com um Design System consistente baseado em variáveis CSS customizadas:

```css
:root {
  --primary: #2563EB;          /* Azul principal */
  --primary-dark: #0F3A6B;     /* Azul escuro institucional */
  --primary-deep: #0A2540;     /* Azul profundo (navbar/footer) */
  --accent: #38BDF8;           /* Azul celeste para destaques */
  --background: #F8FAFC;       /* Fundo neutro suave */
  --surface: #FFFFFF;          /* Cartões e superfícies */
  --foreground: #1E293B;       /* Texto padrão */
  --foreground-heading: #0F172A;/* Títulos e ênfases */
  --muted: #64748B;            /* Textos secundários */
  --border: #E2E8F0;           /* Linhas e separadores */
  --success: #10B981;          /* Confirmações e validação */
  --danger: #EF4444;           /* Erros e alertas */
  --warning: #F59E0B;          /* Atenção */
}
```

---

## ⚙️ Funcionalidades e Requisitos

### Requisitos Funcionais (RF)
- [x] **RF-001**: Apresentar informações institucionais (história, missão, visão, valores e infraestrutura).
- [x] **RF-002**: Apresentar catálogo de cursos (Graduação, Técnico e Pós-graduação).
- [x] **RF-003**: Permitir filtrar cursos por categoria sem recarregamento de página.
- [x] **RF-004**: Exibir modal detalhado com grade curricular e informações específicas do curso.
- [x] **RF-005**: Apresentar o corpo docente com titulações e modal de biografia acadêmica.
- [x] **RF-006**: Apresentar calendário de eventos e notícias institucionais.
- [x] **RF-007**: Permitir visualizar detalhes e cronograma dos eventos em modal interativo.
- [x] **RF-008**: Disponibilizar formulário de contato com validações em tempo real e feedback.
- [x] **RF-009**: Permitir registrar interesse em curso específico com seleção de modalidade e turno.
- [x] **RF-010**: Validar client-side os campos obrigatórios, formato de e-mail e telefone.

### Requisitos Não Funcionais (RNF)
- **Responsividade**: Layout adaptável para 320px, 375px, 768px, 1024px e 1440px+.
- **Performance**: Carregamento instantâneo, imagens otimizadas e scripts sem bloqueio desnecessário.
- **Acessibilidade**: Suporte a leitores de tela (`aria-expanded`, `aria-hidden`, `aria-live`, labels explícitos), foco visual de alto contraste e skip links.

---

## 🏗️ Arquitetura da Aplicação

```text
Usuário (Navegador Desktop / Mobile)
               │
               ▼
        HTML5 Semântico
 (index.html: Seções, Acessibilidade ARIA)
               │
               ▼
     CSS3 / Design System
(css/style.css: Tokens, Flexbox, Grid, Media Queries)
               │
               ▼
       JavaScript Vanilla
 ├── js/cursos.js     -> Base de dados em memória (Cursos, Professores, Eventos)
 ├── js/formulario.js -> Regras de validação e simulação de envio
 └── js/app.js        -> Menu mobile, modais acessíveis, filtros e DOM
               │
               ▼
     Interface Reativa no DOM
```

---

## 🗺️ Fluxo de Navegação

```text
HOME (Início)
 ├── SOBRE A INSTITUIÇÃO (História, Missão, Visão, Valores, Estrutura)
 ├── CURSOS
 │    ├── Filtro por Categoria (Graduação / Técnico / Pós)
 │    ├── Modal Detalhes do Curso
 │    └── Modal Tenho Interesse (com seleção de curso, modalidade e turno)
 ├── PROFESSORES
 │    └── Modal Detalhes do Professor (Biografia, Disciplinas, Pesquisa)
 ├── EVENTOS E NOTÍCIAS
 │    ├── Filtro (Todos / Eventos / Notícias)
 │    └── Modal Detalhes do Evento
 └── CONTATO
      └── Formulário de Mensagem (Validação em tempo real -> Confirmação)
```

---

## 📁 Estrutura de Pastas

```text
educonnect/
│
├── index.html                  # Página principal com todas as seções
│
├── css/
│   └── style.css               # Design System, variáveis CSS e responsividade
│
├── js/
│   ├── cursos.js               # Banco de dados estático em JavaScript
│   ├── formulario.js           # Validações dos formulários de contato e interesse
│   └── app.js                  # Lógica de interface, filtros, modais e menu mobile
│
├── img/                        # Imagens dos cursos, campus, professores e eventos
│
├── docs/                       # Documentação e artefatos de Engenharia de Software
│   ├── prototipo-telas.png     # Protótipo visual completo de referência
│   ├── fluxo-navegacao.png     # Diagrama de fluxo de telas
│   └── arquitetura.png         # Diagrama arquitetural do sistema frontend
│
├── README.md                   # Documentação geral do projeto
└── .gitignore                  # Arquivos ignorados pelo controle de versão
```

---

## 🌿 Estratégia Git & Branches

O versionamento segue a padronização de Conventional Commits e fluxo por branches funcionais:

```text
main           (Versão estável de produção)
 └── develop   (Integração do desenvolvimento)
      ├── feature/html        (Estruturação semântica do index.html)
      ├── feature/css         (Estilização, Design System e responsividade)
      └── feature/javascript (Lógica de dados, filtros, modais e validações)
```

---

## 🚀 Instruções para Execução Local

Como o projeto é construído exclusivamente em tecnologias web nativas, nenhuma instalação de dependências ou build é necessária!

### Opção 1: Abrir diretamente no navegador
Basta dar um duplo clique no arquivo `index.html` ou abri-lo com qualquer navegador moderno (Google Chrome, Mozilla Firefox, Microsoft Edge, Safari).

### Opção 2: Executar com servidor local simples
Se desejar executar com recarregamento ou simulação de servidor HTTP:

- **Via Python 3**:
  ```bash
  python -m http.server 8080
  ```
  Acesse no navegador: `http://localhost:8080`

- **Via VS Code Live Server**:
  Clique com o botão direito em `index.html` e selecione **"Open with Live Server"**.

- **Via Node (npx serve)**:
  ```bash
  npx serve .
  ```

---

## 🌐 Informações de Deploy

O projeto está pronto para deploy gratuito e instantâneo em plataformas de hospedagem de páginas estáticas:

1. **GitHub Pages**:
   - Vá nas configurações do repositório no GitHub (`Settings` > `Pages`).
   - Em **Source**, selecione a branch `main` e a pasta `/ (root)`.
   - Clique em **Save**. O site estará disponível em `https://<seu-usuario>.github.io/Educonnect-1/`.

2. **Vercel / Netlify**:
   - Conecte o repositório GitHub.
   - Nenhuma configuração de build command é necessária (deixe em branco).
   - O diretório raiz `.` será servido imediatamente.

---

## ♿ Acessibilidade e Usabilidade

- **Contraste de Cores**: Cumpre as recomendações WCAG AA para legibilidade de texto e elementos interativos.
- **Navegação por Teclado**: Foco visível (`:focus-visible`), tecla `Escape` para fechar modais e menu hambúrguer, tecla `Tab` com ordem lógica.
- **Leitores de Tela**: Marcação com atributos `aria-expanded`, `aria-hidden`, `aria-label` e regiões ativas `aria-live="polite"` para notificações de sucesso.
- **Responsividade**: Testado e validado em 320px, 375px, 768px, 1024px e 1440px.

---

© 2026 **EduConnect — Centro Educacional**. Projeto Acadêmico de Engenharia de Software.
