interface Category {
  texto: string;
  category: string;
  videoId: string;
}

export const categories: Category[] = [
  {
    texto: "SAUDAÇÕES / ACOLHIMENTO",
    category: "c1",
    videoId: "cG3UGLZWJzg",
  },
  {
    texto: "PRESCRIÇÕES E DOCUMENTOS",
    category: "c2",
    videoId: "1MuChMVxNOU",
  },
  {
    texto: "PARA QUE SERVE ESSE MEDICAMENTO?",
    category: "c3",
    videoId: "MEw53FHdulU",
  },
  {
    texto: "COMO USAR O MEDICAMENTO",
    category: "c4",
    videoId: "oN6d18fAhrw",
  },
  {
    texto: "ALERTAS",
    category: "c5",
    videoId: "someVideoIdForAlertas",
  },
  // Add more categories as needed
];
