import "./Style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping,faUser } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Signin from "./Signin";

function Header(props) {
  const [searchText, setSearchText] = useState("");
  // to control the signin form as visible or not visible
  const [visible,setVisible] =useState(false);
  const openModel = () => {
    setVisible(true);
  }
  const closeModel =() =>{
    setVisible(false);
  }

  const [search, setSearch] = useState([]);
  // fetching the data and checking if the data is fetched or not
  useEffect(() => {
   fetchData();
  },[]);
  async function fetchData() {
    const token = localStorage.getItem("accessToken");
    const res = await fetch("http://localhost:4000/products",{
      method:"GET",
          headers: {
            'Content-Type': 'application/json',
            authorisation:`JWT ${token}`
          },
    })
    const data = await res.json();
    setSearch(data);
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
        <div>
          <Link>
          <h2>
          <FontAwesomeIcon icon={faUser} /><button className="btn-signin" onClick={openModel}>SignIn</button>
          </h2>
          </Link>
        </div>
        <div className="hover">
          <Link to="/cart">
            <h2>
              <FontAwesomeIcon className="hover3" icon={faCartShopping} /> Cart
            </h2>
          </Link>
        </div>
      </nav>
      <Signin visible={visible} onClose={closeModel} />
    </>
  );
}
export default Header;
