import empty from '../../assets/empty-conversation/empty.svg'
import styles from './EmptyConversation.module.scss'

export const EmptyConversation = () => {
  return (
    <div className={styles.empty}>
        <img src={empty} alt="" />
        <p>Select a conversation or start a <a href="#">new one</a></p>
    </div>
  )
}