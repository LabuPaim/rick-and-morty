const rick_and_morty__SERVICE = require('../services/rick_and_morty.service');
const mongoose = require('mongoose');

const find__rick_and_morty__controller__ALL = async (req, res) => {
  const rick_and_morty__TODAS = await rick_and_morty__SERVICE.find__rick_and_morty__service__ALL();
  if (rick_and_morty__TODAS.length === 0) {
    return res.status(404).send({ message: 'Não existe nenhuma personagem cadastrada' });
  }
  res.send(rick_and_morty__TODAS);
};

const find__rick_and_morty__controller__BY_ID = async (req, res) => {
  const param__ID = req.params.id;
  const escolha__rick_and_morty = await rick_and_morty__SERVICE.find__rick_and_morty__service__BY_ID(param__ID);
  if (!escolha__rick_and_morty) {
    return res.status(404).send({ message: 'Personagem não encontrado' });
  }
  res.send(escolha__rick_and_morty);
};

const create__rick_and_morty__CONTROLLER = async (req, res) => {
  const rick_and_morty = req.body;
  const rick_and_morty__NOVA = await rick_and_morty__SERVICE.create__rick_and_morty__SERVICE(rick_and_morty);
  res.status(201).send(rick_and_morty__NOVA);
};

const update__rick_and_morty__CONTROLLER = async (req, res) => {
  const param__ID = req.params.id;
  const rick_and_morty__EDITADA = req.body;
  const rick_and_morty__UPDATE = await rick_and_morty__SERVICE.update__rick_and_morty__SERVICE(param__ID, rick_and_morty__EDITADA);
  res.send(rick_and_morty__UPDATE);
};

const delete__rick_and_morty__CONTROLLER = async (req, res) => {
  const param__ID = req.params.id;
  await rick_and_morty__SERVICE.delete__rick_and_morty__SERVICE(param__ID);
  res.send({ message: 'Personagem deletado com sucesso!' });
};

module.exports = {
  find__rick_and_morty__controller__ALL,
  find__rick_and_morty__controller__BY_ID,
  create__rick_and_morty__CONTROLLER,
  update__rick_and_morty__CONTROLLER,
  delete__rick_and_morty__CONTROLLER,
};
