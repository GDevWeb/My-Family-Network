import indexImages from "../../assets/images/indexImages";
import indexIcons from "../../../src/assets/icons/indexIcons";
import getActualDay from "../../functions/hookGetActualDay";
import "../../sass/CardPreviewArticle.scss";

export default function CardPreviewArticle({
  imgPreviewArticle,
  articleTitle,
  articleDate,
}) {
  // 1.State:

  // 2.Behavior:
  // 3.Render:
  return (
    <div className="container-card-preview-article">
      <img
        src={
          imgPreviewArticle ? imgPreviewArticle : indexImages.imgPreviewArticle
        }
        alt={`illustration de l'article, nom de la photo :${imgPreviewArticle}`}
        className="section-illustration-preview-article"
      />
      <div className="article-title">
        <h3>{articleTitle ? articleTitle : "Titre de l'article"}</h3>
      </div>
      <h4 className="date">
        <img
          src={indexIcons.iconClock}
          alt={`icône date, logo horloge}`}
          className="icon"
        />
        le {articleDate ? articleDate : getActualDay()}
      </h4>
    </div>
  );
}
