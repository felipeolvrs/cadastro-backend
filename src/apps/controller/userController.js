const User = require("../models/userModel");

exports.getUser = async (req, res) => {
  try {
    const users = await User.findAll();
    return res.json(users);
  } catch (error) {
    console.error(`Erro ao listar os usuários: ${error}`);
    res.status(500).json({ message: "Erro ao listar os usuários" });
  }
};

exports.postUser = async (req, res) => {
  try {
    const { nome, idade, dataNascimento } = req.body;

    if (!nome || !idade || !dataNascimento) {
      return res.status(400).json({ message: "Campos obrigatórios não preenchidos!" });
    }

    const newUser = await User.create({
      nome,
      idade,
      dataNascimento,
    });

    return res.status(201).json(newUser);
  } catch (error) {
    console.error(`Erro ao criar o usuário: ${error}`);
    return res.status(500).json({ message: "Erro ao criar o usuário" });
  }
};

exports.putUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { nome, idade, dataNascimento } = req.body;

    const user = await User.findByPk(id);

    if (!user) {
      return res.status(404).json({ message: "Usuário não encontrado" });
    }

    user.nome = nome || user.nome;
    user.idade = idade || user.idade;
    user.dataNascimento = dataNascimento || user.dataNascimento;

    await user.save();
    return res.status(200).json(user);
  } catch (error) {
    console.error(`Erro ao atualizar os dados do usuário: ${error}`);
    return res.status(500).json({ message: "Erro ao atualizar os dados do usuário" });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const { id } = req.params;

    const user = await User.findByPk(id);

    if (!user) {
      return res.status(404).json({ message: "Usuário não encontrado" });
    }

    await user.destroy();
    return res.status(204).send();
  } catch (error) {
    console.error(`Erro ao deletar o usuário: ${error}`);
    return res.status(500).json({ message: "Erro ao deletar o usuário" });
  }
};
