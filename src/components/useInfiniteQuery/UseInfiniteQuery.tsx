import { useInfiniteQuery } from "@tanstack/react-query";
import { IData, IUser } from "../../interfaces/interfaces";
import { fetchInfiniteUsers } from "../../utils/utils";
import { Loading } from "../common/Loading";
import { Subtitle } from "../common/Subtitle";
import { User } from "../common/User";

export const UseInfiniteQuery = () => {
  const { data, isFetching, fetchNextPage, hasNextPage } =
    useInfiniteQuery<IData>(["infiniteUsers"], fetchInfiniteUsers, {
      getNextPageParam: (lastPage, allPages) => {
        if (lastPage.page < lastPage.total_pages) return lastPage.page + 1;
        return false;
      },
    });

  if (isFetching) return <Loading />;

  return (
    <div>
      <Subtitle text="Infinite Query" />
      {data?.pages.map((page) =>
        page?.data.map((user: IUser) => <User key={user.id} user={user} />)
      )}
      {hasNextPage && (
        <button onClick={() => fetchNextPage()}>Load more</button>
      )}
    </div>
  );
};

UseInfiniteQuery.displayName = "UseInfiniteQuery";
