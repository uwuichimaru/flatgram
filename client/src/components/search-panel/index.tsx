import styles from './SearchPanel.module.scss'
import MagnifyingGlass from '../../assets/chat-list/search-panel/MagnifyingGlass.svg'
import FunnelSimple from '../../assets/chat-list/search-panel/FunnelSimple.svg'

export const SearchPanel = () => {
    return (
        <div className={styles.searchpanel}>
            <img src={MagnifyingGlass} alt="" />
            <input placeholder='Search'/>
            <img src={FunnelSimple} alt="" />
        </div>
    )
}