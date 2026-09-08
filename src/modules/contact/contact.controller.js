const contactService = require('./contact.service');

const sendSuccess = (res, data, message = 'Operation successful') => {
  res.status(200).json({
    success: true,
    data,
    message
  });
};

/*
|--------------------------------------------------------------------------
| MAIN OFFICE
|--------------------------------------------------------------------------
*/

const getMainOffice = async (req, res, next) => {
  try {
    const data = await contactService.getMainOffice();
    sendSuccess(res, data);
  } catch (error) {
    next(error);
  }
};

const upsertMainOffice = async (req, res, next) => {
  try {
    const data = await contactService.upsertMainOffice(req.body);
    sendSuccess(res, data, 'Main office updated successfully');
  } catch (error) {
    next(error);
  }
};

/*
|--------------------------------------------------------------------------
| DEPARTMENTS
|--------------------------------------------------------------------------
*/

const getDepartments = async (req, res, next) => {
  try {
    const { search, slug, status, page = 1, limit = 20 } = req.query;
    const result = await contactService.getDepartments({
      search,
      slug,
      status,
      page: parseInt(page),
      limit: parseInt(limit)
    });

    res.status(200).json({
      success: true,
      data: result.departments,
      meta: {
        page: parseInt(page),
        limit: parseInt(limit),
        total: result.total,
        totalPages: Math.ceil(result.total / parseInt(limit))
      }
    });
  } catch (error) {
    next(error);
  }
};

const getDepartmentById = async (req, res, next) => {
  try {
    const data = await contactService.getDepartmentById(req.params.id);
    if (!data) {
      return res.status(404).json({
        success: false,
        message: 'Department not found'
      });
    }
    sendSuccess(res, data);
  } catch (error) {
    next(error);
  }
};

const createDepartment = async (req, res, next) => {
  try {
    const data = await contactService.createDepartment(req.body);
    res.status(201).json({
      success: true,
      data,
      message: 'Department created successfully'
    });
  } catch (error) {
    if (error.code === 'P2002') {
      return res.status(409).json({
        success: false,
        message: 'Department slug already exists'
      });
    }
    next(error);
  }
};

const updateDepartment = async (req, res, next) => {
  try {
    const data = await contactService.updateDepartment(req.params.id, req.body);
    sendSuccess(res, data, 'Department updated successfully');
  } catch (error) {
    if (error.code === 'P2025') {
      return res.status(404).json({
        success: false,
        message: 'Department not found'
      });
    }
    next(error);
  }
};

const archiveDepartment = async (req, res, next) => {
  try {
    const data = await contactService.archiveDepartment(req.params.id);
    sendSuccess(res, data, 'Department archived successfully');
  } catch (error) {
    if (error.code === 'P2025') {
      return res.status(404).json({
        success: false,
        message: 'Department not found'
      });
    }
    next(error);
  }
};

const reorderDepartments = async (req, res, next) => {
  try {
    const { order } = req.body;
    if (!order || !Array.isArray(order) || order.length === 0) {
      return res.status(400).json({
        success: false,
        message: 'Order array is required'
      });
    }
    await contactService.reorderDepartments(order);
    sendSuccess(res, null, 'Departments reordered successfully');
  } catch (error) {
    next(error);
  }
};

/*
|--------------------------------------------------------------------------
| STAFF CONTACTS
|--------------------------------------------------------------------------
*/

const getStaffByDepartment = async (req, res, next) => {
  try {
    const data = await contactService.getStaffByDepartment(req.params.departmentId);
    sendSuccess(res, data);
  } catch (error) {
    next(error);
  }
};

const createStaffContact = async (req, res, next) => {
  try {
    const data = await contactService.createStaffContact(req.body);
    res.status(201).json({
      success: true,
      data,
      message: 'Staff contact created successfully'
    });
  } catch (error) {
    next(error);
  }
};

const updateStaffContact = async (req, res, next) => {
  try {
    const data = await contactService.updateStaffContact(req.params.id, req.body);
    sendSuccess(res, data, 'Staff contact updated successfully');
  } catch (error) {
    if (error.code === 'P2025') {
      return res.status(404).json({
        success: false,
        message: 'Staff contact not found'
      });
    }
    next(error);
  }
};

const archiveStaffContact = async (req, res, next) => {
  try {
    const data = await contactService.archiveStaffContact(req.params.id);
    sendSuccess(res, data, 'Staff contact archived successfully');
  } catch (error) {
    if (error.code === 'P2025') {
      return res.status(404).json({
        success: false,
        message: 'Staff contact not found'
      });
    }
    next(error);
  }
};

