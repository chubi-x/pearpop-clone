import { React, useState } from "react";

// logo imports
import logo from "../images/logo.svg";

// icon imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiscord } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

// nav imports
import {
  CNavbar,
  CNavbarToggler,
  CContainer,
  CNavbarNav,
  CNavLink,
  CNavItem,
  CNavbarBrand,
  CCollapse,
} from "@coreui/react";
import { NavLink } from "react-router-dom";

export default function Nav() {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <CNavbar expand="sm" colorScheme="light" id="nav" placement="fixed-top">
        <CContainer fluid>
          <CNavbarBrand href="/">
            <img src={logo} className="nav-logo" alt="nav logo" />
          </CNavbarBrand>
          <CNavbarToggler
            aria-label="Toggle navigation"
            aria-expanded={visible}
            onClick={() => setVisible(!visible)}
          />
          <CCollapse className="navbar-collapse" visible={visible}>
            <CNavbarNav className="me-auto mb-2 mb-lg-0 nav-menu">
              <CNavItem>
                <CNavLink>
                  <NavLink to="/">CHALLENGE</NavLink>
                </CNavLink>
              </CNavItem>
              <CNavItem>
                <CNavLink>
                  <NavLink to="/login">LOGIN</NavLink>
                </CNavLink>
              </CNavItem>
              <CNavItem>
                <CNavLink>
                  <NavLink to="/register">REGISTER</NavLink>
                </CNavLink>
              </CNavItem>
            </CNavbarNav>
            <CNavbarNav className="social-links">
              <CNavItem>
                {/* <img src={user}/> */}
                <CNavLink href="#">
                  <FontAwesomeIcon icon={faDiscord} size="xl" />
                </CNavLink>
              </CNavItem>
              <CNavItem>
                <CNavLink href="#">
                  <FontAwesomeIcon icon={faTwitter} size="xl" />
                </CNavLink>
              </CNavItem>
              <CNavItem>
                <CNavLink href="#">
                  <FontAwesomeIcon icon={faInstagram} size="xl" />
                </CNavLink>
              </CNavItem>
            </CNavbarNav>
          </CCollapse>
        </CContainer>
      </CNavbar>
    </>
  );
}

