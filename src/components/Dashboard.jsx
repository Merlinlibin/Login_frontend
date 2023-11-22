import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles/Dashboard.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

function Dashboard({
  user,
  setuser,
  token,
  settoken,
  registered,
  setregistered,
}) {
  const onLogout = () => {
    setuser(null);
    settoken(null);

    window.localStorage.removeItem("user");
    window.localStorage.removeItem("token");

    setregistered(true);
  };
  return (
    <div>
      <header class="header">
        <a href="#" class="logo">
          Developer
        </a>

        <nav class="nav-items">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
          <div>
            <button onClick={onLogout} className="btnlogout">
              logout
            </button>
          </div>
        </nav>
      </header>
      <main>
        <div class="intro">
          <h1>A Web Developer</h1>
          <p>I am a web developer and I love to create websites.</p>
          <button>Learn More</button>
        </div>
        <div class="achievements">
          <div class="work">
            <i class="fas fa-atom"></i>
            <p class="work-heading">Projects</p>
            <p class="work-text">
              I have worked on many projects and I am very proud of them. I am a
              very good developer and I am always looking for new projects.
            </p>
          </div>
          <div class="work">
            <i class="fas fa-skiing"></i>
            <p class="work-heading">Skills</p>
            <p class="work-text">
              I have a lot of skills and I am very good at them. I am very good
              at programming and I am always looking for new skills.
            </p>
          </div>
          <div class="work">
            <i class="fas fa-ethernet"></i>
            <p class="work-heading">Network</p>
            <p class="work-text">
              I have a lot of network skills and I am very good at them. I am
              very good at networking and I am always looking for new network
              skills.
            </p>
          </div>
        </div>
        <div class="about-me">
          <div class="about-me-text">
            <h2>About Me</h2>
            <p>
              I am a web developer and I love to create websites. I am a very
              good developer and I am always looking for new projects. I am a
              very good developer and I am always looking for new projects.
            </p>
          </div>
          <img
            src="https://images.unsplash.com/photo-1596495578065-6e0763fa1178?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80"
            alt="me"
          />
        </div>
      </main>
      <footer class="footer">
        <div class="copy">&copy; 2022 Developer</div>
        <div class="bottom-links">
          <div class="links">
            <span>More Info</span>
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Contact</a>
          </div>
          <div class="links">
            <span>Social Links</span>
            <a href="#">
              <i class="fab fa-facebook"></i>
            </a>
            <a href="#">
              <i class="fab fa-twitter"></i>
            </a>
            <a href="#">
              <i class="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Dashboard;
