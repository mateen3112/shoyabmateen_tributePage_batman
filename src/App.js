import React, { Component } from "react";
import styled from "styled-components";
import BatmanHero from "./components/BatmanHero";
import Timeline from "./components/Timeline";
import BatmanHistory from "./components/BatmanHistory";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <BatmanHero style={{ gridArea: "hero" }} />
        <BatmanHistory style={{ gridArea: "history" }} />
        <Footer className="footer">
          <p>
            © 2024 By Shoyab Mateen  All rights reserved. |{" "}
            <a
              href="https://en.wikipedia.org/wiki/Batman"
              alt="batman wiki page"
              target="_blank"
            >
               More about Batman
            </a>
          </p>
          <SocialIcons>
            <a href="#" className="social-icon">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="social-icon">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="social-icon">
              <i className="fab fa-instagram"></i>
            </a>
          </SocialIcons>
        </Footer>
      </div>
    );
  }
}

const Footer = styled.footer`
  grid-area: footer;
  background-color: #1a1a1a;
  color: #ffffff;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  p {
    margin: 0;
  }

  a {
    color: #ffffff;
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      color: #ff4500; /* Change color to orange on hover */
    }
  }
`;

const SocialIcons = styled.div`
  margin-top: 10px;

  .social-icon {
    color: #ffffff;
    font-size: 24px;
    margin: 0 10px;
    transition: color 0.3s ease;

    &:hover {
      color: #ff4500; 
    }
  }
`;

export default App;
