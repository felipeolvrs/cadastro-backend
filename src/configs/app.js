const app = require("./server");
const { PORT } = process.env;
app.listen(PORT, () => {
  console.log(`Servidor aberto na porta ${PORT}`);
});
