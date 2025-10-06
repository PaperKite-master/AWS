import React, { useState } from 'react';     
import './LoginPage.css';
import { useNavigation } from './useNavigation';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const { goToPolicy, goToStaffAdminLogin } = useNavigation();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email submitted:', email);
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="logo-section">
          <img src="/LEAF.png" alt="LEAF" className="logo" />
        </div>
        
        <div className="login-content">
          <h1 className="login-title">Đăng nhập</h1>
          <p className="login-description">
            Nhập email của bạn để chúng tôi gửi cho bạn mã xác minh
          </p>
          
          <form onSubmit={handleSubmit} className="login-form">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="email-input"
              required
            />
            
            <button type="submit" className="continue-button">
              Tiếp tục
            </button>
          </form>
          
          <div className="links-section">
            <button className="policy-terms-link" onClick={goToPolicy}>
              Chính sách quyền riêng tư & Điều khoản dịch vụ
            </button>
          </div>
          
          <div className="staff-admin-section">
            <button 
              className="staff-admin-link" 
              onClick={goToStaffAdminLogin}
            >
              Đăng nhập Staff và admin
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
