import { Link } from "react-router-dom";
import VideoListContainer from "../../components/VideoListContainer";
import ChatBox from "../../components/ChatBox";
import './index.css'
import Description from "../../components/Description";
import { useEffect, useState } from "react";

function Home() {
  const [streamId, setStreamId] = useState(null);
  const [socket, setSocket] = useState<WebSocket | null>(null); // WebSocket instance
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [currentDate, setCurrentDate] = useState('');
        
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
          // Lấy dữ liệu từ WebSocket
          const data = event.data;
          console.log("Received message: ", data);
          
          // Kiểm tra nếu dữ liệu là "Not streaming right now"
          if (data === "Not streaming right now") {
              // Nếu không có live stream, clear streamId
              setStreamId(null);
              console.log("Stream ID cleared. Not streaming.");
          } else {
              // Nếu dữ liệu có dạng "Currently streaming: <ID>"
              const regex = /Currently streaming: (\d+)/;
              const match = data.match(regex);
  
              if (match) {
                  // Lấy ID từ biểu thức chính quy và lưu vào state
                  const id = match[1];
                  setStreamId(id);
                  console.log("Stream ID extracted: ", id);
              }
          }
      } catch (error) {
          console.log("Error processing message:", error);
      }
  };

    ws.onclose = () => {
      console.log('WebSocket connection closed.');
    };

    setSocket(ws);

    const date = new Date();
    const formattedDate = new Intl.DateTimeFormat('en-GB').format(date); // 'en-GB' cho định dạng dd/mm/yyyy
    setCurrentDate(formattedDate);

    return () => {
      ws.close();
    };
  }, []);

  const handleThumbnailClick = () => {
    console.log("Thumbnail clicked");
    setIsVideoPlaying(true); // When user clicks on the thumbnail, start playing the video
    console.log("Video is playing:", isVideoPlaying);
    console.log("Stream ID:", streamId);
  };

  return (
    <div id="home">
      {streamId && (
             <div className="livestream-title">
             <h2>🔴 Bạn đang xem Xổ gà trực tiếp ngày {currentDate} tại <span className="color-highlight">CLB Gà Chọi Lê Tuấn</span></h2>
              </div>
          )}
      {!streamId && (
             <div className="livestream-title">
             <h2>Chào mừng bạn đến với trang Livestream <span className="color-highlight">CLB Gà Chọi Lê Tuấn</span></h2>
              </div>
        )}

      <div id="livestream-area" className="flex-container">
        <div className="livestream-screen flex-item-2">
          {/* Ẩn thumbnail khi video đang phát hoặc có streamId */}
          {!isVideoPlaying && streamId && (
            <div
              className="thumbnail"
              style={{
                backgroundImage: 'url(./imgs/thumbnail.jpg)',
                width: '100%',
                height: 'auto',
                cursor: 'pointer',
                backgroundSize: 'cover',
              }}
              onClick={handleThumbnailClick} // Khi nhấp vào thumbnail
            >
            </div>
          )}

          {isVideoPlaying && streamId && (
              <iframe
                src={`https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/gachoiletuan/videos/${streamId}?mute=0`}
                style={{ border: 'none', overflow: 'hidden', zIndex: 0, pointerEvents: 'none' }}
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                allowFullScreen={true}
                title="Livestream Video"
              />
          )}
          {!streamId && (
            <h3> Stream đã kết thúc! Bạn có thể xem lại VIDEO LIVE ở dưới! <br/> Hẹn bạn vào 18h hàng ngày nhé!</h3>
          )}
        </div>
        <div className="chat-col flex-item">
          <ChatBox></ChatBox>
        </div>
      </div>

      <div id="banner-area" style={{marginTop: '1rem'}}>
          <img src="./imgs/banner-cropped.png" alt="Banner" />
        </div>

      <div id="videos-area">
        <div className="video-link">
          <Link to='/video-xo-ga'>
            <i style={{ display: 'inline-block', margin: '0 0.5rem' }} className="fa-solid fa-play"></i>
            Video xổ gà hay
          </Link>
          <p>
            Nơi lưu trữ các video vần gà chọi được quay trực tiếp tại <a href="/" className="color-highlight">https://gachoiletuan.com</a>
          </p>
        </div>
        <VideoListContainer numCol={3}></VideoListContainer>
      </div>
      <Description></Description>
    </div>
  );
}

export default Home;
