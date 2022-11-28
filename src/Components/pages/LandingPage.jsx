import React from "react";
import styled from "styled-components";

const Div = styled.div`
   background: url("landingback.jpg")
      center center / cover no-repeat;
   background-image: linear-gradient(180deg, rgba(61, 61, 61, 0.42));
   width: 100%;
   min-height: 100vh;
   position: relative;

`;
export const Overlay = styled.div`
   position: absolute;
   top: 0;
   right: 0;
   left: 0;
   bottom: 0;
   background-color: rgba(0, 0, 0, 0.4);
   z-index: 0;
`;
const LandingPage = () => {
   return (
      <Div>
         <Overlay />
      </Div>
   );
};

export default LandingPage;
