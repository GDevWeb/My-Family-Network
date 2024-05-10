import indexImages from "../../assets/images/indexImages";
import indexIcons from "../../../src/assets/icons/indexIcons";
import Button from "../Buttons/Button";
import "../../sass/SectionHighLight.scss";

function SectionHighlight({
  sectionTitle,
  imgArticle,
  articleTitle,
  articleContent,
  linkToArticle,
}) {
  const defaultContent = `FTest Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta
  soluta earum rem corrupti accusantium. Porro rerum natus cumque illo
  expedita repellendus laudantium asperiores qui, labore ad, voluptates
  laborum dolor voluptatem assumenda nam voluptatibus dolorum ipsum quia
  odio eaque non? Amet dicta et dolore repellat accusamus fugiat officia
  nihil sint voluptas.`;

  return (
    <section className="section-highLight">
      <h2 className="section-title">
        {sectionTitle ? sectionTitle : "Meilleur article"}
      </h2>
      <img
        src={imgArticle ? imgArticle : indexImages.imgArticle}
        alt={`illustration du top article, nom de la photo :${imgArticle} `}
        className="section-illustration-section"
      />
      <h3 className="date">
        <img src={indexIcons.iconClock} alt="icône date" className="icon" /> le
        09 mai 2024
      </h3>

      <h4 className="section-title">
        {articleTitle ? articleTitle : "Notre weekend en campagne"}
      </h4>
      <div className="section-content">
        <p>{articleContent ? articleContent : defaultContent}</p>
      </div>
      <Button
        buttonClass={"cta-button"}
        linkToArticle={"#"}
        buttonAction={"Voir article"}
      />
    </section>
  );
}

export default SectionHighlight;
