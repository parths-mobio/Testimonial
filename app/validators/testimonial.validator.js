exports.testimonialSchema = {
    name: {
      notEmpty: true,
      errorMessage: "Name cannot be empty",
    },
    post: {
      notEmpty: true,
      errorMessage: "Post cannot be empty",
    },
  };
  