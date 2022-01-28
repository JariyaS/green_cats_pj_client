import "./App.css";
import CartItem from "./components/CartItem";
import SearchCatalogue from "./components/SearchCatalogue";
import Catalogue from "./components/Catalogue";
import Header from "./components/Header";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";

function App() {
  return (
    <>
      <Header />
      {/* <LoginForm /> */}
      {/* <RegisterForm /> */}
      <SearchCatalogue />
      <Catalogue />
      {/* <CartItem /> */}
    </>
  );
}

export default App;
