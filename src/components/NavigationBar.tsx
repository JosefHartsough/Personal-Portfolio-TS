import React, { useState, useEffect } from "react";
import { Link, navigate } from "gatsby";
import * as navigationStyles from '../styles/NavigationBar/NavigationBar.module.css';

export default function NavigationBar() {
  const [isVisible, setIsVisible] = useState(true);

  const scrollNavBar = () => {
    if (window.scrollY > 100) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollNavBar);
    return () => {
      window.removeEventListener("scroll", scrollNavBar);
    };
  }, []);

  return (
    <div>
      {isVisible && (
        <div className={navigationStyles.navigationContainer}>
          <h1 onClick={() => navigate("/")} style={{ cursor: 'pointer', marginLeft: '20px' }} >JH</h1>
          <div className={navigationStyles.listContainer}>
            <ul>
              <li className={navigationStyles.listItem}>
                <Link to="/">HOME</Link>
              </li>
              <li className={navigationStyles.listItem}>
                <Link to="/about">ABOUT ME</Link>
              </li>
              <li className={navigationStyles.listItem}>
                <a href="/blog">PROJECTS</a>
              </li>
              <li className={navigationStyles.listItem}>
                <a href="/blog">CONTACT ME</a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}