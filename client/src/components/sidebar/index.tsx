import styles from "./Sidebar.module.scss";
import logo from "../../assets/sidebar/Budgie.svg";
import ChatCircleDots from "../../assets/sidebar/ChatCircleDots.svg";
import Users from "../../assets/sidebar/Users.svg";
import Phone from "../../assets/sidebar/Phone.svg";
import Settings from "../../assets/sidebar/Gear.svg";
import Profile from "../../assets/sidebar/Profile.svg";
import PopupProfile from "../popups/profile";
import { TContent } from "../../pages/initial";
import { useState } from "react";


export const Sidebar:React.FC<{onButtonClick: (content:TContent) => void}> = ({onButtonClick}) => {
  const [, setEditProfile] = useState<TContent>({content: "editProfile"});

  const setEditProfileCallback = (content: TContent) => {
    setEditProfile(content);
    onButtonClick(content);
  };

  return (
    <div className={styles.sidebar}>
        <div className={styles.sidebar__logo}>
          <img src={logo} alt="" />
        </div>
        <nav className={styles.nav}>
          <li className={styles.nav__item} onClick={() => onButtonClick({content: "chats"})}>
            <a href="#" className={styles.nav__link}>
              <img src={ChatCircleDots} alt="" />
            </a>
          </li>
          <li className={styles.nav__item} onClick={() => onButtonClick({content: "contacts"})}>
            <a href="#" className={styles.nav__link}>
              <img src={Users} alt="" />
            </a>
          </li>
          <li className={styles.nav__item} onClick={() => onButtonClick({content: "calls"})}>
            <a href="#" className={styles.nav__link}>
              <img src={Phone} alt="" />
            </a>
          </li>
          <li className={styles.nav__item} onClick={() => onButtonClick({content: "settings"})}>
            <a href="#" className={styles.nav__link}>
              <img src={Settings} alt="" />
            </a>
          </li>
        </nav>

      <div className={styles.bottom_nav}>
        <div className={styles.bottom_nav__theme}>theme switcher</div>
        <div className={styles.bottom_nav__profile}>
          <PopupProfile profile={Profile} setEditProfileCallback={setEditProfileCallback}/>
        </div>
      </div>
    </div>
  );
};
