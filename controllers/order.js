// const Order = require("../models/orderModel");
// const dayjs = require("dayjs");

// async function getCheckoutPage(req, res) {
//   try {
//     res.status(200).json({
//       success: true,
//     });
//   } catch (error) {
//     console.error("Error:", error);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// }

// const formatDate = () => dayjs().format("YYYY-MM-DDTHH:mm:ssZ");

// async function checkout(req, res) {
//   try {
//     const {
//       productData,
//       fullName,
//       phoneNo,
//       address1,
//       address2,
//       city,
//       country,
//       pincode,
//       totalPrice,
//     } = req.body;

//     const order = new Order({
//       productData: productData,
//       fullName: fullName,
//       phoneNo: phoneNo,
//       address1: address1,
//       address2: address2,
//       city: city,
//       country: country,
//       pincode: pincode,
//       totalPrice: totalPrice,
//       orderDate: formatDate(),
//     });

//     Order.create(order)
//       .then((createdOrder) => {
//         // console.log('Youtube created:', createdYoutube);
//         res.status(200).json({
//           success: true,
//           message: "Order added successfully",
//         });
//       })
//       .catch((error) => {
//         console.error("Error creating order:", error);
//       });
//   } catch (error) {
//     console.error("Error:", error);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// }

// async function getDeliveryPage(req, res) {
//   try {
//     res.status(200).json({
//       success: true,
//     });
//   } catch (error) {
//     console.error("Error:", error);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// }

// async function confirmDelivery(req, res) {
//   try {
//     res.status(200).json({
//       success: true,
//     });
//   } catch (error) {
//     console.error("Error:", error);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// }

// async function getConfirmOrder(req, res) {
//   try {
//     res.status(200).json({
//       success: true,
//     });
//   } catch (error) {
//     console.error("Error:", error);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// }

// module.exports = {
//   getCheckoutPage: getCheckoutPage,
//   checkout: checkout,
//   getDeliveryPage: getDeliveryPage,
//   confirmDelivery: confirmDelivery,
//   getConfirmOrder: getConfirmOrder,
// };

const Order = require("../models/orderModel");
const dayjs = require("dayjs");
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp.office365.com", // Outlook SMTP server
  port: 587, // Port for TLS
  secure: false, // TLS requires secure to be false
  auth: {
    user: "gungunsewing@outlook.in",
    pass: "gungun123",
  },
});

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

const formatDate = () => dayjs().format("YYYY-MM-DDTHH:mm:ssZ");

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
      totalPrice,
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
      totalPrice: totalPrice,
      orderDate: formatDate(),
    });

    Order.create(order)
      .then((createdOrder) => {
        // console.log('Youtube created:', createdYoutube);

        // Create an email message
        const mailOptions = {
          from: "gungunsewing@outlook.in",
          to: "gungunsewing@outlook.in",
          subject: "New Order received",
          html: `
                    <p>Hello, a new order has been placed. Here are the details:</p>
                    <ul>
                    <li>Product Data: ${order.productData}</li>
                    <li>Full Name: ${order.fullName}</li>
                    <li>Phone Number: ${order.phoneNo}</li>
                    <li>Address Line 1: ${order.address1}</li>
                    <li>Address Line 2: ${order.address2}</li>
                    <li>City: ${order.city}</li>
                    <li>Country: ${order.country}</li>
                    <li>Pincode: ${order.pincode}</li>
                    <li>Total Price: ${order.totalPrice}</li>
                    <li>Order Date: ${order.orderDate}</li>
                    </ul>
                    <p>Thank you for your order!</p>
                `,
        };

        // Send the email
        transporter.sendMail(mailOptions, (error, info) => {
          if (error) {
            console.log("Error sending email:", error);
          } else {
            console.log("Email sent:", info.response);
          }
        });

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
