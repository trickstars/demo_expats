import { Link, useParams } from 'react-router-dom';
import './index.css';
import ContactLink from '../../components/ContactLink';
import { useEffect, useState } from 'react';
function VideoDetail() {
    const {id} = useParams();
    const [playBackUrl, setPlaybackUrl] = useState("");

    useEffect(() => {
        const url = sessionStorage.getItem(`video_${id}`);
        if (url) {
            setPlaybackUrl(url);
        }
        else {
            console.error("Playback URL not founded in this tab")
        }
    },[id])

    return (
        <div id="video-detail" className='flex-container'>
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
                    {playBackUrl? (
                        <iframe src={`https://iframe.mediadelivery.net/embed/${playBackUrl}`} width='100%' height='400px' title='Video Player' />
                    ) : (
                        <p>Cannot load video</p>
                    )}
                    </div>
                    <div className="horizontal-divider"></div>
                    <div className="contact-icons"></div>
                    <div className="video-navigation flex-container">
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
                        <b>CLB Gà Chọi Lê Tuấn</b> - Xin Hân Hạnh Phục Vụ Anh Em Gần Xa !
                        </p>

                        <p>Với nhiều năm kinh nghiệm nuôi dưỡng, chăm sóc và <b>cung cấp gà chọi, gà đòn</b> 
                            "Uy Tín - Chất Lượng" <b>CLB Gà Chọi Lê Tuấn</b> luôn sẵn sàng chia sẽ những kinh nghiệm thực tế, 
                            tư vấn hướng dẫn kỹ thuật làm chuồng trại, phương pháp nuôi để tránh các rủi ro 
                            và rút ngắn các công đoạn chuẩn bị cần thiết trong quá trình nuôi cho các khách hàng 
                            có nhu cầu.</p>

                        <p>
                        Đến với <b>CLB Gà Chọi Lê Tuấn</b>, khách hàng sẽ nhận được sự tư vấn , hướng dẫn chu đáo nhiệt tình, 
                        đặc biệt giá cả cạnh tranh tình nghĩa. Hy vọng rằng sản phẩm của trang trại sẽ làm hài lòng quý khách hàng.
                        </p>
                    </div>
                    <div id="contact-info" className="flex-container">
                        <ContactLink platform="zalo"></ContactLink>
                        <ContactLink platform="facebook"></ContactLink>
                        <ContactLink platform='zalo_vip'></ContactLink>
                    </div>
                </div>
            </div>
            <div className="post-sidebar">
                <h3>Xem live trực tiếp</h3>

                <div className="horizontal-divider" style={{marginLeft: 0, marginTop: `10px`}}></div>

                <div className="title">
                    <h2 className="color-highlight">trực tiếp vào 18h30 hôm nay  19/03 tại CLB Gà Chọi Tiêu Phong</h2>
                    <span className="phone-num color-highlight">☎ 0345357695</span>
                </div>

                <div className="sidebar-thumbnail">
                    <Link to="/">
                        <img src="/imgs/icon-logo.png" alt="" />
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