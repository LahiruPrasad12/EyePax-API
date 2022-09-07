const express = require("express");
const router = express.Router();
const ItemController = require('../../Controllers/SupplierController/itemController')
const authController = require('../../Controllers/auth_controller');

router.route("/additem")
    .post(authController.protect,ItemController.Store);

router.route("/getall")
    .get(authController.protect,ItemController.AllItems);

router.route("/update/:id")
    .put(authController.protect,ItemController.UpdateItem);

router.route("/delete/:id")
    .delete(authController.protect,ItemController.DeleteItem);

module.exports = router;

