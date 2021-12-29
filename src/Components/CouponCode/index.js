import React from "react";
import "./Coupon.css";
import { TiGift } from "react-icons/ti";
import { FaRegCopy } from "react-icons/fa";
const CouponCode = () => {
  return (
    <div className="couponcode">
      <a
        href="#"
        onClick={(e) => {
          e.preventDefault();
          navigator.clipboard.writeText("LEVELUP5OFF");
        }}
      >
        <TiGift />
        <span>LEVELUP5OFF</span>
        <FaRegCopy
          onClick={(e) => {
            e.preventDefault();
            e.target.classList.add("active");
            navigator.clipboard.writeText("LEVELUP5OFF");
          }}
        />
      </a>
    </div>
  );
};

export default CouponCode;
