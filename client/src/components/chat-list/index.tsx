import styles from './ChatList.module.scss'
import { ChatItem } from "../chat-item"
import { SearchPanel } from "../search-panel"
import CircleDashed from '../../assets/chat-list/search-panel/CircleDashed.svg'
import { Archived } from '../archived'


export const ChatList = () => {
    return (
        <div className={styles.chatlist}>
            <div className={styles.chatlist__title}>
                <h1>Chats</h1>
                <img src={CircleDashed} alt="" />
            </div>
            <SearchPanel />
            <Archived />
            <hr/>
            <h4 className={styles.chatlist__lists}>Pinned</h4>
            <ChatItem />
            <h4 className={styles.chatlist__lists}>All Chats</h4>
            <ChatItem />
            <ChatItem />
            <ChatItem />
            <ChatItem />
            <ChatItem />
            <ChatItem />
        </div>
    )
}