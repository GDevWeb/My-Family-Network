import { Link,useParams } from "react-router-dom";
import listAlbums from "./ListAlbums";
import CardPreviewArticle from "../Cards/CardPreviewArticle";

export default function AlbumDetail() {
  // 1.State :
  const { id } = useParams();

  // 2.Behavior:
  const selectedAlbum = listAlbums.find((album) => album.id === id);

  const listPhotos = selectedAlbum.albumListPictures.map((photo) => {
    const { id, picture, title, articleDate } = photo;
    return (
      <Link
        key={id}
        to={`/albums/album/${selectedAlbum.id}/article/${id}`}
        className="card-link"
        >
      <CardPreviewArticle
          key={id}
          imgPreviewArticle={picture}
          articleTitle={title}
          articleDate={articleDate}
          />
          </Link>
          // pour la redirection vers le contenu de l'article articleDetail
    );
  });

  if (!selectedAlbum) {
    return <h2>Album non trouvé !</h2>;
  }
  return (
    <>
      <h3 id="album-title">{selectedAlbum.albumName}</h3>
      {listPhotos}
    </>
  );
}

// Ajouter une pagination limitant le nombre de 4 à 6 vignettes
