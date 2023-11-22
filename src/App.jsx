import "./App.css";
// import HomePage from "./pages/HomePage";
// import Navbar from "./layout/header/Navbar";
import AuthContextProviderovider from "../src/Contexts/AuthContext";
import Route from "./router/Route";

function App() {
  return (
    <AuthContextProviderovider>
      <Route />
    </AuthContextProviderovider>
  );
}

export default App;
