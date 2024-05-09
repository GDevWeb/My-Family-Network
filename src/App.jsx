import iconDate from "./assets/icons/clock.svg";
import imgArticleHighlight from "./assets/images/imgArticle.png";

export default function App() {
  return (
    <>
      <div className="testFont">
        <h1>Test fonts</h1>
        <h2>Test</h2>
        <h3>Test</h3>
        <h4>Test</h4>
        <h5>Test</h5>
        <p>Test</p>
      </div>

      <div className="testComponent">
        <h2>Test Components</h2>
        <button className="cta-button">Hover me</button>
      </div>

      <div id="mainContainer">
        <h2>Sections</h2>
        <section className="section-highLight">
          <img
            src={imgArticleHighlight}
            alt={`illustration de l'article, nom de la photo :${imgArticleHighlight} `}
            className="section-illustration-article"
          />
          <h2 className="date">
            <img src={iconDate} alt="icône date" className="icon" /> le 09 mai 2024
          </h2>

          <h3 className="article-title">Article Title</h3>
          <div className="article-content">
          <p>
            Test Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta
            soluta earum rem corrupti accusantium. Porro rerum natus cumque illo
            expedita repellendus laudantium asperiores qui, labore ad,
            voluptates laborum dolor voluptatem assumenda nam voluptatibus
            dolorum ipsum quia odio eaque non? Amet dicta et dolore repellat
            accusamus fugiat officia nihil sint voluptas.
          </p>
          </div>
          <button className="cta-button">Hover me</button>
        </section>
        <section className="section-usual">
          <h2>
            <img src={iconDate} alt="icône date" /> Date
          </h2>
          <h3>Title</h3>
          <p>
            Test Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta
            soluta earum rem corrupti accusantium. Porro rerum natus cumque illo
            expedita repellendus laudantium asperiores qui, labore ad,
            voluptates laborum dolor voluptatem assumenda nam voluptatibus
            dolorum ipsum quia odio eaque non? Amet dicta et dolore repellat
            accusamus fugiat officia nihil sint voluptas.
          </p>
        </section>
      </div>
    </>
  );
}
