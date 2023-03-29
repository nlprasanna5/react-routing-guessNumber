import React from 'react';
import style from './styles/header.module.css';
import { useNavigate } from "react-router-dom";


function Header() {
  const navigate = useNavigate();

  function redirectToLoginPage () {
    navigate("/login");
  }

  function redirectToAboutPage(){
    navigate("/about");
  }

  function redirectToHomePage(){
    navigate("/home");
  }

  function redirectToRegisterPage(){
    navigate("/register");
  }
  return (
    <>
      <nav>
        <div className={style.container}>
          
          <p className={style.nav}>UI/UX Design</p>
          <div className={style.mainContainer}>
            <div className={style.innerContainer}>
              <p className={style.nav} onClick={redirectToHomePage}>Home</p>
              <p className={style.nav} onClick={redirectToAboutPage}>AboutUs</p>
              <p className={style.nav} onClick={redirectToLoginPage}>Login</p>
              <p className={style.nav} onClick={redirectToRegisterPage}>Register</p>
            </div>
            <div>
              <p className={style.nav}>Icon</p>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
