import "./App.css";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";
import Fetchitems from "../components/FetchItems";

function App() {
  return (
    <>
      <Header />
      <Fetchitems />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
