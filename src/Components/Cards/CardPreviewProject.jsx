import indexImages from "../../assets/images/indexImages";
import "../../sass/CardPreviewProject.scss";

export default function CardPreviewProject({
  imgPreviewProject,
  projectName,
  linkToProject,
}) {
  return (
    <div className="container-card-preview-project">
      <img
        src={
          imgPreviewProject ? imgPreviewProject : indexImages.imgPreviewProject
        }
        alt={`illustration de l'e, nom de la photo :${
          imgPreviewProject ? imgPreviewProject : indexImages.imgPreviewProject
        }`}
        className="illustration-preview-project"
      />
      <div className="project-name">
        <p>
          <a target="_blank" href={linkToProject ? linkToProject : "#"}>
            {projectName ? projectName : "Projet#"}
          </a>
        </p>
      </div>
    </div>
  );
}
