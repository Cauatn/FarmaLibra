const listaDeVideos = [
  // Cliente
  {
    videoId: "4oV6FgY1lWI",
    userType: "Cliente",
    categoria: "c1",
    texto: "Bom dia.",
  },
  {
    videoId: "PAwcfiCInIM",
    userType: "Cliente",
    categoria: "c1",
    texto: "Boa tarde.",
  },
  {
    videoId: "xSlB7hv0pjg",
    userType: "Cliente",
    categoria: "c1",
    texto: "Boa noite.",
  },
  {
    videoId: "uPcQN3C5BoQ",
    userType: "Cliente",
    categoria: "c1",
    texto: "Você pode me ajudar?",
  },
  {
    videoId: "oN6d18fAhrw",
    userType: "Cliente",
    categoria: "c1",
    texto:
      "O médico me passou esses medicamentos. Quero comprar e entender como devo usar; você pode me ajudar?",
  },
  {
    videoId: "ia2cgzT7aHk",
    userType: "Cliente",
    categoria: "c1",
    texto: "Venho sentindo dor há vários dias.",
  },
  {
    videoId: "wg18knln1P4",
    userType: "Cliente",
    categoria: "c1",
    texto: "Eu quero o medicamento mais barato.",
  },
  // Cliente C2
  {
    videoId: "MEw53FHdulU",
    userType: "Cliente",
    categoria: "c2",
    texto: "Por que precisa da prescrição?",
  },
  {
    videoId: "acvpYOysNH4",
    userType: "Cliente",
    categoria: "c2",
    texto: "Como assim, receita vencida?",
  },
  {
    videoId: "cG3UGLZWJzg",
    userType: "Cliente",
    categoria: "c2",
    texto: "Vou precisar retornar ao médico para pegar uma receita nova?",
  },
  {
    videoId: "0idoMGeQChQ",
    userType: "Cliente",
    categoria: "c2",
    texto: "Precisa de receita para comprar esse medicamento?",
  },
  // Categoria C3
  {
    videoId: "1Q5QFKUt5NQ",
    userType: "Cliente",
    categoria: "c3",
    texto: "Para que serve esse medicamento?",
  },
  // Categoria C4
  {
    videoId: "np2DRnlYjas",
    userType: "Cliente",
    categoria: "c4",
    texto: "Como devo tomar esse medicamento?",
  },
  {
    videoId: "3AbKIFH7eAg",
    userType: "Cliente",
    categoria: "c4",
    texto: "Posso partir esse medicamento?",
  },
  {
    videoId: "xKZO_9Z6OwE",
    userType: "Cliente",
    categoria: "c4",
    texto: "Como posso adquirir um partidor de comprimido?",
  },
  {
    videoId: "5GgadOjiXA0",
    userType: "Cliente",
    categoria: "c4",
    texto: "Com que líquido devo tomar esse medicamento?",
  },
  {
    videoId: "yk_Dh9A9h_4",
    userType: "Cliente",
    categoria: "c4",
    texto: "Essa injeção é aplicada só em hospital?",
  },
  {
    videoId: "YiOa9fFMspk",
    userType: "Cliente",
    categoria: "c4",
    texto: "Eu quero duas caixas, por favor.",
  },
  // Cliente C5
  {
    videoId: "DcryiyNdJKs",
    userType: "Cliente",
    categoria: "c5",
    texto: "Posso tomar bebida alcoólica durante o tratamento?",
  },
  {
    videoId: "8OVvuZdosng",
    userType: "Cliente",
    categoria: "c5",
    texto: "Estou grávida; Posso usar esse medicamento?",
  },
  {
    videoId: "PsqMawWQdZE",
    userType: "Cliente",
    categoria: "c5",
    texto: "Estou amamentando; Posso usar esse medicamento?",
  },
  {
    videoId: "Hnj-df-gS2w",
    userType: "Cliente",
    categoria: "c5",
    texto: "Em caso de esquecimento, o que devo fazer?",
  },
  {
    videoId: "wh3jiI_0Y00",
    userType: "Cliente",
    categoria: "c5",
    texto: "Esse medicamento causa sonolência?",
  },
  {
    videoId: "cTQ5aoeVopI",
    userType: "Cliente",
    categoria: "c5",
    texto: "Posso usar medicamentos vencidos?",
  },
  // Cliente C6
  {
    videoId: "f03_CyUGoDI",
    userType: "Cliente",
    categoria: "c6",
    texto: "Posso levar o medicamento na bolsa?",
  },
  {
    videoId: "iWn3t7FZxeA",
    userType: "Cliente",
    categoria: "c6",
    texto: "Onde devo guardar o medicamento em casa?",
  },
  {
    videoId: "CgCgkQYghUg",
    userType: "Cliente",
    categoria: "c6",
    texto: "Muito obrigado por sua atenção.",
  },
  {
    videoId: "Cal2j5MEX3g",
    userType: "Cliente",
    categoria: "c6",
    texto: "Como descartar medicamento vencido ou estragado?",
  },
  {
    videoId: "jS9e-e3Xp-A",
    userType: "Cliente",
    categoria: "c6",
    texto: "Se eu tiver mais alguma dúvida, posso voltar aqui?",
  },
  {
    videoId: "1MuChMVxNOU",
    userType: "Cliente",
    categoria: "c6",
    texto: "Posso deixar meu medicamento guardado no carro?",
  },
  // Farmacêutico
  {
    videoId: "muqmZnplFHE",
    userType: "Farmaceutico",
    categoria: "c1",
    texto: "Bom dia.",
  },
  {
    videoId: "jufvd-U_bFI",
    userType: "Farmaceutico",
    categoria: "c1",
    texto: "Boa tarde.",
  },
  {
    videoId: "ohG57B4Xco4",
    userType: "Farmaceutico",
    categoria: "c1",
    texto: "Boa noite.",
  },
  {
    videoId: "JINsS1XCWbU",
    userType: "Farmaceutico",
    categoria: "c1",
    texto: "Você conhece o FarmaLibras? Quer que eu o apresente?",
  },
  {
    videoId: "M16Z-laRKUE",
    userType: "Farmaceutico",
    categoria: "c1",
    texto: "Eu sou o farmacêutico, não sei Libras, mas quero ajudar você.",
  },
  {
    videoId: "BrJx0Yd8gbo",
    userType: "Farmaceutico",
    categoria: "c1",
    texto: "Você está sentindo dor ou outra queixa de problema de saúde?",
  },
  {
    videoId: "5b8JAgZuKHk",
    userType: "Farmaceutico",
    categoria: "c1",
    texto: "Você tem preferência por marca ou pode ser o mais barato?",
  },
  {
    videoId: "J7_vsBvZRa4",
    userType: "Farmaceutico",
    categoria: "c2",
    texto: "Não vendemos esse medicamento sem receita.",
  },
  {
    videoId: "NHVQZs9YuoI",
    userType: "Farmaceutico",
    categoria: "c2",
    texto: "Por favor, preciso da sua identidade.",
  },
  {
    videoId: "9o8GarAXiTs",
    userType: "Farmaceutico",
    categoria: "c2",
    texto: "Qual a sua idade?",
  },
  {
    videoId: "Q3i2v42xSYc",
    userType: "Farmaceutico",
    categoria: "c2",
    texto: "Qual o seu endereço?",
  },
  {
    videoId: "pQazFcEFKMU",
    userType: "Farmaceutico",
    categoria: "c2",
    texto: "Qual o seu CPF?",
  },
  {
    videoId: "kTLF0ZeIS-E",
    userType: "Farmaceutico",
    categoria: "c2",
    texto: "Qual o seu telefone para contato?",
  },

  // Farmacêutico C3
  {
    videoId: "h3ZDrDHNxHU",
    userType: "Farmaceutico",
    categoria: "c3",
    texto: "Para tratar diabetes.",
  },
  {
    videoId: "xeDzNoYr2ww",
    userType: "Farmaceutico",
    categoria: "c3",
    texto: "Para tratar pressão alta.",
  },
  {
    videoId: "kl36P5tASro",
    userType: "Farmaceutico",
    categoria: "c3",
    texto: "Para tratar inflamações.",
  },
  {
    videoId: "BMkSZsJWIfo",
    userType: "Farmaceutico",
    categoria: "c3",
    texto: "Para tratar dor ou febre.",
  },
  {
    videoId: "z8TNlTbDIeE",
    userType: "Farmaceutico",
    categoria: "c3",
    texto: "Para tratar enxaqueca",
  },
  {
    videoId: "gnD1PJUGuBs",
    userType: "Farmaceutico",
    categoria: "c3",
    texto: "Para tratar enjoo.",
  },

  // Farmacêutico C4
  {
    videoId: "1mXd7sVxQ",
    userType: "Farmaceutico",
    categoria: "c4",
    texto: "Esse medicamento deve ser engolido inteiro, com um copo de água.",
  },
  {
    videoId: "4a8iPXtjuvA",
    userType: "Farmaceutico",
    categoria: "c4",
    texto: "Temos o partidor; vou te mostrar",
  },
  {
    videoId: "k6DN13vrE",
    userType: "Farmaceutico",
    categoria: "c4",
    texto: "Esse medicamento é para ser mastigado. Não deve engolir inteiro",
  },
  {
    videoId: "u7fX6u3DRa8",
    userType: "Farmaceutico",
    categoria: "c4",
    texto:
      "Esse medicamento deve ser tomado três vezes ao dia, de 8 em 8 horas...",
  },
  {
    videoId: "c3_pe42JD0U",
    userType: "Farmaceutico",
    categoria: "c4",
    texto: "Esse medicamento deve ser usado apenas se tiver dor ou febre...",
  },
  {
    videoId: "R9807x6BPN4",
    userType: "Farmaceutico",
    categoria: "c4",
    texto: "Esse medicamento é para ser usado apenas por um dia.",
  },

  // Farmacêutico C5
  {
    videoId: "ai2FTa5HMaw",
    userType: "Farmaceutico",
    categoria: "c5",
    texto:
      "Esse medicamento não pode ser utilizado por criança com menos de 2 anos.",
  },
  {
    videoId: "eYnhDtPTcTA",
    userType: "Farmaceutico",
    categoria: "c5",
    texto:
      "Esse medicamento não pode ser usado por mulher que está amamentando.",
  },
  {
    videoId: "XzwtETlFgqE",
    userType: "Farmaceutico",
    categoria: "c5",
    texto: "Esses medicamentos não podem ser tomados juntos.",
  },
  {
    videoId: "wzw-p9s_HbQ",
    userType: "Farmaceutico",
    categoria: "c5",
    texto:
      "Esse medicamento não pode ser utilizado em caso de suspeita de dengue.",
  },
  {
    videoId: "_PeE60PcpTA",
    userType: "Farmaceutico",
    categoria: "c5",
    texto: "Guarde esse medicamento na geladeira depois de aberto.",
  },
  {
    videoId: "hyIPE5z7-kw",
    userType: "Farmaceutico",
    categoria: "c5",
    texto: "Armazene em lugar fresco e seco.",
  },

  // Farmacêutico C6
  {
    videoId: "7z8pQhKBJkE",
    userType: "Farmaceutico",
    categoria: "c6",
    texto:
      "Se o medicamento não estiver fazendo efeito, consulte o seu médico.",
  },
  {
    videoId: "Xb8nHL1rdfk",
    userType: "Farmaceutico",
    categoria: "c6",
    texto: "Mantenha sua carteira de vacinação em dia.",
  },
  {
    videoId: "5sPDd5vM_q8",
    userType: "Farmaceutico",
    categoria: "c6",
    texto: "Faça repouso e beba bastante água",
  },
  {
    videoId: "xBMa-HrWJo0",
    userType: "Farmaceutico",
    categoria: "c6",
    texto:
      "Retorne ao seu médico para que ele possa ajustar a dose do seu medicamento.",
  },
  {
    videoId: "AEfaUq7Jmdw",
    userType: "Farmaceutico",
    categoria: "c6",
    texto: "Se surgir qualquer dúvida sobre medicamentos, pode me procurar...",
  },
  {
    videoId: "xzTnjgV1IRs",
    userType: "Farmaceutico",
    categoria: "c6",
    texto: "Aguardo o seu retorno; Obrigado pela atenção!",
  },
];

export default listaDeVideos;
