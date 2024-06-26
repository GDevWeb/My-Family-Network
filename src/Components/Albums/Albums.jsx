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

    // 3.Render :
    return (
      <Link
        to={`/albums/album/${album.id}`}
        key={id}
        className="navbar-sidebar-element"
        style={activeStyle}
      >
        {albumName}
      </Link>
    );
  });

  const selectedAlbum = listAlbums.find((album) => {
    const isActive = location.pathname === `/albums/album/${album.id}`;
    return isActive;
  });

  const outletContent = selectedAlbum ? (
    <Outlet />
  ) : (
   <h4 id="message-invit-toselect">Sélectionnez un album à afficher</h4>
  );

  // 3.Render:
  return (
    <div id="main-container">
      <nav id="navbar-sidebar">
        <div id="navbar-sidebar-title">
          <h2>Albums</h2>
        </div>
        <ul id="navbar-sidebar-list">{listElement}</ul>
      </nav>
      <div id="album-content">
        {outletContent}
      </div>
    </div>
  );
}