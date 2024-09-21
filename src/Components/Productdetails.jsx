import "./Style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStarHalfStroke } from "@fortawesome/free-solid-svg-icons";
function Productdetails(props) {
  return (
    <>
      {/*getting product details using props */}
      <div className="product-card">
        <div className="product-container">
          <center>
            <img
              className="product-cover"
              src={props.allDetails.thumbnail}
              alt="Product_Image"
              width="160px"
              height="150px"
            />
          </center>
          <div className="product-details">
            <h3 className="product-title">{props.allDetails.title} </h3>
            <p className="product-author">
              <i>{props.allDetails.description}</i>{" "}
            </p>
            <h3>$ {props.allDetails.price} </h3>
            <h4 className="product-description">
              {" "}
              <FontAwesomeIcon icon={faStarHalfStroke} />{" "}
              {props.allDetails.rating}{" "}
            </h4>
          </div>
        </div>
      </div>
    </>
  );
}
export default Productdetails;
