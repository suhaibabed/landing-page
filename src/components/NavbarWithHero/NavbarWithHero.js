import styled from "styled-components";
import stars from "../../assets/stars.png";

export const Hero = styled("div")`
  height: 100vh;
  width: 100%;
  background-image: url(${stars});
  background-size: cover;
  background-position: center;
  border-top: 16px solid #ecc90d;
`;