/*
|--------------------------------------------------------------------------
| DEPARTMENT SOCIAL LINKS
|--------------------------------------------------------------------------
*/

const getSocialLinksByDepartment = async (req, res, next) => {
  try {
    const data = await contactService.getSocialLinksByDepartment(req.params.departmentId);
    sendSuccess(res, data);
  } catch (error) {
    next(error);
  }
};

const createDepartmentSocialLink = async (req, res, next) => {
  try {
    const data = await contactService.createDepartmentSocialLink(req.body);
    res.status(201).json({
      success: true,
      data,
      message: 'Social link created successfully'
    });
  } catch (error) {
    if (error.code === 'P2002') {
      return res.status(409).json({
        success: false,
        message: 'Social link for this platform already exists for this department'
      });
    }
    next(error);
  }
};

const archiveDepartmentSocialLink = async (req, res, next) => {
  try {
    const data = await contactService.archiveDepartmentSocialLink(req.params.id);
    sendSuccess(res, data, 'Social link archived successfully');
  } catch (error) {
    if (error.code === 'P2025') {
      return res.status(404).json({
        success: false,
        message: 'Social link not found'
      });
    }
    next(error);
  }
};

/*
|--------------------------------------------------------------------------
| FORM SUBMISSIONS
|--------------------------------------------------------------------------
*/

const submitForm = async (req, res, next) => {
  try {
    const data = await contactService.submitForm(req.body);
    res.status(201).json({
      success: true,
      data,
      message: 'Form submitted successfully'
    });
  } catch (error) {
    next(error);
  }
};

const getSubmissions = async (req, res, next) => {
  try {
    const { status, isRead, assignedTo, page = 1, limit = 20 } = req.query;
    const result = await contactService.getSubmissions({
      status,
      isRead,
      assignedTo,
      page: parseInt(page),
      limit: parseInt(limit)
    });

    res.status(200).json({
      success: true,
      data: result.submissions,
      meta: {
        page: parseInt(page),
        limit: parseInt(limit),
        total: result.total,
        totalPages: Math.ceil(result.total / parseInt(limit))
      }
    });
  } catch (error) {
    next(error);
  }
};

const getSubmissionById = async (req, res, next) => {
  try {
    const data = await contactService.getSubmissionById(req.params.id);
    if (!data) {
      return res.status(404).json({
        success: false,
        message: 'Submission not found'
      });
    }
    sendSuccess(res, data);
  } catch (error) {
    next(error);
  }
};

const updateSubmissionStatus = async (req, res, next) => {
  try {
    const { status } = req.body;
    if (!['pending', 'read', 'replied', 'archived'].includes(status)) {
      return res.status(400).json({
        success: false,
        message: 'Invalid status value'
      });
    }
    const data = await contactService.updateSubmissionStatus(req.params.id, status);
    sendSuccess(res, data, 'Submission status updated successfully');
  } catch (error) {
    if (error.code === 'P2025') {
      return res.status(404).json({
        success: false,
        message: 'Submission not found'
      });
    }
    next(error);
  }
};

const assignSubmission = async (req, res, next) => {
  try {
    const { assignedTo } = req.body;
    const data = await contactService.assignSubmission(req.params.id, assignedTo);
    sendSuccess(res, data, 'Submission assigned successfully');
  } catch (error) {
    if (error.code === 'P2025') {
      return res.status(404).json({
        success: false,
        message: 'Submission not found'
      });
    }
    next(error);
  }
};

/*
|--------------------------------------------------------------------------
| SOCIAL LINKS (Global)
|--------------------------------------------------------------------------
*/

const getSocialLinks = async (req, res, next) => {
  try {
    const data = await contactService.getSocialLinks();
    sendSuccess(res, data);
  } catch (error) {
    next(error);
  }
};

const createSocialLink = async (req, res, next) => {
  try {
    const data = await contactService.createSocialLink(req.body);
    res.status(201).json({
      success: true,
      data,
      message: 'Social link created successfully'
    });
  } catch (error) {
    if (error.code === 'P2002') {
      return res.status(409).json({
        success: false,
        message: 'Social link for this platform already exists'
      });
    }
    next(error);
  }
};

const updateSocialLink = async (req, res, next) => {
  try {
    const data = await contactService.updateSocialLink(req.params.id, req.body);
    sendSuccess(res, data, 'Social link updated successfully');
  } catch (error) {
    if (error.code === 'P2025') {
      return res.status(404).json({
        success: false,
        message: 'Social link not found'
      });
    }
    next(error);
  }
};

