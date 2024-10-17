import express from "express";
import mongoose from "mongoose";
import { routes } from "./Routes/product-routes.js";
import { userRoutes } from "./Routes/user-routes.js";
import { cartRoutes } from "./Routes/cart-routes.js";
import cors from "cors"
let products =[];
const app = new express();
app.use(express.json());
const router = express.Router();
app.use("/", router);
app.use(cors());
app.listen(4000,()=>{
    console.log("server is running");
})
routes(app);
userRoutes(app)
cartRoutes(app)
mongoose.connect("mongodb://localhost:27017");
const db = mongoose.connection;
db.on("open",() =>{
    console.log("connection Successful");
})
db.on("error",() =>{
    console.log("connection not Successful");
})

app.post("/book",(req,res) => {
    const {thumbnail,title,description,price,rating} = req.body;
    const newProduct = {
        thumbnail:thumbnail,
        title:title,
        description:description,
        price:price,
        rating:rating,
    } 
    products.push(newProduct);
    res.send(products);
})
