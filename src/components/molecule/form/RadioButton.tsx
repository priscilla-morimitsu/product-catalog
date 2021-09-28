import React from "react";

interface RadioButtonProps extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>{
  label?: string;
};

export const RadioButton = ({ label, ...rest }: RadioButtonProps) => {
  return (
    <p>
      <label className="radio">
        <input className="mr-2" type="radio" {...rest}/>
        {label}
      </label>
    </p>
  );
};