const course = require("../models/courseModel");

exports.getCourses = async (req, res) => {
  try {
    const cursos = await course.findAll();
    return res.json(cursos);
  } catch (error) {
    console.error(`Erro ao listar os cursos: ${error}`);
    return res.status(500).json({ message: "Erro ao listar os cursos" });
  }
};

exports.postCourse = async (req, res) => {
  try {
    const { nome, descricao } = req.body;

    if (!nome || !descricao) {
      return res
        .status(400)
        .json({ message: "Campos obrigatórios não preenchidos!" });
    }

    const novoCurso = await Course.create({
      nome,
      descricao,
    });

    return res.status(201).json(novoCurso);
  } catch (error) {
    console.error(`Erro ao adicionar o curso: ${error}`);
    return res.status(500).json({ message: "Erro ao adicionar o curso" });
  }
};

exports.putCourse = async (req, res) => {
  try {
    const { id } = req.params;
    const { nome, descricao } = req.body;

    const novoCurso = await Course.findByPk(id);

    if (!novoCurso) {
      return res.status(404).json({ message: "Curso não encontrado" });
    }

    curso.nome = nome || nome;
    curso.descricao || descricao;
    curso.save();

    return res.status(200).json(curso);
  } catch (error) {
    console.error(`Erro ao atualizar o curso: ${error}`);
    return res.status(500).json({ message: "Erro ao atualizar o curso" });
  }
};

exports.deleteCourse = async (req, res) => {
  try {
    const { id } = req.params;

    const curso = await Course.findByPk(id);
    if (!curso) {
      return res.status(404).json({ message: "Curso não encontrado" });
    }

    await curso.destroy();
    return res.status(204).send();
  } catch (error) {
    console.error(`Erro ao deletar o curso: ${error}`);
    return res.status(500).json({ message: "Erro ao deletar o curso" });
  }
};
