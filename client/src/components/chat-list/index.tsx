import { ChatItem } from "../chat-item"
import { SearchPanel } from "../search-panel"

export const ChatList = () => {
    return (
        <div style={{backgroundColor: "#F8FAFF", width: "384px"}}>
            <SearchPanel />
            <ChatItem />
        </div>
    )
}