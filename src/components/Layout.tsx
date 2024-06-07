import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";

const AppLayout = () => {
  return (
    <main style={{ minHeight: "100dvh" }}>
      <NavBar />
      <Outlet />
    </main>
  );
};

export default AppLayout;
