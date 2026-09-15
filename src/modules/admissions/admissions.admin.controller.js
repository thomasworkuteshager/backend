const service = require("./admissions.admin.service");

const sendSuccess = (res, data, statusCode = 200) => res.status(statusCode).json({ success: true, data });

const createProgram = async (req, res, next) => {
  try {
    const data = await service.createProgram(req.body);
    sendSuccess(res, data, 201);
  } catch (err) { next(err); }
};

const getPrograms = async (req, res, next) => {
  try {
    const data = await service.getPrograms();
    sendSuccess(res, data);
  } catch (err) { next(err); }
};

const updateProgram = async (req, res, next) => {
  try {
    const data = await service.updateProgram(req.params.id, req.body);
    sendSuccess(res, data);
  } catch (err) { next(err); }
};

const deleteProgram = async (req, res, next) => {
  try {
    await service.deleteProgram(req.params.id);
    res.status(204).send();
  } catch (err) { next(err); }
};

const createDeadline = async (req, res, next) => {
  try {
    const data = await service.createDeadline(req.body);
    sendSuccess(res, data, 201);
  } catch (err) { next(err); }
};

const deleteDeadline = async (req, res, next) => {
  try {
    await service.deleteDeadline(req.params.id);
    res.status(204).send();
  } catch (err) { next(err); }
};

module.exports = {
  createProgram,
  getPrograms,
  updateProgram,
  deleteProgram,
  createDeadline,
  deleteDeadline,
};