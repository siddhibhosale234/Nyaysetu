import './Disclaimer.css';
import { FaExclamationTriangle, FaTimes } from 'react-icons/fa';
import { useState } from 'react';

function Disclaimer() {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="disclaimer-container">
      <FaTimes className="close-icon"size={20}title="Close"onClick={() => setVisible(false)}
      />
<div className="upper">
       <img src="./Nyaysetu logo.png" alt="" />
      <h1 className="disclaimer-title">Welcome to Nyaysetu</h1>
</div>
      <div className="icon-header">
        {/* <FaExclamationTriangle className="warning-icon" /> */}
        <h2 className="disclaimer-heading">Disclaimer</h2>
      </div>

      <div className="content-section">
        <strong>Nyaysetu</strong> serves solely as a medium to connect users with verified legal professionals across India. We do not provide legal advice, represent any party, or guarantee the outcome of legal matters. All legal services are provided independently by the respective lawyers listed on this site.
      </div>

      <div className="content-section">
        By proceeding, you agree that:
        <p>• You understand we are not a law firm, nor do we employ or control the lawyers listed.</p>
        <p>• Any communication or engagement with a lawyer through this platform is at your own discretion and responsibility.</p>
        <p>• We do not assume liability for the quality, accuracy, or outcome of legal services rendered by lawyers listed here.</p>
        <p>• This platform is not affiliated with or endorsed by the Bar Council of India or any other statutory legal authority.</p>
      </div>

      <div className="content-section">
        We operate as a neutral facilitator and strictly comply with applicable legal and ethical standards. All listed lawyers are solely responsible for their conduct and services.
        <p>If you do not agree with these terms, please do not use this platform.</p>
      </div>

      <div className="checkbox-row">
        <input type="checkbox" id="agree" />
        <label htmlFor="agree">I agree to the terms and conditions</label>
      </div>
    </div>
  );
}

export default Disclaimer;