import { Link } from 'react-router-dom';
import './index.css';
function VideoDetail() {
    return (
        <div id="video-detail" className='flex-row'>
            <div className="video-content">
                <div className="video-header">
                    <div className="video-title-detail">
                        <h2>video 1 ngày 29/2</h2>
                    </div>
                    <div className="horizontal-divider" style={{marginLeft: 0}}></div>
                    <div className="video-meta">
                        đăng vào ngày 29 tháng 2 năm 2025, bởi Gà chọi Lê Tuấn
                    </div>
                </div>
                <div className="video-frame">
                    <div className="main-video">
                    <video controls width="100%">
                        <source src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" 
                        type="video/mp4" />
                        Trình duyệt của bạn không hỗ trợ video tag.
                    </video>
                    </div>
                    <div className="horizontal-divider"></div>
                    <div className="contact-icons"></div>
                    <div className="video-navigation flex-row">
                        <div className="prev-video flex-item">
                            <a href="">
                                <i className="fa-solid fa-angle-left"></i>
                                <span>video trước</span>
                            </a>
                        </div>
                        <div className="next-video flex-item">
                            <a href="">
                                <span>video sau</span>
                                <i className="fa-solid fa-angle-right"></i>
                            </a>
                        </div>
                    </div>
                </div>

                <div style={{padding: `15px 0`}}></div>

                <div className="video-desc">
                    <div className="desc">
                        <p>
                        <span className='text-bold'>CLB Gà Chọi Tiêu Phong</span> - Xin Hân Hạnh Phục Vụ Anh Em Gần Xa !
                        </p>

                        <p>Với nhiều năm kinh nghiệm nuôi dưỡng, chăm sóc và <span className='text-bold'>cung cấp gà chọi, gà đòn</span> 
                            "Uy Tín - Chất Lượng" <span className='text-bold'>CLB Gà Chọi Tiêu Phong</span> luôn sẵn sàng chia sẽ những kinh nghiệm thực tế, 
                            tư vấn hướng dẫn kỹ thuật làm chuồng trại, phương pháp nuôi để tránh các rủi ro 
                            và rút ngắn các công đoạn chuẩn bị cần thiết trong quá trình nuôi cho các khách hàng 
                            có nhu cầu.</p>

                        <p>
                        Đến với <span className='text-bold'>CLB Gà Chọi Tiêu Phong</span>, khách hàng sẽ nhận được sự tư vấn , hướng dẫn chu đáo nhiệt tình, 
                        đặc biệt giá cả cạnh tranh tình nghĩa. Hy vọng rằng sản phẩm của trang trại sẽ làm hài lòng quý khách hàng.
                        </p>
                    </div>
                    <div id="contact-info" className="flex-row">
                        <div className="flex-item">
                            <img src="https://i.ibb.co/mrzQSV60/zl-vip-vector.png" alt="" className="contact-img" />
                        </div>
                        <div className="flex-item">
                            <img src="https://i.ibb.co/dJkZ92jS/fb-vector.png" alt="" className="contact-img" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="sidebar">
                <h3>Xem live trực tiếp</h3>

                <div className="horizontal-divider" style={{marginLeft: 0, marginTop: `10px`}}></div>

                <div className="title">
                    <h2 className="color-highlight">trực tiếp vào 18h30 hôm nay  19/03 tại CLB Gà Chọi Tiêu Phong</h2>
                    <span className="phone-num color-highlight">☎ 0345357695</span>
                </div>

                <div className="sidebar-thumbnail">
                    <Link to="/">
                        <img src="https://gachoitieuphong.com/wp-content/uploads/2024/10/cropped-LOGO-GA-CHOI-TIEU-PHONG-2-300x300.png" alt="" />
                    </Link>
                </div>

                <div className="list-video-navigation">
                    <h2>Video Xổ Gà Hay</h2>
                    <ul>
                        <li><a href="">Video 2 ngày mấy</a></li>
                        <li><a href="">Video 2 ngày mấy</a></li>
                        <li><a href="">Video 2 ngày mấy</a></li>
                        <li><a href="">Video 2 ngày mấy</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default VideoDetail