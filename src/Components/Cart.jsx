import { useSelector } from "react-redux";

import Cartdetails from "./Cartdetails";
import "./Style.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

function Cart() {
  // subscribing to slice using useSelector
  const cartItems = useSelector((store) => store.cart.items);
  if (cartItems == 0) {
    return (
      <>
        <div className="backtohome">
          <Link to="/">
            <FontAwesomeIcon icon={faArrowLeft} /> <span>Back to Home </span>
          </Link>
        </div>

        {/* displaying a message when cart is empty */}
        <center className="cart-msg">
          <h1>Cart is Empty </h1>
          <h1>Add more items to your cart</h1>
        </center>
      </>
    );
  }
  return (
    <>
      <div>
        <div className="backtohome">
          {/* creating a link to go back to home */}
          <Link to="/">
            <FontAwesomeIcon icon={faArrowLeft} /> <span>Back to Home </span>
          </Link>
        </div>
        <center>
          <h1>Cart Items</h1>
        </center>
        <div className="product-item cart-items">
          {/* mapping through the cartitems to display all the added cart items by user */}
          {cartItems.map((item) => {
            return (
              <div key={item.id}>
                <Link to={`/cartitem/${item.id}`} key={item.id}>
                  <Cartdetails key={item.id} details={item}></Cartdetails>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
export default Cart;
