import { RouterProvider } from "react-router-dom";
import NavBar from "./components/NavBar";
import { router } from "./router";

function App() {
  return (
    <>
      <NavBar />
      <RouterProvider router={router} fallbackElement={<p>Loading ...</p>} />
    </>
  );
}

export default App;
