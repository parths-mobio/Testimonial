const apiRoute = "/api";

/* routes */
module.exports = (app) => {

  app.use(`${apiRoute}/testimonial`, require("./testimonial.routes"));
  
};
