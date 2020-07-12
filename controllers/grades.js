import logger from '../config/logger.js';
import gradesService from '../services/grades.js';

const create = async (req, res) => {
  try {
    const grade = { ...req.body, ...req.params, ...req.query };
    created = await gradesService.create(grade);
    res.send(created);
    logger.info(`POST /grades - ${JSON.stringify()}`);
  } catch (error) {
    res
      .status(500)
      .send({ message: error.message || 'Algum erro ocorreu ao salvar' });
    logger.error(`POST /grades - ${JSON.stringify(error.message)}`);
  }
};

const findAll = async (req, res) => {
  try {
    const grade = { ...req.body, ...req.params, ...req.query };
    const found = await gradesService.find(grade);
    res.send(found);
    logger.info(`GET /grades`);
  } catch (error) {
    res
      .status(500)
      .send({ message: error.message || 'Erro ao listar todos os documentos' });
    logger.error(`GET /grades - ${JSON.stringify(error.message)}`);
  }
};

const findOne = async (req, res) => {
  try {
    const grade = { ...req.body, ...req.params, ...req.query };
    const found = await gradesService.findOne(grade);
    res.send(found);
    logger.info(`GET /grades - ${id}`);
  } catch (error) {
    res.status(500).send({ message: 'Erro ao buscar o Grade id: ' + id });
    logger.error(`GET /grades - ${JSON.stringify(error.message)}`);
  }
};

const update = async (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: 'Dados para atualizacao vazio',
    });
  }
  try {
    const grade = { ...req.body, ...req.params, ...req.query };
    await gradesService.update(grade);
    res.send({ message: 'Grade atualizado com sucesso' });
    logger.info(`PUT /grades - ${id} - ${JSON.stringify(req.body)}`);
  } catch (error) {
    res.status(500).send({ message: 'Erro ao atualizar a Grade id: ' + id });
    logger.error(`PUT /grades - ${JSON.stringify(error.message)}`);
  }
};

const remove = async (req, res) => {
  try {
    const grade = { ...req.body, ...req.params, ...req.query };
    await gradesService.remove(grade);
    res.send({ message: 'Grade excluido com sucesso' });
    logger.info(`DELETE /grades - ${id}`);
  } catch (error) {
    res
      .status(500)
      .send({ message: 'Nao foi possivel deletar o Grade id: ' + id });
    logger.error(`DELETE /grades - ${JSON.stringify(error.message)}`);
  }
};

const removeAll = async (req, res) => {
  try {
    await gradesService.removeAll();
    res.send({
      message: `Grades excluidos`,
    });
    logger.info(`DELETE /grades`);
  } catch (error) {
    res.status(500).send({ message: 'Erro ao excluir todos as Grades' });
    logger.error(`DELETE /grades - ${JSON.stringify(error.message)}`);
  }
};

export default { create, findAll, findOne, update, remove, removeAll };
