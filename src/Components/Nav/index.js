import React from "react";
import { useHistory } from "react-router-dom";
import { NavWrapper, NavLogo, NavLinks, Link, LinkB } from "./NavElements";
import { useAuth } from "./../../context/AuthContext";
import { FaUserAlt } from "react-icons/fa";
import logo from "./../../animations/levelup.svg";

const Nav = () => {
  const history = useHistory();

  const { currentUser, logout } = useAuth();

  const scroll = () => {
    if (window.location.pathname === "/") {
      var element = document.getElementById("joinus");
      element.scrollIntoView({
        behavior: "smooth",
      });
    } else {
      history.push({
        pathname: "/",
        state: {
          join: "scroll",
        },
      });
    }
  };
  return (
    <NavWrapper>
      <NavLogo
        onClick={() => {
          history.push("/");
        }}
      >
        <img src={logo} alt="LevelUp" style={{ width: "15%", height: "10%" }} />
      </NavLogo>
      <NavLinks>
        <LinkB id="joinbtn" onClick={scroll}>
          Join Now
        </LinkB>
        {currentUser ? (
          <>
            <Link>
              <FaUserAlt
                onClick={() => {
                  history.push({
                    pathname: "/profile",
                    state: {
                      from: window.location.pathname,
                    },
                  });
                }}
              />
            </Link>
            <Link
              onClick={() => {
                logout();
                history.push("/");
              }}
            >
              Logout
            </Link>
          </>
        ) : (
          <Link
            onClick={() => {
              history.push({
                pathname: "/login",
                state: {
                  from: window.location.pathname,
                },
              });
            }}
          >
            Login
          </Link>
        )}
      </NavLinks>
    </NavWrapper>
  );
};

export default Nav;
