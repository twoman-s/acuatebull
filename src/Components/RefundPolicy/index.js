import React, { useEffect } from "react";

const RefundPolicy = () => {
  useEffect(() => {
    window.scroll(0, 0);
    let join = document.getElementById("joinbtn");
    join.style.display = "none";
  }, []);
  return (
    <div
      style={{
        padding: "40px",
        marginTop: "40px",
        color: "#3f3d56",
        height: "300px",
      }}
    >
      <h2 style={{ fontWeight: "bold", textAlign: "center" }}>Refund Policy</h2>
      <p style={{ textAlign: "center" }}>
        No refunds will be provided for purchased course. If you face any issues
        with payment or buying the course, contact us on
        support@levelupedu.co.in
      </p>
    </div>
  );
};

export default RefundPolicy;
