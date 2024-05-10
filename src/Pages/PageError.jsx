import { Link} from "react-router-dom";

export default function PageError() {

  return (
    <>
      <h1>Page 404 - Une erreur s'est produite !</h1>
      <h2>
        <Link to={"/"} className="">Retour à la page d'accueil </Link>
      </h2>
    </>
  );
}
