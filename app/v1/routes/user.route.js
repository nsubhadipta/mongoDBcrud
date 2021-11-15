const userController = require("../controllers/user.controller");
module.exports = (app, mainpath) => {
  app.route(mainpath + "/test-api").get((req, res) => {
    res.send("test api is working");
  });
  app.route(mainpath + "/getAllUser").get(userController.getAllUser);
  app.route(mainpath + "/addUser").post(userController.register_new_user);
};