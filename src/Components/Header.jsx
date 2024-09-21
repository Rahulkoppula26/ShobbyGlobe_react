import "./Style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import useCustomHook from "../utils/useCustomHook";
import { Link } from "react-router-dom";

function Header(props) {
  const [searchText, setSearchText] = useState("");
  // using custom hook from utils data
  const { data, error, loading } = useCustomHook(
    "https://dummyjson.com/products"
  );
  const [search, setSearch] = useState([]);
  // fetching the custom hook and checking if the data is fetched or not
  useEffect(() => {
    if (data) {
      setSearch(data.products);
      filteredProducts();
    }
  }, [data]);
  // error msg for custom hook fecthing
  if (error) {
    return <p>Error in loading data: {error} </p>;
  }
  // loading msg for custom hook fecthing

  if (loading) {
    return <h2 className="load">Loading .....</h2>;
  }
  // function to target the value of input from the user
  function updateSearch(e) {
    setSearchText(e.target.value);
  }
  // converting to lowercase and filtering the matched data from searchtext by user
  function filteredProducts() {
    const filtered = search.filter((product) =>
      product.title.toLowerCase().includes(searchText.toLowerCase())
    );
    props.filterFunction(filtered);
  }
  return (
    <>
      {/* navigation bar  */}
      <nav className="header">
        <h2 className="hover1">Shobby Globe</h2>

        <div className="nav-items">
          <h2>
            <Link to="/" className="home">
              Home
            </Link>
          </h2>
        </div>
        <div>
          <input
            type="text"
            className="input-field"
            placeholder="Enter the Product Here"
            onChange={updateSearch}
          />
          <button onClick={filteredProducts}>Search</button>
        </div>
        <div className="hover">
          <Link to="/cart">
            <h2>
              <FontAwesomeIcon className="hover3" icon={faCartShopping} /> Cart
            </h2>
          </Link>
        </div>
      </nav>
    </>
  );
}
export default Header;
