import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Productdetails from "./Productdetails";
import Header from "./Header";

function Productlist() {
  const [productsList, setProductsList] = useState([]);
  const [updatedProductsAre, setUpdatedProductsAre] = useState(productsList);
  // setting filtered products
  useEffect(() => {
    fetchData();
  },[]);
  // fnction to fetch the data from the routes using verification token
  async function fetchData() {
    const token = localStorage.getItem("accessToken");
    const res = await fetch("http://localhost:4000/products",{
      method:"GET",
          headers: {
            'Content-Type': 'application/json',
            authorisation:`JWT ${token}`
          },
    });
    const data = await res.json();
    
    setProductsList(data);
  } 
  function filteringProducts(filtered) {
    setUpdatedProductsAre(filtered);
  }

  return (
    <>
      <div>
        <div>
          <Header filterFunction={filteringProducts}></Header>
        </div>
        <div className="all-cards">
          {updatedProductsAre.map((product) => {
            return (
              <Link to={`/product/${product._id}`} key={product._id}>
              <Productdetails
                key={product._id}
                allDetails={product}
              ></Productdetails>
              </Link>
            )
          })}
        </div>
      </div>
    </>
  );
}
export default Productlist;
