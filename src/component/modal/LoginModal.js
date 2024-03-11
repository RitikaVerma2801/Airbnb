import React from "react";
import "./LoginModal.css";

const LoginModal = ({ loginFormData, setLoginFormData, error }) => {

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLoginFormData({
      ...loginFormData,
      [name]: value,
    });
  };

  const inputFields = [
    { name: "username", label: "Username" },
    { name: "password", label: "Password" },
  ];

  return (
    <>
      <form>
        {error && <div className="error">{error}</div>}

        {inputFields.map((field) => (
          <div key={field.name}>
            <input
              type={field.name === "password" ? "password" : "text"}
              name={field.name}
              value={loginFormData[field.name]}
              onChange={handleInputChange}
              placeholder={field.label}
              className="input-field"
            />
          </div>
        ))}
      </form>
    </>
  );
};

export default LoginModal;
