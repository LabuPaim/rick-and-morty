const Rick_and_morty = require('../model/Rick_and_morty');

const find__rick_and_morty__service__ALL = async () => {
  const rick_and_morty = await Rick_and_morty.find();
  return rick_and_morty;
};

const find__rick_and_morty__service__BY_ID = async (id) => {
  const rick_and_morty = await Rick_and_morty.findById(id);
  return rick_and_morty;
};

const create__rick_and_morty__SERVICE = async (rick_and_morty__NEW) => {
  const rick_and_morty__CREATE = await Rick_and_morty.create(rick_and_morty__NEW);
  return rick_and_morty__CREATE;
};

const update__rick_and_morty__SERVICE = async (id, rick_and_morty__EDITED) => {
  const rick_and_morty__UPDATE = await Rick_and_morty.findByIdAndUpdate(id, rick_and_morty__EDITED);
  return rick_and_morty__UPDATE;
};

const delete__rick_and_morty__SERVICE = async (id) => {
  return await Rick_and_morty.findByIdAndDelete(id);
};

module.exports = {
  find__rick_and_morty__service__ALL,
  find__rick_and_morty__service__BY_ID,
  create__rick_and_morty__SERVICE,
  update__rick_and_morty__SERVICE,
  delete__rick_and_morty__SERVICE,
};
