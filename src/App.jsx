import Route from "./router/Route";
import Loading from "./components/Loading";
import { useAuth } from "./hooks/use-auth";

function App() {
  const { isLoading } = useAuth();
  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <Route />
        </>
      )}
    </>
  );
}

export default App;
