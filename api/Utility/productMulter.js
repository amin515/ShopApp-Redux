import multer from "multer";

// create diskstorage
const storage = multer.diskStorage({
  filename: (req, file, cb) => {
    cb(null, Date.now() + "_" + file.originalname);
  },
  destination: (req, file, cb) => {
    if (
      file.fieldname === "product-photo" ||
      file.fieldname === "product-gallary-photo"
    ) {
      cb(null, "api/public/products");
    }
  },
});

// category multer
export const productMulter = multer({ storage }).fields([
  {
    name: "product_photo",
    maxCount: 1,
  },
  {
    name: "product_gallary_photo",
    maxCount: 10,
  },
]);
