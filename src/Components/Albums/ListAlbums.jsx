import { nanoid } from "nanoid";
import indexImages from "../../assets/images/indexImages";
import albumListPictures_noel_2023 from "./SpecificAlbum/albumNoel2023";
import albumListPictures_pacques_2024 from "./SpecificAlbum/albumPacques2024";
import albumListPictures_printemps_2024 from "./SpecificAlbum/albumPrintemps2024_Disney";
import albumListPictures_ete_2024_bellewaerde from "./SpecificAlbum/albumEte2024_Bellewaerde";

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
    albumLink: "#", //stockera le link sur serveur
    albumListPictures: albumListPictures_noel_2023,
  },
  {
    id: nanoid(8),
    albumPicture: imgPreviewAlbumEaster,
    albumName: "Pacques 2024",
    albumLink: "#",
    albumListPictures: albumListPictures_pacques_2024,
  },
  {
    id: nanoid(8),
    albumPicture: imgPreviewAlbumDisney,
    albumName: "Sortie Printemps 2024 Disney",
    albumLink: "#",
    albumListPictures: albumListPictures_printemps_2024,
  },
  {
    id: nanoid(8),
    albumPicture: imgPreviewAlbumBellewaerde,
    albumName: "Sortie été 2024 Bellewaerde",
    albumLink: "#",
    albumListPictures: albumListPictures_ete_2024_bellewaerde,
  },
];

export default listAlbums;
