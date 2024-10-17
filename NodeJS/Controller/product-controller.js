import productModel from "../Model/product-model.js";

export function fetchProducts(req,res){
    productModel.find().then(data => {
        if(!data) {
            return res.status(400).json({Meassage : "Error"})
        }
        res.send(data);
    }).catch(err => res.status(500).json({message: err.message}))
}
// find one products from the database
export function findOneProduct(req,res){
    const _id = req.params.id;
    productModel.findById(_id).then(data => {
      if(!data){
        return res.status(404).json("No products found");
      }
      res.send(data);
    }).catch(err => res.status(500).json({Message : err.message}))
  }
  