import React from "react";
import "./ModalPopup.css";
import { IoMdCloseCircle } from "react-icons/io";
import Button from "../common/Button/Button";

const ModalPopup = ({
  isOpen,
  onClose,
  title,
  buttonText,
  children,
  buttonVisible,
  width = "300px",
  onSubmit = () => {},
}) => {
  const handleSubmit = () => {
    const formData =
      children.props.loginFormData || children.props.signupFormData;
    onSubmit(formData);
  };


  return (
    <div className={`modal-popup-container ${isOpen ? "open" : ""}`}>
      <div className="modal-popup" style={  { minWidth: width} }>
        <div className="modal-header">
          <span className="title">{title}</span>
          <IoMdCloseCircle size={25} tabIndex={0} onClick={onClose} />
        </div>
        <div className="modal-content">{children}</div>
        {buttonVisible && (
          <Button onClick={handleSubmit} label={buttonText}/>
        )}
      </div>
    </div>
  );
};

export default ModalPopup;
