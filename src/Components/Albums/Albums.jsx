import listAlbums from "./ListAlbums";
import "../../sass/Albums.scss";
import { Link, Outlet } from "react-router-dom";

export default function Albums() {
  // 1. State:

  // 2.Behavior:
  const listElement = listAlbums.map((album) => {
    const { id, albumName } = album;
    return (
      <Link
        to={`/albums/album/${album.id}`}
        key={id}
        className="navbar-sidebar-element "
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
