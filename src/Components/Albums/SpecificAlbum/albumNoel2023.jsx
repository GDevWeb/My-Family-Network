import { nanoid } from "nanoid";
import getActualDay from "../../../functions/hookGetActualDay";
import indexImages from "../../../assets/images/indexImages";

const { imgPreviewAlbumChristmas } = indexImages;

const albumListPictures_noel_2023 = [
  {
    id: "1",
    picture: imgPreviewAlbumChristmas,
    title: "Un Joyeux noël #1",
    content: "Un joyeux noël en famille #1",
    date: getActualDay(),
  },
  {
    id: nanoid(8),
    picture: imgPreviewAlbumChristmas,
    title: "Un Joyeux noël #2",
    content: "Un joyeux noël en famille #2",
    date: getActualDay(),
  },
  {
    id: nanoid(8),
    picture: imgPreviewAlbumChristmas,
    title: "Un Joyeux noël #3",
    content: "Un joyeux noël en famille #3",
    date: getActualDay(),
  },
  {
    id: nanoid(8),
    picture: imgPreviewAlbumChristmas,
    title: "Un Joyeux noël #4",
    content: "Un joyeux noël en famille #4",
    date: getActualDay(),
  },
  {
    id: nanoid(8),
    picture: imgPreviewAlbumChristmas,
    title: "Un Joyeux noël #5",
    content: "Un joyeux noël en famille #5",
    date: getActualDay(),
  },
  {
    id: nanoid(8),
    picture: imgPreviewAlbumChristmas,
    title: "Un Joyeux noël #6",
    content: "Un joyeux noël en famille #6",
    date: getActualDay(),
  },
];

export default albumListPictures_noel_2023;
