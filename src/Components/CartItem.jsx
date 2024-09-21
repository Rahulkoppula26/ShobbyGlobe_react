import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import {
  faStarHalfStroke,
  faRotateLeft,
  faCalendarCheck,
  faTags,
  faTruck,
  faArrowLeft,
} from "@fortawesome/free-solid-svg-icons";
function Cartitem() {
  // creating useparams to get the parameters of item
  const params = useParams();
  // subscribing to slice using useSelector
  const cartItems = useSelector((store) => store.cart.items);
  // filtering the item from the added cart items
  let filtered = cartItems.filter((carts) => carts.id == params.id);

  return (
    <>
      <div>
        {/*complete details of the item from the api from filtered cart item in above function */}
        <div className="backtohome">
          <Link to="/">
            <FontAwesomeIcon icon={faArrowLeft} /> <span>Back to Home </span>
          </Link>
        </div>
        <div className="cart-data">
          <div className="product-image">
            <img
              src={filtered[0].thumbnail}
              alt=""
              height="500px"
              width="400px"
            />
          </div>
          <div className="product-data">
            <div className="productdata-container">
              <h2 className="title">{filtered[0].title}</h2>
              <h2>
                $ {filtered[0].price}
                <span>
                  <FontAwesomeIcon icon={faTags} />
                  {filtered[0].discountPercentage}
                </span>
              </h2>
              <h2>
                <span>Brand : </span>
                <i>{filtered[0].brand}</i>
              </h2>
              <h2>
                <FontAwesomeIcon icon={faStarHalfStroke} /> {filtered[0].rating}
              </h2>
              <h3>
                <FontAwesomeIcon icon={faTruck} />{" "}
                {filtered[0].shippingInformation} || Quantity:{" "}
                {filtered[0].minimumOrderQuantity}
              </h3>

              <h4>{filtered[0].description}</h4>
              <h4>Availability : {filtered[0].stock}</h4>

              <span>
                <FontAwesomeIcon className="icon" icon={faRotateLeft} />
                {filtered[0].returnPolicy}
              </span>
              <span>
                <FontAwesomeIcon className="icon" icon={faCalendarCheck} />
                {filtered[0].warrantyInformation}
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Cartitem;
{
  /*  */
}
