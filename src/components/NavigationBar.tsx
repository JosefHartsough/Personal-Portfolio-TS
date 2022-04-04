import React, { useState, useEffect } from "react";
import { Link, navigate } from "gatsby";
import * as navigationStyles from '../styles/NavigationBar/NavigationBar.module.css';

export default function NavigationBar() {
  const [isVisible, setIsVisible] = useState(true);

  const scrollNavBar = () => {
    if (window.scrollY > 80) {
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
          <h1 onClick={() => navigate("/")} style={{ cursor: 'pointer', marginLeft: '10px' }} >JH</h1>
            <ul className={navigationStyles.listContainer}>
              <li className={navigationStyles.listItem}>
              <Link to="/about">ABOUT</Link>
              </li>
              <li className={navigationStyles.listItem}>
                <Link to="/">PROJECTS</Link>
              </li>
              <li className={navigationStyles.listItem}>
                <a href="/">RESUME</a>
              </li>
              <li className={navigationStyles.listItem}>
                <a href="mailto:josefhartsough@gmail.com">CONTACT ME</a>
              </li>
            </ul>
        </div>
      )}
    </div>
  );
}