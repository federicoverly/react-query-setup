import { IData } from "../interfaces/interfaces";

export const fetchUsers = async (): Promise<IData> => {
  const response = await fetch("https://reqres.in/api/users");
  return response.json();
};

export const fetchInfiniteUsers = async ({ pageParam = 1 }): Promise<IData> => {
  const response = await fetch(`https://reqres.in/api/users?page=${pageParam}`);
  return response.json();
};
