const footerService = require('./footer.service');

const sendSuccess = (res, data, message = 'Operation successful') => {
  res.status(200).json({
    success: true,
    data,
    message
  });
};

/*
|--------------------------------------------------------------------------
| NAVIGATION LINKS
|--------------------------------------------------------------------------
*/

const getNavigationLinks = async (req, res, next) => {
  try {
    const { groupName, page = 1, limit = 20 } = req.query;
    const result = await footerService.getNavigationLinks({
      groupName,
      page: parseInt(page),
      limit: parseInt(limit)
    });

    res.status(200).json({
      success: true,
      data: result.links,
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

const createNavigationLink = async (req, res, next) => {
  try {
    const data = await footerService.createNavigationLink(req.body);
    res.status(201).json({
      success: true,
      data,
      message: 'Navigation link created successfully'
    });
  } catch (error) {
    next(error);
  }
};

const updateNavigationLink = async (req, res, next) => {
  try {
    const data = await footerService.updateNavigationLink(req.params.id, req.body);
    sendSuccess(res, data, 'Navigation link updated successfully');
  } catch (error) {
    if (error.code === 'P2025') {
      return res.status(404).json({
        success: false,
        message: 'Navigation link not found'
      });
    }
    next(error);
  }
};

const archiveNavigationLink = async (req, res, next) => {
  try {
    const data = await footerService.archiveNavigationLink(req.params.id);
    sendSuccess(res, data, 'Navigation link archived successfully');
  } catch (error) {
    if (error.code === 'P2025') {
      return res.status(404).json({
        success: false,
        message: 'Navigation link not found'
      });
    }
    next(error);
  }
};

const reorderNavigationLinks = async (req, res, next) => {
  try {
    const { order } = req.body;
    if (!order || !Array.isArray(order) || order.length === 0) {
      return res.status(400).json({
        success: false,
        message: 'Order array is required'
      });
    }
    await footerService.reorderNavigationLinks(order);
    sendSuccess(res, null, 'Navigation links reordered successfully');
  } catch (error) {
    next(error);
  }
};

/*
|--------------------------------------------------------------------------
| FOOTER SOCIAL LINKS
|--------------------------------------------------------------------------
*/

const getFooterSocialLinks = async (req, res, next) => {
  try {
    const data = await footerService.getFooterSocialLinks();
    sendSuccess(res, data);
  } catch (error) {
    next(error);
  }
};

const createFooterSocialLink = async (req, res, next) => {
  try {
    const data = await footerService.createFooterSocialLink(req.body);
    res.status(201).json({
      success: true,
      data,
      message: 'Footer social link created successfully'
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

const updateFooterSocialLink = async (req, res, next) => {
  try {
    const data = await footerService.updateFooterSocialLink(req.params.id, req.body);
    sendSuccess(res, data, 'Footer social link updated successfully');
  } catch (error) {
    if (error.code === 'P2025') {
      return res.status(404).json({
        success: false,
        message: 'Footer social link not found'
      });
    }
    next(error);
  }
};

const archiveFooterSocialLink = async (req, res, next) => {
  try {
    const data = await footerService.archiveFooterSocialLink(req.params.id);
    sendSuccess(res, data, 'Footer social link archived successfully');
  } catch (error) {
    if (error.code === 'P2025') {
      return res.status(404).json({
        success: false,
        message: 'Footer social link not found'
      });
    }
    next(error);
  }
};

/*
|--------------------------------------------------------------------------
| FOOTER CONTACT INFO
|--------------------------------------------------------------------------
*/

const getFooterContactInfo = async (req, res, next) => {
  try {
    const data = await footerService.getFooterContactInfo();
    sendSuccess(res, data);
  } catch (error) {
    next(error);
  }
};

const upsertFooterContactInfo = async (req, res, next) => {
  try {
    const data = await footerService.upsertFooterContactInfo(req.body);
    sendSuccess(res, data, 'Footer contact info updated successfully');
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getNavigationLinks,
  createNavigationLink,
  updateNavigationLink,
  archiveNavigationLink,
  reorderNavigationLinks,
  getFooterSocialLinks,
  createFooterSocialLink,
  updateFooterSocialLink,
  archiveFooterSocialLink,
  getFooterContactInfo,
  upsertFooterContactInfo
};