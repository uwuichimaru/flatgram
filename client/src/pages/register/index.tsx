import styles from './Register.module.scss';
import logo from "../../assets/logo-png.png";
import { Link } from 'react-router-dom';
import { Paths } from '../../paths';

export const Register = () => {
    return (
        <div className={styles.register}>
      <img src={logo} />
      <h3>Flatgram</h3>
      <p>Please enter your email address and password</p>
      <form className={styles.form}>
        <div className={styles.form__wrapper}>
          <label htmlFor='email' className={styles.label}>Email</label>
          <input id="email" type="email" />
        </div>
        <div className={styles.form__wrapper}>
          <label htmlFor='password' className={styles.label}>
            Password
          </label>
          <input id="password" type="password" />
        </div>
        <div className={styles.form__wrapper}>
          <label htmlFor='retryPassword' className={styles.label}>
            Retry password
          </label>
          <input id="retryPassword" type="password" />
        </div>

        <button className={styles.form__button}>Sign up</button>

        <p className={styles.form__toLogin}>
          if you are registered, then go here to
          <Link to={Paths.PATH_LOGIN}> sign in</Link>
        </p>
      </form>
    </div>
    )
}