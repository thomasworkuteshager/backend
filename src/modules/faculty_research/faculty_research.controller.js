const service = require("./faculty_research.service");

const ok = (res, data) => {
  return res.status(200).json({
    success: true,
    data,
  });
};

const created = (res, data) => {
  return res.status(201).json({
    success: true,
    data,
  });
};

// GET /research-areas
const getResearchAreas = async (req, res, next) => {
  try {
    ok(res, await service.getResearchAreas());
  } catch (error) {
    next(error);
  }
};

// GET /research-areas/:id
const getResearchAreaById = async (req, res, next) => {
  try {
    const data = await service.getResearchAreaById(req.params.id);

    if (!data) {
      return res.status(404).json({
        success: false,
        error: {
          code: "RESOURCE_NOT_FOUND",
          message: "Research area not found.",
        },
      });
    }

    ok(res, data);
  } catch (error) {
    next(error);
  }
};

// POST /research-areas
const createResearchArea = async (req, res, next) => {
  try {
    created(
      res,
      await service.createResearchArea(req.body)
    );
  } catch (error) {
    next(error);
  }
};

// PUT /research-areas/:id
const updateResearchArea = async (req, res, next) => {
  try {
    ok(
      res,
      await service.updateResearchArea(
        req.params.id,
        req.body
      )
    );
  } catch (error) {
    next(error);
  }
};

// DELETE /research-areas/:id
const deleteResearchArea = async (req, res, next) => {
  try {
    ok(
      res,
      await service.archiveResearchArea(req.params.id)
    );
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getResearchAreas,
  getResearchAreaById,
  createResearchArea,
  updateResearchArea,
  deleteResearchArea,
};