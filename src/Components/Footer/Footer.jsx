import indexImages from "../../assets/images/indexImages";
import indexIcons from "../../../src/assets/icons/indexIcons";
import getCurrentYear from "../../functions/hookGetCurrentYear";
import "../../sass/Footer.scss";

function Footer() {
  // 1.State:

  // 2.Behavior:

  // 3.Render:
  return (
    <footer>
      {/* section about me */}
      <section id="section-about-me">
        <h2>À propos de moi</h2>
        <p>Bonjour !</p>{" "}
        <p>
          Passionné de développement web et créateur d'expériences utilisateur.
          Expert en HTML, CSS et JavaScript, avec une maîtrise de frameworks
          comme React.js . Toujours à la recherche de nouveaux défis et de
          projets innovants.{" "}
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
            src={indexImages.imgPreviewProject}
            alt={`illustration de l'article, nom de la photo :${indexImages.imgPreviewProject}`}
            className="section-illustration-preview-article"
          />
          <div className="article-title">
            <p>Projet#1</p>
          </div>
        </div>
        <div className="container-preview-article">
          <img
            src={indexImages.imgPreviewProject}
            alt={`illustration de l'article, nom de la photo :${indexImages.imgPreviewProject}`}
            className="section-illustration-preview-article"
          />
          <div className="article-title">
            <p>Projet#2</p>
          </div>
        </div>
        <div className="container-preview-article">
          <img
            src={indexImages.imgPreviewProject}
            alt={`illustration de l'article, nom de la photo :${indexImages.imgPreviewProject}`}
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
                <img src={indexIcons.iconLinkedin} alt="icône linkedin" />
              </a>
            </li>
            <li>
              <a href="https://github.com/GDevWeb">
                <img src={indexIcons.iconGithub} alt="icône github" />
              </a>
            </li>
          </ul>
        </section>
        <section id="section-contact-links">
          <h3>Contactez-moi via :</h3>
          <ul id="section-contact-links">
            <li>
              <a href="mailto:gaetan.dammaretz.dev@gmail.com">
                <img src={indexIcons.iconGmail} alt="icône gmail" />
              </a>
            </li>
            <li>
              <a href="https://github.com/GDevWeb">
                <img src={indexIcons.iconLinkedin} alt="icône linkedin" />
              </a>
            </li>
          </ul>
        </section>
        <section id="section-portfolio">
          <h3>Mon portfolio :</h3>
          <ul id="section-portfolio">
            <li>
              <a href="https://gdevweb.vercel.app/">
                <img src={indexIcons.iconPortfolio} alt="icône portfolio" />
              </a>
            </li>
          </ul>
        </section>
      </section>
      {/* end section contact  */}
      <div className="dotted-border"></div>
      <section id="section-copyright">
        <div id="copyright-texts">
          <h4>
            ©️{getCurrentYear()} - My Network Family - Tous Droits Réservés
          </h4>
          <h4>Auteur : Dammaretz Gaëtan - alias GDevWeb - dev frontend</h4>
        </div>
      </section>
    </footer>
  );
}

export default Footer;
