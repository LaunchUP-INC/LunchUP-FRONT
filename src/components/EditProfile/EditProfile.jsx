import styles from "./EditProfile.module.css";
import { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateProfile } from "../../redux/actions";

const EditProfile = () => {
  const { user, isAuthenticated } = useAuth0();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { profile } = useSelector((state) => state.user);
  const [firstname, setFirstname] = useState(profile?.name || "");
  const [email, setEmail] = useState(profile?.email || "");
  const [password, setPassword] = useState("");
  const [telephone, setTelephone] = useState(profile?.phone || "");
  const [lastname, setLastname] = useState(profile?.lastName || "");
  const userID = localStorage.getItem('user'); // Asegúrate de que 'userId' es la clave correcta en localStorage
 


  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedProfile = {
      firstname,
      lastname,
      telephone, 
      email,
      password,
    };
    dispatch(updateProfile(updatedProfile, id));
    navigate("/profile");
  };

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <h1 className={styles.title}>Edit Profile</h1>
        <>
          <input
            type="text"
            placeholder="Nombre"
            value={firstname}
            onChange={(e) => setFirstname(e.target.value)}
            className={styles.inputText}
            required
          />
          <input
            type="text"
            placeholder="Apellido"
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
            className={styles.inputText}
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={styles.inputEmail}
            required
          />
          <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={styles.inputPassword}
            required
          />
          <input
            type="tel"
            placeholder="Teléfono"
            value={telephone}
            onChange={(e) => setTelephone(e.target.value)}
            className={styles.inputTel}
            required
          />
        </>
        <button type="submit" className={styles.submitButton}>
          Guardar cambios
        </button>
      </form>
    </div>
  );
};

export default EditProfile;
