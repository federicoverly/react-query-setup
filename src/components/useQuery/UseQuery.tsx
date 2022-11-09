import { useQuery } from "@tanstack/react-query";
import { IData, IUser } from "../../interfaces/interfaces";
import { fetchUsers } from "../../utils/utils";
import { ErrorComponent } from "../common/ErrorComponent";
import { Loading } from "../common/Loading";
import { NoData } from "../common/NoData";
import { Subtitle } from "../common/Subtitle";
import { User } from "../common/User";

export const UseQuery = () => {
  const { data, error, isLoading } = useQuery<IData, ErrorConstructor>(
    ["allUsers"],
    fetchUsers
  );

  if (isLoading) return <Loading />;

  if (error) return <ErrorComponent text={error?.name} />;

  if (!data) return <NoData />;

  return (
    <div>
      <Subtitle text="Use Query" />
      {data?.data.map((user: IUser) => (
        <User key={user.id} user={user} />
      ))}
    </div>
  );
};

UseQuery.displayName = "UseQuery";
