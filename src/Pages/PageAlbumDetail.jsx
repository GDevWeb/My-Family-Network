import { useParams } from "react-router-dom";
import listAlbums from "../Components/Albums/ListAlbums";
import CardPreviewArticle from "../Components/Cards/CardPreviewArticle";

export default function PageAlbumDetail() {
  // 1.State :
  const { id, albumName, albumLink } = useParams();
  console.log(id, albumName, albumLink);


  // 2.Behavior:
  const selectedAlbum = listAlbums.find((album) => album.id === id);

  if (!selectedAlbum) {
    return <h2>Album non trouvé !</h2>;
  }
  return (
    <>
      <h3 id="album-title">{selectedAlbum.albumName}</h3>
      <CardPreviewArticle />
      <CardPreviewArticle />
      <CardPreviewArticle />
      <CardPreviewArticle />
      <CardPreviewArticle />
      <CardPreviewArticle />
    </>
  );
}
