import React from "react";
import { ServWrapper, BoxContainer, Box } from "./ServElements";
import {
  FaGraduationCap,
  FaSchool,
  FaUsers,
  FaSuperpowers,
  FaLanguage,
} from "react-icons/fa";

const style = {
  fontSize: "20px",
  width: "70px",
  height: "70px",
  padding: "10px",
  border: "1.5px solid #26d7ab",
  borderRadius: "50%",
  color: "#26d7ab",
  "&:hover": {
    background: "#efefef",
  },
};

const Serv = () => {
  return (
    <ServWrapper>
      <h1>Lets Earn Together</h1>
      <BoxContainer>
        <Box>
          <FaSchool style={style} />
          <h3>India's best affordable trading school</h3>
        </Box>
        <Box>
          <FaGraduationCap style={style} />
          <h3>Master in Technical analysis</h3>
        </Box>
        <Box>
          <FaUsers style={style} />
          <h3>Made for Common people</h3>
        </Box>
        <Box>
          <FaSuperpowers style={style} />
          <h3>Learn from scratch to advance</h3>
        </Box>
        <Box>
          <FaLanguage style={style} />
          <h3>Available in your comfortable language</h3>
        </Box>
      </BoxContainer>
    </ServWrapper>
  );
};

export default Serv;
