const express = require('express');
const expressEdge = require('express-edge');
const edge = require('edge.js');
const mongoose = require('mongoose')
const fileUpload = require("express-fileupload");
const expressSession = require("express-session");
const connectMongo = require("connect-mongo");


const homePageController = require("./controllers/homePage");
const vendorRegisterController = require("./controllers/vendorRegister");
const vendoStoreController = require("./controllers/vendorStore");
const userRegisterController = require("./controllers/userRegister");
const storeUserController = require("./controllers/storeUser");
const loginPageController = require("./controllers/loginPage");
const loginUserController = require("./controllers/loginUser");
const logoutController = require("./controllers/logout");
const vendorLoginController = require("./controllers/vendorLogin");
const vendorValidatController = require("./controllers/vendorValidator");
<<<<<<< HEAD
const vendorHomePageController = require("./controllers/vendorHomePage");
=======
const addProductController = require("./controllers/addProduct");
const productStoreController = require("./controllers/productStore")
>>>>>>> b884e046eacfe7aa3c77963e4b7a0e938383c7d5

const app = new express();
mongoose.connect("mongodb://localhost/romp", { useNewUrlParser: true  ,  useCreateIndex: true });

const mongoStore = connectMongo(expressSession);

app.use(
  expressSession({
    secret: "secret",
    store: new mongoStore({
      mongooseConnection: mongoose.connection
    }),
    resave: true,
    saveUninitialized: true
  })
);

app.use(fileUpload());
app.use(express.static("public"));
app.use(expressEdge);
app.set("views", `${__dirname}/views`);


app.use("*", (req, res, next) => {
  edge.global("auth", req.session.userId);
  next();
});

app.get('/',homePageController);
app.get('/vendorRegister', vendorRegisterController);
app.post('/vendor/store', vendoStoreController);
app.get('/vendor/login',vendorLoginController);
app.post('/vendor/login/validate',vendorValidatController);
app.get('/vendor/homePage',vendorHomePageController);

app.get('/user/register',userRegisterController);
app.post('/user/store',storeUserController);
app.get('/user/loginpage',loginPageController);
app.post('/user/login',loginUserController);
<<<<<<< HEAD
app.get('/logout',logoutController)

=======
app.get('/logout',logoutController);
app.get('/product/add',addProductController);
app.post('/product/store',productStoreController);
>>>>>>> b884e046eacfe7aa3c77963e4b7a0e938383c7d5


app.listen(4000, () => {
    console.log("App listening on port 4000");
  });