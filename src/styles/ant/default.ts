export const antDefaultTheme = {
  token: {
    // Cores principais
    colorPrimary: "#CC6237",
    colorSuccess: "#66BB6A",
    colorWarning: "#FFA726",
    colorError: "#EF5350",
    colorInfo: "#fc7e24",

    // Texto e fundo
    colorTextBase: "#1E1E1E",
    colorBorder: "#E5E5E5",

    // Fonte
    fontFamily: "'Robot', sans-serif",
    fontSize: 14,

    // Botões
    controlHeight: 40,
    borderRadius: 6,

    // Wireframe desativado para cores completas
    wireframe: false,
  },
  components: {
    Menu: {
      // Cor do item selecionado
      itemSelectedBg: "#CC6237", // Fundo laranja claro
      itemSelectedColor: "#FFF7F0", // Texto laranja escuro

      // Cor ao passar o mouse
      itemHoverBg: "#FFEBD8",
      itemHoverColor: "#CC6237",

      // Cor do ícone quando selecionado
      itemSelectedIconColor: "#CC6237",

      // Estilo do grupo (se houver)
      groupTitleColor: "#666",

      // Ativo (quando pressionado)
      itemActiveBg: "#FFEBD8",
    },
    Table: {
      headerColor: "#cc623780", // cor do texto do cabeçalho
      headerBg: "#fff", // fundo do cabeçalho
      headerSplitColor: "#f4dfd5", // cor da borda inferior do cabeçalho
      rowHoverBg: "#fff6f2", // hover sutil
      borderColor: "#f4dfd5", // borda da tabela
      rowSelectedBg: "#fff1e6",
    },
  },
  hashed: false,
};
