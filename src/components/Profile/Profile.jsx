import styles from "./Profile.module.css";
import { useAuth0 } from "@auth0/auth0-react";
import Loader from "../Loader/Loader";

const Profile = () => {
    const { user, isAuthenticated, isLoading, logout } = useAuth0();
    if (isLoading) {
        return <Loader />;
    }

    return (
        isAuthenticated && (
            <div className={styles.container}>
                <img
                    src={user.picture}
                    alt={user.name}
                    className={styles.picture}
                />
                <h2 className={styles.name}>{user.name}</h2>
                <p className={styles.nickname}>{user.nickname}</p>
                <div>
                    <button onClick={() => logout()} className={styles.btn}>Logout</button>
                </div>
            </div>
        )   
    );
};

export default Profile;