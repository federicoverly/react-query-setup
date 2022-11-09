import React from "react";
import { IUser } from "../../interfaces/interfaces";

export interface IProps {
  user: IUser;
}

export const User = ({ user }: IProps) => {
  return (
    <p key={user.id}>
      {user.first_name} {user.last_name}
    </p>
  );
};

User.displayName = "User";
