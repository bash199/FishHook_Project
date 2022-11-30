import styled from "styled-components";

export const CatchDiv = styled.div`
   background: url("/images/catchback.jpg") center center / cover no-repeat;
   position: relative;
   width: 100%;
   height: 100vh;
   display: flex;
   justify-content: center;
   align-items: center;
`;
export const InnerDiv = styled.div`
   width: 800px;
   height: 550px;
   display: flex;
   align-items: center;
   justify-content: space-around;
   background: rgba(255, 255, 255, 0.1);
   box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
   backdrop-filter: blur(2px);
   -webkit-backdrop-filter: blur(2px);
   border-radius: 5px;
   border: 1px solid rgba(255, 255, 255, 0.18);
   @media screen and (max-width: 768px) {
      width: 500px;
      height: 755px;
      flex-direction: column;
      align-items: center;
      justify-content: space-around;
   }
   @media (max-width: 400px) {
      width: 280px;
      height: 880px;
      flex-direction: column;
      align-items: center;
      justify-content: space-around;
   }
   @media (max-width: 300px) and (min-height: 550px) {
      width: 280px;
      height: 700px;
      flex-direction: column;
      align-items: center;
      justify-content: space-around;
   }
`;
export const ImageDiv = styled.div`
   width: 40%;
   height: 300px;
   /* margin-left: 10px; */
   background: rgba(255, 255, 255, 0.1);
   box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.5);
   backdrop-filter: blur(2px);
   -webkit-backdrop-filter: blur(2px);
   border-radius: 5px;
   border: 1px solid rgba(255, 255, 255, 0.18);
   @media (max-width: 400px) {
      width: 92%;
      height: fit-content;
   }
   @media (max-width: 300px) and (min-height: 550px) {
      height: 200px;
   }
`;
export const Image = styled.img`
   width: 100%;
   height: 100%;
`;
export const AboutDiv = styled.div`
   color: white;
   width: 58%;
   height: fit-content;
   padding: 5px;
   text-align: center;
   display: flex;
   flex-direction: column;
   align-items: center;
   background: rgba(255, 255, 255, 0.1);
   box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.5);
   backdrop-filter: blur(2px);
   -webkit-backdrop-filter: blur(2px);
   border-radius: 5px;
   border: 1px solid rgba(255, 255, 255, 0.18);
   @media (max-width: 400px) {
      width: 92%;
      height: fit-content;
   }
`;
export const H3 = styled.h3`
   font-size: 1.6rem;
   font-weight: 500;
   font-family: "Courier New", Courier, monospace;
   margin: 5px 0 2px 0;
`;
export const H4 = styled.h4`
   font-size: 1.4rem;
   font-weight: 300;
   font-family: "Courier New", Courier, monospace;
   margin: 5px 0 2px 0;
   @media screen and (max-width: 768px) {
      font-size: 1.2rem;
   }
`;
export const Hr = styled.hr`
   width: 90%;
   border-top: 0.5px solid #ffffff;
   border-bottom: 0;
`;
export const Para = styled.p`
   height: fit-content;
   text-align: start;
   font-size: 1.1rem;
   @media screen and (max-width: 768px) {
      font-size: 1rem;
   }
`;
export const FishDiv = styled.div`
   width: 90%;
   height: 30px;
   margin-top: 15px;
   display: flex;
   justify-content: flex-start;
   font-weight: 100;
`;
export const LocationName = styled.div`
   width: 90%;
   height: fit-content;
   margin: 15px 0 15px 0;
   display: flex;
   justify-content: flex-start;
   font-weight: 100;
`;
export const BtnsBox = styled.div`
   @media screen and (max-width: 768px) {
      display: flex;
      flex-direction: column;
   }
`;
export const Btn = styled.button`
   width: 100px;
   height: 30px;
   font-size: 1rem;
   color: white;
   cursor: pointer;
   background: rgba(255, 255, 255, 0.05);
   box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
   backdrop-filter: blur(0px);
   -webkit-backdrop-filter: blur(0);
   border-radius: 3px;
   border: 1px solid rgba(255, 255, 255, 0.18);
   margin: 5px;
   &:hover {
      transition: 0.1s ease-in-out;
      transform: scale(1.05);
   }
`;
