import React, {useState} from 'react'
import './Auth.css'
import Logo from "../../img/logo.png";
import { login, signUp } from '../../actions/AuthAction';
import {useDispatch, useSelector} from "react-redux"
function Auth() {
  const initialState = {
    firstname: "",
    lastname: "",
    username: "",
    password: "",
    confirmpass: "",
  };
  const dispatch = useDispatch(); 
  const loading = useSelector ((state) => state.authReducer.loading)
  console.log(loading);
  const [isSignUp, setIsSignUp] = useState(false);
  const [data, setData] = useState(initialState);
  const [confirmPass, setConfirmPass] = useState(true);

  // handle Change in input
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  // Form Submission
  const handleSubmit = (e) => {
    setConfirmPass(true);
    e.preventDefault();
    if (isSignUp) {
      data.password === data.confirmpass 
        ? dispatch(signUp(data))
        : setConfirmPass(false);
    } 
    else {
      dispatch(login(data));
    }
  };

  // Reset Form
  const resetForm = () => {
    setData(initialState);
    setConfirmPass(confirmPass);
  };
  return (
    <div className="Auth">
      {/* Left side */}
    <div className="a-left">
        <img src={Logo} alt="" />
        <div className="Webname">
          <h1>TrungLuongdev</h1>
          <h6>Explore the ideas throughout the world</h6>
        </div>
    </div>
{/* Right side */}
    <div className="a-right">
        <form className="infoForm authForm" onSubmit={handleSubmit}>
          <h3> {isSignUp ? "Sign up" : "Login"} </h3>
          {isSignUp && 
          <div>
          <input
            type="text"
            placeholder="First Name"
            className="infoInput"
            name="firstname"
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Last Name"
            className="infoInput"
            name="lastname"
            onChange={handleChange}
          />
        </div>
          }
          
  
          <div>
            <input
              type="text"
              className="infoInput"
              name="username"
              placeholder="Usernames"
              onChange={handleChange}
            />
          </div>
  
          <div>
            <input
              type="password"
              className="infoInput"
              name="password"
              placeholder="Password"
              onChange={handleChange}
            />
            {isSignUp && 
            <input
            type="password"
            className="infoInput"
            name="confirmpass"
            placeholder="Confirm Password"
            onChange={handleChange}
          />
            }
          </div>
            <span style={{color:"red", fontSize: '12px', alignSelf: "flex-end",
              marginRight: "5px",
              display: confirmPass ? "none" : "block",}}
            >
                * Password confirmation is not correct!
                </span>
          <div>
              {/* <span style={{fontSize: '12px', cursor: "pointer"}} onClick={() => setIsSignUp((prev) => !prev)}>{isSignUp ? " Already have an account. Login!" : "Don't have an account? Sign up"}</span> */}
              <span style={{ fontSize: '12px' }}>
    {isSignUp ? (
      <>
        Already have an account?{" "} 
        <span 
          style={{ 
            color: '#007BFF', 
            textDecoration: 'underline', 
            cursor: 'pointer' 
          }} 
          onMouseEnter={(e) => e.target.style.textDecoration = 'underline'}
          onMouseLeave={(e) => e.target.style.textDecoration = 'none'}
          onClick={() => {resetForm(); setIsSignUp((prev) => !prev)}}
        >
           Login!
        </span>
      </>
    ) : (
      <>
        Don't have an account?{" "} 
        <span 
          style={{ 
            color: '#007BFF', 
            textDecoration: 'underline', 
            cursor: 'pointer' 
          }} 
          onMouseEnter={(e) => e.target.style.textDecoration = 'underline'}
          onMouseLeave={(e) => e.target.style.textDecoration = 'none'}
          onClick={() => {resetForm(); setIsSignUp((prev) => !prev)}}
        >
           Sign up
        </span>
      </>
    )}
  </span>
          </div>
          <button disabled={loading} className="button infoButton" type="submit">{loading ? "Loading..." : isSignUp ? "Sign up" : "Login"}</button>
        </form>
      </div>

    </div>
  )
}





export default Auth