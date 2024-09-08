const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const cloudinary = require("cloudinary").v2;
const fileUpload = require("express-fileupload");
const cors = require("cors");
const request = require("request"); // Ensure you have the 'request' module installed
const errorMiddleware = require("./middlewares/errors");

const app = express();

// Middleware setup
app.use(cors());
app.use(express.json({ limit: '30kb' }));
app.use(bodyParser.urlencoded({ extended: true, limit: '30kb' }));
app.use(cookieParser());
app.use(fileUpload());

// Cloudinary configuration
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Proxy setup
app.use("/proxy", (req, res) => {
  const url = `https://some-proxy-url.com${req.originalUrl}`;
  req.pipe(request(url)).pipe(res);
});

// Route imports
const foodRouter = require("./routes/foodItem");
const restaurantRouter = require("./routes/restaurant");
const menuRouter = require("./routes/menu");
const couponRouter = require("./routes/couponRoutes");
const orderRouter = require("./routes/order");
const authRouter = require("./routes/auth");
const paymentRouter = require("./routes/payment");
const cartRouter = require("./routes/cart");

// Route setup
app.use("/api/v1/eats/food", foodRouter);
app.use("/api/v1/eats/menus", menuRouter);
app.use("/api/v1/eats/restaurant", restaurantRouter);
app.use("/api/v1/eats/orders", orderRouter);
app.use("/api/v1/eats/auth", authRouter);
app.use("/api/v1", paymentRouter);
app.use("/api/v1/coupon", couponRouter);
app.use("/api/v1/eats/cart", cartRouter);

// View engine setup
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

// 404 route
app.use("*", (req, res) => {
  res.status(404).json({
    status: "fail",
    message: `Can't find ${req.originalUrl} on this server!`,
  });
});

// Error middleware
app.use(errorMiddleware);

module.exports = app;
