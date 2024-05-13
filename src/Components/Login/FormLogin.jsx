import { Link } from "react-router-dom";
import "../../sass/FormLogin.scss";

export default function FormLogin() {
  // 1.State :

  // 2.Behavior:
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  // 3.Render :
  return (
    <form onSubmit={handleSubmit} id="formLogin">
      <div className="formGroup">
        <label htmlFor="pseudo">Pseudo</label>
        <input
          type="text"
          name="pseudo"
          id="pseudo"
          placeholder="votre pseudo"
        />
      </div>
      <div className="formGroup">
        <label htmlFor="password">Mot de Passe</label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="votre mot de passe"
        />
      </div>
      <button className="button-submit">Connexion</button>
      <p id="create-account">Pas de compte ? <Link to={"/createAccount"}>Créer un compte</Link></p>
    </form>
    
  );
}
