import {fetchProducts, findOneProduct } from "../Controller/product-controller.js";
import { verifyToken } from "../Middlewares/verifyToken.js";
export function routes(app){
    app.get("/products",verifyToken,fetchProducts);
    app.get("/products/:id",findOneProduct);
}