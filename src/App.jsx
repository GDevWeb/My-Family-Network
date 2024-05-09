import iconDate from "./assets/icons/clock.svg";
import imgArticleHighlight from "./assets/images/imgArticle.png";

export default function App() {
  return (
    <>
      <header>
        <h1 className="header-title">My Family NetWork</h1>

        <nav id="navBar">
          <ul>
            <li>
              <a href="#">Accueil</a>
            </li>
            <li>
              <a href="#">Albums</a>
            </li>
            <li>
              <a href="#">Connexion</a>
            </li>
          </ul>
        </nav>
      </header>

      <div id="mainContainer">
        <section className="section-highLight">
          <img
            src={imgArticleHighlight}
            alt={`illustration de l'article, nom de la photo :${imgArticleHighlight} `}
            className="section-illustration-article"
          />
          <h3 className="date">
            <img src={iconDate} alt="icône date" className="icon" /> le 09 mai
            2024
          </h3>

          <h4 className="article-title">Article Title</h4>
          <div className="article-content">
            <p>
              Test Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Dicta soluta earum rem corrupti accusantium. Porro rerum natus
              cumque illo expedita repellendus laudantium asperiores qui, labore
              ad, voluptates laborum dolor voluptatem assumenda nam voluptatibus
              dolorum ipsum quia odio eaque non? Amet dicta et dolore repellat
              accusamus fugiat officia nihil sint voluptas.
            </p>
          </div>
          <button className="cta-button">Hover me</button>
        </section>

        <section className="section-usual"></section>
      </div>
    </>
  );
}
