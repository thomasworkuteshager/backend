const service = require("./newsEvents.public.service");

const getNewsArticles = async (req, res, next) => {
  try {
    const data = await service.getNewsArticles(req.query);
    res.status(200).json({ success: true, data });
  } catch (err) { next(err); }
};

const getArticleBySlug = async (req, res, next) => {
  try {
    const data = await service.getArticleBySlug(req.params.slug);
    if (!data) return res.status(404).json({ success: false, message: "Article not found" });
    res.status(200).json({ success: true, data });
  } catch (err) { next(err); }
};

const getEvents = async (req, res, next) => {
  try {
    const data = await service.getEvents();
    res.status(200).json({ success: true, data });
  } catch (err) { next(err); }
};

const registerForEvent = async (req, res, next) => {
  try {
    const data = await service.registerForEvent(req.body);
    res.status(201).json({ success: true, data, message: "Registered successfully" });
  } catch (err) { next(err); }
};

module.exports = {
  getNewsArticles,
  getArticleBySlug,
  getEvents,
  registerForEvent,
};