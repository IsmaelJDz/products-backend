const { Products, Info } = require("../models/Products");
const { validationResult } = require("express-validator");
const { getDataResult, getDataResultProduct } = require("../utils");
require("dotenv").config({ path: "var.env" });

/**
 *
 * @param {*} req express params req: client body
 * TO DO: refactor method
 */

exports.getInformation = async (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { search } = req.query;

  if (search !== "" && search.length > 3) {
    const searchProducts = await Products.find({
      title: { $regex: search, $options: "i" },
    }).limit(5);

    try {
      const ReqFormatData = getDataResult(searchProducts);
      return res.status(200).json(ReqFormatData);
    } catch (error) {
      return res
        .status(500)
        .json({ errors: "server cannot response your request! 🙁" });
    }
  } else {
    return res.status(201).json({ data: "item not found, try again! 🙁" });
  }
};

/**
 *
 * @param {*} req express params req: client body
 * @param {*} res express params res: insert individual product
 */

exports.getInfoProduct = async (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const { id } = req.params;
    await Products.find({ _id: id })
      .populate("info") // key to populate
      .then(info => {
        const resultData = getDataResultProduct(info);
        res.json(resultData);
      })
      .catch(error => {
        res.status(201).json({
          msg: `${error} error 💔`,
        });
      });
  } catch (error) {
    return res
      .status(500)
      .json({ errors: "server cannot response your request! 🙁 😣" });
  }
};
