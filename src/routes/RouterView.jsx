import { useRoutes } from "react-router-dom";
import About from "../pages/About";
import Home from "../pages/Home";

const RouterView = () => {
  const element = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/about", element: <About /> },
  ]);

  return element;
};

export default RouterView;
