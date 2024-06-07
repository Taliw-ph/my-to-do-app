import { useLocation, useNavigate } from "react-router-dom";
import { PATH } from "../router";

const NavBar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { pathname } = location;

  return (
    <div className="nav">
      <ul>
        <li>
          <div
            className={pathname === PATH.home ? "active" : ""}
            onClick={() => navigate(PATH.home)}
          >
            Go To Home
          </div>
        </li>
        <li>
          <div
            className={pathname === PATH.todo ? "active" : ""}
            onClick={() => navigate(PATH.todo)}
          >
            Go To App
          </div>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
