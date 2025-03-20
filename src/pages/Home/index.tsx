import { Link } from "react-router-dom";
import VideoListContainer from "../../components/VideoListContainer";
import ChatBox from "../../components/ChatBox";
import './index.css'
import Description from "../../components/Description";
function Home() {
    return (
        
      // <header className="App-header">
      //   {/* <img src={logo} className="App-logo" alt="logo" /> */}
      //   <p>
      //     Gà Chọi Livestream - Đang phát triển
      //   </p>
      //   <a
      //     className="App-link"
      //     href="https://www.fb.com/lam.lethanh.fis"
      //     target="_blank"
      //     rel="noopener noreferrer"
      //   >
      //     Liên hệ tác giả
      //   </a>
      // </header>
      <div id="home">
        <div className="livestream-title">
          <h2>🔴 Bạn đang xem Xổ gà trực tiếp ngày ?? tại <span className="color-highlight">CLB Gà Chọi Lê Tuấn</span></h2>
        </div>

        <div id="livestream-area">
          <div className="livestream-screen">
            <iframe src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fkhoe.nguyen.3382%2Fvideos%2F2401458016878162%2F&width=1280"
            style={{border:'none',overflow:'hidden'}}
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" 
            allowFullScreen={true}>
            </iframe>
          </div>
          <div className="chat-col">
            <ChatBox></ChatBox>
          </div>
        </div>

        <div id="videos-area">
          <div className="video-link">
            <Link to='/video-xo-ga'>
              Video xổ gà hay
            </Link>
            <p>
              Nơi lưu trữ các video vần gà chọi được quay trực tiếp tại <span className="color-highlight">https://gachoitieuphong.com</span>
            </p>
          </div>
          <VideoListContainer numCol={3}></VideoListContainer>
        </div>
        <Description></Description>
      </div>
    )
}

export default Home;