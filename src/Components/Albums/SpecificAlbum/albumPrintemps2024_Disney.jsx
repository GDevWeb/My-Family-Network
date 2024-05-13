import { nanoid } from "nanoid";
import getActualDay from "../../../functions/hookGetActualDay";
import indexImages from "../../../assets/images/indexImages";

const { imgPreviewAlbumDisney } = indexImages;

const albumListPictures_printemps_2024 = [
  {
    id: nanoid(8),
    picture: imgPreviewAlbumDisney,
    title: "Un joyeux séjour #1",
    content: "Un joyeux séjour en famille #1",
    date: getActualDay(),
  },
  {
    id: nanoid(8),
    picture: imgPreviewAlbumDisney,
    title: "Un joyeux séjour #2",
    content: "Un joyeux séjour en famille #2",
    date: getActualDay(),
  },
  {
    id: nanoid(8),
    picture: imgPreviewAlbumDisney,
    title: "Un joyeux séjour #3",
    content: "Un joyeux séjour en famille #3",
    date: getActualDay(),
  },
  {
    id: nanoid(8),
    picture: imgPreviewAlbumDisney,
    title: "Un joyeux séjour #4",
    content: "Un joyeux séjour en famille #4",
    date: getActualDay(),
  },
  {
    id: nanoid(8),
    picture: imgPreviewAlbumDisney,
    title: "Un joyeux séjour #5",
    content: "Un joyeux séjour en famille #5",
    date: getActualDay(),
  },
  {
    id: nanoid(8),
    picture: imgPreviewAlbumDisney,
    title: "Un joyeux séjour #6",
    content: "Un joyeux séjour en famille #6",
    date: getActualDay(),
  },
];

export default albumListPictures_printemps_2024;
