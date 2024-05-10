import CardPreviewArticle from "../Cards/CardPreviewArticle";
import "../../sass/SectionUsual.scss";

export default function SectionUsual({ sectionTitle }) {
  return (
    <section className="section-usual">
      <h3 className="section-title">
        {sectionTitle ? sectionTitle : "Derniers articles"}
      </h3>
      <CardPreviewArticle />
      <CardPreviewArticle />
      <CardPreviewArticle />
      <CardPreviewArticle />
      <CardPreviewArticle />
      <CardPreviewArticle />
    </section>
  );
}
