import { nanoid } from "nanoid";
import indexImageProjects from "../../../assets/images/PreviewProject/indexImageProjects";

const ListPreviewProjects = [
  {
    id: nanoid(8),
    imgPreviewProject: indexImageProjects.imagePassionGuitar,
    projectName: "Passion Guitar",
    linkToProject: "https://gdevweb.github.io/PassionGuitar/",
  },
  {
    id: nanoid(8),
    imgPreviewProject: indexImageProjects.imageMemoryKidz,
    projectName: "Memory Kids",
    linkToProject: "https://gdevweb.github.io/Game-Memory-Card/",
  },
  {
    id: nanoid(8),
    imgPreviewProject: indexImageProjects.imageDaddyDoList,
    projectName: "Daddy Do List",
    linkToProject: "https://daddy-do-list.vercel.app/",
  },
];

export default ListPreviewProjects;
