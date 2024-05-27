import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Correct usage for React Router v6+
import "../../sass/FormSignup.scss";

export default function CreateAccount() {
  // 1. State:
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    age: "",
    familyGrade: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [showValidation, setShowValidation] = useState({
    firstName: false,
    lastName: false,
    age: false,
    familyGrade: false,
    email: false,
    password: false,
    confirmPassword: false,
  });

  const [isValidForm, setIsValidForm] = useState(false);
  const [invalidFormMessage, setInvalidFormMessage] = useState("");

  const navigate = useNavigate(); // Correct usage of useNavigate

  // 2. Behavior:
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    validationCheck({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isValidForm) {
      console.log("Envoi du formulaire");

      // Envoi les données au backend
      try {
        const response = await fetch(
          "http://localhost:3000/my-family-network/api/auth/signup",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              firstName: formData.firstName,
              lastName: formData.lastName,
              age: formData.age,
              grade: formData.familyGrade,
              email: formData.email,
              password: formData.password,
            }),
          }
        );
        const data = await response.json();
        if (response.ok) {
          alert("Compte créé avec succès !");
          // Rediriger ou effectuer d'autres actions
          navigate("/login");
        } else {
          setInvalidFormMessage(data.message || "Une erreur est survenue");
        }
      } catch (error) {
        console.error("Erreur:", error);
        setInvalidFormMessage("Erreur lors de la création du compte");
      }
    }
  };

  const validationCheck = (data) => {
    const areValid = {
      firstName: /^[a-zA-Z\s-]{3,64}$/.test(data.firstName),
      lastName: /^[a-zA-Z\s-]{3,64}$/.test(data.lastName),
      age: /^[1-9][0-9]?$|^100$/.test(data.age),
      familyGrade: data.familyGrade !== "",
      email: /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(data.email),
      password: data.password !== "",
      confirmPassword:
        data.confirmPassword === data.password && data.confirmPassword !== "",
    };

    setShowValidation({
      firstName: !areValid.firstName,
      lastName: !areValid.lastName,
      age: !areValid.age,
      familyGrade: !areValid.familyGrade,
      email: !areValid.email,
      password: !areValid.password,
      confirmPassword: !areValid.confirmPassword,
    });

    setIsValidForm(Object.values(areValid).every((value) => value === true));
  };

  // 3. Render:
  return (
    <form onSubmit={handleSubmit} id="formSignUp">
      <h2 id="formTitle">Créer un compte</h2>
      <div id="inputFirstName" className="inputGroup">
        <label htmlFor="inputFirstName">Prénom</label>
        <input
          type="text"
          name="firstName"
          id="inputFirstName"
          placeholder="Saisir votre prénom"
          value={formData.firstName}
          onChange={handleChange}
          className={showValidation.firstName ? "error" : ""}
        />
        <div className="input-error-message-container">
          {showValidation.firstName && (
            <span className="error-message">Le prénom est requis</span>
          )}
        </div>
      </div>
      <div id="inputLastName" className="inputGroup">
        <label htmlFor="inputLastName">Nom</label>
        <input
          type="text"
          name="lastName"
          id="inputLastName"
          placeholder="Saisir votre nom"
          value={formData.lastName}
          onChange={handleChange}
          className={showValidation.lastName ? "error" : ""}
        />
        <div className="input-error-message-container">
          {showValidation.lastName && (
            <span className="error-message">Le nom est requis</span>
          )}
        </div>
      </div>
      <div id="inputAge" className="inputGroup">
        <label htmlFor="inputAge">Âge</label>
        <input
          type="number"
          name="age"
          id="inputAge"
          placeholder="Saisir votre âge"
          value={formData.age}
          onChange={handleChange}
          className={showValidation.age ? "error" : ""}
        />
        <div className="input-error-message-container">
          {showValidation.age && (
            <span className="error-message">L'âge est requis</span>
          )}
        </div>
      </div>
      <div id="inputFamilyGrade" className="inputGroup">
        <label htmlFor="inputFamilyGrade">Titre familiale</label>
        <select
          name="familyGrade"
          id="inputFamilyGrade"
          value={formData.familyGrade}
          onChange={handleChange}
          className={showValidation.familyGrade ? "error" : ""}
        >
          <option value="">--sélectionner--</option>
          <option value="maman">Maman</option>
          <option value="papa">Papa</option>
          <option value="mamy">Mamy</option>
          <option value="papy">Papy</option>
          <option value="tata">Tata</option>
          <option value="tonton">Tonton</option>
          <option value="marraine">Marraine</option>
          <option value="parrain">Parrain</option>
          <option value="cousin">Cousin</option>
          <option value="cousine">Cousine</option>
          <option value="membre">Membre</option>
        </select>
        <div className="input-error-message-container">
          {showValidation.familyGrade && (
            <span className="error-message">
              Votre situation familiale est requise
            </span>
          )}
        </div>
      </div>
      <div id="inputMail" className="inputGroup">
        <label htmlFor="inputMail">E-mail</label>
        <input
          type="email"
          name="email"
          id="inputMail"
          placeholder="Saisir votre mail"
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
      <div id="inputPassword" className="inputGroup">
        <label htmlFor="inputPassword">Mot de passe</label>
        <input
          type="password"
          name="password"
          id="inputPassword"
          placeholder="Saisir mot de passe"
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
      <div id="inputConfirmPassword" className="inputGroup">
        <label htmlFor="inputConfirmPassword">Confirmer mot de passe</label>
        <input
          type="password"
          name="confirmPassword"
          id="inputConfirmPassword"
          placeholder="Confirmer mot de passe"
          value={formData.confirmPassword}
          onChange={handleChange}
          className={showValidation.confirmPassword ? "error" : ""}
        />
        <div className="input-error-message-container">
          {showValidation.confirmPassword && (
            <span className="error-message">
              La confirmation du mot de passe est requise
            </span>
          )}
        </div>
      </div>

      <div id="submit-button-container">
        <button
          type="submit"
          aria-label="button s'inscrire"
          style={{ backgroundColor: isValidForm ? "green" : "red" }}
        >
          Envoyer
        </button>
      </div>
      {isValidForm && (
        <p className="validation-message">
          Inscription réussie - N'oubliez pas vos identifiants
        </p>
      )}
      {invalidFormMessage && (
        <p className="error-message">{invalidFormMessage}</p>
      )}
    </form>
  );
}
