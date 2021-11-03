import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { NavLink, useHistory } from "react-router-dom";
import $ from "jquery";
import { RiMenu3Fill } from "react-icons/ri";
import { useAuth } from "./../../context/AuthContext";

const Navbar = () => {
  const history = useHistory();

  const { currentUser } = useAuth();
  const scrollTo = (id) => {
    if (history.location.pathname === "/coursedetails") {
      history.push("/");
    } else {
      if (id === "") {
        id = "home";
      }
      var element = document.getElementById(id);
      element.scrollIntoView({
        behavior: "smooth",
      });
    }
  };
  function animation() {
    var tabsNewAnim = $("#navbarSupportedContent");
    var activeItemNewAnim = tabsNewAnim.find(".active");
    var activeWidthNewAnimHeight = activeItemNewAnim.innerHeight();
    var activeWidthNewAnimWidth = activeItemNewAnim.innerWidth();
    var itemPosNewAnimTop = activeItemNewAnim.position();
    var itemPosNewAnimLeft = activeItemNewAnim.position();
    $(".hori-selector").css({
      top: itemPosNewAnimTop.top + "px",
      left: itemPosNewAnimLeft.left + "px",
      height: activeWidthNewAnimHeight + "px",
      width: activeWidthNewAnimWidth + "px",
    });
    $("#navbarSupportedContent").on("click", "li", function (e) {
      $("#navbarSupportedContent ul li").removeClass("active");
      $(this).addClass("active");
      // getting url for scrolling to section
      var url = e.target.href;
      var id = url.replace(window.location.origin + "/", "");
      // calling scroll function
      scrollTo(id);
      var activeWidthNewAnimHeight = $(this).innerHeight();
      var activeWidthNewAnimWidth = $(this).innerWidth();
      var itemPosNewAnimTop = $(this).position();
      var itemPosNewAnimLeft = $(this).position();
      $(".hori-selector").css({
        top: itemPosNewAnimTop.top + "px",
        left: itemPosNewAnimLeft.left + "px",
        height: activeWidthNewAnimHeight + "px",
        width: activeWidthNewAnimWidth + "px",
      });
    });
  }

  //to close navbar in mobile view
  const closeNav = () => {
    let nav = document.querySelector(".navbar-collapse");
    setTimeout(function () {
      nav.classList.remove("show");
    }, 500);
  };

  useEffect(() => {
    //setting late animation
    animation();
    $(window).on("resize", function () {
      setTimeout(function () {
        animation();
      }, 500);
    });
    var navlinks = document.getElementsByClassName("nav-link");
    for (var i = 0, len = navlinks.length; i < len; i++) {
      navlinks[i].onclick = closeNav;
    }
  }, []);

  return (
    <nav className="navbar navbar-expand-lg navbar-mainbg fixed-top">
      <NavLink className="navbar-brand navbar-logo" to="/" exact>
        AcuateBull
      </NavLink>

      <button
        className="navbar-toggler"
        id="menu"
        onClick={function () {
          setTimeout(function () {
            animation();
          });
        }}
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <RiMenu3Fill style={{ fontSize: "30px", color: "#53b8d7" }} />
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
          <div className="hori-selector">
            <div className="left"></div>
            <div className="right"></div>
          </div>

          <li className="nav-item active">
            <NavLink className="nav-link" to="/" exact>
              Home
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink className="nav-link" to="/about" exact>
              About
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink className="nav-link" to="/joinus" exact>
              Join Now
            </NavLink>
          </li>
          {currentUser ? (
            <li className="nav-item">
              <NavLink className="nav-link" to="/" exact>
                {currentUser.uid}
              </NavLink>
            </li>
          ) : (
            <></>
          )}
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;
