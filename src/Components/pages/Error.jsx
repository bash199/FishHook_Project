import React from "react";
import {useNavigate} from "react-router-dom";
import {Overlay} from "../style/LandingPageUI";
import {
   ErrorBox,
   Box,
   Para,
   Btn,
   WelcomeTilte,
   Div2,
   Makaf,
   WelcomeTilte2,
} from "../style/ErrorUI";

const Error = () => {
   const navigate = useNavigate();
   const handleClick = () => {
      navigate("/");
   };
   return (
      <ErrorBox>
         <Overlay />
         <Box>
            <Div2>
               <WelcomeTilte>404</WelcomeTilte>
               <Makaf>
                  <WelcomeTilte2>_</WelcomeTilte2>
               </Makaf>
            </Div2>
            <Para>Page not Found</Para>
            <Btn onClick={handleClick}> Head Home</Btn>
         </Box>
      </ErrorBox>
   );
};

export default Error;
