import { useParams } from "react-router-dom";

export default function AlbumDetail() {
  // 1.State :

  // 2.Behavior:
  const params = useParams();
  console.log(params);

  // 3.Render :
  return (
    <>
      <h2>AlbumDetail</h2>

      <h3>
        Contiendra dynamiquement le contenu de chaque album correspondant via
        useParams de React Router Dom
      </h3>

      <h4>{params.id}</h4>
    </>
  );
}
