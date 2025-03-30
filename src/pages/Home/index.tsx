import { Link } from "react-router-dom";
import VideoListContainer from "../../components/VideoListContainer";
import ChatBox from "../../components/ChatBox";
import './index.css'
import Description from "../../components/Description";
import ContactLink from "../../components/ContactLink";
function Home() {
    return (
      <div id="home">
        <div className="livestream-title">
          <h2>🔴 Bạn đang xem Xổ gà trực tiếp ngày ?? tại <span className="color-highlight">CLB Gà Chọi Lê Tuấn</span></h2>
        </div>

        <div id="livestream-area" className="flex-container">
          <div className="livestream-screen flex-item-2">
            {/* <iframe src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fkhoe.nguyen.3382%2Fvideos%2F2401458016878162%2F&width=1280"
            style={{border:'none',overflow:'hidden'}}
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" 
            allowFullScreen={true}>
            </iframe> */}
            <iframe src='https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/gachoiletuan/videos/855059843430613?mute=0'
            style={{border:'none',overflow:'hidden'}}
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            allowFullScreen={true}>
            </iframe>
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
            <i style={{display: 'inline-block', margin: '0 0.5rem'}} className="fa-solid fa-play"></i>
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