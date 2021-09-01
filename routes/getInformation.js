const express = require("express");
const router = express.Router();
const getInformationController = require("../controllers/getInformationController");

/**
 * Rotes and validation for send the controllers
 */

router.get("/items", getInformationController.getInformation);
router.get("/items/:id", getInformationController.getInfoProduct);

module.exports = router;
