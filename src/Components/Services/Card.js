import React from "react";
import "./CardElements.css";
import { FiChevronRight } from "react-icons/fi";
import book from "./book.png";

const Card = () => {
  return (
    <div className="product-card">
      <div className="badge">50% OFF</div>
      <div className="product-tumb">
        <img src={book} alt="book" />
      </div>
      <div className="product-details">
        <span className="product-catagory">Course(Malayalam)</span>
        <ul>
          <li>Learn from scratch to advanced</li>

          <li>Attend sessions on your comfortable time</li>

          <li>Doubt clearing sessions from 9AM - 5PM, Monday-Friday</li>

          <li>Access to LevelUp Premium trading community</li>

          <li>Daily Trade Ideas</li>
        </ul>
        <div className="product-bottom-details">
          <div className="product-price">
            <small>Rs3999/-</small>Rs1999/-
          </div>
        </div>
      </div>
    </div>
  );
};
// { icon, contentHead, contentDesc }
export default Card;
