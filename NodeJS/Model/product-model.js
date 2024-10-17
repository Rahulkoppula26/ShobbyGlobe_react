import mongoose from "mongoose";
// import {Schema} from "mongoose"
const productSchema = new mongoose.Schema({
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
const productModel = mongoose.model("product",productSchema);
export default productModel;