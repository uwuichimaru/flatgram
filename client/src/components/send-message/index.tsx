import styles from './SendMessage.module.scss'
import sendMessage from '../../assets/send-message/SendMessage.svg'
import link from '../../assets/send-message/Link.svg'
import EmojiPicker from 'emoji-picker-react'
import Smiley from '../../assets/send-message/Smiley.svg'

export const SendMessage = () => {
    return (
        <div className={styles.message}>

            <img src={link} alt="" className={styles.message__link} />
            <input type="text" placeholder='Write a message ...' />
            <img src={Smiley} alt="" className={styles.message__smiley}/>
            <button>
                <img src={sendMessage} alt="" />
            </button>
        </div>
    )
}