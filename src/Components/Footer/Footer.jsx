import CardPreviewProject from "../Cards/CardPreviewProject";
import ListPreviewProjects from "./PreviewProjects/ListPreviewProjects";
import "../../sass/Footer.scss";
import ContentSectionAboutMe from "./Content/ContentSectionAboutMe";
import ContentSectionContact from "./Content/ContentSectionContact";
import ContentSectionCopyright from "./Content/ContentSectionCopyright";

function Footer() {
  // 1.State:

  // 2.Behavior:
  const cardPreviewProject = ListPreviewProjects.map((project) => {
    const { id, imgPreviewProject, projectName, linkToProject } = project;
    return (
      <CardPreviewProject
        key={id}
        imgPreviewProject={imgPreviewProject}
        projectName={projectName}
        linkToProject={linkToProject}
      />
    );
  });

  // 3.Render:
  return (
    <footer>
      {/* section about me */}
      <section id="section-about-me">
        <ContentSectionAboutMe />
      </section>
      {/* section projects  */}
      <section className="section-projects">
        <h2>Mes projets</h2>
        {cardPreviewProject}
      </section>
      {/* section contact  */}
      <section id="section-contact">
        <ContentSectionContact />
      </section>
      <section id="section-copyright">
        <ContentSectionCopyright />
      </section>
    </footer>
  );
}

export default Footer;
