import React from "react";
import { CountLettersComponent } from "../countLettersComponent/CountLettersComponent";

const VALID_NAMES = ["lewis", "adrian", "nonay", "jaime", "ramón", "kenny"];

export const FormError = ({ value}) => {
  const isValid = VALID_NAMES.includes(value.toLowerCase());
  return (
    <>
      {isValid ? "Valid" : "Invalid"}
      <CountLettersComponent value={value} />
    </>
  );
};
