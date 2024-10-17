import mongoose from "mongoose";
const cartSchema = new mongoose.Schema({
  thumbnail: String,
  title: String,
  description: String,
  price: String,
  rating: String,
  discountPercentage: String,
  stock: String,
  brand: String,
  warrantyInformation: String,
  returnPolicy: String,
  minimumOrderQuantity: String,
  shippingInformation:String,
});
const cartModel = mongoose.model("cart",cartSchema);
export default cartModel;