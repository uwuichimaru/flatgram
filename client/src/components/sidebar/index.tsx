import styles from "./Sidebar.module.scss";
import logo from "../../assets/sidebar/Budgie.svg";
import ChatCircleDots from "../../assets/sidebar/ChatCircleDots.svg";
import Users from "../../assets/sidebar/Users.svg";
import Phone from "../../assets/sidebar/Phone.svg";
import Settings from "../../assets/sidebar/Gear.svg";
import Profile from "../../assets/sidebar/Profile.svg";

export const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
        <div className={styles.sidebar__logo}>
          <img src={logo} alt="" />
        </div>
        <nav className={styles.nav}>
          <li className={styles.nav__item}>
            <a href="#" className={styles.nav__link}>
              <img src={ChatCircleDots} alt="" />
            </a>
          </li>
          <li className={styles.nav__item}>
            <a href="#" className={styles.nav__link}>
              <img src={Users} alt="" />
            </a>
          </li>
          <li className={styles.nav__item}>
            <a href="#" className={styles.nav__link}>
              <img src={Phone} alt="" />
            </a>
          </li>
          <li className={styles.nav__item}>
            <a href="#" className={styles.nav__link}>
              <img src={Settings} alt="" />
            </a>
          </li>
        </nav>

      <div className={styles.bottom_nav}>
        <div className={styles.bottom_nav__theme}>theme switcher</div>
        <div className={styles.bottom_nav__profile}>
          <img src={Profile} alt="" />
        </div>
      </div>
    </div>
  );
};
