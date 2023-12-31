import styles from './Archived.module.scss'
import ArchivedBox from '../../assets/chat-list/search-panel/ArchiveBox.svg';

export const Archived = () => {
    return (
        <div className={styles.archived}>
            <img src={ArchivedBox} alt="" />
            <p>Archived</p>
        </div>
    )
}