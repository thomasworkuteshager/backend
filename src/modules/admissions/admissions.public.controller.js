const admissionsService = require("./admissions.public.service");

const getPrograms = async (req, res, next) => {
  try {
    const data = await admissionsService.getPrograms(req.query.level);
    res.status(200).json({ success: true, data });
  } catch (error) {
    next(error);
  }
};

const getProgramBySlug = async (req, res, next) => {
  try {
    const data = await admissionsService.getProgramBySlug(req.params.slug);
    if (!data) {
      return res.status(404).json({ success: false, message: "Program not found" });
    }
    res.status(200).json({ success: true, data });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getPrograms,
  getProgramBySlug,
};