const Order = require("../models/orderModel");

async function getCheckoutPage(req, res) {
  try {
    res.status(200).json({
      success: true,
    });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}

async function checkout(req, res) {
  try {
    const {
      productData,
      fullName,
      phoneNo,
      address1,
      address2,
      city,
      country,
      pincode,
    } = req.body;

    const order = new Order({
      productData: productData,
      fullName: fullName,
      phoneNo: phoneNo,
      address1: address1,
      address2: address2,
      city: city,
      country: country,
      pincode: pincode,
    });

    Order.create(order)
      .then((createdOrder) => {
        // console.log('Youtube created:', createdYoutube);
        res.status(200).json({
          success: true,
          message: "Order added successfully",
        });
      })
      .catch((error) => {
        console.error("Error creating order:", error);
      });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}

async function getDeliveryPage(req, res) {
  try {
    res.status(200).json({
      success: true,
    });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}

async function confirmDelivery(req, res) {
  try {
    res.status(200).json({
      success: true,
    });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}

async function getConfirmOrder(req, res) {
  try {
    res.status(200).json({
      success: true,
    });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}

module.exports = {
  getCheckoutPage: getCheckoutPage,
  checkout: checkout,
  getDeliveryPage: getDeliveryPage,
  confirmDelivery: confirmDelivery,
  getConfirmOrder: getConfirmOrder,
};
