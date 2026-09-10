const service = require("./footer.public.service");

const sendSuccess = (res, data) => res.status(200).json({ success: true, data });

const getFooterData = async (req, res, next) => {
  try { sendSuccess(res, await service.getFooterData()); } catch (e) { next(e); }
};
const getNavigationLinks = async (req, res, next) => {
  try {
    const data = await service.getNavigationLinks({ groupName: req.query.group });
    sendSuccess(res, data);
  } catch (e) { next(e); }
};
const getFooterSocialLinks = async (req, res, next) => {
  try { sendSuccess(res, await service.getFooterSocialLinks()); } catch (e) { next(e); }
};
const getFooterContactInfo = async (req, res, next) => {
  try {
    const data = await service.getFooterContactInfo();
    if (!data) return res.status(404).json({ success: false, message: "Footer contact info not found" });
    sendSuccess(res, data);
  } catch (e) { next(e); }
};

module.exports = {
  getFooterData,
  getNavigationLinks,
  getFooterSocialLinks,
  getFooterContactInfo,
};