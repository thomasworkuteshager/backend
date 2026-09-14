const contactService = require("./contact.public.service");

const sendSuccess = (res, data) => {
  res.status(200).json({ success: true, data });
};

const getContactPage = async (req, res, next) => {
  try {
    const data = await contactService.getContactPage();
    sendSuccess(res, data);
  } catch (error) {
    next(error);
  }
};

const getMainOffice = async (req, res, next) => {
  try {
    const data = await contactService.getMainOffice();
    if (!data) {
      return res.status(404).json({ success: false, message: "Main office not found" });
    }
    sendSuccess(res, data);
  } catch (error) {
    next(error);
  }
};

const getDepartments = async (req, res, next) => {
  try {
    const { search, page = 1, limit = 20 } = req.query;
    const result = await contactService.getDepartments({
      search,
      page: parseInt(page),
      limit: parseInt(limit),
    });
    res.status(200).json({
      success: true,
      data: result.departments,
      meta: {
        page: parseInt(page),
        limit: parseInt(limit),
        total: result.total,
        totalPages: Math.ceil(result.total / parseInt(limit)),
      },
    });
  } catch (error) {
    next(error);
  }
};

const getDepartmentById = async (req, res, next) => {
  try {
    const data = await contactService.getDepartmentById(req.params.id);
    if (!data) {
      return res.status(404).json({ success: false, message: "Department not found" });
    }
    sendSuccess(res, data);
  } catch (error) {
    next(error);
  }
};

const getQuickContactCards = async (req, res, next) => {
  try {
    const data = await contactService.getQuickContactCards();
    sendSuccess(res, data);
  } catch (error) {
    next(error);
  }
};

const getSocialLinks = async (req, res, next) => {
  try {
    const data = await contactService.getSocialLinks();
    sendSuccess(res, data);
  } catch (error) {
    next(error);
  }
};

const getCampusAddress = async (req, res, next) => {
  try {
    const data = await contactService.getCampusAddress();
    if (!data) {
      return res.status(404).json({ success: false, message: "Campus address not found" });
    }
    sendSuccess(res, data);
  } catch (error) {
    next(error);
  }
};

const getOfficeHours = async (req, res, next) => {
  try {
    const data = await contactService.getOfficeHours();
    sendSuccess(res, data);
  } catch (error) {
    next(error);
  }
};

const submitForm = async (req, res, next) => {
  try {
    const data = await contactService.submitForm(req.body);
    res.status(201).json({ success: true, data, message: "Form submitted successfully" });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getContactPage,
  getMainOffice,
  getDepartments,
  getDepartmentById,
  getQuickContactCards,
  getSocialLinks,
  getCampusAddress,
  getOfficeHours,
  submitForm,
};