import styles from "./SendMessage.module.scss";
import sendMessage from "../../assets/send-message/SendMessage.svg";
import link from "../../assets/send-message/Link.svg";
import { useState } from "react";
import InputEmoji from "react-input-emoji";
 

export const SendMessage = () => {
 

  const [text, setText] = useState<string>("");
  function handleOnEnter(text: string) {
    console.log("enter", text);
  }
 
  return (
    <div className={styles.message}>
      <img src={link} alt="" className={styles.message__link} />
      {/* <img src={Smiley} alt="" className={styles.message__smiley} /> */}
 
      <InputEmoji
      inputClass={styles.message__input}
      value={text}
      onChange={setText}
      onEnter={handleOnEnter}
      placeholder="Write a message ..."
      keepOpened={true}
    />
      <span className={styles.message__button}>
        <img src={sendMessage} alt="" />
      </span>
    </div>
  );
};
