import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../../sass/FormLogin.scss";

export default function FormLogin() {
  // 1.State :
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [showValidation, setShowValidation] = useState({
    email: false,
    password: false,
  });

  const [isValidForm, setIsValidForm] = useState(false);
  const [invalidFormMessage, setInvalidFormMessage] = useState("");

  // 2.Behavior:
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    validationCheck({ ...formData, [name]: value });
  };

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isValidForm) {
      console.log("Envoi du formulaire de connexion");

      try {
        const response = await fetch(
          "http://localhost:3000/my-family-network/api/auth/login",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              email: formData.email,
              password: formData.password,
            }),
          }
        );
        const data = await response.json();
        if (response.ok) {
          alert("Identification réussie");
          localStorage.setItem("token", data.token);
          // console.log(data.token);
          setTimeout(() => {
            navigate("/");
          }, 10000);
        } else {
          setInvalidFormMessage(
            data.message || "Une erreur est survenue lors de la connexion"
          );
        }
      } catch (error) {
        console.error(error, "Erreur lors de la connexion");
        setInvalidFormMessage("Erreur lors de la connexion");
      }
    }
  };

  const validationCheck = (data) => {
    const areValid = {
      email: /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(data.email),
      password: data.password !== "",
    };

    setShowValidation({
      email: !areValid.email,
      password: !areValid.password,
    });
    setIsValidForm(Object.values(areValid).every((value) => value === true));
  };

  return (
    <form onSubmit={handleSubmit} id="formLogin">
      <div className="formGroup">
        <label htmlFor="email">E-mail</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Saisir votre e-mail"
          value={formData.email}
          onChange={handleChange}
          className={showValidation.email ? "error" : ""}
        />
        <div className="input-error-message-container">
          {showValidation.email && (
            <span className="error-message">L'e-mail est requis</span>
          )}
        </div>
      </div>
      <div className="formGroup">
        <label htmlFor="password">Mot de Passe</label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Saisir votre mot de passe"
          value={formData.password}
          onChange={handleChange}
          className={showValidation.password ? "error" : ""}
        />
        <div className="input-error-message-container">
          {showValidation.password && (
            <span className="error-message">Le mot de passe est requis</span>
          )}
        </div>
      </div>
      <button
        className="button-submit"
        aria-label="button connexion"
        style={{ backgroundColor: isValidForm ? "green" : "red" }}
      >
        Connexion
      </button>
      <div id="validation-message-container">
        {isValidForm && (
          <p className="validation-message">
            Formulaire valide - Prêt à être envoyé
          </p>
        )}
      </div>
      <div id="invalidation-message-container">
        {invalidFormMessage && (
          <p className="error-message">{invalidFormMessage}</p>
        )}
      </div>
      <p id="create-account">
        Pas de compte ? <Link to={"/create-account"}>Créer un compte</Link>
      </p>
    </form>
  );
}
