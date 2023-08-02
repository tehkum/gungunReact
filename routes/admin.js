const express = require("express");
const router = express.Router();

const {
  getAdminPage,
  getAllProducts,
  getEditProduct,
  editProduct,
  deleteProduct,
  getAddProduct,
  addProduct,
  getAllOrders,
  getAddYoutube,
  addYoutube,
  deleteYoutube,
  deleteReview,
  getAddCoupon,
  addCoupon,
  deleteCoupon,
} = require("../controllers/admin");

router.route("/").get(getAdminPage);

router.route("/products").get(getAllProducts);

router.route("/products/:id/edit").get(getEditProduct).put(editProduct);

router.route("/products/:id/delete").delete(deleteProduct);

router.route("/products/add").get(getAddProduct).post(addProduct);

router.route("/youtube/add").get(getAddYoutube).post(addYoutube);

router.route("/youtube/:id/delete").delete(deleteYoutube);

router.route("/orders").get(getAllOrders);

// router.route("/orders/update-order/:id/:message").get(updateOrder);

router.route("/review/:productId/:id/delete").delete(deleteReview);

router.route("/coupon/add").get(getAddCoupon).post(addCoupon);

router.route("/coupon/:id/delete").delete(deleteCoupon);

module.exports = router;
