import styled from "styled-components";
export const NewCatchContainer = styled.div`
   height: 100%;
   position: relative;
   background-image: url("/images/back2.jpg");
   display: flex;
   justify-content: center;
   color: white;
`;
export const Form = styled.form`
   font-family: "Montserrat", sans-serif;
   width: calc(100% - 20px);
   height: 100%;
   display: flex;
   flex-direction: column;
   align-items: center;
   z-index: 2;
`;
export const InputDiv = styled.div`
   width: 90%;
   font-weight: 400;
   display: flex;
   flex-direction: column;
   & > small {
      margin-bottom: 3px;
   }
`;
export const InputDiv2 = styled.div`
   width: 25%;
   margin: 1rem;
   display: flex;
   flex-direction: column;
   & > small {
      margin-bottom: 3px;
   }
   @media screen and (max-width: 768px) {
      width: 90%;
   }
`;
export const Label = styled.label`
   margin: 1rem 0;
   font-size: 1.2rem;
`;
export const MapBox = styled.div`
   margin-top: 1rem;
   width: 90%;
   height: 50vh;
`;
export const Img = styled.img`
   width: 25px;
   height: 25px;
`;
export const InputRowDiv = styled.div`
   width: 100%;
   display: flex;
   justify-content: center;
   @media screen and (max-width: 768px) {
      flex-direction: column;
      align-items: center;
   }
`;
export const Input = styled.input`
   font-family: "Montserrat", sans-serif;
   line-height: 28px;
   border: 2px solid transparent;
   border-bottom-color: #777;
   padding: 0.2rem 0;
   outline: none;
   background-color: transparent;
   color: #ffffff;
   transition: 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
   &:focus,
   :hover {
      outline: none;
      padding: 0.2rem 1rem;
      border-radius: 1rem;
      border-color: #33333344;
   }
`;
export const Overlay2 = styled.div`
   position: absolute;
   top: 0;
   right: 0;
   left: 0;
   bottom: 0;
   background-color: rgba(0, 0, 0, 0.4);
   z-index: 0;
`;
export const H2 = styled.h2`
   margin: 10px 0 0 0;
   @media screen and (max-width: 768px) {
      font-size: 1rem;
   }
`;
export const Btn = styled.button`
   width: 100px;
   height: 30px;
   color: white;
   font-size: 1rem;
   font-family: "Montserrat", sans-serif;
   cursor: pointer;
   background: rgba(255, 255, 255, 0.05);
   box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
   backdrop-filter: blur(0px);
   -webkit-backdrop-filter: blur(0);
   border-radius: 3px;
   border: 1px solid rgba(255, 255, 255, 0.18);
   margin: 20px 10px 10px 10px;
   &:hover {
      transition: 0.1s ease-in-out;
      transform: scale(1.03);
   }
`;
export const BtnBox = styled.div`
   width: fit-content;
   height: fit-content;
`;
export const EditCatchContainer = styled.div`
   height: 100%;
   position: relative;
   background: url("/images/EditCatchBackground.jpg") center center / cover
      no-repeat;
   display: flex;
   justify-content: center;
   color: white;
   font-family: Arial, Helvetica, sans-serif;
`;
