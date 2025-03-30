import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import './index.css'
import MessageTime from '../MessageTime';
import { error } from 'console';

interface Message {
  user: string;
  content: string;
  timestamp: string;

}

// interface ChatBoxProps {
//   messages: Message[];
// }

const ChatBox = () => {
  const [messages, setMessages] = useState<Message[]>([]); // Lưu trữ tin nhắn
  const [userName, setUserName] = useState<string>(''); // Tên người dùng
  const [loading, setLoading] = useState<boolean>(false);
  const [hasMore, setHasMore] = useState<boolean>(true); // Kiểm tra có còn dữ liệu để tải không
  const [startIndex, setStartIndex] = useState<number>(0);
  const [endIndex, setEndIndex] = useState<number>(49);
  const [newMessage, setNewMessage] = useState<string>(''); // Tin nhắn mới từ người dùng
  const [socket, setSocket] = useState<WebSocket | null>(null); // WebSocket instance
  const [currentClients, setCurrentClients] = useState(0);
  // const [isStream, setStreamStatus] = useState<boolean>(true);
  const textAreaRef = useRef<HTMLTextAreaElement>(null)
  const [missingField, setMissingField] = useState('');

  const isDisabled = !userName.trim() || !newMessage.trim();

  useEffect(() => {
    if(socket) {
      return; // Nếu socket đã được khởi tạo, không cần khởi tạo lại
    }

    const ws = new WebSocket('wss://gachoiletuan.com/ws/chat');

    ws.onerror = (error) => {
      console.error('WebSocket Error: ', error);
    };

    ws.onopen = () => {
      console.log('WebSocket connection established.');
    };

    ws.onmessage = (event) => {
      try {
        // Thử parse dữ liệu nhận được như JSON
        const data = JSON.parse(event.data);
        if (data) {
          console.log('New message:', data.content);
          // Cập nhật tin nhắn mới vào state
          setMessages((prevMessages) => [
            { user: data.user, content: data.content, timestamp: new Date().toISOString() },
            ...prevMessages, // Đưa tin nhắn mới vào đầu danh sách
          ]);
        }
      } catch (error) {
        // Nếu không phải là JSON, kiểm tra các trường hợp khác
        const clientDataMatch = event.data.match(/^Current clients: (\d+)$/);
        if (clientDataMatch) {
          // Nếu dữ liệu là "Current clients: X", trích xuất số lượng client
          const clientsCount = parseInt(clientDataMatch[1], 10);
          setCurrentClients(clientsCount); // Cập nhật số lượng client
          console.log('Current clients:', clientsCount);
        } else if (event.data === 'Not streaming right now') {
          // Nếu thông điệp là "Not stream"
          // setStreamStatus(false);
          // console.log('This is not a stream.');
        } else if (event.data === 'Stream') {
          // Nếu thông điệp là "Stream"
          // setStreamStatus(true);
          // console.log('This is a stream.');
        } else {
          // Nếu không phải JSON và không phải các thông điệp đã biết
          console.warn('Received unexpected message:', event.data);
        }
      }
    };


    ws.onclose = () => {
      console.log('WebSocket connection closed.');
    };

    setSocket(ws);

    return () => {
      ws.close();
    };
  }, []);

  // Hàm gọi API để lấy dữ liệu lịch sử chat
  const fetchChatHistory = async () => {
    if (loading) return;
    setLoading(true);
    console.log(`Fetching chat history from index ${startIndex} to ${endIndex}`);

    try {
      const response = await axios.get<{ contents: string }>(
        `https://api.allorigins.win/get?url=${encodeURIComponent('https://gachoiletuan.com/api/chat-history')}`,
        {
          params: {
            start_index: startIndex,
            end_index: endIndex,
          },
          // headers: {
          //   "Cache-Control": "no-cache, no-store, must-revalidate",
          //   Pragma: "no-cache",
          //   Expires: "0",
          // }
        }
      );
      const data = JSON.parse(response.data.contents);
      console.log('Parsed chat data:', data);
      if (data.length > 0) {
        setMessages((prevMessages) => [...prevMessages, ...data]);
        setStartIndex((prevIndex) => prevIndex + 50);
        setEndIndex((prevIndex) => prevIndex + 50);
      } else {
        setHasMore(false);
      }
      if (data.length < 50) {
        setHasMore(false);
      }
    } catch (error) {
      console.error('Có lỗi khi tải lịch sử chat:', error);
    } finally {
      setLoading(false);
    }
  };

  // Sử dụng useEffect để gọi API khi component mount
  useEffect(() => {
    fetchChatHistory();
  }, []);

  // Hàm xử lý sự kiện cuộn

  const handleScroll = (e: React.UIEvent<HTMLElement>) => {
    const target = e.target as HTMLElement;
    const bottom = target.scrollHeight === target.scrollTop + target.clientHeight;
    if (bottom && hasMore) {
      fetchChatHistory();
    }
  };


    // Hàm gửi tin nhắn qua WebSocket
  const sendMessage = () => {
    if (!userName.trim()) {
      setMissingField('Vui lòng nhập tên hiển thị');
    }
    else if (!newMessage.trim()){
      setMissingField('Vui lòng nhập nội dung tin nhắn');
    }

    else if (socket && newMessage.trim()) {
      const message = {
        user: userName, // Bạn có thể thay đổi thành tên người dùng thực tế từ context hoặc state
        content: newMessage,
        timestamp: new Date().toISOString(),
      };
      console.log('Sending message:', message);
      socket.send(JSON.stringify(message)); // Gửi tin nhắn đến WebSocket server
      setMessages((prevMessages) => [
        { user: userName, content: message.content, timestamp: new Date().toISOString() },
        ...prevMessages, // Đưa tin nhắn mới vào đầu danh sách
      ]);
      setNewMessage(''); // Xóa nội dung tin nhắn sau khi gửi
    }
  };
  
  const handleTextArea = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setNewMessage(e.target.value);
    
    if (textAreaRef.current) {
      textAreaRef.current.style.height = "auto";
      textAreaRef.current.style.height = textAreaRef.current.scrollHeight + "px";
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLFormElement>) => {
    if (e.key === "Enter") {
      e.preventDefault(); // Ngăn textarea xuống dòng
      sendMessage();
    }
  };

  // Hàm tắt thông báo thiếu trường
  useEffect(() => {
    if (missingField) {
      const timer = setTimeout(() => {
        setMissingField('');
      }, 3000); //Tắt thông báo sau 3 giây
    }
  }, [missingField])

    return (
        <div className="chat-box flex-container flex-col">
          {/* Chat header */}
          <div className="chat-header">
            <a className='refresh-link' href="/">🔃 [LOAD LẠI TRANG]</a>
            <span>{currentClients} <i className="fa-solid fa-eye"></i></span>
          </div>

          {/* Thread tin nhắn */}
          <div className="chat-messages" onScroll={handleScroll}>
            {messages.map((message, index) => (
              <div key={index} className="message">
                <img src="./imgs/empty-avatar.png " alt="empty-avatar" height='45px' style={{backgroundColor: 'transparent'}} className='float-left'/>
                <div className='message-content'>
                  <small className='float-right'>
                    <MessageTime timestamp={message.timestamp}></MessageTime>
                  </small>
                  <span><strong>{message.user}: </strong> 
                  {/* <br /> */}
                    <span className='justify'>{message.content}</span>
                  </span>
                </div>
              </div>
              ))}
            {loading && <div>Đang tải thêm...</div>}
            {!hasMore && <div>Không còn dữ liệu để tải.</div>}
          </div>

           {/* Form nhap message */}
          <form onKeyDown={handleKeyDown} className="chat-input">
            <input
              type="text"
              maxLength={25}
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              placeholder="Tên hiển thị"
            />
            <div className="message-area flex-container">
              <textarea ref={textAreaRef}
              // cols={15}
              rows={1}
                value={newMessage}
                onChange={handleTextArea}
                placeholder="Nội dung"
              />
              <button type='button' onClick={sendMessage} disabled={isDisabled}><i className="fa-solid fa-paper-plane"></i></button>
            </div>
            <div className={`validating-field ${missingField? 'error': ''}`}>
              <span>{missingField}</span>
            </div>
          </form>
        </div>
      );
};

export default ChatBox;