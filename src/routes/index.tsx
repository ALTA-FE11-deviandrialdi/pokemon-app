import { createBrowserRouter, RouterProvider } from "react-router-dom";

import DetailPoke from "../pages/DetailPoke";
import Home from "../pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/detail/:pokemon_name",
    element: <DetailPoke />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};
export default App;
