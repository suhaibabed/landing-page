import styled from "styled-components";
import { FlexBox, FlexRow, InnerSection } from "../../App.Styles";


export const NavContainer = styled("nav")`
  display: flex;
  justify-content: center;
  align-items: center;
  /* height: auto; */
  height: 85px;
  background: #242424 0% 0% no-repeat padding-box;
  opacity: 1;
  width: 100%;
`;

export const NavInnerSection = styled(InnerSection)`
  flex-direction: row;
  justify-content: space-between;
`;