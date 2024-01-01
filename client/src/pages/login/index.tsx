import styles from "./Login.module.scss";
import logo from "../../assets/logo-png.png";
import { Link } from "react-router-dom";
import { Paths } from "../../paths";

export const Login = () => {
  return (
    <div className={styles.login}>
      <img src={logo} />
      <h3>Flatgram</h3>
      <p>Please enter your email address and password</p>
      <form className={styles.form}>
        <div className={styles.form__wrapper}>
          <label className={styles.label}>Email</label>
          <input id="email" type="email" />
        </div>
        <div className={styles.form__wrapper}>
          <label className={styles.label}>Password</label>
          <input id="password" type="password" />
        </div>

        <button className={styles.form__button}>Sign in</button>
        <p className={styles.form__toLogin}>
          if you aren't registered, then go here to
          <Link to={Paths.PATH_REGISTER}> sign up</Link>
        </p>
      </form>
    </div>
  );
};
