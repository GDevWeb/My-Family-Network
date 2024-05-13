import { nanoid } from "nanoid";
import getActualDay from "../../../functions/hookGetActualDay";
import indexImages from "../../../assets/images/indexImages";

const { imgPreviewAlbumEaster } = indexImages;

const albumListPictures_pacques_2024 = [
  {
    id: nanoid(8),
    picture: imgPreviewAlbumEaster,
    title: "De joyeuses pacques  #1",
    content: "De joyeuses pacques  en famille #1",
    date: getActualDay(),
  },
  {
    id: nanoid(8),
    picture: imgPreviewAlbumEaster,
    title: "De joyeuses pacques  #2",
    content: "De joyeuses pacques  en famille #2",
    date: getActualDay(),
  },
  {
    id: nanoid(8),
    picture: imgPreviewAlbumEaster,
    title: "De joyeuses pacques  #3",
    content: "De joyeuses pacques  en famille #3",
    date: getActualDay(),
  },
  {
    id: nanoid(8),
    picture: imgPreviewAlbumEaster,
    title: "De joyeuses pacques  #4",
    content: "De joyeuses pacques  en famille #4",
    date: getActualDay(),
  },
  {
    id: nanoid(8),
    picture: imgPreviewAlbumEaster,
    title: "De joyeuses pacques  #5",
    content: "De joyeuses pacques  en famille #5",
    date: getActualDay(),
  },
  {
    id: nanoid(8),
    picture: imgPreviewAlbumEaster,
    title: "De joyeuses pacques  #6",
    content: "De joyeuses pacques  en famille #6",
    date: getActualDay(),
  },
];

export default albumListPictures_pacques_2024;
