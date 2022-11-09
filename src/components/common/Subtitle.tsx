import React from "react";

export interface IProps {
  text: string;
}

export const Subtitle = ({ text }: IProps) => {
  return <h3>{text}</h3>;
};

Subtitle.displayName = "Subtitle";
