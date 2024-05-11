import indexIcons from "../../../assets/icons/indexIcons";
export default function ContentSectionContact() {
  // 1.State:

  // 2.Behavior:
  const { iconGithub, iconGmail, iconLinkedin } = indexIcons;
  // 3.Render:
  return (
    <>
      <h2>Contact</h2>
      <section id="section-social-links">
        <h3>Retrouvez-moi sur :</h3>
        <ul id="section-social-links">
          <li>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/ga%C3%ABtan-dammaretz/"
            >
              <img
                src={iconLinkedin}
                alt="icône linkedin - retrouvez-moi sur linkedin"
              />
            </a>
          </li>
          <li>
            <a target="_blank" href="https://github.com/GDevWeb">
              <img
                src={iconGithub}
                alt="icône github - retrouvez-moi sur github"
              />
            </a>
          </li>
        </ul>
      </section>
      <section id="section-contact-links">
        <h3>Contactez-moi via :</h3>
        <ul id="section-contact-links">
          <li>
            <a target="_blank" href="mailto:gaetan.dammaretz.dev@gmail.com">
              <img
                src={iconGmail}
                alt="icône gmail - contactez-moi via gamil"
              />
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/ga%C3%ABtan-dammaretz/"
            >
              <img
                src={iconLinkedin}
                alt="icône linkedin - contactez-moi via linkedin"
              />
            </a>
          </li>
        </ul>
      </section>
      <section id="section-portfolio">
        <h3>Mon portfolio :</h3>
        <ul id="section-portfolio">
          <li>
            <a target="_blank" href="https://gdevweb.vercel.app/">
              <img src={indexIcons.iconPortfolio} alt="icône portfolio" />
            </a>
          </li>
        </ul>
      </section>
    </>
  );
}
