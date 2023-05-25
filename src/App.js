import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/home/Home";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return <Home />;
}

export default App;
