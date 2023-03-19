import multer from "multer";

// create diskstorage
const storage = multer.diskStorage({
  filename: (req, file, cb) => {
    cb(null, Date.now() + "_" + file.originalname);
  },
  destination: (req, file, cb) => {
    cb(null, "api/public/category");
  },
});

// category multer
export const catMulter = multer({ storage }).single("category-photo");


