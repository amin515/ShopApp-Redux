import Brand from "../Models/brandModels.js";
import createError from "../Utility/customError/createError.js";

/**
 * @status get
 * @ get all categories
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */

export const getAllBrands = async (req, res, next) => {
  try {
    const data = await Brand.find();

    if (data) {
      res.status(200).json({
        brands: data,
        message: "get all data successful",
      });
    }

    if (!data) {
      res.status(400).json({
        message: next(createError(404, "data not found")),
      });
    }
  } catch (error) {
    console.log(next(error.message));
  }
};

/**@status post
 * @ create category
 *
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */

export const createBrands = async (req, res, next) => {
  try {
    const { name, slug } = req.body;

    const create = await Brand.create({ name, slug, photo : req.file.filename});

    res.status(200).json({
      brand: create,
      message: "data create successfuly",
    });

    res.send("done");
  } catch (error) {
    next(error);
  }
};

/**
 * @get single category
 * @status get
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
export const getOneBrand = async (req, res, next) => {
  try {
    const { slug } = req.params;

    const data = await Brand.findOne({ slug });
    res.status(200).json({
      brand: data,
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

export const updateOneBrand = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name, slug, photo } = req.body;

    const data = await Brand.findByIdAndUpdate(
      id,
      { name, slug },
      {
        new: true,
      }
    );

    if (data) {
      res.status(200).json({
        brand: data,
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

export const updateMultipleBrands = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name, slug, photo } = req.body;

    const data = await Brand.findByIdAndUpdate(
      id,
      { name, slug },
      {
        new: true,
      }
    );
    if (data) {
      res.status(200).json({
        brand: data,
      });
    }

    if (!data) {
      res.status(404).json(next(createError(404, "data not found")));
    }
  } catch (error) {
    console.log(next(error.message));
  }
};

export const deleteBrand = async (req, res, next) => {
  try {
    const { id } = req.params;

    const data = await Brand.findByIdAndDelete(id);
    if (data) {
      res.status(200).json({
        brand: data,
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
