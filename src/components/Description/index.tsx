import Carousel from "../Carousel"
import ContactLink from "../ContactLink"
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
                            <p>Xổ vần gà trực tiếp 18h00 hàng ngày tại Gò Lớn, Thị Trấn Phú Hòa, Huyện Phú Hòa, Tỉnh Phú Yên </p>
                            <p>Hotline liên hệ: <a href="tel+0375777435" className="color-highlight">0375777435</a> (Anh Tý)</p>
                        </div>
                    </div>

                    <div className="description">
                        <p>
                            Chào mừng bạn đến với <a href="/" className="color-highlight">gachoiletuan.com</a>
                            nơi tạo ra sân chơi phục vụ niềm đam mê gà đòn cho anh em 24/7. 
                            Đây là website của <span className="color-highlight">CLB Gà Chọi Lê Tuấn</span>
                        </p>
                        <p>
                        Tại <span className="color-highlight">CLB Gà Chọi Lê Tuấn</span> bạn có thể tìm hiểu về kiến thức về gà đòn,
                         hay đơn giản là thưởng thức những video xổ gà trong những lúc rảnh rỗi. 
                         <span className="color-highlight">CLB Gà Chọi Lê Tuấn</span> sẽ đưa đến cho bạn những thông tin mới nhất về giống gà đòn, 
                         kinh nghiệm chăm sóc gà, cách huấn luyện gà chọi và nhiều hơn thế nữa. 
                         Ngoài ra, <a href="/" className="color-highlight">gachoiletuan.com</a> còn cung cấp con giống gà đòn cho những ai đang quan tâm đến việc nuôi gà đòn.
                        </p>
                    </div>
                </div>
                <div id="map-link">
                    <ContactLink platform="map"></ContactLink>
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
                <ContactLink platform="zalo"></ContactLink>
                <ContactLink platform="facebook"></ContactLink>
                <ContactLink platform="zalo_vip"></ContactLink>
            </div>
        </div>
    )
} 

export default Description