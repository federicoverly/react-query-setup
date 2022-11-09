import React from "react";

export interface IProps {
  text: string;
}

export const ErrorComponent = ({ text }: IProps) => {
  return <h2>Error: {text}</h2>;
};

ErrorComponent.displayName = "Error";
