import { EmptyConversation } from "../empty-conversation"
import { RecieverBar } from "../reciever-bar"
import { SendMessage } from "../send-message"


export const ChatMessage = () => {
    return (
        <div>
            {/* <RecieverBar />
            <SendMessage /> */}
            <EmptyConversation />
        </div>
    )
}