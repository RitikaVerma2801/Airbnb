import React from "react";
import InputField from "./InputField";

const FormInputGenerator = ({ fields, formData, onChange, className }) => {
  return fields.map((field, index) => (
    <InputField
      key={index}
      label={field.label}
      name={field.name}
      value={formData[field.name]}
      onChange={onChange}
      placeholder={field.placeholder}
      className={className}
    />
  ));
};

export default FormInputGenerator;
