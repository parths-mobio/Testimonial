const multer = require("multer");
var storage = multer.diskStorage({
  destination: "./public/uploads/",
  filename: function (req, file, cb) {
    cb(null, file.fieldname + "-" + Date.now() + "-" + file.originalname);
  },
});

var upload = multer({
  storage: storage,
}).single("photo");

module.exports = upload;
