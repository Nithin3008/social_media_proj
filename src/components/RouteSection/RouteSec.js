import { useContext } from "react";
import "./Routesec.css";
import { NavLink } from "react-router-dom";
import { PostsContext } from "../../Services/HelperFunc/PostFunc";
import { AuthContext } from "../../Services/HelperFunc/AuthFunc";
export function RouteSec() {
  const { intialBookMarks } = useContext(PostsContext);
  const { logoutFun } = useContext(AuthContext);
  return (
    <div>
      <section className="RouteSec">
        <div className="RouteSec_pages">
          <h1>AnimeVerse</h1>
          <NavLink className="RouteSec_pages-navLinks" to={"/Home1"}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="20"
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
            Home
          </NavLink>
          <NavLink className="RouteSec_pages-navLinks" to="/Explore1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="20"
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
            Explore
          </NavLink>
          <NavLink
            className="RouteSec_pages-navLinks"
            to={"/Bookmark1"}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              stroke-width="2"
              stroke-linecap="square"
              stroke-linejoin="round"
            >
              <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
            </svg>
            Bookmark
          </NavLink>
          <button
            style={{ backgroundColor: "red", color: "white" }}
            onClick={() => logoutFun()}
          >
            Logout
          </button>
        </div>
      </section>
    </div>
  );
}
