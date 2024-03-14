import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/Images/logo.png";
import user from "../../assets/svg/user-solid.svg";
import bars from "../../assets/svg/bars-solid.svg";
import "./Header.css";
import LoginModal from "../modal/LoginModal";
import SignupModal from "../modal/SignupModal";
import ModalPopup from "../modal/ModalPopup";
import Button from "../common/Button/Button";

const Header = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isLoginModalOpen, setLoginModalOpen] = useState(false);
  const [isSignupModalOpen, setSignupModalOpen] = useState(false);
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [userInfo, setUserInfo] = useState(null);
  const [title, setTitle] = useState("");
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const [loginFormData, setLoginFormData] = useState({
    username: "",
    password: "",
  });

  const [signupFormData, setSignupFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
  });

  const closeModal = () => {
    setLoginModalOpen(false);
    setSignupModalOpen(false);
    setLoginFormData({ username: "", password: "" });
    setSignupFormData({
      firstname: "",
      lastname: "",
      email: "",
      username: "",
      password: "",
      confirmPassword: "",
    });
    setError("");
    setSuccessMessage("");
  };

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  //SIGNUP MODAL
  const openSignupModal = () => {
    setSignupModalOpen(true);
    setTitle("SignUp");
  };

  const handleSignupSubmit = () => {
    console.log("SignUp Form submitted", signupFormData);

    const existingUserData = JSON.parse(localStorage.getItem("users")) || [];

    const isUsernameTaken = existingUserData.some(
      (user) => user.username === signupFormData.username
    );
    const isEmailTaken = existingUserData.some(
      (user) => user.email === signupFormData.email
    );

    if (isUsernameTaken) {
      setError("Username must be unique.");
    } else if (isEmailTaken) {
      setError("Email is already registered.");
    } else {
      const userData = { ...signupFormData };
      existingUserData.push(userData);
      localStorage.setItem("users", JSON.stringify(existingUserData));

      setSuccessMessage("Signup successful!");
      setTimeout(() => {
        setSuccessMessage("");
        closeModal();
      }, 2000);
    }
  };

  //LOGIN MODAL
  const openLoginModal = () => {
    setLoginModalOpen(true);
    setTitle("Login");
  };

  const handleLoginSubmit = (loginFormData) => {
    console.log("Login Form submitted", loginFormData);

    if (!loginFormData.username || !loginFormData.password) {
      setError("Please enter both username and password");
      return;
    }
    
    const users = JSON.parse(localStorage.getItem("users"));
    console.log(users, "user");
    const matchedUser = users.find(
      (user) =>
        user.username === loginFormData.username &&
        user.password === loginFormData.password
    );

    if (matchedUser) {
      setLoggedIn(true);
      setUserInfo(matchedUser);
      setLoginModalOpen(false);
      console.log("Matched");
    } else {
      setError("Invalid username or password");
    }
  };

  //LOGOUT
  const handleLogout = () => {
    setLoggedIn(false);
    setUserInfo(null);
  };

  return (
    <div className="header">
      <div>
        <Link to="/">
          <img src={logo} className="logo" alt="Logo" />
        </Link>
      </div>

      <div className="header-right">
        {isLoggedIn && (
          <Link to="/new-spot" className="create-spot">
            Create a new spot
          </Link>
        )}

        {isLoggedIn ? (
          <div
            className={`login ${isDropdownOpen ? "open" : ""}`}
            onClick={toggleDropdown}
          >
            <img src={bars} height={20} alt="bars" />
            <img src={user} height={20} alt="user" />
            {isDropdownOpen && (
              <div className="user-dropdown">
                <div>{`Hello, ${userInfo.username}`}</div>
                <div>{userInfo.email}</div>
                <div>
                  <Link to="/">Manage Spots</Link>
                </div>
                <div className="logout-container">
                  <Button
                    onClick={handleLogout}
                    className="logoutBtn"
                    label="Log Out"
                  />
                </div>
              </div>
            )}
          </div>
        ) : (
          <div
            className={`login ${isDropdownOpen ? "open" : ""}`}
            onClick={toggleDropdown}
          >
            <img src={bars} height={20} alt="bars" />
            <img src={user} height={20} alt="user" />
            {isDropdownOpen && (
              <div className="dropdown">
                <div onClick={openSignupModal}>Sign up</div>
                <div onClick={openLoginModal}>Login</div>
              </div>
            )}
          </div>
        )}
      </div>

      {(isLoginModalOpen || isSignupModalOpen) && (
        <ModalPopup
          isOpen={isLoginModalOpen || isSignupModalOpen}
          onClose={closeModal}
          title={title}
          buttonText={title}
          buttonVisible={true}
          onSubmit={isSignupModalOpen ? handleSignupSubmit : handleLoginSubmit}
        >
          {isSignupModalOpen ? (
            <SignupModal
              signupFormData={signupFormData}
              setSignupFormData={setSignupFormData}
              error={error}
            />
          ) : (
            <LoginModal
              loginFormData={loginFormData}
              setLoginFormData={setLoginFormData}
              error={error}
            />
          )}
        </ModalPopup>
      )}
      {successMessage && (
        <div className="success-message">{successMessage}</div>
      )}
    </div>
  );
};

export default Header;
