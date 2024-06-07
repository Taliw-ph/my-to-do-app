import { RouterProvider } from "react-router-dom";
import { router } from "./router";

const App = () => {
  return (
    <RouterProvider router={router} fallbackElement={<p>Loading ...</p>} />
  );
};

export default App;
