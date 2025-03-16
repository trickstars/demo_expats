function Footer() {
    return (
        <footer>
            <div className="footer flex-row">
                <div className="flex-col footer-section">
                    <div className="footer__logo">
                    <img src="https://i.ibb.co/B5XFx4Tq/logo.png" alt="logo" />
                    </div>
                    <div className="footer__decription">
                        <p>👉 CLB Gà Chọi Lê Tuấn vần xổ gà trực tiếp 18h30  hàng ngày</p>
                        <p>👉 Giao lưu mua bán gà chọi đi các tỉnh</p>
                    </div>
                </div>
                <div className="flex-col footer-section">
                    <h2>Kết nối đam mê</h2>
                    <div className="phone">
                        ☎️ 0123456789
                    </div>
                    <p>Địa chỉ: Phú Khánh</p>
                </div>
                <div className="flex-col footer-section">
                    <h2>Quy định</h2>
                    <p>Website CLB Gà Chọi Lê Tuấn là hoạt động đơn thuần giải trí, vui vẻ. Website không liên quan đến mọi hình thức cá độ</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer