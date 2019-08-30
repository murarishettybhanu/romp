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
const vendorHomePageController = require("./controllers/vendorHomePage");
const addProductController = require("./controllers/addProduct");
const vendorProductListController = require("./controllers/vendorProductList");
const createPostController = require("./controllers/createPost");
const storePostController = require("./controllers/storePost");
const vendorUserProfilecontroller = require("./controllers/vendorProfile");
const vendorUserBuyControll = require("./controllers/vendorUserBuy");
const socialController = require("./controllers/social")
const storeProduct = require("./controllers/productStore")
const deletePostController = require("./controllers/deletePost")
const deleteProductController = require("./controllers/deleteProduct")

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
app.get('/vendor/products/list',vendorProductListController);

app.get('/user/register',userRegisterController);
app.post('/user/store',storeUserController);
app.get('/user/loginpage',loginPageController);
app.post('/user/login',loginUserController);
app.get('/logout',logoutController);
app.post('/product/store',storeProduct)

app.get('/logout',logoutController);
app.get('/product/add',addProductController);
app.get('/createPost',createPostController);
app.post('/post/store',storePostController);
app.get('/vendor/:id',vendorUserProfilecontroller);
app.get('/buy/:id',vendorUserBuyControll)
app.get('/social',socialController)
app.get('/deletePost/:id',deletePostController)
app.get('/deleteProduct/:id',deleteProductController)


app.listen(4000, () => {
    console.log("App listening on port 4000");
  });