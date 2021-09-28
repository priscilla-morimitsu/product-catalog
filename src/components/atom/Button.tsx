import React from "react";

interface ButtonProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {};

export const Button = ({ children, ...rest }: ButtonProps) => {
  return (
    <p className="pt-5">
      <button className="button is-dark is-medium is-fullwidth" {...rest}>{children}</button>
    </p>
  );
}