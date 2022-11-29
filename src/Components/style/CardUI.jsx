import styled from "styled-components";

export const CardDiv = styled.div`
   width: 400px;
   height: 150px;
   margin: 10px;
   border: solid black 2px;
   display: flex;
   justify-content: space-between;
   border-radius: 10px;
   border: 0;
   background: rgba(255, 255, 255, 0.25);
   box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
   backdrop-filter: blur(10px);
   -webkit-backdrop-filter: blur(10px);
   border-radius: 10px;
   border: 1px solid rgba(255, 255, 255, 0.18);
   @media (max-width: 768px) {
      width: 300px;
   }
   @media (max-width: 300px) {
      width: 260px;
   }
`;
export const ImageDiv = styled.div`
   width: 40%;
   height: 100%;
`;
export const Image = styled.img`
   width: 100%;
   height: 100%;
   border-radius: 10px 0 0 10px;
`;
export const AboutDiv = styled.div`
   width: 60%;
   height: 100%;
   padding: 5px;
   text-align: center;
   display: flex;
   flex-direction: column;
   align-items: center;
`;
export const H4 = styled.h4`
   font-size: 1.2rem;
   font-weight: 500;
   font-family: "Courier New", Courier, monospace;
   margin: 5px 0 2px 0;
   &:hover {
      text-shadow: rgba(62, 66, 66, 0.8) 0px 0px 2px;
   }
`;
export const Hr = styled.hr`
   width: 90%;
   border-top: 0.5px solid #333;
   border-bottom: 0;
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
   height: 30px;
   margin-top: 0px;
   display: flex;
   justify-content: flex-start;
   font-weight: 100;
`;