import { NavLink } from "react-router-dom";
import "../../sass/NavBar.scss";

export default function NavBar() {
  return (
    <nav id="navBar">
      <ul>
        <NavLink to="/" className={"navLink"} activeClassName="activeLink">
          Accueil
        </NavLink>
        <NavLink to="/albums" className={"navLink"} activeClassName="activeLink">
          Albums
        </NavLink>
        <NavLink to="/login" className={"navLink"} activeClassName="activeLink">
          Connexion
        </NavLink>
      </ul>
    </nav>
  );
}
