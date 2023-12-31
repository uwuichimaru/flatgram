import styles from './ChatItem.module.scss';
import person1 from '../../assets/chat-list/person1.png';
import online from '../../assets/chat-list/online.svg';
import offline from '../../assets/chat-list/offline.svg';

export const ChatItem = () => {
    const isUserOnline:boolean = true;
    return (
        <div className={styles.chatItem}>
            <div className={styles.logo}>
                <img src={person1} alt="" />
                {isUserOnline ? <img src={online} alt="" /> 
                : <img src={offline} alt="" />}
                
            </div>
            <div className={styles.about}>
                <h3>Pink Panda</h3>
                <p>You: thnx!</p>
            </div>
            <div className={styles.time}>
                9:36
            </div>
        </div>
    )
}