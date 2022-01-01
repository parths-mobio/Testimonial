const express = require("express");
const router = express.Router();
const { checkSchema } = require("express-validator");
const testController = require("../controllers/testimonial.controllers");
const { validate } = require("../middlewares/validate.middleware");
const { testimonialSchema } = require("../validators/testimonial.validator");
const upload = require("../common/multer.common");
router.get("/", testController.listTestimonial);
router.post(
  "/",
  upload,
  validate(checkSchema(testimonialSchema)),
  testController.createTestimonial
);
router.put("/:id", upload,testController.updateTestimonial);
router.delete("/:id", testController.deleteTestimonial);

module.exports = router;
