import { useParams } from "react-router-dom";
import listAlbums from "../Components/Albums/ListAlbums";
import CardPreviewArticle from "../Components/Cards/CardPreviewArticle";

export default function PageAlbumDetail() {
  // 1.State :
  const { id } = useParams();

  // 2.Behavior:
  const selectedAlbum = listAlbums.find((album) => album.id === id);

  if (!selectedAlbum) {
    return <h2>Album non trouvé !</h2>;
  }
  return (
    <div id="album-content">
      <h3>{selectedAlbum.albumName}</h3>
      {/* <p>contenu de l'album</p> */}
      <CardPreviewArticle/>
      <CardPreviewArticle/>
      <CardPreviewArticle/>
      <CardPreviewArticle/>
      <CardPreviewArticle/>
      <CardPreviewArticle/>
      <CardPreviewArticle/>
      <CardPreviewArticle/>
      <CardPreviewArticle/>
      <CardPreviewArticle/>
      <CardPreviewArticle/>
      <CardPreviewArticle/>
    </div>
  );
}
