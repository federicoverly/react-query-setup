import React from "react";

export interface IProps {
  text: string;
}

export const Title = ({ text }: IProps) => {
  return <h1>{text}</h1>;
};

Title.displayName = "Title";
