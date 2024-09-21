import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStarHalfStroke,
  faPlus,
  faMinus,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { removeItem } from "../utils/cartSlice";

function Cartdetails(props) {
  // calling a reducer function using useDispatch (dispatching an action)
  const dispatch = useDispatch();
  let number = props.details.quantity;
  const [plus, setPlus] = useState(number);
  // cart item incrementer function
  function increment() {
    setPlus(plus + 1);
  }
  // cart item decrementer function
  function decrement() {
    if (plus > 0) {
      setPlus(plus - 1);
    }
  }
  // removing item function using reducers
  function handleRemove() {
    dispatch(removeItem(props.details));
  }
  return (
    <>
      <div className="product-card">
        {/* creating card to display item information */}
        <div className="product-container">
          <center>
            <img
              className="product-cover"
              src={props.details.thumbnail}
              alt="Product_Image"
              width="160px"
              height="130px"
            />
          </center>
          <div className="product-details">
            <h3 className="product-title">{props.details.title} </h3>
            <p className="product-author">
              {" "}
              <i>{props.details.description}</i>{" "}
            </p>
            <h4>$ {props.details.price} </h4>
            <h4 className="product-description">
              <FontAwesomeIcon icon={faStarHalfStroke} />
              {props.details.rating}
            </h4>
            <h4>Quantity : {plus}</h4>

            {/*creating decrement , removeitem , increment buttons */}
            <center>
              <div className="btns">
                <Link>
                  <button onClick={decrement}>
                    <FontAwesomeIcon className="faMinus" icon={faMinus} />
                  </button>
                  <button className="remove" onClick={() => handleRemove()}>
                    Remove item {plus}{" "}
                  </button>
                  <button onClick={increment}>
                    <FontAwesomeIcon className="faPlus" icon={faPlus} />
                  </button>
                </Link>
              </div>
            </center>
          </div>
        </div>
      </div>
    </>
  );
}
export default Cartdetails;
