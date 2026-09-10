const service = require("./contact.admin.service");

const ok = (res, data) => res.status(200).json({ success: true, data });
const created = (res, data) => res.status(201).json({ success: true, data });

// Main Office
const upsertMainOffice = async (req, res, next) => {
  try { ok(res, await service.upsertMainOffice(req.body)); } catch (e) { next(e); }
};

// Departments
const createDepartment = async (req, res, next) => {
  try { created(res, await service.createDepartment(req.body)); } catch (e) { next(e); }
};
const getDepartments = async (req, res, next) => {
  try { ok(res, await service.getDepartments()); } catch (e) { next(e); }
};
const getDepartment = async (req, res, next) => {
  try {
    const d = await service.getDepartmentById(req.params.id);
    if (!d) return res.status(404).json({ success: false, message: "Department not found" });
    ok(res, d);
  } catch (e) { next(e); }
};
const updateDepartment = async (req, res, next) => {
  try { ok(res, await service.updateDepartment(req.params.id, req.body)); } catch (e) { next(e); }
};
const deleteDepartment = async (req, res, next) => {
  try { await service.deleteDepartment(req.params.id); res.status(204).send(); } catch (e) { next(e); }
};

// Staff
const createStaffContact = async (req, res, next) => {
  try { created(res, await service.createStaffContact(req.body)); } catch (e) { next(e); }
};
const updateStaffContact = async (req, res, next) => {
  try { ok(res, await service.updateStaffContact(req.params.id, req.body)); } catch (e) { next(e); }
};
const deleteStaffContact = async (req, res, next) => {
  try { await service.deleteStaffContact(req.params.id); res.status(204).send(); } catch (e) { next(e); }
};

// Social Links
const createSocialLink = async (req, res, next) => {
  try { created(res, await service.createSocialLink(req.body)); } catch (e) { next(e); }
};
const getSocialLinks = async (req, res, next) => {
  try { ok(res, await service.getSocialLinks()); } catch (e) { next(e); }
};
const updateSocialLink = async (req, res, next) => {
  try { ok(res, await service.updateSocialLink(req.params.id, req.body)); } catch (e) { next(e); }
};
const deleteSocialLink = async (req, res, next) => {
  try { await service.deleteSocialLink(req.params.id); res.status(204).send(); } catch (e) { next(e); }
};

// Quick Cards
const createQuickContactCard = async (req, res, next) => {
  try { created(res, await service.createQuickContactCard(req.body)); } catch (e) { next(e); }
};
const getQuickContactCards = async (req, res, next) => {
  try { ok(res, await service.getQuickContactCards()); } catch (e) { next(e); }
};
const updateQuickContactCard = async (req, res, next) => {
  try { ok(res, await service.updateQuickContactCard(req.params.id, req.body)); } catch (e) { next(e); }
};
const deleteQuickContactCard = async (req, res, next) => {
  try { await service.deleteQuickContactCard(req.params.id); res.status(204).send(); } catch (e) { next(e); }
};

// Campus Address
const upsertCampusAddress = async (req, res, next) => {
  try { ok(res, await service.upsertCampusAddress(req.body)); } catch (e) { next(e); }
};

// Office Hours
const createOfficeHour = async (req, res, next) => {
  try { created(res, await service.createOfficeHour(req.body)); } catch (e) { next(e); }
};
const getOfficeHours = async (req, res, next) => {
  try { ok(res, await service.getOfficeHours()); } catch (e) { next(e); }
};
const updateOfficeHour = async (req, res, next) => {
  try { ok(res, await service.updateOfficeHour(req.params.id, req.body)); } catch (e) { next(e); }
};
const deleteOfficeHour = async (req, res, next) => {
  try { await service.deleteOfficeHour(req.params.id); res.status(204).send(); } catch (e) { next(e); }
};

// Submissions
const getSubmissions = async (req, res, next) => {
  try { ok(res, await service.getSubmissions()); } catch (e) { next(e); }
};
const getSubmission = async (req, res, next) => {
  try {
    const s = await service.getSubmissionById(req.params.id);
    if (!s) return res.status(404).json({ success: false, message: "Submission not found" });
    ok(res, s);
  } catch (e) { next(e); }
};
const updateSubmissionStatus = async (req, res, next) => {
  try { ok(res, await service.updateSubmissionStatus(req.params.id, req.body.status)); } catch (e) { next(e); }
};

module.exports = {
  upsertMainOffice,
  createDepartment,
  getDepartments,
  getDepartment,
  updateDepartment,
  deleteDepartment,
  createStaffContact,
  updateStaffContact,
  deleteStaffContact,
  createSocialLink,
  getSocialLinks,
  updateSocialLink,
  deleteSocialLink,
  createQuickContactCard,
  getQuickContactCards,
  updateQuickContactCard,
  deleteQuickContactCard,
  upsertCampusAddress,
  createOfficeHour,
  getOfficeHours,
  updateOfficeHour,
  deleteOfficeHour,
  getSubmissions,
  getSubmission,
  updateSubmissionStatus,
};