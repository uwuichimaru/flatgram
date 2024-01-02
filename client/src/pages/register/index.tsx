import styles from './Register.module.scss';
import logo from "../../assets/logo-png.png";
import { Link, useNavigate } from 'react-router-dom';
import { Paths } from '../../paths';
import { UserData, useRegisterMutation } from '../../app/services/auth';
import {useForm, SubmitHandler} from 'react-hook-form'
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from '../../features/auth/authSlice';
import {useSnackbar} from 'notistack'

interface Inputs extends UserData {
  email: string,
  password: string,
}



export const Register = () => {
  const navigate = useNavigate();
  const [registerUser] = useRegisterMutation();
  const user = useSelector(selectUser);
  const {enqueueSnackbar} = useSnackbar();

  useEffect(() => {
    if(user) {
      navigate('/chat')
    }
  }, [user, navigate])

  const registerSubmit = async (data:UserData) => {
    try{
      await registerUser(data).unwrap();
      navigate('/chat')
      enqueueSnackbar("Successfully signed up", {variant: "success"})
    }
    catch {
      enqueueSnackbar("Something went wrong", {variant: "error"})
    }
  }

  const {register, handleSubmit} = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data:UserData) => {
    registerSubmit(data);
  }


    return (
        <div className={styles.register}>
      <img src={logo} />
      <h3>Flatgram</h3>
      <p>Please enter your email address and password</p>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.form__wrapper}>
          <label htmlFor='email' className={styles.label}>Email</label>
          <input id="email" type="email" {...register("email")} />
        </div>
        <div className={styles.form__wrapper}>
          <label htmlFor='password' className={styles.label}>
            Password
          </label>
          <input id="password" type="password" {...register("password")} />
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