import styles from "./EditProfile.module.css";
import { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const EditProfile = () => {
  const { user, isAuthenticated } = useAuth0();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { profile } = useSelector((state) => state.user);
  const [name, setName] = useState(profile?.name || "");
  const [email, setEmail] = useState(profile?.email || "");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState(profile?.phone || "");
  const [image, setImage] = useState(profile?.image || "");

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedProfile = {
      name,
      email,
      password,
      phone,
      image,
    };
    // Aquí puedes despachar la acción para actualizar el perfil
    dispatch(updateProfile(updatedProfile));
    navigate("/profile");
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setImage(reader.result);
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <h1 className={styles.title}>Edit Profile</h1>
        {isAuthenticated ? (
          <>
            <img src={user.picture} alt="Profile" className={styles.profileImage} />
            <p className={styles.userName}>{user.name}</p>
            <p className={styles.userEmail}>{user.email}</p>
            <input
              type="file"
              onChange={handleImageChange}
              className={styles.inputFile}
            />
          </>
        ) : (
          <>
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
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
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={styles.inputPassword}
              required
            />
            <input
              type="tel"
              placeholder="Phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className={styles.inputTel}
              required
            />
            <input
              type="file"
              onChange={handleImageChange}
              className={styles.inputFile}
            />
          </>
        )}
        <button type="submit" className={styles.submitButton}>
          Guardar cambios
        </button>
      </form>
    </div>
  );
};

export default EditProfile;