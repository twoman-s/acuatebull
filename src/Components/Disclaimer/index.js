import React, { useEffect } from "react";

const Disclaimer = () => {
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
        height: "50vh",
      }}
    >
      <h2 style={{ fontWeight: "bold", textAlign: "center" }}>Disclaimer</h2>
      <p>
        We are not SEBI registered analysts, videos and lectures conducted only
        for educational purpose. Stock trading subject to market risk we are not
        assuring you any profit that you can earn from trading and we are not
        liable for your loss. LevelUp is established only for educational
        purpose. We are not liable for your personal loss from trading or
        investing.
      </p>
    </div>
  );
};

export default Disclaimer;
