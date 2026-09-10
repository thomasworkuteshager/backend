const service = require("./footer.admin.service");

const ok = (res, data) => res.status(200).json({ success: true, data });
const created = (res, data) => res.status(201).json({ success: true, data });

const createNavigationLink = async (req, res, next) => {
  try { created(res, await service.createNavigationLink(req.body)); } catch (e) { next(e); }
};
const getNavigationLinks = async (req, res, next) => {
  try { ok(res, await service.getNavigationLinks()); } catch (e) { next(e); }
};
const updateNavigationLink = async (req, res, next) => {
  try { ok(res, await service.updateNavigationLink(req.params.id, req.body)); } catch (e) { next(e); }
};
const deleteNavigationLink = async (req, res, next) => {
  try { await service.deleteNavigationLink(req.params.id); res.status(204).send(); } catch (e) { next(e); }
};

const createFooterSocialLink = async (req, res, next) => {
  try { created(res, await service.createFooterSocialLink(req.body)); } catch (e) { next(e); }
};
const getFooterSocialLinks = async (req, res, next) => {
  try { ok(res, await service.getFooterSocialLinks()); } catch (e) { next(e); }
};
const updateFooterSocialLink = async (req, res, next) => {
  try { ok(res, await service.updateFooterSocialLink(req.params.id, req.body)); } catch (e) { next(e); }
};
const deleteFooterSocialLink = async (req, res, next) => {
  try { await service.deleteFooterSocialLink(req.params.id); res.status(204).send(); } catch (e) { next(e); }
};

const upsertFooterContactInfo = async (req, res, next) => {
  try { ok(res, await service.upsertFooterContactInfo(req.body)); } catch (e) { next(e); }
};

module.exports = {
  createNavigationLink,
  getNavigationLinks,
  updateNavigationLink,
  deleteNavigationLink,
  createFooterSocialLink,
  getFooterSocialLinks,
  updateFooterSocialLink,
  deleteFooterSocialLink,
  upsertFooterContactInfo,
};