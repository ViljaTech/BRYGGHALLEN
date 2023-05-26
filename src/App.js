import "./App.css";
import { useEffect } from "react";
import AppRoutes from "./routes";
import SmoothScroll from "./components/smoothScroll/SmoothScroll";

function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    // <SmoothScroll>
    <AppRoutes />
    // </SmoothScroll>
  );
}

export default App;
