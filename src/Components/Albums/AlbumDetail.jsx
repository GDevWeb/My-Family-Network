import { useParams } from "react-router-dom";

export default function AlbumDetail() {
  // 1.State :

  // 2.Behavior:
  const params = useParams();
  console.log(params);

  // 3.Render :
  return (
    <>
      <h4>{params.id}</h4>
    </>
  );
}
