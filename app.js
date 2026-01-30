const express = require("express");
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  const now = new Date().toLocaleTimeString("pt-BR", {
    timeZone: "America/Sao_Paulo",
  });
  res.send(`Hello, World! Hora atual: ${now}`);
});

app.listen(PORT, () => {
  console.log(`Aplicação rodando em http://localhost:${PORT}`);
});
