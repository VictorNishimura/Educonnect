/**
 * EDUCONNECT — CENTRO EDUCACIONAL
 * Repositório de Dados Locais (Vanilla JS)
 * Autores: Victor, Guilherme, Gustavo — Engenharia de Software 2026
 */

// 1. Dados dos Cursos
const CURSOS_DADOS = [
  {
    id: 1,
    nome: "Análise e Desenvolvimento de Sistemas",
    categoria: "Graduação",
    modalidade: "Presencial e EAD",
    duracao: "2,5 anos",
    imagem: "img/curso-ads.jpg",
    destaque: true,
    descricao: "Formação focada no desenvolvimento de softwares modernos, aplicativos web, mobile, arquitetura em nuvem e banco de dados com práticas ágeis de mercado.",
    sobreCompleto: "O curso superior de tecnologia em Análise e Desenvolvimento de Sistemas da EduConnect prepara o estudante para criar soluções tecnológicas completas. Com laboratórios equipados e metodologias ativas baseadas em projetos reais, o aluno domina linguagens modernas, arquiteturas em nuvem e inteligência artificial.",
    matriz: [
      "Algoritmos e Estrutura de Dados",
      "Engenharia de Software e Metodologias Ágeis",
      "Desenvolvimento Web Full Stack (HTML, CSS, JS, Node)",
      "Banco de Dados Relacionais e Não-Relacionais",
      "Arquitetura Cloud e Microsserviços",
      "Segurança da Informação e DevOps"
    ]
  },
  {
    id: 2,
    nome: "Administração",
    categoria: "Graduação",
    modalidade: "Presencial e EAD",
    duracao: "4 anos",
    imagem: "img/curso-adm.jpg",
    destaque: true,
    descricao: "Capacitação completa em gestão estratégica, finanças, liderança empresarial, marketing digital e inovação para o mundo corporativo.",
    sobreCompleto: "O bacharelado em Administração da EduConnect forma líderes com visão holística do cenário econômico global. O curso alia sólidos fundamentos teóricos a simulações de negócios, preparando gestores capazes de empreender e conduzir organizações rumo à sustentabilidade e eficiência.",
    matriz: [
      "Teoria Geral da Administração e Estratégia",
      "Gestão Financeira e Controladoria",
      "Marketing Estratégico e Digital",
      "Gestão de Pessoas e Liderança",
      "Inovação e Empreendedorismo",
      "Direito Empresarial e Tributário"
    ]
  },
  {
    id: 3,
    nome: "Direito",
    categoria: "Graduação",
    modalidade: "Presencial",
    duracao: "5 anos",
    imagem: "img/curso-direito.jpg",
    destaque: true,
    descricao: "Formação jurídica humanística e técnica com núcleo de prática real, júri simulado e alta taxa de aprovação na OAB.",
    sobreCompleto: "O curso de Direito da EduConnect une a tradição jurídica ao direito digital e às novas demandas sociais. Conta com o Núcleo de Prática Jurídica próprio, permitindo aos alunos atuarem no atendimento à comunidade sob a orientação de advogados e juízes experientes.",
    matriz: [
      "Direito Constitucional e Teoria do Estado",
      "Direito Civil e Obrigações",
      "Direito Penal e Criminologia",
      "Direito Digital e Proteção de Dados (LGPD)",
      "Direito do Trabalho e Previdenciário",
      "Prática Jurídica Simulada e Real"
    ]
  },
  {
    id: 4,
    nome: "Enfermagem",
    categoria: "Graduação",
    modalidade: "Presencial",
    duracao: "5 anos",
    imagem: "img/curso-enfermagem.jpg",
    destaque: true,
    descricao: "Cuidado humanizado e científico em saúde com estágios em hospitais renomados, clínicas integradas e laboratórios de alta fidelidade.",
    sobreCompleto: "A graduação em Enfermagem da EduConnect desenvolve competências para a assistência de saúde em todos os níveis de complexidade. Os alunos vivenciam desde os primeiros semestres simulações realísticas em ambiente hospitalar simulado.",
    matriz: [
      "Anatomia e Fisiologia Humana",
      "Farmacologia e Bioquímica Aplicada",
      "Semiologia e Semiotécnica em Enfermagem",
      "Enfermagem em Terapia Intensiva (UTI) e Urgência",
      "Saúde Coletiva e Epidemiologia",
      "Estágio Curricular Supervisionado Hospitalar"
    ]
  },
  {
    id: 5,
    nome: "Pedagogia",
    categoria: "Graduação",
    modalidade: "Presencial e EAD",
    duracao: "4 anos",
    imagem: "img/curso-pedagogia.jpg",
    destaque: false,
    descricao: "Formação de educadores transformadores, especialistas em processos de aprendizagem, novas tecnologias educacionais e gestão escolar inclusiva.",
    sobreCompleto: "O curso de Pedagogia da EduConnect visa formar educadores aptos a atuar na Educação Infantil, Anos Iniciais do Ensino Fundamental, gestão escolar e também em ambientes não escolares como pedagogia hospitalar e empresarial.",
    matriz: [
      "História e Filosofia da Educação",
      "Psicologia do Desenvolvimento e da Aprendizagem",
      "Didática e Metodologias Ativas de Ensino",
      "Educação Inclusiva e Tecnologias Assistivas",
      "Alfabetização e Letramento",
      "Gestão e Coordenação Pedagógica"
    ]
  },
  {
    id: 6,
    nome: "Engenharia Civil",
    categoria: "Graduação",
    modalidade: "Presencial",
    duracao: "5 anos",
    imagem: "img/curso-civil.jpg",
    destaque: false,
    descricao: "Projetos de infraestrutura, sustentabilidade na construção, modelagem BIM, estruturas inteligentes e gestão de obras civis.",
    sobreCompleto: "A Engenharia Civil na EduConnect combina rigor técnico com inovação sustentável. Os graduandos aprendem com tecnologias BIM, cálculos estruturais avançados e vivenciam visitas técnicas constantes a grandes obras de infraestrutura urbana.",
    matriz: [
      "Cálculo Diferencial e Física para Engenharia",
      "Resistência dos Materiais e Mecânica das Estruturas",
      "Topografia e Geotecnia",
      "Tecnologia do Concreto e Materiais de Construção",
      "Modelagem e Gestão BIM (Building Information Modeling)",
      "Planejamento, Orçamento e Gestão de Obras"
    ]
  },
  {
    id: 7,
    nome: "Técnico em Informática",
    categoria: "Técnico",
    modalidade: "Presencial",
    duracao: "1,5 anos",
    imagem: "img/curso-ads.jpg",
    destaque: false,
    descricao: "Qualificação técnica rápida para inserção imediata no mercado em suporte, redes de computadores e noções de programação.",
    sobreCompleto: "Voltado para quem deseja uma qualificação prática e rápida, o curso técnico aborda montagem e manutenção, redes locais, introdução ao desenvolvimento web e atendimento técnico a usuários.",
    matriz: [
      "Arquitetura e Manutenção de Hardware",
      "Sistemas Operacionais e Suporte ao Usuário",
      "Redes de Computadores e Roteamento Básico",
      "Lógica de Programação e Scripting",
      "Segurança Básica de Sistemas"
    ]
  },
  {
    id: 8,
    nome: "Técnico em Enfermagem",
    categoria: "Técnico",
    modalidade: "Presencial",
    duracao: "2 anos",
    imagem: "img/curso-enfermagem.jpg",
    destaque: false,
    descricao: "Capacitação prática em procedimentos de enfermagem, apoio clínico e assistência humanizada a pacientes.",
    sobreCompleto: "O curso forma técnicos aptos a atuar em hospitais, clínicas, prontos-socorros e unidades básicas de saúde, integrando equipes multiprofissionais com responsabilidade e destreza técnica.",
    matriz: [
      "Fundamentos de Enfermagem e Biossegurança",
      "Administração de Medicamentos",
      "Assistência ao Paciente Crítico",
      "Enfermagem Cirúrgica e Central de Materiais",
      "Estágio Prático em Unidade Hospitalar"
    ]
  },
  {
    id: 9,
    nome: "Pós em Engenharia de Software",
    categoria: "Pós-graduação",
    modalidade: "EAD",
    duracao: "1 ano",
    imagem: "img/curso-ads.jpg",
    destaque: false,
    descricao: "Especialização avançada em arquitetura de microsserviços, inteligência artificial aplicada, liderança técnica e qualidade de software.",
    sobreCompleto: "Programa de pós-graduação lato sensu para profissionais de TI que buscam ascensão para cargos de arquiteto de software, tech lead ou CTO, com corpo docente composto por especialistas da indústria.",
    matriz: [
      "Arquitetura de Software Distribuída",
      "DevSecOps e Engenharia de Confiabilidade (SRE)",
      "Inteligência Artificial e LLMs no Ciclo de Software",
      "Liderança Técnica e Gestão de Times de Engenharia",
      "Projeto Integrador Prático de Alta Escala"
    ]
  },
  {
    id: 10,
    nome: "Pós em Gestão Estratégica",
    categoria: "Pós-graduação",
    modalidade: "EAD",
    duracao: "1 ano",
    imagem: "img/curso-adm.jpg",
    destaque: false,
    descricao: "Especialização voltada para executivos, focada em transformação digital, liderança orientada a dados e governança corporativa.",
    sobreCompleto: "Projetada para tomadores de decisão, a especialização em Gestão Estratégica fornece frameworks modernos para navegar em ambientes de negócios voláteis e competitivos.",
    matriz: [
      "Planejamento Estratégico Baseado em Dados",
      "Governança Corporativa e ESG",
      "Transformação Digital e Inovação Aberta",
      "Gestão de Mudanças Organizacionais",
      "Finanças Corporativas e M&A"
    ]
  }
];

