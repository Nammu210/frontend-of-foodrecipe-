import React from "react";
import "./login.css";
import { NavLink, useNavigate } from "react-router-dom";
import closeIcon from "../../Assets/cancel_8618474.png";
import { useState } from "react";
import axios from "axios";
import { host } from "../Utility/api";

const Signin = () => {
  const [user, setUser] = useState({
    email: null,
    password: null,
  });
  const nav = useNavigate();

  const onChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
    console.log(user);
  };

  const handleSignin = async (e) => {
    e.preventDefault();
    console.log(user);
    const res = await axios.post(`${host}/userdata/signin`, user);
    console.log(res);
    if ((res.data.msg = "user Signin successfully")) {
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("loggedIn", true)
      localStorage.setItem("email", res.data.email);

      nav("/");
    }
  };
  const handlePopup = () => {
    nav(-1);
  };

  return (
    <>
      <div className="blurr-background"></div>
      <div className="Signin-content">
        <div className="close-btn-mainbox">
          <img onClick={handlePopup} alt="close button" src={closeIcon} />
        </div>

        <div className="Signin-form-content">
          <h2>CREATE AN ACOUNT</h2>
       <br/>
          <p className="Signin-desc-txt">
            Save recipes across devices, write reviews, and share your own
            photos
          </p>
         <br/>
          <form className="user login Signin-form">
            <label>EMAIL</label>
            <input
              type="email"
              onChange={onChange}
              name="email"
              placeholder="your@email.com"
            />
            <div className="err-occured">{""}</div>
            <label>PASSWORD</label>
            <input
              type="password"
              onChange={onChange}
              name="password"
              placeholder="Password"
            />
            <div className="err-occured"> </div>

            <div className="terms">
              {" "}
              <input type="checkbox" />
              <p>
                By creating an account, you agree to the Terms of Use and have
                read our Privacy Policy. Discovery and its affiliates may use
                your email address to provide updates, ads, and offers. You can
                opt out or learn more about your rights via the Privacy Policy.
              </p>
            </div>

            <button onClick={handleSignin}>CREATE ACCOUNT</button>
          </form>
        </div>
<br/>
<br/>
        <NavLink className="forgot-pass">FORGOT PASSWORD?</NavLink>

        <div className="auth-socials-content">
          <p className="continue-txt"> OR CONTINUE WITH</p>
          <div className="social-icons-login">
            <NavLink>
              <i class="fa-brands fa-facebook"></i>{" "}
            </NavLink>
            <NavLink>
              <i class="fa-brands fa-google"></i>
            </NavLink>
            <NavLink>
              <i class="fa-brands fa-amazon"></i>
            </NavLink>
            <NavLink>
              <i class="fa-brands fa-apple"></i>
            </NavLink>
          </div>

          <div className="bottom-section">
            <p>Already Member?</p>
            <NavLink to="/login">Login</NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signin;
