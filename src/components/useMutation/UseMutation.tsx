import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import React from "react";
import { IData, IUser } from "../../interfaces/interfaces";
import { AddUserButton } from "./AddUserButton";
import { ErrorComponent } from "../common/ErrorComponent";
import { Loading } from "../common/Loading";
import { NoData } from "../common/NoData";
import { Subtitle } from "../common/Subtitle";
import { User } from "../common/User";

const fetchUsers = async () => {
  const response = await fetch("https://reqres.in/api/users");
  return response.json();
};

const addUser = async (user: {
  first_name: string;
  last_name: string;
}): Promise<IUser> => {
  const response = await fetch("https://reqres.in/api/users", {
    method: "POST",
    body: JSON.stringify({
      first_name: user.first_name,
      last_name: user.last_name,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
  return response.json();
};

export const UseMutation = () => {
  const queryClient = useQueryClient();

  const { mutate, mutateAsync, isLoading: isAddingUser } = useMutation(addUser);

  const { data, error, isLoading } = useQuery<IData, ErrorConstructor>(
    ["allUsers"],
    fetchUsers
  );

  const handleAddUser = async () => {
    const newUser = await mutateAsync({
      first_name: "Fede",
      last_name: "Verly",
    });
    // queryClient.invalidateQueries(["allUsers"]);
    queryClient.setQueryData<IData | undefined>(["allUsers"], (oldData) => {
      if (oldData) {
        return {
          ...oldData,
          data: [
            {
              first_name: newUser.first_name,
              last_name: newUser.last_name,
            } as IUser,
            ...oldData.data,
          ],
        };
      }
    });
  };

  if (isLoading) return <Loading />;

  if (isLoading) return <Loading />;

  if (error) return <ErrorComponent text={error?.name} />;

  if (!data) return <NoData />;

  return (
    <div>
      <Subtitle text="React Query Mutation" />
      {isAddingUser && <p>Is adding user...</p>}
      <AddUserButton
        onClick={() => mutate({ first_name: "Fede", last_name: "Verly" })}
        text={"Add User"}
      />
      <AddUserButton
        onClick={() => handleAddUser()}
        text={"Add user with async mutation "}
      />
      {data?.data.map((user: IUser) => (
        <User key={user.id} user={user} />
      ))}
    </div>
  );
};

UseMutation.displayName = "UseMutation";
