import Pro from "../Models/productModels.js";
import createError from "../Utility/customError/createError.js";

/**
 * @status get
 * @ get all categories
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */

export const getAllProducts = async (req, res, next) => {
  try {
    const data = await Pro.find();

    if (data) {
      res.status(200).json({
        products: data,
        message: "get all data successful",
      });
    }

    if (!data) {
      res.status(400).json({
        message: next(createError(404, "data not found")),
      });
    }
  } catch (error) {
    next(createError(500, "unknown error"));
  }
};

/**@status post
 * @ create category
 *
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */

export const createProduct = async (req, res, next) => {

 
  try {
    const { name, slug, photo } = req.body;
    const product = await Pro.create({
      name,
      slug,
      photo: req.files[1].filename,

    });

    console.log(req.files)
    res.status(200).json({
      product,
      message: "product created successful",
    });
  } catch (error) {
    console.log(error)
  }
};

/**
 * @get single category
 * @status get
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
export const getOneProduct = async (req, res, next) => {
  try {
    const { slug } = req.params;

    const data = await Pro.findOne({ slug });
    res.status(200).json({
      product: data,
    });
  } catch (error) {
    next(createError(400, "no data found"));
  }
};

/**
 * @ edit single data
 * @status put
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */

export const updateOneProduct = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name, slug, photo } = req.body;

    const data = await Pro.findByIdAndUpdate(
      id,
      { name, slug },
      {
        new: true,
      }
    );

    if (data) {
      res.status(200).json({
        product: data,
      });
    }

    if (!data) {
      next(createError(404, "no data found"));
    }
  } catch (error) {
    next(createError(400, "problem with data"));
  }
};

/**@edit multiple data
 * @status patch
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */

export const updateMultipleProduct = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name, slug, photo } = req.body;

    const data = await Pro.findByIdAndUpdate(
      id,
      { name, slug },
      {
        new: true,
      }
    );
    if (data) {
      res.status(200).json({
        product: data,
      });
    }

    if (!data) {
      res.status(404).json(next(createError(404, "data not found")));
    }
  } catch (error) {
    next(createError(500, "unknown error"));
  }
};

export const deleteProduct = async (req, res, next) => {
  try {
    const { id } = req.params;

    const data = await Pro.findByIdAndDelete(id);
    if (data) {
      res.status(200).json({
        product: data,
        message: `${`successfuly delete ${data.name}`}`,
      });
    }

    if (!data) {
      res.status(200).json(next(createError(404, "data not found for delete")));
    }
  } catch (error) {
    next(createError(400, "user not found"));
  }
};
