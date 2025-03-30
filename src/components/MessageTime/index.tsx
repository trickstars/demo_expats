import React, { useState, useEffect } from "react";
import './index.css';

const formatTime = (timestampStr: string) => {
    const timestamp = Date.parse(timestampStr); // Chuyển string thành timestamp (milliseconds)
    const now = Date.now(); // Lấy timestamp hiện tại
  
    const diff = Math.floor((now - timestamp) / 1000); // Chênh lệch thời gian (giây)
    if (diff < 5) return "bây giờ";
    if (diff < 60) return `${diff} giây trước`;
    
    const diffMinutes = Math.floor(diff / 60);
    if (diffMinutes < 60) return `${diffMinutes} phút trước`;
  
    const diffHours = Math.floor(diffMinutes / 60);
    if (diffHours < 24) return `${diffHours} giờ trước`;
  
    const diffDate = Math.floor(diffHours / 24);
    return `${diffDate} ngày trước`;
  };
  
const MessageTime: React.FC<{ timestamp: string }> = ({ timestamp }) => {
  const [formattedTime, setFormattedTime] = useState(() => formatTime(timestamp));

  useEffect(() => {
    const interval = setInterval(() => {
      setFormattedTime(formatTime(timestamp));
    }, 10000); // Cập nhật mỗi 10 giây

    return () => clearInterval(interval);
  }, [timestamp]);

  return <span className="message-time">{formattedTime}</span>;
};

export default MessageTime;
