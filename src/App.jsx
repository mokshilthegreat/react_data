import React from "react";
import "./App.css";

function App() {
  return (
    <div>
  
      <header className="navbar">
        <h1 className="logo">CryptoM5</h1>
        <nav>
          <ul className="nav-links">
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Features</a></li>
            <li><a href="#">Contacts</a></li>
          </ul>
        </nav>
        <button className="btn">Get Started</button>
      </header>

      <section className="hero">
        <div className="hero-text">
          <h4 className="tag">CRYPTO PLATFORM</h4>
          <h1>Crypto Trade Agency</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
            eiusmod tempor incididunt labore dolore magna aliqua.
          </p>
          <button className="btn">Get Started</button>
        </div>
        <div className="hero-img">
          <img
            src="features4.jpg"
            alt="Crypto"
          />
        </div>
      </section>
    </div>
  );
}

export default App;
