import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/home/Home";
import { useEffect } from "react";
import AppRoutes from "./routes";
// import Scrollbar from "smooth-scrollbar";
// import Scrollbar from "react-smooth-scrollbar";

function App() {
  // useEffect(() => {
  //   Scrollbar.initAll(document.body, { damping: 0.1 });
  // }, []);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    // <Scrollbar damping={0.05}>
    <AppRoutes />
    // </Scrollbar>
  );
}

export default App;
