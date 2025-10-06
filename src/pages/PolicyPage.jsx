import React from 'react';
import './PolicyPage.css';

const PolicyPage = () => {
  return (
    <div className="policy-page">
      {/* Header Navigation */}
      <header className="policy-header">
        <div className="breadcrumb">
          <span className="breadcrumb-item">Trang chủ</span>
          <span className="breadcrumb-separator">{'>'}</span>
          <span className="breadcrumb-item active">Chính sách & điều khoản</span>
        </div>
      </header>

      {/* Main Content */}
      <div className="policy-container">
        {/* Sidebar Navigation */}
        <aside className="policy-sidebar">
          <nav className="sidebar-nav">
            <div className="sidebar-item active">
              <span>Chính sách đổi trả</span>
            </div>
            <div className="sidebar-item">
              <span>Vận chuyển</span>
            </div>
            <div className="sidebar-item">
              <span>Bảo mật</span>
            </div>
            <div className="sidebar-item">
              <span>Điều khoản sử dụng</span>
            </div>
          </nav>
        </aside>

        {/* Main Content Area */}
        <main className="policy-main">
          <div className="policy-content">
            <h1 className="policy-title">Chính sách & Điều Khoản</h1>
            <p className="policy-subtitle">
              Cập nhật lần cuối vào ngày: Ngày 06 tháng 10 năm 2025
            </p>

            {/* Policy Sections */}
            <div className="policy-sections">
              
              {/* Chính sách đổi trả */}
              <section className="policy-section">
                <div className="section-icon">
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                    <rect width="40" height="40" rx="8" fill="#f0f0f0"/>
                    <path d="M20 8L28 16H24V24H16V16H12L20 8Z" fill="#666"/>
                  </svg>
                </div>
                <div className="section-content">
                  <h3 className="section-title">Chính sách đổi trả</h3>
                  <ul className="section-list">
                    <li>Thời hạn đổi trả: 7 ngày tính từ khi nhận sản phẩm.</li>
                    <li>Hàng đã mua không được sử dụng hoặc bị hư hại trong quá trình sử dụng.</li>
                  </ul>
                  <button className="section-link" onClick={() => console.log('View return policy details')}>Xem chi tiết</button>
                </div>
              </section>

              {/* Vận chuyển */}
              <section className="policy-section">
                <div className="section-icon">
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                    <rect width="40" height="40" rx="8" fill="#f0f0f0"/>
                    <path d="M8 20H24V16H28L32 20V28H28C28 30.21 26.21 32 24 32C21.79 32 20 30.21 20 28H12C12 30.21 10.21 32 8 32C5.79 32 4 30.21 4 28V20H8Z" fill="#666"/>
                  </svg>
                </div>
                <div className="section-content">
                  <h3 className="section-title">Vận chuyển</h3>
                  <ul className="section-list">
                    <li>Giao hàng toàn quốc, dự kiến từ 3-5 ngày với đơn hàng nội địa.</li>
                    <li>Miễn phí vận chuyển cho đơn hàng trên 500k, dưới 500k là 30k phí ship.</li>
                    <li>Giao hàng từ thứ 2 đến thứ 6 hàng tuần, nghỉ thứ 7 và chủ nhật.</li>
                  </ul>
                  <button className="section-link" onClick={() => console.log('View shipping details')}>Xem chi tiết</button>
                </div>
              </section>

              {/* Bảo mật */}
              <section className="policy-section">
                <div className="section-icon">
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                    <rect width="40" height="40" rx="8" fill="#f0f0f0"/>
                    <path d="M20 4L28 8V18C28 26 20 32 20 32C20 32 12 26 12 18V8L20 4Z" fill="#666"/>
                  </svg>
                </div>
                <div className="section-content">
                  <h3 className="section-title">Bảo mật</h3>
                  <ul className="section-list">
                    <li>Chúng tôi thu thập dữ liệu cá nhân để cung cấp dịch vụ tốt nhất cho khách hàng.</li>
                    <li>Mọi thông tin của bạn sẽ được bảo mật tuyệt đối và không chia sẻ với bên thứ ba.</li>
                    <li>Mọi dịch vụ từ ngày 20/9 sẽ giảm 40%, những mã khách hàng dưới mã số định danh 4000 đều.</li>
                  </ul>
                  <button className="section-link" onClick={() => console.log('View security details')}>Xem chi tiết</button>
                </div>
              </section>

              {/* Điều khoản sử dụng */}
              <section className="policy-section">
                <div className="section-icon">
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                    <rect width="40" height="40" rx="8" fill="#f0f0f0"/>
                    <path d="M14 8H26C27.1 8 28 8.9 28 10V30C28 31.1 27.1 32 26 32H14C12.9 32 12 31.1 12 30V10C12 8.9 12.9 8 14 8Z" fill="#666"/>
                  </svg>
                </div>
                <div className="section-content">
                  <h3 className="section-title">Điều khoản sử dụng</h3>
                  <ul className="section-list">
                    <li>Bạn chấp nhận tuân thủ các quy định về việc sử dụng sản phẩm trên trang web của chúng tôi.</li>
                    <li>Nghiêm cấm việc sao chép nội dung trái phép từ trang web này.</li>
                  </ul>
                  <button className="section-link" onClick={() => console.log('View terms details')}>Xem chi tiết</button>
                </div>
              </section>

            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default PolicyPage;