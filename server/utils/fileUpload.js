/** @format */
const multer = require("multer");
const path = require("path");
const fs = require("fs");
// This defines a storage engine for storing files on disk
const storage = multer.diskStorage({
  // This defines the destination directory for storing files
  destination: function (req, file, cb) {
    // make folder to root directory of the project public/assets/exams
    const folderPath = path.join(__dirname, "../public/assets/exams");

    fs.mkdirSync(folderPath, { recursive: true });

    cb(null, folderPath);
  },
  // This defines the file name for storing files
  filename: function (req, file, cb) {
    // The cb function is a callback that takes two parameters: an error and a name
    // The null argument means there is no error
    // The file.originalname argument means the files will be stored with their original names
    cb(
      null,
      `file.originalname-${Date.now()}${path.extname(file.originalname)}`
    );
  },
});

// This creates a multer instance with some options
const upload = multer({ storage });

module.exports = upload;
