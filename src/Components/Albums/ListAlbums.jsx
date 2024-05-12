import { nanoid } from "nanoid";
import indexImages from "../../assets/images/indexImages";

const {
  imgPreviewAlbumChristmas,
  imgPreviewAlbumEaster,
  imgPreviewAlbumDisney,
  imgPreviewAlbumBellewaerde,
} = indexImages;

const listAlbums = [
  {
    id: nanoid(8),
    albumPicture: imgPreviewAlbumChristmas,
    albumName: "Noël 2023",
    albumLink: "#",
    albumListPictures: "#",
  },
  {
    id: nanoid(8),
    albumPicture: imgPreviewAlbumEaster,
    albumName: "Pacques 2024",
    albumLink: "#",
    albumListPictures: "#",
  },
  {
    id: nanoid(8),
    albumPicture: imgPreviewAlbumDisney,
    albumName: "Sortie Printemps 2024 Disney",
    albumLink: "",
    albumListPictures: "#",
  },
  {
    id: nanoid(8),
    albumPicture: imgPreviewAlbumBellewaerde,
    albumName: "Sortie été 2024 Bellewaerde",
    albumLink: "#",
    albumListPictures: "#",
  },
];

export default listAlbums;
