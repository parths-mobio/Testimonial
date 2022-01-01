const { errorResponse, successResponse } = require("../common/response.common");
const constants = require("../common/constants.common");
const testimonialService = require("../services/testimonial.service");
const Testimonial = require("../models/testimonial.model");
/* for List Testimonial */
exports.listTestimonial = async (req, res, next) => {
  try {
    let data = await testimonialService.getAllTestimonial(req.query);
    return res
      .status(200)
      .json(successResponse(constants.TESTIMONIAL_LIST, data));
  } catch (err) {
    res.status(500).json(errorResponse(err.message));
  }
};

/* for Create Testimonial */
exports.createTestimonial = async (req, res, next) => {
  try {
    let icon;
    if (req.file !== undefined) {
      icon = req.file.filename;
      req.body.photo = icon;
    }
    let created_testimonial = await testimonialService.creatNewTestimonial(
      req.body
    );
    if (created_testimonial) {
      return res
        .status(200)
        .json(
          successResponse(
            constants.TESTIMONIAL_CREATE_SUCCESS,
            created_testimonial
          )
        );
    }
  } catch (errors) {
    res.status(500).json(errorResponse(errors.message));
  }
};

/* for Update Testimonial */
exports.updateTestimonial = async (req, res, next) => {
  try {
    const testimonial_id = req.params.id;
    let testimonial_by_id = await Testimonial.findOne({
      _id: testimonial_id,
    });
    if (!testimonial_by_id) {
      return res
        .status(404)
        .json(errorResponse(constants.TESTIMONIAL_NOT_FOUND));
    }
    if (req.file !== undefined) {
      icon = req.file.filename;
      req.body.photo = icon;
    }
    let updated_testimonial = await testimonialService.updateTestimonial(
      testimonial_id,
      req.body
    );
    if (updated_testimonial) {
      return res
        .status(200)
        .json(
          successResponse(
            constants.TESTIMONIAL_UPDATE_SUCCESS,
            updated_testimonial
          )
        );
    }
  } catch (err) {
    res.status(500).json(errorResponse(err.message));
  }
};

/* for Delete Testimonial */
exports.deleteTestimonial = async (req, res, next) => {
  try {
    let testimonial_id = await req.params.id;
    await testimonialService.deleteTestimonial(testimonial_id);
    res
      .status(200)
      .json(
        successResponse(constants.TESTIMONIAL_DELETE_SUCCESS, testimonial_id)
      );
  } catch (err) {
    res.status(500).json(errorResponse(err.message));
  }
};
