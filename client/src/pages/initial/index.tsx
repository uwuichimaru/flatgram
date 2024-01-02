import { useNavigate } from "react-router-dom";
import { ChatList } from "../../components/chat-list";
import { Sidebar } from "../../components/sidebar";
import styles from "./Initial.module.scss";
import { useEffect } from "react";
import { ChatMessage } from "../../components/chat-message";

export const Initial = () => {

    const token = localStorage.getItem("token");
    const navigate = useNavigate();

  useEffect(() => {
    if(!token) {
        navigate("/");
    }
  }, [token, navigate]);
  
  return (
    <div className={styles.initial}>
      <Sidebar />
      <ChatList />
      <ChatMessage />
    </div>
  );
};
