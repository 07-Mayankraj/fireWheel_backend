const express = require("express");
const controller = require("../controllers/products.controller");
const productRoute = express.Router();

productRoute.get("/", controller.getall);
productRoute.get("/filter", controller.filterproducts);
productRoute.get("/:id", controller.getall);

productRoute.post("/add", controller.create);
productRoute.post("/addAllDuckingData", controller.addAllDuckingData);
productRoute.patch("/update/:id", controller.update);
productRoute.delete("/delete/:id", controller.delete);

module.exports = productRoute;
