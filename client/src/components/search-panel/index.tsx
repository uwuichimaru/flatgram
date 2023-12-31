import styles from './SearchPanel.module.scss'

export const SearchPanel = () => {
    return (
        <div className={styles.searchpanel}>
            <input placeholder='Search'/>
        </div>
    )
}