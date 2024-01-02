import styles from "./Login.module.scss";
import logo from "../../assets/logo-png.png";
import { Link, useNavigate } from "react-router-dom";
import { Paths } from "../../paths";
import { UserData, useLoginMutation } from "../../app/services/auth";
import {useForm, SubmitHandler} from 'react-hook-form'
import { useEffect } from "react";
import { selectUser } from "../../features/auth/authSlice";
import { useSelector } from "react-redux";
import {useSnackbar} from 'notistack'


interface Inputs extends UserData {
  email: string,
  password: string
}

export const Login = () => {
  const navigate = useNavigate();
  const user = useSelector(selectUser);
  const [loginUser] = useLoginMutation();
  const { enqueueSnackbar } = useSnackbar()


  useEffect(() => {
    if(user) {
      navigate("/chat")
    }
  }, [user, navigate])

  const loginSubmit = async (data:UserData) => {
    try{
      await loginUser(data).unwrap();
      navigate('/chat');
      enqueueSnackbar("Successfully signed in", {variant: "success"})
    }
    catch {
      enqueueSnackbar("Something went wrong", {variant: "error"})
    }
  }


  const {register, handleSubmit} = useForm<Inputs>()
  const onSubmit: SubmitHandler<Inputs> = (data:UserData) => {
    loginSubmit(data);
  }
  
  return (
    <div className={styles.login}>
      <img src={logo} />
      <h3>Flatgram</h3>
      <p>Please enter your email address and password</p>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.form__wrapper}>
          <label className={styles.label}>Email</label>
          <input id="email" type="email" {...register("email")} />
        </div>
        <div className={styles.form__wrapper}>
          <label className={styles.label}>Password</label>
          <input id="password" type="password" {...register("password")}/>
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
