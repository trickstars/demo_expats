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
                        {/* <img src="https://i.ibb.co/B5XFx4Tq/logo.png" alt="logo" /> */}
                        <img src="https://i.ibb.co/d0LZkVRj/Thie-t-ke-chu-a-co-te-n.png" alt="Thie-t-ke-chu-a-co-te-n" ></img>
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