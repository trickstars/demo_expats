import { Link } from "react-router-dom"

function Header() {
    return (
        <header>
            <div id="masthead" className="header-main">
                <div className="header-inner flex-row container">
                    {/* <div className="flex-col flex-left">
                        <div className="header__mobile-nav">
                            <div className="header__mobile-nav-btn">
                                <a href="#">
                                    <i className="fa-light fa-bars"></i>
                                </a>
                            </div>
                        </div>
                    </div> */}
                    <div className="header__logo flex-col">
                        <Link to='/'>
                            <img src="https://gachoitieuphong.com/wp-content/uploads/2024/10/LOGO-GA-CHOI-TIEU-PHONG-1.png" 
                            alt="CLB Bán gà Phú Hòa" /> 
                        </Link>
                    </div>
                    {/* <div className="flex-col flex-right"></div> */}
                </div>
            </div>
            <div id="nav" className="nav">
                <div className="flex-row container">
                    <ul>
                        <li>
                            <Link to='/'>
                                🏠 TRANG CHỦ
                            </Link>
                        </li>
                        <li>
                            <Link to='/video-xo-ga'>
                                ▶️ VIDEO XỔ GÀ HẤP DẪN
                            </Link>
                        </li>
                    </ul>
                    {/* <div className="flex-col"></div> */}
                </div>
            </div>
        </header>
    )
}

export default Header