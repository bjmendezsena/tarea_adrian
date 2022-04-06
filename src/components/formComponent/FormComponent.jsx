import React from "react";
import { FormError } from "../formError/FormError";

export const FormComponent = ({ value, onChange, disabled = false }) => {

  return (
    <div>
      <input value={value} onChange={onChange} disabled={disabled} />
      <FormError value={value} />
    </div>
  );
};
