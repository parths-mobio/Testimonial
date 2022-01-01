const Testimonial = require("../models/testimonial.model");

/* get all Testimonial */
exports.getAllTestimonial = async (req_query) => {
  var name_search = new RegExp(req_query.name, "i");
  var post_search = new RegExp(req_query.post, "i");
  return await Testimonial.find({
    name: name_search,
    post: post_search,
    active: true,
  });
};

/* get Testimonial By Id */
exports.getAllTestimonialById = async (testimonial) => {
  return await Testimonial.find({ _id: testimonial });
};

/* Create Testimonial */
exports.creatNewTestimonial = async (testimonial) => {
  return await Testimonial.create(testimonial);
};

/* update Testimonial */
exports.updateTestimonial = async (testimonial_id, testimonial) => {
  let updated_testimonial;
  updated_testimonial = await Testimonial.findOneAndUpdate(
    {
      _id: testimonial_id,
    },
    { $set: testimonial },
    { new: true }
  );
  return updated_testimonial;
};

/* delete Testimonial */
exports.deleteTestimonial = async (testimonial_id) => {
  return await Testimonial.findOneAndUpdate(
    { _id: testimonial_id },
    {
      $set: {
        active: false,
      },
    },
    { new: true }
  );
};
