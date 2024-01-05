import styles from "./EditProfile.module.scss";
import back from "../../assets/edit-profile/CaretDown.svg";
import avatar from "../../assets/edit-profile/Avatar.svg";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/auth/authSlice";

export const EditProfile = () => {
  const user = useSelector(selectUser);
  console.log(user);
  return (
    <div className={styles.profile}>
      <div className={styles.profile__title}>
        <img src={back} alt="" />
        <h3>Profile</h3>
      </div>
      <img className={styles.profile__photo} src={avatar} alt="" />
      <div className={styles.profile__name}>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" />
      </div>
      <div className={styles.profile__name}>
        <label htmlFor="username">Username</label>
        <input type="text" id="username" />
      </div>
      <div className={styles.profile__name}>
        <label htmlFor="about">About</label>
        <input type="text" id="about" />
      </div>
      <div className={styles.profile__save}>
        <button>Save</button>
      </div>
    </div>
  );
};