// 2. Dados dos Professores
const PROFESSORES_DADOS = [
  {
    id: 1,
    nome: "Prof. Carlos Silva",
    cargo: "Coordenador de Tecnologia",
    titulacao: "Mestre em Ciência da Computação",
    imagem: "img/prof-carlos.jpg",
    descricao: "Especialista em Engenharia de Software e Computação em Nuvem, com mais de 15 anos de experiência liderando projetos em empresas de tecnologia.",
    biografia: "O Prof. Carlos Silva lidera o departamento de Tecnologia da Informação do EduConnect. Possui mestrado pela USP e sólida experiência internacional na construção de plataformas escaláveis. Ministra disciplinas de Arquitetura de Software e Desenvolvimento Web.",
    disciplinas: ["Engenharia de Software", "Arquitetura Cloud", "Programação Web Avançada"],
    pesquisa: "Sistemas Distribuídos e Métricas de Qualidade de Código"
  },
  {
    id: 2,
    nome: "Profa. Ana Souza",
    cargo: "Coordenadora de Administração",
    titulacao: "Doutora em Administração",
    imagem: "img/prof-ana.jpg",
    descricao: "Consultora estratégica internacional, pesquisadora na área de liderança inclusiva, sustentabilidade corporativa e finanças.",
    biografia: "Com doutorado pela FGV e passagem por multinacionais do setor financeiro, a Profa. Ana Souza orienta graduandos e pós-graduandos em estratégias de mercado, responsabilidade corporativa (ESG) e modelos de negócios inovadores.",
    disciplinas: ["Gestão Estratégica", "Finanças Corporativas", "Empreendedorismo e Inovação"],
    pesquisa: "Governança Corporativa e Tomada de Decisão em Mercados Emergentes"
  },
  {
    id: 3,
    nome: "Prof. Marcos Oliveira",
    cargo: "Coordenador de Direito",
    titulacao: "Mestre em Direito Constitucional",
    imagem: "img/prof-marcos.jpg",
    descricao: "Advogado atuante há mais de duas décadas, ex-conselheiro da OAB e autor de livros jurídicos sobre direitos fundamentais e regulação digital.",
    biografia: "Mestre em Direito pela PUC, o Prof. Marcos é referência em Direito Público e Novas Tecnologias. Responsável pelo Núcleo de Prática Jurídica da instituição, estimula o debate ético e a capacitação prática dos alunos.",
    disciplinas: ["Direito Constitucional", "Direito Digital e LGPD", "Prática Jurídica"],
    pesquisa: "Inteligência Artificial aplicada ao Judiciário e Proteção de Dados Pessoais"
  },
  {
    id: 4,
    nome: "Profa. Juliana Costa",
    cargo: "Coordenadora de Enfermagem",
    titulacao: "Mestre em Saúde Coletiva",
    imagem: "img/prof-juliana.jpg",
    descricao: "Enfermeira com vivência em terapia intensiva hospitalar e dedicação ao ensino da humanização e segurança do paciente.",
    biografia: "Graduada e mestre pela UNIFESP, a Profa. Juliana tem ampla bagagem assistencial e acadêmica. Coordena os laboratórios de simulação realística de enfermagem e projetos de extensão comunitária de saúde pública.",
    disciplinas: ["Semiologia em Enfermagem", "Assistência em Cuidados Críticos", "Saúde Pública"],
    pesquisa: "Protocolos de Humanização em Unidades de Terapia Intensiva"
  },
  {
    id: 5,
    nome: "Prof. Felipe Santos",
    cargo: "Coordenador de Engenharia Civil",
    titulacao: "Doutor em Estruturas e Construção",
    imagem: "img/prof-felipe.jpg",
    descricao: "Engenheiro calculista com vasta experiência em grandes obras de infraestrutura, pontes e edifícios inteligentes.",
    biografia: "O Prof. Felipe concluiu seu doutorado pela UNICAMP com foco em materiais sustentáveis e durabilidade de estruturas. Integra comitês da ABNT e fomenta o uso de ferramentas BIM em todas as etapas da formação do engenheiro.",
    disciplinas: ["Resistência dos Materiais", "Estruturas de Concreto Armado", "Gestão de Obras BIM"],
    pesquisa: "Concretos com Baixa Emissão de Carbono e Modelagem Paramétrica"
  },
  {
    id: 6,
    nome: "Profa. Renata Lima",
    cargo: "Coordenadora de Pedagogia",
    titulacao: "Mestre em Educação",
    imagem: "img/prof-renata.jpg",
    descricao: "Pesquisadora dedicada a métodos inovadores de alfabetização, formação de professores e aplicação de tecnologias lúdicas no ensino.",
    biografia: "Com mais de 18 anos dedicados à educação básica e superior, a Profa. Renata atua na formação contínua de professores e no desenvolvimento de materiais didáticos inclusivos para crianças com necessidades educacionais especiais.",
    disciplinas: ["Didática Geral", "Alfabetização e Linguagem", "Tecnologias Educacionais Inclusivas"],
    pesquisa: "Gamificação e Tecnologias Assistivas nos Primeiros Anos Escolares"
  }
];

