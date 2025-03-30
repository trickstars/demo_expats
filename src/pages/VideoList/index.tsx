import { Link } from "react-router-dom"
import VideoListContainer from "../../components/VideoListContainer"
import './index.css'
import Description from "../../components/Description"

function VideoList() {
    return (
        <div id="video-list-page">
        <div className="video-title">
            <h3>
            ▶️ <span className="color-highlight">Video Xổ Gà Hấp Dẫn CLB Gà Chọi Tiêu Phong</span>

            </h3>
            <p>
              Nơi lưu trữ các video vần gà chọi được quay trực tiếp tại <span className="color-highlight">https://gachoitieuphong.com</span>
            </p>
          </div>
          <VideoListContainer numCol={4}></VideoListContainer>

            <div id="link-to-live">
                <div className="title">
                    <h2 className="color-highlight">trực tiếp vào 18h30 hôm nay  19/03 tại CLB Gà Chọi Tiêu Phong</h2>
                    <span> ☎️ <span className="phone-num color-highlight"> 0345357695</span></span> 
                </div>

                <div className="link-live">

                </div>
            </div>
            <Description></Description>
        </div>
    )
}

export default VideoList