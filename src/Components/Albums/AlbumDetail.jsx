import { useParams } from "react-router-dom";
import listAlbums from "./ListAlbums";
import CardPreviewArticle from "../Cards/CardPreviewArticle";

export default function AlbumDetail() {
  // 1.State :
  const { id } = useParams();
  const { articleId } = useParams();
console.log(id);
  // 2.Behavior:
  const selectedAlbum = listAlbums.find((album) => album.id === id);
  
  if (!selectedAlbum) {
    return <h2>Album non trouvé !</h2>;
  }

  
  const listPhotos = selectedAlbum.albumListPictures.map((photo) => {
    const { id, picture, title, articleDate } = photo;
    return (
      <CardPreviewArticle
      key={id}
      imgPreviewArticle={picture}
      articleTitle={title}
        articleDate={articleDate}
      />
    );
  });

  return (
    <>
      <h3 id="album-title">{selectedAlbum.albumName}</h3>
      {listPhotos}
    </>
  );
}

// Ajouter une pagination limitant le nombre de 4 à 6 vignettes