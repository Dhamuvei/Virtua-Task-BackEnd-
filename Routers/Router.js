const Router = require("express").Router();
const ImageStore = require("../middleware/multer");
const controller = require("../controller/users");
const auth = require('../controller/login_registration')

Router.post("/register",auth.register);

Router.post("/login",auth.register);

Router.post("/create", ImageStore.array("photo"), controller.createData);

Router.get("/users/get", controller.getAllData);

Router.get("/get/:id", controller.getById);

Router.put("/update/:id", controller.updateData);

Router.delete("/delete/:id", controller.deleteData);

module.exports = Router;
