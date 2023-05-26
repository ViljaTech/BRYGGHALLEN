import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/home/Home";
import { useEffect } from "react";
import AppRoutes from "./routes";

function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return <AppRoutes />;
}

export default App;
