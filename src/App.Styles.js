import styled from "styled-components";

export const MainContainer = styled("main")`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  max-width: 1920px;
  width: 100%;

  @media screen and (max-width: 1920px) {
    margin: 0 auto;
  }
`;

export const FlexBox = styled("div")`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: auto;
  background: ${(props) => props.backgroundColor};
`;

// export const FlexRow = styled(FlexBox)`
//   flex-direction: row;
// `;

export const FlexColumn = styled(FlexBox)`
  flex-direction: column;
`;

export const InnerSection = styled(FlexColumn)`
  max-width: 1640px;
  width: 100%;
  margin: 0 auto;
  padding: ${(props) => (props.padding ? "60px 0" : "")};
`;

// export const Typography = styled("p")`
//   font-size: ${(props) => props.fontSize}px;
//   color: ${(props) => props.color};
//   font-weight: ${(props) => (props.fontWeight ? props.fontWeight : "Regular")};
//   @media screen and (max-width: 1100px) {
//     font-size: ${(props) => props.fontSize - 6}px;
//   }
// `;

// export const SectionTitleContainer = styled(FlexRow)`
//   justify-content: ${(props) => (props.center ? "center" : "space-between")};
//   border-bottom: 1px solid #ddd;
//   margin-bottom: ${(props) => (props.margin ? "43" : "22")}px;
// `;

// export const SectionTitle = styled("p")`
//   padding-bottom: 20px;
//   color: #242424;
//   font-size: 32px;
//   font-weight: 600;
//   letter-spacing: 1.28px;

//   text-transform: uppercase;
//   position: relative;
//   &:after {
//     content: "";
//     position: absolute;
//     left: ${(props) => (props.center ? "25%" : "0")};
//     bottom: 0px;
//     display: block;
//     width: 200px;
//     height: 7px;
//     background-color: #fcdd06;
//   }
// `;
// export const CardsBox = styled(FlexRow)``;

// export const SpinnerContainer = styled.div`
//   display: inline-block;
//   width: 60px;
//   height: 60px;
//   border: 6px solid #fcdd06;
//   box-sizing: border-box;
//   border-radius: 50%;
//   border-top-color: #ddd;
//   margin-top: 20%;
//   animation: spin 1s ease-in-out infinite;
//   -webkit-animation: spin 1s ease-in-out infinite;

//   @keyframes spin {
//     to {
//       -webkit-transform: rotate(360deg);
//     }
//   }
//   @-webkit-keyframes spin {
//     to {
//       -webkit-transform: rotate(360deg);
//     }
//   }
// `;

// export const Line = styled("hr")`
//   width: ${(props) => (props.width ? props.width : "200px")};
//   height: ${(props) => (props.height ? props.height : "1px")};
//   color: ${(props) => (props.color ? props.color : "#000")};
// `;

// export const LoadMore = styled(FlexRow)`
//   width: 200px;
//   height: 50px;
//   font-size: 18px;
//   background: ${(props) => (props.isLoading ? "#ddd" : "#fcdd06")};
//   color: #fff;
//   border-radius: 21px;
//   margin-bottom: 20px;
//   cursor: pointer;
//   margin: 0 auto;
// `;

// export const NotFoundImg = styled("img")`
//   width: auto;
//   height: auto;
//   object-fit: cover;
// `;
