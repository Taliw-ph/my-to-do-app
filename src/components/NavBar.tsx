// import { useLocation } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="nav">
      <ul>
        <li>
          <a href="/home" className="active">
            Go To Home
          </a>
        </li>
        <li>
          <a href="/to-do">Go To App</a>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
