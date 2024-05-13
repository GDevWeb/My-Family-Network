import { nanoid } from "nanoid";
import getActualDay from "../../../functions/hookGetActualDay";
import indexImages from "../../../assets/images/indexImages";

const { imgPreviewAlbumBellewaerde_Mini } = indexImages;

const albumListPictures_ete_2024_bellewaerde = [
  {
    id: nanoid(8),
    picture: imgPreviewAlbumBellewaerde_Mini,
    title: "Un super moment #1",
    content: "De bons moments en famille #1",
    date: getActualDay(),
  },
  {
    id: nanoid(8),
    picture: imgPreviewAlbumBellewaerde_Mini,
    title: "Un super moment #2",
    content: "De bons moments en famille #2",
    date: getActualDay(),
  },
  {
    id: nanoid(8),
    picture: imgPreviewAlbumBellewaerde_Mini,
    title: "Un super moment #3",
    content: "De bons moments en famille #3",
    date: getActualDay(),
  },
  {
    id: nanoid(8),
    picture: imgPreviewAlbumBellewaerde_Mini,
    title: "Un super moment #4",
    content: "De bons moments en famille #4",
    date: getActualDay(),
  },
  {
    id: nanoid(8),
    picture: imgPreviewAlbumBellewaerde_Mini,
    title: "Un super moment #5",
    content: "De bons moments en famille #5",
    date: getActualDay(),
  },
  {
    id: nanoid(8),
    picture: imgPreviewAlbumBellewaerde_Mini,
    title: "Un super moment #6",
    content: "De bons moments en famille #6",
    date: getActualDay(),
  },
];

export default albumListPictures_ete_2024_bellewaerde;
