const express = require("express");
const controller = require("./contact.admin.controller");
const { protect } = require("../../middleware/auth.middleware");

const router = express.Router();

// Apply auth to all admin routes
router.use(protect);

// Main Office
router.put("/main-office", controller.upsertMainOffice);

// Departments
router.post("/departments", controller.createDepartment);
router.get("/departments", controller.getDepartments);
router.get("/departments/:id", controller.getDepartment);
router.put("/departments/:id", controller.updateDepartment);
router.delete("/departments/:id", controller.deleteDepartment);

// Staff
router.post("/staff", controller.createStaffContact);
router.put("/staff/:id", controller.updateStaffContact);
router.delete("/staff/:id", controller.deleteStaffContact);

// Social Links
router.post("/social-links", controller.createSocialLink);
router.get("/social-links", controller.getSocialLinks);
router.put("/social-links/:id", controller.updateSocialLink);
router.delete("/social-links/:id", controller.deleteSocialLink);

// Quick Cards
router.post("/quick-cards", controller.createQuickContactCard);
router.get("/quick-cards", controller.getQuickContactCards);
router.put("/quick-cards/:id", controller.updateQuickContactCard);
router.delete("/quick-cards/:id", controller.deleteQuickContactCard);

// Campus Address
router.put("/campus-address", controller.upsertCampusAddress);

// Office Hours
router.post("/office-hours", controller.createOfficeHour);
router.get("/office-hours", controller.getOfficeHours);
router.put("/office-hours/:id", controller.updateOfficeHour);
router.delete("/office-hours/:id", controller.deleteOfficeHour);

// Submissions
router.get("/submissions", controller.getSubmissions);
router.get("/submissions/:id", controller.getSubmission);
router.patch("/submissions/:id/status", controller.updateSubmissionStatus);

module.exports = router;