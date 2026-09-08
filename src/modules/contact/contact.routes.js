const express = require("express");
const contactController = require("./contact.controller");
const { protect } = require("../../middleware/auth.middleware");

const router = express.Router();

/*
|--------------------------------------------------------------------------
| Public Routes
|--------------------------------------------------------------------------
*/

// Main Office
router.get("/main-office", contactController.getMainOffice);

// Departments
router.get("/departments", contactController.getDepartments);
router.get("/departments/:id", contactController.getDepartmentById);
router.get("/departments/:departmentId/staff", contactController.getStaffByDepartment);
router.get("/departments/:departmentId/social-links", contactController.getSocialLinksByDepartment);

// Form Submission
router.post("/submit", contactController.submitForm);

// Social Links (Global)
router.get("/social-links", contactController.getSocialLinks);

// Quick Contact Cards
router.get("/quick-cards", contactController.getQuickContactCards);

// Campus Address
router.get("/campus-address", contactController.getCampusAddress);

// Office Hours
router.get("/office-hours", contactController.getOfficeHours);

/*
|--------------------------------------------------------------------------
| Admin Routes (Protected)
|--------------------------------------------------------------------------
*/

// Main Office
router.put("/main-office", protect, contactController.upsertMainOffice);

// Departments
router.post("/departments", protect, contactController.createDepartment);
router.put("/departments/:id", protect, contactController.updateDepartment);
router.delete("/departments/:id", protect, contactController.archiveDepartment);
router.patch("/departments/reorder", protect, contactController.reorderDepartments);

// Staff Contacts
router.post("/staff", protect, contactController.createStaffContact);
router.put("/staff/:id", protect, contactController.updateStaffContact);
router.delete("/staff/:id", protect, contactController.archiveStaffContact);

// Department Social Links
router.post("/social-links", protect, contactController.createDepartmentSocialLink);
router.delete("/social-links/:id", protect, contactController.archiveDepartmentSocialLink);

// Form Submissions (Admin)
router.get("/submissions", protect, contactController.getSubmissions);
router.get("/submissions/:id", protect, contactController.getSubmissionById);
router.patch("/submissions/:id/status", protect, contactController.updateSubmissionStatus);
router.patch("/submissions/:id/assign", protect, contactController.assignSubmission);

// Social Links (Global Admin)
router.post("/global-social-links", protect, contactController.createSocialLink);
router.put("/global-social-links/:id", protect, contactController.updateSocialLink);
router.delete("/global-social-links/:id", protect, contactController.archiveSocialLink);
router.patch("/global-social-links/reorder", protect, contactController.reorderSocialLinks);

// Quick Contact Cards (Admin)
router.post("/quick-cards", protect, contactController.createQuickContactCard);
router.put("/quick-cards/:id", protect, contactController.updateQuickContactCard);
router.delete("/quick-cards/:id", protect, contactController.archiveQuickContactCard);
router.patch("/quick-cards/reorder", protect, contactController.reorderQuickContactCards);

// Campus Address (Admin)
router.put("/campus-address", protect, contactController.upsertCampusAddress);

// Office Hours (Admin)
router.put("/office-hours/:id", protect, contactController.updateOfficeHour);

module.exports = router;