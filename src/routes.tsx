import { type RouteObject } from "react-router-dom";
import App from "./App";
import Impressum from "./pages/Impressum";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/impressum",
    element: <Impressum />,
  },
];

export default routes;
