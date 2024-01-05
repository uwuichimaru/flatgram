import { useNavigate } from "react-router-dom";
import { ChatList } from "../../components/chat-list";
import { Sidebar } from "../../components/sidebar";
import styles from "./Initial.module.scss";
import { useEffect, useState } from "react";
import { ChatMessage } from "../../components/chat-message";
import { EditProfile } from "../../components/edit-profile";
import { selectUser } from "../../features/auth/authSlice";
import { useSelector } from "react-redux";

export interface TContent {
  content: "chats" | "contacts" | "calls" | "settings" | "editProfile";
}

export const Initial = () => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const [selectedContent, setSelectedContent] = useState<TContent>({content: "chats"});

  console.log(useSelector(selectUser));

  const handleButtonClick = (content: TContent) => {
    setSelectedContent(content);
  };

  useEffect(() => {
    if (!token) {
      navigate("/");
    }
  }, [token, navigate]);
  return (
    <div className={styles.initial}>
      <Sidebar onButtonClick={handleButtonClick}/>
      {/* <EditProfile /> */}
      {"editProfile" === selectedContent.content  ? <EditProfile/> : ""}
      {"chats" === selectedContent.content  ? <ChatList/> : ""}
      <ChatMessage />
    </div>
  );
};
