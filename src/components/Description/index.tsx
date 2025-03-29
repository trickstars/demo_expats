import Carousel from "../Carousel"
import './index.css'
function Description() {

    const image_carousel = [
        "https://gachoitieuphong.com/wp-content/uploads/2024/10/cropped-LOGO-GA-CHOI-TIEU-PHONG-2-300x300.png",
        "https://gachoitieuphong.com/wp-content/uploads/2024/10/FB-ga-choi-tieuphong-32.png",
        "https://gachoitieuphong.com/wp-content/uploads/2024/10/cropped-LOGO-GA-CHOI-TIEU-PHONG-2-300x300.png",
        "https://gachoitieuphong.com/wp-content/uploads/2024/10/cropped-LOGO-GA-CHOI-TIEU-PHONG-2-300x300.png"
    ]

    return (
        <div id="description-area" className="description-area flex-container">
            <div id="description-col" className="flex-item">
                <div id="description-content">
                    <div className="icon-box">
                        <div className="icon-box-img">
                            <img src="./imgs/icon-logo.png" 
                            alt="Logo CLB Gà Chọi Lê Tuấn" />
                        </div>
                        <div className="icon-box-content">
                            <h3 className="color-highlight">CLB Gà Chọi Lê Tuấn</h3>
                            <p>Xổ vần gà trực tiếp 18h30 hàng ngày tại Khu Phố Phú Thứ, Thị Trấn Phú Thứ, Huyện Tây Hòa, Tỉnh Phú Yên </p>
                            <p>Hotline liên hệ: <span className="color-highlight">0345357695</span></p>
                        </div>
                    </div>

                    <div className="description">
                        <p>
                            Chào mừng bạn đến với <span className="color-highlight">gachoitieuphong.com</span>
                            nơi tạo ra sân chơi phục vụ niềm đam mê gà đòn cho anh em 24/7. 
                            Đây là website của <span className="color-highlight">CLB Gà Chọi Tiêu Phong</span>
                        </p>
                        <p>
                        Tại <span className="color-highlight">CLB Gà Chọi Tiêu Phong</span> bạn có thể tìm hiểu về kiến thức về gà đòn,
                         hay đơn giản là thưởng thức những video xổ gà trong những lúc rảnh rỗi. 
                         <span className="color-highlight">CLB Gà Chọi Tiêu Phong</span> sẽ đưa đến cho bạn những thông tin mới nhất về giống gà đòn, 
                         kinh nghiệm chăm sóc gà, cách huấn luyện gà chọi và nhiều hơn thế nữa. 
                         Ngoài ra, <span className="color-highlight">gachoitieuphong.com</span> còn cung cấp con giống gà đòn cho những ai đang quan tâm đến việc nuôi gà đòn.
                        </p>
                    </div>
                </div>
                <div id="map-link">
                    <a href="https://www.google.com/maps?q=13.0298021,109.2210156&entry=gps&lucs=,94242583,94224825,94227247,94227248,94231188,47071704,47069508,94218641,94203019,47084304,94208458,94208447&g_ep=CAISEjI1LjExLjMuNzM1NDg4OTYwMBgAIIgnKmwsOTQyNDI1ODMsOTQyMjQ4MjUsOTQyMjcyNDcsOTQyMjcyNDgsOTQyMzExODgsNDcwNzE3MDQsNDcwNjk1MDgsOTQyMTg2NDEsOTQyMDMwMTksNDcwODQzMDQsOTQyMDg0NTgsOTQyMDg0NDdCAlZO&skid=1ecbd6ab-413a-43d3-99b2-1f3033989513&g_st=ifm"
                    target="_blank"
                    >
                        <img className="contact-img" src="./imgs/map-vector.png" alt="map-vector" />
                    </a>
                </div>
                {/* <div id="tiktok">
                    <a href="https://www.tiktok.com/@tieuphonguytin" target="_blank">
                        <img className="contact-img" src="https://i.ibb.co/fZD1gkh/tiktok-vector.png" alt="tiktok-vector" />
                    </a>
                </div> */}
            </div>
            <div id="slider" className="flex-item">
                <Carousel></Carousel>
            </div>
            <div id="contact-info" className="flex-item flex-container">
                <div className="flex-item">
                    <img src="./imgs/zl-vip-vector.png" alt="" className="contact-img" />
                </div>
                <div className="flex-item">
                    <img src="./imgs/fb-vector.png" alt="" className="contact-img" />
                </div>
            </div>
        </div>
    )
} 

export default Description