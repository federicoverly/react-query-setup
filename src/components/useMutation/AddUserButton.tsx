import React from "react";

export interface IProps {
  onClick: () => void;
  text: string;
}

export const AddUserButton = ({ onClick, text }: IProps) => {
  return <button onClick={onClick}>{text}</button>;
};

AddUserButton.displayName = "AddUserButton";
