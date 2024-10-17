import cartModel from "../Model/cart-model.js";

export function createCart(req,res){
    const {thumbnail,title,description,price,rating,discountPercentage,stock,brand,warrantyInformation,returnPolicy,minimumOrderQuantity,shippingInformation} = req.body;
    const newCart = new cartModel({
        thumbnail:thumbnail,
        title:title,
        description:description,
        price:price,
        rating:rating,
        discountPercentage:discountPercentage,
        stock:stock,
        brand:brand,
        warrantyInformation:warrantyInformation,
        returnPolicy:returnPolicy,
        minimumOrderQuantity:minimumOrderQuantity,
        shippingInformation:shippingInformation,
    })
    newCart.save().then(data => {
        if(!data){
            return res.status(400).json({message :"Not found"})
        }
        res.send(data);
    })
}

  // update one cartitem using put method
  export function updateOneCart(req,res){
    const _id = req.params.id;
    cartModel.findByIdAndUpdate(_id,req.body).then(data => {
      if(!data){
        return res.status(404).json("No cartitems  found");
      }
      res.send(data);
    }).catch(err => res.status(500).json({Message : err.message}))
  }
  //delete cartitem from db 
  export function deleteOneCart(req,res){
    const _id = req.params.id;
    cartModel.findByIdAndDelete(_id).then(data => {
      if(!data){
        return res.status(404).json("No cartitem found");
      }
      res.send(data);
    }).catch(err => res.status(500).json({Message : err.message}))
  }