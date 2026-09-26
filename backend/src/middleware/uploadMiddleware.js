const multer = require("multer");
const path = require("path");
const fs = require("fs");

const uploadPath = "uploads/projects";

if (!fs.existsSync(uploadPath)) {
    fs.mkdirSync(uploadPath, {
        recursive: true
    });
}

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, uploadPath);
    },

    filename: (req, file, cb) => {
        const uniqueName =
            Date.now() +
            "-" +
            Math.round(Math.random() * 1000000);

        cb(
            null,
            uniqueName + path.extname(file.originalname)
        );
    }
});

const fileFilter = (req, file, cb) => {
    const allowedTypes = /jpeg|jpg|png|webp/;

    const extensionValid = allowedTypes.test(
        path.extname(file.originalname).toLowerCase()
    );

    const mimeTypeValid = allowedTypes.test(file.mimetype);

    if (extensionValid && mimeTypeValid) {
        cb(null, true);
    } else {
        cb(
            new Error("Only JPG, JPEG, PNG and WEBP images are allowed"),
            false
        );
    }
};

const upload = multer({
    storage,
    fileFilter,
    limits: {
        fileSize: 5 * 1024 * 1024
    }
});

module.exports = upload;