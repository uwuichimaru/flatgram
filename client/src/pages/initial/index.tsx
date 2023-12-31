import { ChatList } from "../../components/chat-list"
import { Sidebar } from "../../components/sidebar"
import styles from './Initial.module.scss'

export const Initial = ( )=> {
    return (
        <div className={styles.initial}>
            <Sidebar />
            <ChatList />
        </div>
    )
}