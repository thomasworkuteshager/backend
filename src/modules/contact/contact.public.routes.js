const express = require("express");
const contactController = require("./contact.public.controller");

const router = express.Router();

// Complete Contact Page
router.get("/", contactController.getContactPage);

// Main Office
router.get("/main-office", contactController.getMainOffice);

// Departments
router.get("/departments", contactController.getDepartments);
router.get("/departments/:id", contactController.getDepartmentById);

// Quick Contact Cards
router.get("/quick-cards", contactController.getQuickContactCards);

// Social Links
router.get("/social-links", contactController.getSocialLinks);

// Campus Address
router.get("/campus-address", contactController.getCampusAddress);

// Office Hours
router.get("/office-hours", contactController.getOfficeHours);

// Form Submission
router.post("/submit", contactController.submitForm);

module.exports = router;