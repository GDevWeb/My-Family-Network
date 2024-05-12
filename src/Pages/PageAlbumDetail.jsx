import { useParams } from "react-router-dom";
import listAlbums from "../Components/Albums/ListAlbums";

export default function PageAlbumDetail() {
  // 1.State :
  const { albumId } = useParams();

  // 2.Behavior:
  const selectedAlbum = listAlbums.find((album) => album.id === albumId);

  if (!selectedAlbum) {
    return <h2>Album non trouvé !</h2>;
  }
  return (
    <div>
      <h3>{selectedAlbum.albumName}</h3>

      <p>contenu de l'album</p>
    </div>
  );
}
