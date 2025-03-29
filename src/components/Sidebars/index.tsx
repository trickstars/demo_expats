import { useState } from "react";
import "./index.css";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Nút mở menu */}
      <button className="menu-bars" onClick={() => setIsOpen(true)}>
        <i className="fa-solid fa-bars"></i>
        <span>MENU</span>
      </button>
      {/* Overlay */}
      <div className={`overlay ${isOpen ? "active" : ""}`} onClick={() => setIsOpen(false)}></div>

      {/* Sidebar */}
      <nav className={`sidebar ${isOpen ? "open" : ""}`}>
        <button className="close-btn" onClick={() => setIsOpen(false)}>✖</button>
        <ul>
          <li><Link to="/">🏠 Trang chủ</Link></li>
          <li><Link to="/video-xo-ga">🎥 Video xổ gà</Link></li>
          {/* <li><Link to="/">🔒 Đăng nhập</Link></li> */}
        </ul>
      </nav>
    </>
  );
};

export default Sidebar;
