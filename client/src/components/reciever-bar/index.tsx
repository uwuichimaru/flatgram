import styles from "./RecieverBar.module.scss";
import person1 from "../../assets/chat-list/person1.png";
import VideoCamera from "../../assets/reciever-bar/VideoCamera.svg";
import Phone from "../../assets/reciever-bar/Phone.svg";
import MagnifyingGlass from "../../assets/reciever-bar/MagnifyingGlass.svg";
import CaretDown from "../../assets/reciever-bar/CaretDown.svg";
import online from "../../assets/chat-list/online.svg";

export const RecieverBar = () => {
  return (
    <div className={styles.bar}>
      <div className={styles.bar__person}>
        <div>
          <img src={person1} alt="" />
          <img src={online} alt="" className={styles.bar__online} />
        </div>
        <div className={styles.bar__info}>
          <h4>Pink Panda</h4>
          <p>Online</p>
        </div>
      </div>
      <div className={styles.bar__buttons}>
        <div className={styles.bar__navigation}>
          <img src={VideoCamera} alt="" />
          <img src={Phone} alt="" />
          <img src={MagnifyingGlass} alt="" />
        </div>
        <span></span>
        <img src={CaretDown} alt="" className={styles.bar__media} />
      </div>
    </div>
  );
};
