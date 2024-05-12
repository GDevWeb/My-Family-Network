import { Link, useLocation, Outlet } from "react-router-dom";
import listAlbums from "./ListAlbums";
import "../../sass/Albums.scss";

export default function Albums() {
  // 1. State:
  const location = useLocation();
  // 2.Behavior:
  const listElement = listAlbums.map((album) => {
    const { id, albumName } = album;
    const isActive = location.pathname === `/albums/album/${album.id}`;

    const activeStyle = isActive ? { textDecoration: "underline" } : {};
    return (
      <Link
        to={`/albums/album/${album.id}`}
        key={id}
        className="navbar-sidebar-element "
        style={activeStyle}
      >
        <a href="#" className="navLink">
          {albumName}
        </a>
      </Link>
    );
  });
  // 3.Render:
  return (
    <>
      <nav id="navbar-sidebar">
        <div id="navbar-sidebar-title">
          <h2>Albums</h2>
        </div>
        <ul id="navbar-sidebar-list">{listElement}</ul>
      </nav>
      <div id="main-container">
        <Outlet />
      </div>
    </>
  );
}
