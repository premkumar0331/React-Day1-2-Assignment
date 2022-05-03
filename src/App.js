import React from "react";
import './App.css';

function App() {
  return (
    <div className="App">
      <section className="mainBox flex-container">
      {/* first box */}
          <div className="box1">
            <div className="head">
            <h5 className="title">FREE</h5>
            <h1 className="pricing">$0</h1><span className="monthly">/month</span>
            <hr></hr>
            </div>
            <div className="body">
            <ul>
              <li><span className="fa-icon"><i class="bi bi-check"></i></span>Single User</li>
              <li><span className="fa-icon"><i class="bi bi-check"></i></span>5GB Storage</li>
              <li><span className="fa-icon"><i class="bi bi-check"></i></span>Unlimited Public Projects</li>
              <li><span className="fa-icon"><i class="bi bi-check"></i></span>Community Access</li>
              <li className="text-muted"><span className="fa-icon"><i class="bi bi-x"></i></span>Unlimited Private Projects</li>
              <li className="text-muted"><span className="fa-icon"><i class="bi bi-x"></i></span>Dedicated Phone Suppor</li>
              <li className="text-muted"><span className="fa-icon"><i class="bi bi-x"></i></span>Free Subdomain</li>
              <li className="text-muted"><span className="fa-icon"><i class="bi bi-x"></i></span>Monthly Status Reports</li>
            </ul>
            <a href="/" className="btn btn-primary btn-lg">BUTTON</a>
            </div>
          </div>

    {/* second box */}
    <div className="box1">
            <div className="head">
            <h5 className="title text-muted">PLUS</h5>
            <h1 className="pricing">$9</h1><span className="monthly">/month</span>
            <hr></hr>
            </div>
            <div className="body">
            <ul>
              <li><span className="fa-icon"><i class="bi bi-check"></i></span><span className="highlight">5 Users</span></li>
              <li><span className="fa-icon"><i class="bi bi-check"></i></span>50GB Storage</li>
              <li><span className="fa-icon"><i class="bi bi-check"></i></span>Unlimited Public Projects</li>
              <li><span className="fa-icon"><i class="bi bi-check"></i></span>Community Access</li>
              <li><span className="fa-icon"><i class="bi bi-check"></i></span>Unlimited Private Projects</li>
              <li><span className="fa-icon"><i class="bi bi-check"></i></span>Dedicated Phone Suppor</li>
              <li><span className="fa-icon"><i class="bi bi-check"></i></span>Free Subdomain</li>
              <li className="text-muted"><span className="fa-icon"><i class="bi bi-x"></i></span>Monthly Status Reports</li>
            </ul>
            <a href="/" className="btn btn-primary btn-lg">BUTTON</a>
            </div>
          </div>

          {/* third box */}
          <div className="box1">
            <div className="head">
            <h5 className="title">PRO</h5>
            <h1 className="pricing">$49</h1><span className="monthly">/month</span>
            <hr></hr>
            </div>
            <div className="body">
            <ul>
              <li><span className="fa-icon"><i class="bi bi-check"></i></span><span className="highlight">Unlimited Users</span></li>
              <li><span className="fa-icon"><i class="bi bi-check"></i></span>150GB Storage</li>
              <li><span className="fa-icon"><i class="bi bi-check"></i></span>Unlimited Public Projects</li>
              <li><span className="fa-icon"><i class="bi bi-check"></i></span>Community Access</li>
              <li><span className="fa-icon"><i class="bi bi-check"></i></span>Unlimited Private Projects</li>
              <li><span className="fa-icon"><i class="bi bi-check"></i></span>Dedicated Phone Suppor</li>
              <li><span className="fa-icon"><i class="bi bi-check"></i></span><span className="highlight">Unlimited</span> Free Subdomains</li>
              <li><span className="fa-icon"><i class="bi bi-check"></i></span>Monthly Status Reports</li>
            </ul>
              <a href="/" className="btn btn-primary btn-lg">BUTTON</a>
            </div>
          </div>
      </section>
  
    </div>
  );
}

export default App;
