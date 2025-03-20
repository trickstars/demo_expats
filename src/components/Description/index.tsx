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
        <div id="description-area" className="description-area">
            <div id="description-col" className="flex-col">
                <div id="description-content">
                    <div className="icon-box">
                        <div className="icon-box-img">
                            <img src="https://gachoitieuphong.com/wp-content/uploads/2024/10/cropped-LOGO-GA-CHOI-TIEU-PHONG-2-300x300.png" 
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
                    <a href="https://www.google.com/maps/place/CLB+G%C3%A0+Ch%E1%BB%8Di+Ti%C3%AAu+Phong/@12.9911111,109.2351372,15z/data=!4m6!3m5!1s0x316fe94c43271e83:0x7bd335171cc78e16!8m2!3d12.9911111!4d109.2351372!16s%2Fg%2F11vh_bppkr?hl=vi&entry=ttu&g_ep=EgoyMDI1MDMxMi4wIKXMDSoASAFQAw%3D%3D"
                    target="_blank"
                    >
                        <img className="contact-img" src="https://i.ibb.co/rRMPCZjQ/map-vector.png" alt="map-vector" />
                    </a>
                </div>
                <div id="tiktok">
                    <a href="https://www.tiktok.com/@tieuphonguytin" target="_blank">
                        <img className="contact-img" src="https://i.ibb.co/fZD1gkh/tiktok-vector.png" alt="tiktok-vector" />
                    </a>
                </div>
            </div>
            <div id="slider" className="flex-col">
                <Carousel></Carousel>
            </div>
            <div id="contact-info" className="flex-col flex-row">
                <div className="flex-item">
                    <img src="https://i.ibb.co/mrzQSV60/zl-vip-vector.png" alt="" className="contact-img" />
                </div>
                <div className="flex-item">
                    <img src="https://i.ibb.co/dJkZ92jS/fb-vector.png" alt="" className="contact-img" />
                </div>
            </div>
        </div>
    )
} 

export default Description