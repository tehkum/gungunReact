const Product = require("../models/productModel");
const Orders = require("../models/orderModel");
const Youtube = require("../models/youtubeModel");
const Review = require("../models/reviewModel");
const Coupon = require("../models/couponModel");
const Blog = require("../models/blogModel");
const cloudinary = require("cloudinary").v2;

async function getAdminPage(req, res) {
  try {
    const products = await Product.find();
    const orders = await Orders.find();
    const youtube = await Youtube.find();
    // const blog = await Blog.find();
    const coupon = await Coupon.find();

    res.status(200).json({
      success: true,
      products: products,
      orders: orders,
      youtube: youtube,
      coupon: coupon,
      // blog: blog,
    });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}

async function getAllProducts(req, res) {
  try {
    const products = await Product.find();
    res.status(200).json({
      success: true,
      products: products,
    });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}

async function getSpecificProduct(req, res) {
  try {
    const { productId } = req.params;
    const product = await Product.findById(productId);
    if (product) {
      res.status(200).json({ data: product });
    } else {
      res.status(404).json({ message: "Product not found" });
    }
  } catch (error) {
    console.log(error);
  }
}

async function getEditProduct(req, res) {
  try {
    res.status(200).json({
      success: true,
      message: "Get Edit Product Called!",
      id: req.params.id,
    });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}

async function editProduct(req, res) {
  try {
    const { id } = req.params;
    const updateProduct = await Product.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(200).json({
      success: true,
      updateProduct,
      message: "Product edited successfully",
    });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}

async function deleteProduct(req, res) {
  try {
    const { id } = req.params;

    const deletedProduct = await Product.findByIdAndDelete(id);

    res.status(200).json({
      success: true,
      message: "Product deleted successfully",
      deletedProduct: deletedProduct,
    });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}

async function getAddProduct(req, res) {
  try {
    res.status(200).json({
      success: true,
      message: "Get Add Product Called Successfully!",
    });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}

async function addProduct(req, res) {
  try {
    const {
      name,
      category,
      price,
      description1,
      description2,
      manufactureYear,
      image1,
      image2,
      image3,
      image4,
      edition,
      numberOfPages,
      language,
    } = req.body;

    const product = new Product({
      name: name,
      category: category,
      price: price,
      description1: description1,
      description2: description2,
      manufactureYear: manufactureYear,
      image1: image1,
      image2: image2,
      image3: image3,
      image4: image4,
      edition: edition,
      numberOfPages: numberOfPages,
      language: language,
    });

    // Product.insertOne(product)
    //     .then((result) => {
    //         console.log(result);
    //         res.status(200).json({
    //             success: true,
    //             message: "Product added successfully"
    //         })
    //     })
    //     .catch((error) => {
    //         console.error('Error inserting product:', error);
    //     });

    Product.create(product)
      .then((createdProduct) => {
        console.log("Product created:", createdProduct);
        res.status(200).json({
          success: true,
          message: "Product added successfully",
        });
      })
      .catch((error) => {
        console.error("Error creating product:", error);
      });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}

async function getAddYoutube(req, res) {
  try {
    res.status(200).json({
      success: true,
      message: "getAddYoutube called successfully!",
    });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}

async function addYoutube(req, res) {
  try {
    const { title, link } = req.body;
    const youtube = new Youtube({
      title: title,
      link: link,
    });

    Youtube.create(youtube)
      .then((createdYoutube) => {
        res.status(200).json({
          success: true,
          message: "Youtube added successfully",
        });
      })
      .catch((error) => {
        console.error("Error creating youtube:", error);
      });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}

async function deleteYoutube(req, res) {
  try {
    const { id } = req.params;

    const deletedYoutube = await Youtube.findByIdAndDelete(id);

    res.status(200).json({
      success: true,
      message: "Youtube video deleted successfully",
      deletedYoutube: deletedYoutube,
    });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}

async function deleteReview(req, res) {
  try {
    const { id } = req.params;

    const deletedReview = await Review.findByIdAndDelete(id);

    res.status(200).json({
      success: true,
      message: "Youtube video deleted successfully",
      deletedReview: deletedReview,
    });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}

async function getAllOrders(req, res) {
  try {
    const orders = await Orders.find();
    res.status(200).json({
      success: true,
      orders: orders,
    });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}

async function getAddCoupon(req, res) {
  try {
    res.status(200).json({
      success: true,
      message: "getCoupon called successfully!",
    });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}

async function addCoupon(req, res) {
  try {
    const { couponCode, discount, amount } = req.body;
    const coupon = new Coupon({
      couponCode: couponCode,
      discount: discount,
      amount: amount,
    });

    Coupon.create(coupon)
      .then((createdCoupon) => {
        res.status(200).json({
          success: true,
          message: "Coupon added successfully",
        });
      })
      .catch((error) => {
        console.error("Error creating Coupon:", error);
      });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}

async function deleteCoupon(req, res) {
  try {
    const { id } = req.params;

    const deletedCoupon = await Coupon.findByIdAndDelete(id);

    res.status(200).json({
      success: true,
      message: "coupon deleted successfully",
      deletedCoupon: deletedCoupon,
    });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}

async function getAddBlog(req, res) {
  try {
    res.status(200).json({
      success: true,
      message: "getBlog called successfully!",
    });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}

async function addBlog(req, res) {
  try {
    const { content, heading, coverImage, category } = req.body;
    const blog = new Blog({
      content: content,
      heading: heading,
      coverImage: coverImage,
      category: category
    });

    Blog.create(blog)
      .then((createdBlog) => {
        res.status(200).json({
          success: true,
          message: "Blog added successfully",
        });
      })
      .catch((error) => {
        console.error("Error creating Coupon:", error);
      });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}

async function getSpecificBlog(req, res) {
  try {
    const { blogId } = req.params;
    const blog = await Blog.findById(blogId);
    if (blog) {
      res.json({ data: blog });
    } else {
      res.json({ message: "no blog found" });
    }
  } catch (error) {
    res.status(500).send({ error: error });
  }
}

async function getAllBlog(req, res) {
  try {
    const blog = await Blog.find();
    if (blog) {
      res.json({ data: blog });
    } else {
      res.json({ message: "no blog found" });
    }
  } catch (error) {
    res.status(500).send({ error: error });
  }
}

async function deleteBlog(req, res) {
  try {
    const { id } = req.params;

    const deletedBlog = await Blog.findByIdAndDelete(id);

    res.status(200).json({
      success: true,
      message: "Blog deleted successfully",
      deletedBlog: deletedBlog,
    });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}

module.exports = {
  getAdminPage: getAdminPage,
  getAllProducts: getAllProducts,
  getEditProduct: getEditProduct,
  deleteReview: deleteReview,
  editProduct: editProduct,
  deleteProduct: deleteProduct,
  getAddProduct: getAddProduct,
  addProduct: addProduct,
  getAddYoutube: getAddYoutube,
  addYoutube: addYoutube,
  deleteYoutube: deleteYoutube,
  getAllOrders: getAllOrders,
  deleteCoupon,
  getAddCoupon,
  addCoupon,
  getAddBlog,
  addBlog,
  deleteBlog,
  getSpecificBlog,
  getAllBlog,
  getSpecificProduct,
};
