const express=require("express");
const app=express();
const path=require("path");
const bodyParser=require("body-parser");

const productRoute=require("./routing/productRoute");

app.set("view engine","ejs");
app.set("views","views");

app.use(express.static(path.join(__dirname,"public")));
app.use(bodyParser.urlencoded({extended : false }));

app.use(productRoute);

app.listen(3000);