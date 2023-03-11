import React from "react";
import "./Header.css";
import { Fade } from "react-reveal";
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import { greeting } from "../../portfolio.js";
import SeoHeader from "../seoHeader/SeoHeader";

const HeaderLink = ({ to, children, theme }) => {
  return (
    <li>
      <HashLink
        to={to}
        tag={Link}
        activeStyle={{ fontWeight: "bold" }}
        style={{ color: theme.text }}
        onMouseEnter={(event) => onMouseEnter(event, theme.highlight)}
        onMouseOut={(event) => onMouseOut(event)}
      >
        {children}
      </HashLink>
    </li>
  );
};

const Header = ({ theme: { body, text, highlight } }) => {
  const link = "/home";
  return (
    <Fade top duration={1000} distance="20px">
      <SeoHeader />
      <div>
        <header className="header">
          <HashLink to={link} tag={Link} className="logo">
            <span className="logo-name" style={{ color: text }}>
              {greeting.logo_name}
            </span>
          </HashLink>
          <input className="menu-btn" type="checkbox" id="menu-btn" />
          <label className="menu-icon" htmlFor="menu-btn">
            <span className="navicon"></span>
          </label>
          <ul className="menu" style={{ backgroundColor: body }}>
            <HeaderLink to="/#about" theme={{ body, text, highlight }}>
              About me
            </HeaderLink>
            <HeaderLink to="/#skills" theme={{ body, text, highlight }}>
              Skills
            </HeaderLink>
            <HeaderLink to="/#projects" theme={{ body, text, highlight }}>
              Projects
            </HeaderLink>
            <HeaderLink to="/#experience" theme={{ body, text, highlight }}>
              Experience
            </HeaderLink>
            <HeaderLink to="/#educations" theme={{ body, text, highlight }}>
              Education
            </HeaderLink>
          </ul>
        </header>
      </div>
    </Fade>
  );
};

const onMouseEnter = (event, color) => {
  const el = event.target;
  el.style.backgroundColor = color;
};

const onMouseOut = (event) => {
  const el = event.target;
  el.style.backgroundColor = "transparent";
};

export default Header;
