import React, { useState } from "react";
import "./SignupModal.css";

const SignupModal = ({ signupFormData, setSignupFormData, error }) => {
  const [errors, setErrors] = useState({});

  const passwordPattern = /^(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{6,}$/;

  const inputFields = [
    { name: "firstname", label: "First Name" },
    { name: "lastname", label: "Last Name" },
    { name: "email", label: "Email" },
    { name: "username", label: "Username: alphabet or number" },
    { name: "password", label: "Password" },
    { name: "confirmPassword", label: "Confirm Password" },
  ];

  const validateField = (name, value) => {
    let passwordMessage = "";

    switch (name) {
      case "firstname":
        if (value.trim() === "") return "First name cannot be empty.";
        break;
      case "lastname":
        if (value.trim() === "") return "Last name cannot be empty.";
        break;
      case "email":
        const emailPattern = /\S+@\S+\.\S+/;
        if (!emailPattern.test(value)) return "The provided email is invalid.";
        break;
      case "username":
        if (value.length < 6) return "Username must be at least 6 characters.";
        break;
      case "password":
        if (!passwordPattern.test(value)) {
          if (value.length < 6) {
            passwordMessage += "Atleast 6 characters, ";
          }
          if (!/[A-Z]/.test(value)) {
            passwordMessage += "Atleast 1 capital letter, ";
          }
          if (!/\d/.test(value)) {
            passwordMessage += "Atleast 1 number, ";
          }
          if (!/[\W_]/.test(value)) {
            passwordMessage += "Atleast 1 special character, ";
          }
          // passwordMessage = passwordMessage.slice(0, -2);
          return passwordMessage;
        }
        break;

      case "confirmPassword":
        if (value !== signupFormData.password) return "Passwords do not match.";
        break;
      default:
        return "";
    }
    return "";
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSignupFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: validateField(name, value),
    }));
  };
  
  
  // const isFormValid = () => {
  //   for (const key in signupFormData) {
  //     if (validateField(key, signupFormData[key])) {
  //       return false;
  //     }
  //   }
  //   return true;
  // };

  // if (isFormValid()) {
  //   const existingUserData = JSON.parse(localStorage.getItem("users")) || [];

  //   const isUsernameTaken = existingUserData.some(
  //     (user) => user.username === signupFormData.username
  //   );
  //   const isEmailTaken = existingUserData.some(
  //     (user) => user.email === signupFormData.email
  //   );

  //   if (isUsernameTaken) {
  //     console.log("Username must be unique.");
  //   } else if (isEmailTaken) {
  //     console.log("Email is already registered.");
  //   } else {
  //     const userData = { ...signupFormData };
  //     existingUserData.push(userData);
  //     localStorage.setItem("users", JSON.stringify(existingUserData));
  //   }
  // }

  return (
    <>
      <form>
        {error && <div className="error">{error}</div>}

        {inputFields.map((field) => (
          <div key={field.name}>
            <input
              type={
                field.name === "password" || field.name === "confirmPassword"
                  ? "password"
                  : field.name === "email"
                  ? "email"
                  : "text"
              }
              name={field.name}
              value={signupFormData[field.name]}
              onChange={handleInputChange}
              onBlur={handleBlur}
              placeholder={field.label}
              className="S-input-field"
            />
            {errors[field.name] && (
              <div className="S-error">{errors[field.name]}</div>
            )}
          </div>
        ))}
      </form>
    </>
  );
};

export default SignupModal;
