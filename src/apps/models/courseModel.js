const Sequelize = require("sequelize");
const database = require("../../configs/db");

const Course = database.define("curso", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  nome: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  descricao: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});


/*
Course.sync()
  .then(() => console.log("Modelo de curso sincronizado com sucesso!"))
  .catch((error) =>
    console.error("Erro ao sincronizar o modelo de curso:", error)
  );
*/

module.exports = Course;
