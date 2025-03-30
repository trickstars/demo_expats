import './index.css'
function Footer() {
    return (
        <footer>
            <div className="footer flex-container container">
                <div className="flex-item footer-section">
                    <div className="footer__logo">
                    <img src="./imgs/logo.png" alt="logo" />
                    </div>
                    <div className="footer__decription">
                        <p>👉 CLB Gà Chọi Lê Tuấn xổ gà trực tiếp 18h00 hàng ngày</p>
                        <p>👉 Giao lưu mua bán gà chọi đi các tỉnh</p>
                    </div>
                </div>
                <div className="flex-item footer-section">
                    <h2>Kết nối đam mê</h2>
                    <div className="phone">
                        ☎️ <a href="tel:+0375777435">0375777435</a> (Anh Tý)
                    </div>
                    <div className="phone">
                        ☎️ <a href="tel:+0354019552">0354019552</a> (Anh Tuấn)
                    </div>
                    <p>Địa chỉ: Gò Lớn, TT. Phú Hòa, tỉnh Phú Yên</p>
                </div>
                <div className="flex-item footer-section">
                    <h2>Quy định</h2>
                    <p>Website CLB Gà Chọi Lê Tuấn là hoạt động đơn thuần giải trí, vui vẻ. Website không liên quan đến mọi hình thức cá độ</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer