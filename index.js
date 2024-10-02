const express = require("express");
const app = express();

//CRIAÇÃO DA PORTA
const PORT = 3331;

// CRIAÇÃO DA PORTA HOMEPAGE
app.get("/", (req, res) => {
  res.send("Olá, página inicial!");
});
//ESCUTANDO UMA PORTA DO SERVIDOR
app.listen(PORT, function () {
  console.log("ESCUTANDO A PORTA " + PORT);
});