const archiveSocialLink = async (req, res, next) => {
  try {
    const data = await contactService.archiveSocialLink(req.params.id);
    sendSuccess(res, data, 'Social link archived successfully');
  } catch (error) {
    if (error.code === 'P2025') {
      return res.status(404).json({
        success: false,
        message: 'Social link not found'
      });
    }
    next(error);
  }
};

const reorderSocialLinks = async (req, res, next) => {
  try {
    const { order } = req.body;
    if (!order || !Array.isArray(order) || order.length === 0) {
      return res.status(400).json({
        success: false,
        message: 'Order array is required'
      });
    }
    await contactService.reorderSocialLinks(order);
    sendSuccess(res, null, 'Social links reordered successfully');
  } catch (error) {
    next(error);
  }
};

/*
|--------------------------------------------------------------------------
| QUICK CONTACT CARDS
|--------------------------------------------------------------------------
*/

const getQuickContactCards = async (req, res, next) => {
  try {
    const data = await contactService.getQuickContactCards();
    sendSuccess(res, data);
  } catch (error) {
    next(error);
  }
};

const createQuickContactCard = async (req, res, next) => {
  try {
    const data = await contactService.createQuickContactCard(req.body);
    res.status(201).json({
      success: true,
      data,
      message: 'Quick contact card created successfully'
    });
  } catch (error) {
    next(error);
  }
};

const updateQuickContactCard = async (req, res, next) => {
  try {
    const data = await contactService.updateQuickContactCard(req.params.id, req.body);
    sendSuccess(res, data, 'Quick contact card updated successfully');
  } catch (error) {
    if (error.code === 'P2025') {
      return res.status(404).json({
        success: false,
        message: 'Quick contact card not found'
      });
    }
    next(error);
  }
};

const archiveQuickContactCard = async (req, res, next) => {
  try {
    const data = await contactService.archiveQuickContactCard(req.params.id);
    sendSuccess(res, data, 'Quick contact card archived successfully');
  } catch (error) {
    if (error.code === 'P2025') {
      return res.status(404).json({
        success: false,
        message: 'Quick contact card not found'
      });
    }
    next(error);
  }
};

const reorderQuickContactCards = async (req, res, next) => {
  try {
    const { order } = req.body;
    if (!order || !Array.isArray(order) || order.length === 0) {
      return res.status(400).json({
        success: false,
        message: 'Order array is required'
      });
    }
    await contactService.reorderQuickContactCards(order);
    sendSuccess(res, null, 'Quick contact cards reordered successfully');
  } catch (error) {
    next(error);
  }
};

/*
|--------------------------------------------------------------------------
| CAMPUS ADDRESS
|--------------------------------------------------------------------------
*/

const getCampusAddress = async (req, res, next) => {
  try {
    const data = await contactService.getCampusAddress();
    sendSuccess(res, data);
  } catch (error) {
    next(error);
  }
};

const upsertCampusAddress = async (req, res, next) => {
  try {
    const data = await contactService.upsertCampusAddress(req.body);
    sendSuccess(res, data, 'Campus address updated successfully');
  } catch (error) {
    next(error);
  }
};

/*
|--------------------------------------------------------------------------
| OFFICE HOURS
|--------------------------------------------------------------------------
*/

const getOfficeHours = async (req, res, next) => {
  try {
    const data = await contactService.getOfficeHours();
    sendSuccess(res, data);
  } catch (error) {
    next(error);
  }
};

const updateOfficeHour = async (req, res, next) => {
  try {
    const data = await contactService.updateOfficeHour(req.params.id, req.body);
    sendSuccess(res, data, 'Office hour updated successfully');
  } catch (error) {
    if (error.code === 'P2025') {
      return res.status(404).json({
        success: false,
        message: 'Office hour not found'
      });
    }
    next(error);
  }
};

module.exports = {
  getMainOffice,
  upsertMainOffice,
  getDepartments,
  getDepartmentById,
  createDepartment,
  updateDepartment,
  archiveDepartment,
  reorderDepartments,
  getStaffByDepartment,
  createStaffContact,
  updateStaffContact,
  archiveStaffContact,
  getSocialLinksByDepartment,
  createDepartmentSocialLink,
  archiveDepartmentSocialLink,
  submitForm,
  getSubmissions,
  getSubmissionById,
  updateSubmissionStatus,
  assignSubmission,
  getSocialLinks,
  createSocialLink,
  updateSocialLink,
  archiveSocialLink,
  reorderSocialLinks,
  getQuickContactCards,
  createQuickContactCard,
  updateQuickContactCard,
  archiveQuickContactCard,
  reorderQuickContactCards,
  getCampusAddress,
  upsertCampusAddress,
  getOfficeHours,
  updateOfficeHour
};