import Product from "./product.js";
import imagekit from "../utils/imagekit.js";
import fs from "fs";

export default function createProduct(req, res) {
  const imageURL = imagekit.url({
    path: req.file.originalname,
    urlEndpoint: process.env.CDN_URL,
  });

  const product = req.body;
  product.image = imageURL;

  try {
    // I don't want to keep the images on the server that's why deleting them after uploading to the CDN.
    fs.readFile(req.file.path, function (err, data) {
      if (err) throw err;
      imagekit.upload(
        {
          file: data,
          fileName: req.file.originalname,
        },
        function (error, result) {
          if (error) throw error;
          else {
            fs.unlink(req.file.path, function (err) {
              if (err) throw err;
            });
          }
        }
      );
    });

    Product.create(product);
    res.json({ success: "Product created successfully!" });
  } catch (error) {
    res.json({ error: "Error" });
  }
}

export async function getAllProducts(req, res) {
  try {
    const allProducts = await Product.find({});
    res.json({ products: allProducts });
  } catch (error) {
    res.json({ error: error });
  }
}

export async function validateDiscount(req, res, next) {
  try {
    await Product.updateMany(
      { discount_period: { $lte: new Date() } },
      { $unset: { discount_period: 1 } }
    );
    return next();
  } catch (error) {
    console.log(error);
  }
}
