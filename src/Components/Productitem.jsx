import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStarHalfStroke,
  faRotateLeft,
  faCalendarCheck,
  faTags,
  faTruck,
  faArrowLeft,
} from "@fortawesome/free-solid-svg-icons";
import "./Style.css";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addItem } from "../utils/cartSlice"; //dispatching the items concept

function Productitem() {
  const [prodDetail, setProdDetail] = useState([]);
  const [plus, setPlus] = useState(0);
  // creating useparams to get the parameters of item
  const params = useParams();
  // calling a reducer function using useDispatch (dispatching an action)
  const dispatch = useDispatch();
  const id = params.id;
  // using custom hook from utils data
  useEffect(() => {
    fetchData();
  },[]);
  async function fetchData() {
    const token = localStorage.getItem("accessToken");
    const res = await fetch(`http://localhost:4000/products/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authorisation: `JWT ${token}`,
      },
    });
    const data = await res.json();
    setProdDetail(data);
    
  } 
  // using reducers to add item to cart
  function handleAddItem(prodDetail) {
    dispatch(addItem(prodDetail));
    setPlus(plus + 1);
  }
  return (
    <>
      <div>
        {/* complete product details  */}
        <div className="backtohome">
          <Link to="/">
            <FontAwesomeIcon icon={faArrowLeft} /> <span>Back to Home </span>
          </Link>
        </div>
        <div className="product-item">
          <div className="product-image">
            <img
              src={prodDetail.thumbnail}
              alt=""
              height="500px"
              width="400px"
            />
            <div>
              <button onClick={() => handleAddItem(prodDetail)}>
                Add to cart ({plus})
              </button>
            </div>
          </div>
          <div className="product-data">
            <div className="productdata-container">
              <h2 className="title">{prodDetail.title}</h2>
              <h2>
                $ {prodDetail.price}
                <span>
                  <FontAwesomeIcon icon={faTags} />
                  {prodDetail.discountPercentage}
                </span>
              </h2>
              <h2>
                <span>Brand : </span>
                <i>{prodDetail.brand}</i>{" "}
              </h2>
              <h2>
                <FontAwesomeIcon icon={faStarHalfStroke} /> {prodDetail.rating}
              </h2>
              <h3>
                <FontAwesomeIcon icon={faTruck} />{" "}
                {prodDetail.shippingInformation} || Quantity:{" "}
                {prodDetail.minimumOrderQuantity}{" "}
              </h3>

              <h4>{prodDetail.description}</h4>
              <h4>Availability : {prodDetail.stock}</h4>

              <span>
                <FontAwesomeIcon className="icon" icon={faRotateLeft} />{" "}
                {prodDetail.returnPolicy}
              </span>
              <span>
                <FontAwesomeIcon className="icon" icon={faCalendarCheck} />{" "}
                {prodDetail.warrantyInformation}
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Productitem;