// 3. Dados dos Eventos e Notícias
const EVENTOS_DADOS = [
  {
    id: 1,
    tipo: "Evento",
    titulo: "Semana Acadêmica 2026",
    dataDia: "15",
    dataMes: "Out",
    dataCompleta: "15 a 19 de outubro de 2026",
    horario: "08h30 às 21h30",
    local: "Auditório Central e Salas Temáticas - Campus Principal",
    imagem: "img/evento-semana-academica.jpg",
    descricao: "Evento destinado aos alunos da instituição com palestras multidisciplinares, workshops práticos e rodas de conversa com especialistas.",
    detalhes: "A Semana Acadêmica Integrada do EduConnect é o ponto alto do calendário universitário. O evento reúne estudantes e professores de todos os cursos para debater tendências, apresentar artigos científicos e participar de oficinas de capacitação técnica.",
    programacao: [
      "08:30 — Credenciamento e Abertura com a Reitoria",
      "10:00 — Painel: Desafios Contemporâneos da Educação e Mercado",
      "14:00 — Workshops Práticos nos Laboratórios Especializados",
      "19:30 — Palestras Noturnas com Líderes de Mercado"
    ]
  },
  {
    id: 2,
    tipo: "Evento",
    titulo: "Feira de Profissões e Carreiras",
    dataDia: "25",
    dataMes: "Out",
    dataCompleta: "25 de outubro de 2026",
    horario: "09h00 às 17h00",
    local: "Pátio Universitário e Ginásio Poliesportivo",
    imagem: "img/evento-feira-profissoes.jpg",
    descricao: "Conheça diferentes áreas de atuação profissional, tire dúvidas com coordenadores e participe de testes vocacionais gratuitos.",
    detalhes: "A Feira de Profissões é aberta a toda a comunidade, estudantes do ensino médio e vestibulandos. Os participantes contam com estandes de cada graduação, oficinas com simulação de júri, laboratórios de programação e atendimentos de saúde.",
    programacao: [
      "09:00 — Abertura dos estandes de cursos e empresas parceiras",
      "11:00 — Testes vocacionais guiados por psicólogos",
      "14:30 — Rodada de perguntas e respostas com profissionais de destaque",
      "16:30 — Sorteio de bolsas de estudo e certificados de participação"
    ]
  },
  {
    id: 3,
    tipo: "Notícia",
    titulo: "Palestra Magna: O Futuro da Tecnologia",
    dataDia: "10",
    dataMes: "Nov",
    dataCompleta: "10 de novembro de 2026",
    horario: "19h00 às 21h30",
    local: "Auditório Master e Transmissão Online via Canal EduConnect",
    imagem: "img/evento-palestra-tech.jpg",
    descricao: "Palestra com especialistas em inovação, inteligência artificial e o impacto das tecnologias emergentes nas carreiras.",
    detalhes: "Com a participação de convidados especiais do setor de tecnologia da América Latina, esta palestra analisará as transformações que a inteligência artificial generativa e a automação trarão para todas as profissões nos próximos cinco anos.",
    programacao: [
      "19:00 — Recepção e Coffee Break de Networking",
      "19:30 — Apresentação dos Palestrantes Convidados",
      "20:45 — Sessão de Perguntas e Respostas da Plateia",
      "21:30 — Encerramento e Entrega de Certificados"
    ]
  },
  {
    id: 4,
    tipo: "Evento",
    titulo: "Mostra Cultural e Científica",
    dataDia: "20",
    dataMes: "Nov",
    dataCompleta: "20 de novembro de 2026",
    horario: "10h00 às 19h00",
    local: "Centro de Convivência e Áreas Verdes do Campus",
    imagem: "img/evento-mostra-cultural.jpg",
    descricao: "Apresentações artísticas, exposições de protótipos acadêmicos, música ao vivo e feira de projetos sociais.",
    detalhes: "Espaço dedicado a celebrar a criatividade, a diversidade e a produção artística e científica de nossos discentes. Haverá exposições fotográficas, apresentações musicais e exibição de maquetes e protótipos de robótica.",
    programacao: [
      "10:00 — Abertura da Exposição de Artes Visuais e Fotografia",
      "12:00 — Apresentações Musicais da Banda Universitária",
      "15:00 — Exibição dos Projetos de Iniciação Científica e Robótica",
      "18:30 — Premiação dos Melhores Trabalhos da Mostra"
    ]
  }
];
