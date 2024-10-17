import { verifyToken } from "../Middlewares/verifyToken.js";
import { createCart, deleteOneCart, updateOneCart } from "../Controller/cart-controller.js";
export function cartRoutes(app){
    
    app.post("/cart",verifyToken,createCart);
    app.put("/cart/:id",verifyToken,updateOneCart);
    app.delete("/cart/:id",verifyToken,deleteOneCart);
}