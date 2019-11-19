const express = require('express');
const expressEdge = require('express-edge');
const edge = require('edge.js');
const mongoose = require('mongoose')
const fileUpload = require("express-fileupload");
const expressSession = require("express-session");
const connectMongo = require("connect-mongo");
var bodyParser = require('body-parser');
const flash = require('express-flash');




const homePageController = require("./controllers/homePage");
const vendorRegisterController = require("./controllers/vendorRegister");
const vendoStoreController = require("./controllers/vendorStore");
const storeUserController = require("./controllers/storeUser");
const loginUserController = require("./controllers/loginUser");
const logoutController = require("./controllers/logout");
const vendorLoginController = require("./controllers/vendorLogin");
const vendorValidatController = require("./controllers/vendorValidator");
const vendorHomePageController = require("./controllers/vendorHomePage");
const addProductController = require("./controllers/addProduct");
const vendorProductListController = require("./controllers/vendorProductList");
const createPostController = require("./controllers/createPost");
const storePostController = require("./controllers/storePost");
const vendorUserProfileController = require("./controllers/vendorProfile");
const vendorUserBuyControll = require("./controllers/vendorUserBuy");
const socialController = require("./controllers/social")
const storeProduct = require("./controllers/productStore")
const deletePostController = require("./controllers/deletePost")
const deleteProductController = require("./controllers/deleteProduct")
const checkoutController = require("./controllers/checkout");
const ordersController = require("./controllers/orders")
const myordersController = require("./controllers/myorders");
const updateStockController = require("./controllers/updateStock");
const editProductController = require("./controllers/editProduct");
const updateController = require("./controllers/updateproduct");
const acceptOrderController = require("./controllers/acceptOrder");
const rejectOrderController = require("./controllers/rejectOrder");
const cancelOrderController = require("./controllers/cancelOrder");
const deliveredOrderController = require("./controllers/deliveredOrder");
const pendingOrdersController = require("./controllers/pendingOrders");
const carouselController = require('./controllers/carousel');
const storeCarouselController = require('./controllers/storeCarousel');
const adminVendorController = require('./controllers/adminVendor');
const customerChatController = require('./controllers/customerChat');
const addSubCategoryController = require("./controllers/addSubCategory");
const billController = require('./controllers/bill');
const adminVendorBlockController = require('./controllers/adminVendorBlock');

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

app.use(flash());

app.use(fileUpload());
app.use(express.static("public"));
app.use(expressEdge);
app.set("views", `${__dirname}/views`);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


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

app.post('/user/store',storeUserController);
app.post('/user/login',loginUserController);
app.get('/logout',logoutController);
app.post('/product/store',storeProduct);
app.post('/checkout/:id',checkoutController)
app.get('/logout',logoutController);
app.get('/product/add',addProductController);
app.get('/createPost',createPostController);
app.post('/post/store',storePostController);
app.get('/vendor/:id',vendorUserProfileController);
app.get('/buy/:id',vendorUserBuyControll)
app.get('/social',socialController)
app.get('/deletePost/:id',deletePostController)
app.get('/deleteProduct/:id',deleteProductController);
app.get('/orders',ordersController);
app.get('/myorders',myordersController);
app.post('/updatestock/:id',updateStockController);
app.get('/product/edit/:id',editProductController);
app.post('/product/update/:id',updateController);
app.get('/accept/:id',acceptOrderController);
app.get('/reject/:id',rejectOrderController);
app.get('/cancel/:id',cancelOrderController);
app.get('/delivered/:id',deliveredOrderController);
app.get('/pendingOrders',pendingOrdersController);
app.get('/admin/carousel',carouselController);
app.post('/storeCarousel',storeCarouselController);
app.get('/admin/vendors',adminVendorController);
app.get('/customerChat',customerChatController);
app.post('/addSubCategory',addSubCategoryController);
app.get('/bill/:id', billController);
app.get('/admin/:var/:id',adminVendorBlockController);


app.listen(4000, () => {
    console.log("App listening on port 4000");
  });