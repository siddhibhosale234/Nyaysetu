import React, { useState } from "react";
import "./LoginForm.css";
import a from './NyaysetuLogo.png'
export function Login() {
  const [showForgot, setShowForgot] = useState(false);

  return (
    <div className="login-body">
      <div className="container">
        {showForgot ? (
          <div id="forgot-form">
            <img src={a} alt="" style={{height:"30%", width:"30%", borderRadius:"10px", border:"1px solid #151226"}}></img>
            <h2>Forgot Password</h2>
            <form>
              <input type="email" placeholder="Enter your email" required />
              <button type="submit">Reset Password</button>
              <p>
                <a href="#" onClick={() => setShowForgot(false)}>
                  Back to Login
                </a>
              </p>
            </form>
          </div>
        ) : (
          <div id="login-form">
            <img src={a} alt="" style={{height:"30%", width:"30%", borderRadius:"10px", border:"1px solid #151226"}}></img>
            <h2>Login</h2>
            <form>
              <input type="text" placeholder="Username" required />
              <input type="password" placeholder="Password" required />
              <button type="submit">Login</button>
              <p>
                <a href="#" onClick={() => setShowForgot(true)}>
                  Forgot Password?
                </a>
              </p>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
