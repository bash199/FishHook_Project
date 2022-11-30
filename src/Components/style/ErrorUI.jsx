import styled from "styled-components";
export const ErrorBox = styled.div`
   width: 100%;
   height: 96vh;
   background: url("/images/errorBack.jpg") center center / cover no-repeat;
   display: flex;
   justify-content: center;
   align-items: center;
   text-align: center;
`;

export const Box = styled.div`
   width: 600px;
   height: 50vh;
   margin-top: 70px;
   z-index: 1;
   display: flex;
   flex-direction: column;
   align-items: center;
   @media (width: 1024px) and (height: 600px) {
   }
`;

export const Para = styled.h1`
   color: white;
   font-family: "Montserrat", sans-serif;
   font-size: 1.3rem;
   margin: 10px 0 10px 15px;
`;

export const Btn = styled.button`
   font-family: "Montserrat", sans-serif;
   width: 110px;
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
`;

export const WelcomeTilte = styled.h1`
   color: white;
   font-family: "Montserrat", sans-serif;
   font-size: 9rem;
   @media screen and (max-width: 500px) {
      font-size: 6rem;
   }
   @media screen and (max-width: 300px) {
      font-size: 5rem;
   }
`;

export const Div2 = styled.div`
   display: flex;
`;

export const Makaf = styled.div`
   position: relative;
`;

export const WelcomeTilte2 = styled.h1`
   color: white;
   font-family: monospace;
   font-family: "Montserrat", sans-serif;
   font-size: 7rem;
   position: absolute;
   bottom: 25px;
   left: 15px;
   @media screen and (max-width: 500px) {
      bottom: 18px;
      font-size: 4rem;
   }
   @media screen and (max-width: 300px) {
      bottom: 15px;
      font-size: 3rem;
   }
`;
