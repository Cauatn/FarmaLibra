const listaDeVideos = [
  // Cliente
  {
    videoId: "4oV6FgY1lWI",
    userType: "cliente",
    categoria: "c1",
    texto: "Bom dia.",
  },
  {
    videoId: "PAwcfiCInIM",
    userType: "cliente",
    categoria: "c1",
    texto: "Boa tarde.",
  },
  {
    videoId: "xSlB7hv0pjg",
    userType: "cliente",
    categoria: "c1",
    texto: "Boa noite.",
  },
  {
    videoId: "uPcQN3C5BoQ",
    userType: "cliente",
    categoria: "c1",
    texto: "Você pode me ajudar?",
  },
  {
    videoId: "oN6d18fAhrw",
    userType: "cliente",
    categoria: "c1",
    texto:
      "O médico me passou esses medicamentos. Quero comprar e entender como devo usar; você pode me ajudar?",
  },
  {
    videoId: "ia2cgzT7aHk",
    userType: "cliente",
    categoria: "c1",
    texto: "Venho sentindo dor há vários dias.",
  },
  {
    videoId: "wg18knln1P4",
    userType: "cliente",
    categoria: "c1",
    texto: "Eu quero o medicamento mais barato.",
  },
  // Cliente C2
  {
    videoId: "MEw53FHdulU",
    userType: "cliente",
    categoria: "c2",
    texto: "Por que precisa da prescrição?",
  },
  {
    videoId: "acvpYOysNH4",
    userType: "cliente",
    categoria: "c2",
    texto: "Como assim, receita vencida?",
  },
  {
    videoId: "cG3UGLZWJzg",
    userType: "cliente",
    categoria: "c2",
    texto: "Vou precisar retornar ao médico para pegar uma receita nova?",
  },
  {
    videoId: "0idoMGeQChQ",
    userType: "cliente",
    categoria: "c2",
    texto: "Precisa de receita para comprar esse medicamento?",
  },
  // Categoria C3
  {
    videoId: "1Q5QFKUt5NQ",
    userType: "cliente",
    categoria: "c3",
    texto: "Para que serve esse medicamento?",
  },
  // Categoria C4
  {
    videoId: "np2DRnlYjas",
    userType: "cliente",
    categoria: "c4",
    texto: "Como devo tomar esse medicamento?",
  },
  {
    videoId: "3AbKIFH7eAg",
    userType: "cliente",
    categoria: "c4",
    texto: "Posso partir esse medicamento?",
  },
  {
    videoId: "xKZO_9Z6OwE",
    userType: "cliente",
    categoria: "c4",
    texto: "Como posso adquirir um partidor de comprimido?",
  },
  {
    videoId: "5GgadOjiXA0",
    userType: "cliente",
    categoria: "c4",
    texto: "Com que líquido devo tomar esse medicamento?",
  },
  {
    videoId: "yk_Dh9A9h_4",
    userType: "cliente",
    categoria: "c4",
    texto: "Essa injeção é aplicada só em hospital?",
  },
  {
    videoId: "YiOa9fFMspk",
    userType: "cliente",
    categoria: "c4",
    texto: "Eu quero duas caixas, por favor.",
  },
  // Cliente C5
  {
    videoId: "DcryiyNdJKs",
    userType: "cliente",
    categoria: "c5",
    texto: "Posso tomar bebida alcoólica durante o tratamento?",
  },
  {
    videoId: "8OVvuZdosng",
    userType: "cliente",
    categoria: "c5",
    texto: "Estou grávida; Posso usar esse medicamento?",
  },
  {
    videoId: "PsqMawWQdZE",
    userType: "cliente",
    categoria: "c5",
    texto: "Estou amamentando; Posso usar esse medicamento?",
  },
  {
    videoId: "Hnj-df-gS2w",
    userType: "cliente",
    categoria: "c5",
    texto: "Em caso de esquecimento, o que devo fazer?",
  },
  {
    videoId: "wh3jiI_0Y00",
    userType: "cliente",
    categoria: "c5",
    texto: "Esse medicamento causa sonolência?",
  },
  {
    videoId: "cTQ5aoeVopI",
    userType: "cliente",
    categoria: "c5",
    texto: "Posso usar medicamentos vencidos?",
  },
  // Cliente C6
  {
    videoId: "f03_CyUGoDI",
    userType: "cliente",
    categoria: "c6",
    texto: "Posso levar o medicamento na bolsa?",
  },
  {
    videoId: "iWn3t7FZxeA",
    userType: "cliente",
    categoria: "c6",
    texto: "Onde devo guardar o medicamento em casa?",
  },
  {
    videoId: "CgCgkQYghUg",
    userType: "cliente",
    categoria: "c6",
    texto: "Muito obrigado por sua atenção.",
  },
  {
    videoId: "Cal2j5MEX3g",
    userType: "cliente",
    categoria: "c6",
    texto: "Como descartar medicamento vencido ou estragado?",
  },
  {
    videoId: "jS9e-e3Xp-A",
    userType: "cliente",
    categoria: "c6",
    texto: "Se eu tiver mais alguma dúvida, posso voltar aqui?",
  },
  {
    videoId: "1MuChMVxNOU",
    userType: "cliente",
    categoria: "c6",
    texto: "Posso deixar meu medicamento guardado no carro?",
  },
  // Farmacêutico
  {
    videoId: "muqmZnplFHE",
    userType: "farmaceutico",
    categoria: "c1",
    texto: "Bom dia.",
  },
  {
    videoId: "jufvd-U_bFI",
    userType: "farmaceutico",
    categoria: "c1",
    texto: "Boa tarde.",
  },
  {
    videoId: "ohG57B4Xco4",
    userType: "farmaceutico",
    categoria: "c1",
    texto: "Boa noite.",
  },
  {
    videoId: "JINsS1XCWbU",
    userType: "farmaceutico",
    categoria: "c1",
    texto: "Você conhece o FarmaLibras? Quer que eu o apresente?",
  },
  {
    videoId: "M16Z-laRKUE",
    userType: "farmaceutico",
    categoria: "c1",
    texto: "Eu sou o farmacêutico, não sei Libras, mas quero ajudar você.",
  },
  {
    videoId: "BrJx0Yd8gbo",
    userType: "farmaceutico",
    categoria: "c1",
    texto: "Você está sentindo dor ou outra queixa de problema de saúde?",
  },
  {
    videoId: "5b8JAgZuKHk",
    userType: "farmaceutico",
    categoria: "c1",
    texto: "Você tem preferência por marca ou pode ser o mais barato?",
  },
];

export default listaDeVideos;
