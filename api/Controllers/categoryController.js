import Cat from "../Models/categoryModels.js";
import createError from "../Utility/customError/createError.js";

/**
 * @status get
 * @ get all categories
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */

export const getAllCategory = async (req, res, next) => {
  try {
    const data = await Cat.find();

    if (data) {
      res.status(200).json({
        categories: data,
        message: "get all data successful",
      });
    }

    if (!data) {
      res.status(400).json({
        message: "no data found",
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

export const createCategory = async(req, res, next) => {
  try {
    const { name, slug } = req.body;
    const data = await Cat.create({
      name,
      slug,
      photo: req.file.filename,
    });
    res.status(200).json({
      category: data,
      message: "Category added successful",
    });
  } catch (error) {
    next(error);
  }
}
/**
 * @get single category
 * @status get
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
export const getOneCat = async (req, res, next) => {
  try {
    const { slug } = req.params;

    const data = await Cat.findOne({ slug });
    res.status(200).json({
      category: data,
    });
  } catch (error) {
    console.log(next(error.message));
  }
};

/**
 * @ edit single data
 * @status put
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */

export const updateCategory = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name, slug, photo } = req.body;

    const data = await Cat.findByIdAndUpdate(
      id,
      { name, slug },
      {
        new: true,
      }
    );
    res.status(200).json({
      category: data,
    });
  } catch (error) {
    console.log(next(error.message));
  }
};

/**@edit multiple data
 * @status patch
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */

export const updateMultipleCategory = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name, slug, photo } = req.body;

    const data = await Cat.findByIdAndUpdate(
      id,
      { name, slug },
      {
        new: true,
      }
    );
    res.status(200).json({
      category: data,
    });
  } catch (error) {
    console.log(next(error.message));
  }
};

export const deleteCat = async (req, res, next) => {
  try {
    const { id } = req.params;

    const data = await Cat.findByIdAndDelete(id);
    res.status(200).json({
      category: data,
      message: `${`successfuly delete ${data.name}`}`,
    });
  } catch (error) {
    next(createError(400, "user not found"));
  }
};
