import { Title } from "./components/common/Title";
import { UseInfiniteQueryContainer } from "./components/containers/UseInfiniteQueryContainer";
import { UseMutationContainer } from "./components/containers/UseMutationContainer";
import { UseQueryContainer } from "./components/containers/UseQueryContainer";

function App() {
  return (
    <div>
      <Title text={"React Query Setup"} />
      <UseQueryContainer />
      <UseMutationContainer />
      <UseInfiniteQueryContainer />
    </div>
  );
}

export default App;

App.displayName = "App";
