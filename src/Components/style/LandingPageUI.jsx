import styled from "styled-components";

export const Div = styled.div`
   background: url("/images/landingback.jpg") center center / cover no-repeat;
   background-image: linear-gradient(180deg, rgba(61, 61, 61, 0.42));
   width: 100%;
   min-height: 96vh;
   position: relative;
   display: flex;
   justify-content: flex-start;
   align-items: flex-start;
   padding: 50px;
   @media screen and (max-width: 680px) {
      padding: 25px;
   }
   @media screen and (max-width: 500px) {
      padding: 10px;
   }
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
export const Box = styled.div`
   width: 600px;
   height: 50vh;
   margin-top: 70px;
   /* background: rgba(255, 255, 255, 0.5); */
   z-index: 1;
   @media (width: 1024px) and (height: 600px) {
      margin-top: 10px;
   }
`;

export const H1 = styled.h1`
   color: white;
   font-size: 3rem;
   font-family: "Courier New", Courier, monospace;
   margin-left: 15px;
   @media screen and (max-width: 500px) {
      font-size: 2.5rem;
   }
   @media screen and (max-width: 300px) {
      font-size: 1.8rem;
      margin-left: 10px;
   }
`;
export const Title = styled.h1`
   color: white;
   font-family: "Courier New", Courier, monospace;
   font-size: 1.3rem;
   margin: 10px 0 10px 15px;
   @media screen and (max-width: 500px) {
      font-size: 1.1rem;
   }
   @media screen and (max-width: 300px) {
      font-size: 0.8rem;
      margin-left: 10px;
   }
`;
export const Btn = styled.button`
   width: 90px;
   height: 25px;
   color: white;
   font-size: 1rem;
   cursor: pointer;
   background: rgba(255, 255, 255, 0.05);
   box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
   backdrop-filter: blur(1px);
   -webkit-backdrop-filter: blur(1px);
   border-radius: 3px;
   border: 1px solid rgba(255, 255, 255, 0.18);
   margin: 7px;
   margin-left: 15px;
   &:hover {
      transition: 0.1s ease-in-out;
      transform: scale(1.03);
   }
   @media screen and (max-width: 300px) {
      margin-left: 10px;
   }
`;

export const WelcomeTilte = styled.h1`
   color: white;
   font-family: "Courier New", Courier, monospace;
   font-size: 1.6rem;
   margin: 10px 0 10px 15px;
   @media screen and (max-width: 500px) {
      font-size: 1.4rem;
   }
   @media screen and (max-width: 300px) {
      font-size: 1.2rem;
      margin-left: 10px;
   }
`;