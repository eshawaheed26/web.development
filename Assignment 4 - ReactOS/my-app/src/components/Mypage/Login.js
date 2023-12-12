import React from 'react';
import "./Login.css"
const Login = () => {
    return (
      <>
        <nav>
          <ul>
            <li><a><img src="1.webp" width="100px" style={{ marginTop: '14.5px', marginLeft: '108px' }} /></a></li>
          </ul>
          <ul>
            <li><a href="#">HOME</a></li>
            <li><a href="#">MENU</a></li>
            <li><a href="#">RINA'S GIFT BOX</a></li>
            <li><a href="#">ABOUT</a></li>
            <li><a href="#">LOCATIONS</a></li>
            <li><a href="#">CONTACT</a></li>
          </ul>
          <a href="#" className="image-button">
            <img src="login.png" alt="Login/Signup" title="Login/Signup" />
            <span className="badge">0</span>
            <img src="Cart.png" alt="Cart" title="Cart" />
          </a>
          <a href="#" className="order-button">ORDER NOW</a>
        </nav>
  
        <div className="login-box">
          <h2>Login to your Account</h2>
          <form>
            <div className="input-container">
              <label style={{ color: 'rgb(138, 134, 134)' }} htmlFor="email">Email</label>
              <input type="email" id="email" placeholder="Enter your email" required />
              <i className="fa fa-envelope-o"></i>
            </div>
  
            <div className="input-container">
              <label style={{ color: 'rgb(138, 134, 134)' }} htmlFor="password">Password</label>
              <input type="password" id="password" placeholder="Enter password" required />
              <i className="fa fa-eye-slash"></i>
            </div>
            <button type="submit" className="login-button">Login</button>
            <a href="#" className="forgot-password">Forgot password?</a>
          </form>
          <div className="or-line">
            <hr />
            <span>&nbsp;or &nbsp;</span>
            <hr />
          </div>
          <div className="social-buttons">
            <div className="google-button"><b>Sign in with Google </b><img src="logogo.jpg" alt="Google" /></div>
            <br />
            <div className="facebook-button"><b>Login with Facebook</b><img src="fbi.png" alt="Facebook" /></div>
          </div>
        </div>
  
        <p>Don't have an Account? Create account</p>
  
        <footer>
          <pre>© 2023  Rinas Kitchenette. Powered By tossdown.com</pre>
        </footer>
      </>
    );
  };
  
  export default Login;