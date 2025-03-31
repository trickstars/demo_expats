import { Link, NavLink } from "react-router-dom"
import './index.css'
import Sidebar from "../Sidebars"

function Header() {
    return (
        <header>
            <div className="header-inner container">
                <div className="header-main flex-container">

                    <div>
                        <div className="header__mobile-nav">
                            <Sidebar></Sidebar>
                        </div>
                    </div>

                    <div className="header__logo">
                        <Link to='/'>
                        {/* <img src="https://i.ibb.co/B5XFx4Tq/logo.png" alt="logo" /> */}
                        <img 
                            src="/imgs/Thie-t-ke-chu-a-co-te-n.png" 
                            alt="Thie-t-ke-chu-a-co-te-n.png" 
                            width='200px'>
                        </img>
                        </Link>
                    </div>
                    <div></div>
                </div>
                <nav id="header-nav" className="nav">
                    <div className="flex-container">
                        <ul>
                            <li>
                                <NavLink to='/' className={({ isActive }) => isActive ? "active" : ""}>
                                    🏠 TRANG CHỦ
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='/video-xo-ga' className={({ isActive }) => isActive ? "active" : ""}>
                                    ▶️ VIDEO XỔ GÀ HẤP DẪN
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </nav>
                
                {/* <div className="flex-col"></div> */}
            </div>
        </header>
    )
}

export default Header