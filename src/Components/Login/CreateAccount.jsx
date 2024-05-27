import { useState } from "react";
import { redirect } from "react-router-dom";
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
  const [invalidFormMessage, setInvalideFormMessage] = useState("");

  // 2. Behavior:
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validationCheck()) {
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
          redirect("/login");
        } else {
          setInvalideFormMessage(data.message || "Une erreur est survenue");
        }
      } catch (error) {
        console.error("Erreur:", error);
        setInvalideFormMessage("Erreur lors de la création du compte");
      }
    }
  };

  const validationCheck = () => {
    const areValid = {
      firstName: false,
      lastName: false,
      age: false,
      familyGrade: false,
      email: false,
      password: false,
      confirmPassword: false,
    };

    const regexAlpha = /^[a-zA-Z\s-]{3,64}$/;

    if (!regexAlpha.test(formData.lastName)) {
      setShowValidation((state) => ({ ...state, lastName: true }));
    } else {
      areValid.lastName = true;
      setShowValidation((state) => ({ ...state, lastName: false }));
    }

    if (!regexAlpha.test(formData.firstName)) {
      setShowValidation((state) => ({ ...state, firstName: true }));
    } else {
      areValid.firstName = true;
      setShowValidation((state) => ({ ...state, firstName: false }));
    }

    const regexAge = /^[1-9][0-9]?$|^100$/;
    if (!regexAge.test(formData.age)) {
      setShowValidation((state) => ({ ...state, age: true }));
    } else {
      areValid.age = true;
      setShowValidation((state) => ({ ...state, age: false }));
    }

    if (formData.familyGrade === "") {
      setShowValidation((state) => ({ ...state, familyGrade: true }));
    } else {
      areValid.familyGrade = true;
      setShowValidation((state) => ({ ...state, familyGrade: false }));
    }

    const regexMail = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;

    if (formData.email === "" || !regexMail.test(formData.email)) {
      setShowValidation((state) => ({ ...state, email: true }));
    } else {
      areValid.email = true;
      setShowValidation((state) => ({ ...state, email: false }));
    }

    if (formData.password === "") {
      setShowValidation((state) => ({ ...state, password: true }));
    } else {
      areValid.password = true;
      setShowValidation((state) => ({ ...state, password: false }));
    }

    if (
      formData.confirmPassword === "" ||
      formData.confirmPassword !== formData.password
    ) {
      setShowValidation((state) => ({ ...state, confirmPassword: true }));
    } else {
      areValid.confirmPassword = true;
      setShowValidation((state) => ({ ...state, confirmPassword: false }));
    }

    if (Object.values(areValid).every((value) => value === true)) {
      setIsValidForm(true);
      setFormData({
        firstName: "",
        lastName: "",
        age: "",
        familyGrade: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
      return true;
    } else {
      return false;
    }
  };

  // 3. Render:
  return (
    <form onSubmit={handleSubmit} id="formSignup">
      <h2>Créer un compte</h2>
      <div className="inputGroup">
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
        {showValidation.firstName && (
          <span className="error-message">Le prénom est requis</span>
        )}
      </div>
      <div className="inputGroup">
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
        {showValidation.lastName && (
          <span className="error-message">Le nom est requis</span>
        )}
      </div>
      <div className="inputGroup">
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
        {showValidation.age && (
          <span className="error-message">L'âge est requis</span>
        )}
      </div>
      <div className="inputGroup">
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
        {showValidation.familyGrade && (
          <span className="error-message">
            Votre situation familiale est requise
          </span>
        )}
      </div>
      <div className="inputGroup">
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
        {showValidation.email && (
          <span className="error-message">L'e-mail est requis</span>
        )}
      </div>
      <div className="inputGroup">
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
        {showValidation.password && (
          <span className="error-message">Le mot de passe est requis</span>
        )}
      </div>
      <div className="inputGroup">
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
        {showValidation.confirmPassword && (
          <span className="error-message">
            La confirmation du mot de passe est requise
          </span>
        )}
      </div>
      <button
        type="submit"
        aria-label="button s'inscrire"
      >
        {" "}
        Envoyer
      </button>
      {isValidForm &&
      <p className="validation-message">
        Inscription réussie - N'oubliez pas vos identifiants
      </p>
      }
      {invalidFormMessage && (
        <p className="error-message">{invalidFormMessage}</p>
      )}
    </form>
  );
}


// Revoir la prise en charge de l'état en temps réel !