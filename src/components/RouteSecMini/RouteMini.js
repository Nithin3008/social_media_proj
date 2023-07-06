import React from "react";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../Services/HelperFunc/AuthFunc";
import "./routemini.css";
export const RouteMini = () => {
  const { logoutFun } = useContext(AuthContext);
  const setActiveStyle = ({ isActive }) => ({
    backgroundColor: isActive ? "#000000" : "",
    borderRadius: isActive ? "10px" : "",
  });
  return (
    <div>
      <div className="RoutSectPages_mini">
        <NavLink
          style={setActiveStyle}
          className="RouteSec_pages-navLinks"
          to={"/Home1"}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="50"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            stroke-width="2"
            stroke-linecap="square"
            stroke-linejoin="round"
          >
            <path d="M20 9v11a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V9" />
            <path d="M9 22V12h6v10M2 10.6L12 2l10 8.6" />
          </svg>
        </NavLink>
        <NavLink
          style={setActiveStyle}
          className="RouteSec_pages-navLinks"
          to="/Explore1"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="50"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            stroke-width="2"
            stroke-linecap="square"
            stroke-linejoin="round"
          >
            <circle cx="12" cy="12" r="10" />
            <path d="M16.2 7.8l-2 6.3-6.4 2.1 2-6.3z" />
          </svg>
        </NavLink>
        <NavLink
          className="RouteSec_pages-navLinks"
          to={"/Bookmark1"}
          style={setActiveStyle}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="50"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            stroke-width="2"
            stroke-linecap="square"
            stroke-linejoin="round"
          >
            <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
          </svg>
        </NavLink>
        <NavLink
          className="RouteSec_pages-navLinks"
          to={"/Bookmark1"}
          style={setActiveStyle}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="50"
            viewBox="0 0 24 24"
            fill="none"
            stroke="red"
            stroke-width="2"
            stroke-linecap="square"
            stroke-linejoin="round"
          >
            <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4M10 17l5-5-5-5M13.8 12H3" />
          </svg>
        </NavLink>
        <NavLink
          className="RouteSec_pages-navLinks"
          to={"/Bookmark1"}
          style={setActiveStyle}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="50"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            stroke-width="2"
            stroke-linecap="square"
            stroke-linejoin="round"
          >
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
            <circle cx="12" cy="7" r="4"></circle>
          </svg>
        </NavLink>
      </div>
    </div>
  );
};
