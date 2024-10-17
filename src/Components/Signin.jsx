import { useState } from "react";
import "./Signin.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faXmark} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function Signin(props){
    
    const [isSignup,setIsSignup] = useState(true);
    // state management to trigger the input value of following fields
    const [email, setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [username,setUsername] = useState("");
    // to handle the user registration
    function handleRegister() {
        console.log("register");
        const response = fetch("http://localhost:4000/register",{
          method:"POST",
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            username:username,
            email:email,
            password:password
          })
        })
        const result = response.then(data => data.json())
        result.then(data => {console.log(data)
          props.onClose();
        })
    }
    // to handle user login details using token verification
    function handleLogin() {
      console.log("login");
      const response = fetch("http://localhost:4000/login",{
         method:"POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email:email,
          password:password
        })
      })
      const result = response.then(res => res.json())
      result.then(data => {console.log(data)
        props.onClose();
        // storing the user detaqils in local storage
        localStorage.setItem("accessToken",data.accessToken)
      })
  }
    return (
      <>
          {/* entire registration and login form which is displaying according to the state updation */}
          <div className="signin-form"  >
            {props.visible && 
            <form className="form" >
            <button type="button" onClick={props.onClose} ><FontAwesomeIcon icon={faXmark} /></button>
              <p className="form-title">Sign in to your account</p>
              {!isSignup && 
                <div className="input-container">
                    <input type="text" value={username} name="username" onChange={(e)=> setUsername(e.target.value)} className="input" placeholder="Enter Fullname" />
                    <span></span>
                </div>
              }
              <div className="input-container">
                <input type="email" value={email} name="Email" onChange={(e)=>setEmail(e.target.value)} className="input" placeholder="Enter email" />
                <span></span>
              </div>
              <div className="input-container">
                <input type="password" value={password} onChange={(e)=> setPassword(e.target.value)} className="input" name="password" placeholder="Enter password" />
              </div>
              <div className="checkbox">
              <label  className="checkbox">Remember Me <input type="checkbox" name="" id="" /></label>
              </div>
              <button type="button" className="submit"  onClick= {!isSignup ? handleRegister : handleLogin} >
                {!isSignup ? "Register" : "Login to your account"}
              </button>
              <p className="signup-link">
                Not registered ?
                <Link to="" className="create" onClick={()=>setIsSignup(false)} >Create account</Link>
              </p>
            </form>
             }
          </div>
      </>
    );
}
export default Signin;