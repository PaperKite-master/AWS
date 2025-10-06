import React, { useState } from 'react';
import './StaffAdminLoginPage.css';
import { useNavigation } from './useNavigation';

const StaffAdminLoginPage = () => {
  const [loginData, setLoginData] = useState({
    username: '',
    password: ''
  });
  const { goToLogin } = useNavigation();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLoginData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Staff/Admin login:', loginData);
  };

  return (
    <div className="staff-admin-login-page">
      <div className="staff-admin-login-container">
        <div className="logo-section">
          <img src="/LEAF.png" alt="LEAF" className="logo" />
        </div>
        
        <div className="login-content">
          <h1 className="login-title">Đăng nhập</h1>
          
          {/* Login Form */}
          <form onSubmit={handleSubmit} className="staff-admin-login-form">
            <div className="form-section">
              <label className="input-label">Tài khoản</label>
              <input
                type="text"
                name="username"
                placeholder="Nhập tài khoản"
                value={loginData.username}
                onChange={handleInputChange}
                className="login-input"
                required
              />
            </div>
            
            <div className="form-section">
              <label className="input-label">Mật khẩu</label>
              <input
                type="password"
                name="password"
                placeholder="Nhập mật khẩu"
                value={loginData.password}
                onChange={handleInputChange}
                className="login-input"
                required
              />
            </div>
            
            <button type="submit" className="login-button">
              Đăng Nhập
            </button>
          </form>

          {/* Additional Options */}
          <div className="login-options">
            <div className="remember-forgot">
              <label className="remember-checkbox">
                <input type="checkbox" />
                <span>Ghi nhớ đăng nhập</span>
              </label>
              <button className="forgot-password" onClick={() => console.log('Forgot password')}>
                Quên mật khẩu?
              </button>
            </div>
          </div>

      
          {/* Back to User Login */}
          <div className="back-to-user">
            <button 
              className="back-link" 
              onClick={goToLogin}
            >
              ← Quay lại đăng nhập người dùng
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StaffAdminLoginPage;