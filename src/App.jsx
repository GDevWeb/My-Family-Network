import iconDate from "./assets/icons/clock.svg";
import iconLinkedin from "./assets/icons/iconLinkedin.svg";
import iconGithub from "./assets/icons/iconGithub.svg";
import iconGmail from "./assets/icons/iconGmail.svg";
import iconPortfolio from "./assets/icons/iconPortfolio.svg";
import imgArticleHighlight from "./assets/images/imgArticle.png";
import imgPreviewArticle from "./assets/images/imgPreviewArticle.png";
import imgPreviewProject from "./assets/images/imgPreviewProject.png";

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

      <div id="main-Container">
        {/* section highlight */}
        <section className="section-highLight">
          <h2 className="section-title">Meilleur article</h2>
          <img
            src={imgArticleHighlight}
            alt={`illustration du top article, nom de la photo :${imgArticleHighlight} `}
            className="section-illustration-section"
          />
          <h3 className="date">
            <img src={iconDate} alt="icône date" className="icon" /> le 09 mai
            2024
          </h3>

          <h4 className="section-title">Notre weekend en campagne</h4>
          <div className="section-content">
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
        {/* end section highlight */}

        {/* section dernier articles */}
        <section className="section-usual">
          <h3 className="section-title">Derniers articles</h3>
          <div className="container-preview-article">
            <img
              src={imgPreviewArticle}
              alt={`illustration de l'article, nom de la photo :${imgPreviewArticle}`}
              className="section-illustration-preview-article"
            />
            <div className="article-title">
              <h3>Titre de l'article</h3>
            </div>
            <h4 className="date">
              <img src={iconDate} alt="icône date" className="icon" /> le 09 mai
              2024
            </h4>
          </div>
          <div className="container-preview-article">
            <img
              src={imgPreviewArticle}
              alt={`illustration de l'article, nom de la photo :${imgPreviewArticle}`}
              className="section-illustration-preview-article"
            />
            <div className="article-title">
              <h3>Titre de l'article</h3>
            </div>
            <h4 className="date">
              <img src={iconDate} alt="icône date" className="icon" /> le 09 mai
              2024
            </h4>
          </div>
          <div className="container-preview-article">
            <img
              src={imgPreviewArticle}
              alt={`illustration de l'article, nom de la photo :${imgPreviewArticle}`}
              className="section-illustration-preview-article"
            />
            <div className="article-title">
              <h3>Titre de l'article</h3>
            </div>
            <h4 className="date">
              <img src={iconDate} alt="icône date" className="icon" /> le 09 mai
              2024
            </h4>
          </div>
          <div className="container-preview-article">
            <img
              src={imgPreviewArticle}
              alt={`illustration de l'article, nom de la photo :${imgPreviewArticle}`}
              className="section-illustration-preview-article"
            />
            <div className="article-title">
              <h3>Titre de l'article</h3>
            </div>
            <h4 className="date">
              <img src={iconDate} alt="icône date" className="icon" /> le 09 mai
              2024
            </h4>
          </div>
          <div className="container-preview-article">
            <img
              src={imgPreviewArticle}
              alt={`illustration de l'article, nom de la photo :${imgPreviewArticle}`}
              className="section-illustration-preview-article"
            />
            <div className="article-title">
              <h3>Titre de l'article</h3>
            </div>
            <h4 className="date">
              <img src={iconDate} alt="icône date" className="icon" /> le 09 mai
              2024
            </h4>
          </div>
          <div className="container-preview-article">
            <img
              src={imgPreviewArticle}
              alt={`illustration de l'article, nom de la photo :${imgPreviewArticle}`}
              className="section-illustration-preview-article"
            />
            <div className="article-title">
              <h3>Titre de l'article</h3>
            </div>
            <h4 className="date">
              <img src={iconDate} alt="icône date" className="icon" /> le 09 mai
              2024
            </h4>
          </div>
        </section>
        {/* end section derniers articles */}

        {/* Début section articles les plus vus*/}
        <section className="section-usual">
          <h3 className="section-title">Articles les plus vus</h3>
          <div className="container-preview-article">
            <img
              src={imgPreviewArticle}
              alt={`illustration de l'article, nom de la photo :${imgPreviewArticle}`}
              className="section-illustration-preview-article"
            />
            <div className="article-title">
              <p>Titre de l'article</p>
            </div>
            <h4 className="date">
              <img src={iconDate} alt="icône date" className="icon" /> le 09 mai
              2024
            </h4>
          </div>
          <div className="container-preview-article">
            <img
              src={imgPreviewArticle}
              alt={`illustration de l'article, nom de la photo :${imgPreviewArticle}`}
              className="section-illustration-preview-article"
            />
            <div className="article-title">
              <p>Titre de l'article</p>
            </div>
            <h4 className="date">
              <img src={iconDate} alt="icône date" className="icon" /> le 09 mai
              2024
            </h4>
          </div>
          <div className="container-preview-article">
            <img
              src={imgPreviewArticle}
              alt={`illustration de l'article, nom de la photo :${imgPreviewArticle}`}
              className="section-illustration-preview-article"
            />
            <div className="article-title">
              <p>Titre de l'article</p>
            </div>
            <h4 className="date">
              <img src={iconDate} alt="icône date" className="icon" /> le 09 mai
              2024
            </h4>
          </div>
          <div className="container-preview-article">
            <img
              src={imgPreviewArticle}
              alt={`illustration de l'article, nom de la photo :${imgPreviewArticle}`}
              className="section-illustration-preview-article"
            />
            <div className="article-title">
              <p>Titre de l'article</p>
            </div>
            <h4 className="date">
              <img src={iconDate} alt="icône date" className="icon" /> le 09 mai
              2024
            </h4>
          </div>
          <div className="container-preview-article">
            <img
              src={imgPreviewArticle}
              alt={`illustration de l'article, nom de la photo :${imgPreviewArticle}`}
              className="section-illustration-preview-article"
            />
            <div className="article-title">
              <p>Titre de l'article</p>
            </div>
            <h4 className="date">
              <img src={iconDate} alt="icône date" className="icon" /> le 09 mai
              2024
            </h4>
          </div>
          <div className="container-preview-article">
            <img
              src={imgPreviewArticle}
              alt={`illustration de l'article, nom de la photo :${imgPreviewArticle}`}
              className="section-illustration-preview-article"
            />
            <div className="article-title">
              <p>Titre de l'article</p>
            </div>
            <h4 className="date">
              <img src={iconDate} alt="icône date" className="icon" /> le 09 mai
              2024
            </h4>
          </div>
        </section>
        {/* end section articles les plus vus*/}
      </div>

      <footer>
        {/* section about me */}
        <section id="section-about-me">
          <h2>À propos de moi</h2>
          <p>Bonjour !</p>{" "}
          <p>
            Passionné de développement web et créateur d'expériences
            utilisateur. Expert en HTML, CSS et JavaScript, avec une maîtrise de
            frameworks comme React.js . Toujours à la recherche de nouveaux
            défis et de projets innovants.{" "}
          </p>
          <p> Contactez-moi pour des solutions web sur mesure !</p>
          <p>Dammaretz Gaëtan alias GDEvWEb</p>
        </section>
        <div className="dotted-border"></div>
        {/* section projects  */}
        <section className="section-projects">
          <h2>Mes projets</h2>
          <div className="container-preview-article">
            <img
              src={imgPreviewProject}
              alt={`illustration de l'article, nom de la photo :${imgPreviewProject}`}
              className="section-illustration-preview-article"
            />
            <div className="article-title">
              <p>Projet#1</p>
            </div>
          </div>
          <div className="container-preview-article">
            <img
              src={imgPreviewProject}
              alt={`illustration de l'article, nom de la photo :${imgPreviewProject}`}
              className="section-illustration-preview-article"
            />
            <div className="article-title">
              <p>Projet#2</p>
            </div>
          </div>
          <div className="container-preview-article">
            <img
              src={imgPreviewProject}
              alt={`illustration de l'article, nom de la photo :${imgPreviewProject}`}
              className="section-illustration-preview-article"
            />
            <div className="article-title">
              <p>Projet#3</p>
            </div>
          </div>
        </section>
        <div className="dotted-border"></div>
        {/* section contact  */}
        <section id="section-contact">
          <h2>Contact</h2>
          <h3>Retrouvez-moi sur :</h3>
          <section id="section-social-links">
            <ul id="section-social-links">
              <li>
                <a href="https://www.linkedin.com/in/ga%C3%ABtan-dammaretz/">
                  <img src={iconLinkedin} alt="icône linkedin" />
                </a>
              </li>
              <li>
                <a href="https://github.com/GDevWeb">
                  <img src={iconGithub} alt="icône github" />
                </a>
              </li>
            </ul>
          </section>
          <section id="section-contact-links">
            <h3>Contactez-moi via :</h3>
            <ul id="section-contact-links">
              <li>
                <a href="mailto:gaetan.dammaretz.dev@gmail.com">
                  <img src={iconGmail} alt="icône gmail" />
                </a>
              </li>
              <li>
                <a href="https://github.com/GDevWeb">
                  <img src={iconLinkedin} alt="icône linkedin" />
                </a>
              </li>
            </ul>
          </section>
          <section id="section-portfolio">
            <h3>Mon portfolio :</h3>
            <ul id="section-portfolio">
              <li>
                <a href="https://gdevweb.vercel.app/">
                  <img src={iconPortfolio} alt="icône portfolio" />
                </a>
              </li>
            </ul>
          </section>
        </section>
        {/* end section contact  */}
          <div className="dotted-border"></div>
          <section id="section-copyright">
            <div id="copyright-texts">
            <h4>©️2024 - My Network Family - Tous Droits Réservés</h4>
            <h4>Auteur : Dammaretz Gaëtan - alias GDevWeb - dev frontend</h4>
            </div>
          </section>
      </footer>
    </>
  );
}
