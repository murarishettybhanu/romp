const express = require('express');
const expressEdge = require('express-edge');
const edge = require('edge.js');
const mongoose = require('mongoose')
const fileUpload = require("express-fileupload");
const expressSession = require("express-session");
const connectMongo = require("connect-mongo");


const homePageController = require("./controllers/homePage");
<<<<<<< HEAD
const vendorRegisterController = require("./controllers/vendorRegister");
const vendoStoreController = require("./controllers/vendorStore");
=======
const userRegisterController = require("./controllers/userRegister");
const storeUserController = require("./controllers/storeUser");
const loginPageController = require("./controllers/loginPage");
const loginUserController = require("./controllers/loginUser");
const logoutController = require("./controllers/logout")
>>>>>>> 74af5a39262d1bd3438dfa1916a5553f99fb7607

const app = new express();
mongoose.connect("mongodb://localhost/romp", { useNewUrlParser: true });

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
<<<<<<< HEAD
app.get('/vendorRegister', vendorRegisterController);
app.post('/vendor/store', vendoStoreController);

=======
app.get('/user/register',userRegisterController);
app.post('/user/store',storeUserController);
app.get('/user/loginpage',loginPageController);
app.post('/user/login',loginUserController);
app.get('/logout',logoutController)
>>>>>>> 74af5a39262d1bd3438dfa1916a5553f99fb7607

app.listen(4000, () => {
    console.log("App listening on port 4000");
  });