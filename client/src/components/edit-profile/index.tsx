import styles from "./EditProfile.module.scss";
import back from "../../assets/edit-profile/CaretDown.svg";
import avatar from "../../assets/edit-profile/Avatar.svg";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/auth/authSlice";
import { useEditUserByIdMutation } from "../../app/services/auth";
import { User } from "@prisma/client";
import { useForm, SubmitHandler } from "react-hook-form";
import { useSnackbar } from "notistack";

export const EditProfile = () => {
  const user = useSelector(selectUser);
  const { register, handleSubmit } = useForm<User>();
  const [editUser] = useEditUserByIdMutation();
  const { enqueueSnackbar } = useSnackbar();

  const saveButtonHandler = async (userData: User) => {
    try {
      const editUsers = {
        ...user,
        ...userData,
      };

      enqueueSnackbar("Successfully updated", { variant: "success" });
      await editUser(editUsers).unwrap();
    } catch (err) {
      enqueueSnackbar("Unsuccessfully updated", { variant: "error" });
    }
  };

  const onSubmit: SubmitHandler<User> = async (data: User) => {
    saveButtonHandler(data);
  };

  return (
    <form className={styles.profile} onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.profile__title}>
        <h3>Profile</h3>
      </div>
      <img className={styles.profile__photo} src={avatar} alt="" />
      <div className={styles.profile__name}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          defaultValue={user?.name ?? ""}
          {...register("name")}
        />
      </div>
      <div className={styles.profile__name}>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          defaultValue={user?.userName ?? ""}
          {...register("userName")}
        />
      </div>
      <div className={styles.profile__name}>
        <label htmlFor="about">About</label>
        <input
          type="text"
          id="about"
          defaultValue={user?.description ?? ""}
          {...register("description")}
        />
      </div>
      <div className={styles.profile__save}>
        <button type="submit">Save</button>
      </div>
    </form>
  );
};
