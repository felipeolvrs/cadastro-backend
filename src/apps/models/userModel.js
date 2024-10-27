const Sequelize = require("sequelize");
const database = require("../../configs/db");

const User = database.define("usuario", {
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
  idade: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  dataNascimento: {
    type: Sequelize.DATE,
    allowNull: false,
  },
});

/*
User.sync()
  .then(() => console.log("Modelo de usuário sincronizado com sucesso!"))
  .catch((error) =>
    console.error("Erro ao sincronizar o modelo de usuário:", error)
  );
*/

module.exports = User;
