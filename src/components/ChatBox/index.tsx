import React, { useState } from 'react';
import './index.css'

interface Message {
  user: string;
  text: string;
  time: string;
}

// interface ChatBoxProps {
//   messages: Message[];
// }

const ChatBox = () => {
    const [messages, setMessages] = useState<string[]>([
        'Đam mê: Đỏ 2tr nghi - 20 phút trước',
        'A: Xanh mấy tiền a - 22 phút trước',
        'Huyn Gà: Đội a lập hôm nay để đi sao về vậy quá. Kk - 22 phút trước',
        'Tien duong: Bao xanh chap 9 - 23 phút trước',
        'A nam: Còn nào hay chốt cho anh nhé - 25 phút trước',
        'A nam: Cặp này hay đấy - 25 phút trước'
    ]);
    const [input, setInput] = useState('');

    const handleSendMessage = () => {
        if (input.trim()) {
            setMessages([`Bạn: ${input} - Vừa xong`, ...messages]);
            setInput('');
        }
    }

    return (
        <div className="chat-box">
          <div className="chat-header">
            <a className='refresh-link' href="/">🔃 [LOAD LẠI TRANG]</a>
            <span>684 <i className="fa-solid fa-eye"></i></span>
          </div>
          <div className="chat-messages">
            {messages.map((msg, index) => (
              <div key={index} className="message">
                {msg}
              </div>
            ))}
          </div>
          <div className="chat-input">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Tên hiển thị"
            />
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Nội dung"
            />
            <button onClick={handleSendMessage}>Gửi</button>
          </div>
        </div>
      );
};

export default ChatBox;