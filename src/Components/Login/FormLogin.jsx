
export default function FormLogin() {
  return (
    <form>
      <div className="formGroup">
        <label htmlFor="pseudo">Pseudo</label>
        <input type="text" name="pseudo" id="pseudo" />
      </div>
      <div className="formGroup">
        <label htmlFor="password">Mot de Passe</label>
        <input type="text" name="password" id="password" />
      </div>
    </form>
  );
}
