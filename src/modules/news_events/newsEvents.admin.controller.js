const service = require("./newsEvents.admin.service");

const sendSuccess = (res, data, statusCode = 200) => res.status(statusCode).json({ success: true, data });

const createCategory = async (req, res, next) => {
  try {
    const data = await service.createCategory(req.body);
    sendSuccess(res, data, 201);
  } catch (err) { next(err); }
};

const createArticle = async (req, res, next) => {
  try {
    const data = await service.createArticle(req.body);
    sendSuccess(res, data, 201);
  } catch (err) { next(err); }
};

const updateArticle = async (req, res, next) => {
  try {
    const data = await service.updateArticle(req.params.id, req.body);
    sendSuccess(res, data);
  } catch (err) { next(err); }
};

const deleteArticle = async (req, res, next) => {
  try {
    await service.deleteArticle(req.params.id);
    res.status(204).send();
  } catch (err) { next(err); }
};

const createEvent = async (req, res, next) => {
  try {
    const data = await service.createEvent(req.body);
    sendSuccess(res, data, 201);
  } catch (err) { next(err); }
};

const deleteEvent = async (req, res, next) => {
  try {
    await service.deleteEvent(req.params.id);
    res.status(204).send();
  } catch (err) { next(err); }
};

module.exports = {
  createCategory,
  createArticle,
  updateArticle,
  deleteArticle,
  createEvent,
  deleteEvent,
};