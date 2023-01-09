import {useEffect, useState} from "react";
import axios from "axios";
const baseUrl = "https://bashapi.onrender.com/api/doc/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2I4NDdlN2M2NWExMGM4NDc5OWQ5ZTEiLCJpYXQiOjE2NzMyNjkxNTl9.1GsJwbjXly3d7rrWpRf0iHzLpKPcNXozdsW0wbNLbiQ/spot";
const useFetch = () => {
   const [state, setState] = useState(null);
   const [isLoading, setIsLoading] = useState(false);
   const [error, setError] = useState(null);

   const readData = async () => {
      setIsLoading(true);
      try {
         const {data} = await axios.get(baseUrl);
         setState(data);
      } catch (err) {
         console.log(err);
         setError(err);
      }
      setIsLoading(false);
   };
   // useEffect(() => {
   //    readData();
   // }, []);
   return [readData, state, isLoading, error];
};

export {useFetch};
