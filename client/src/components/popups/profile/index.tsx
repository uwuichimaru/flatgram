import Popup from "reactjs-popup";
import styles from "./Profile.module.scss";
import { enqueueSnackbar } from "notistack";
import { useNavigate } from "react-router-dom";

const PopupProfile: React.FC<{ profile: string }> = ({ profile }) => {

    const navigate = useNavigate();

    const Logout = () => {
        try{
            localStorage.removeItem("token");
            navigate('/');
            enqueueSnackbar("Successfully logged out", {variant: "success"});
        }
        catch {
            enqueueSnackbar("Something went wrong", {variant: "error"});
        }
    }
  return (
    <Popup trigger={<img src={profile} />} position="right center">
      <div className={styles.popup}>
        <button className={styles.popup__button}>Edit profile</button>
        <button className={styles.popup__button} onClick={Logout}>Log out</button>
      </div>
    </Popup>
  );
};

export default PopupProfile;
