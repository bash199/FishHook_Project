import {useEffect, useState} from "react";
import axios from "axios";
const baseUrl =  'https://6377843f5c477765121fffdd.mockapi.io/spot'
const useFetch = () => {
   const [state, setState] = useState(null);
   const [isLoading, setIsLoading] = useState(false);
   const [error, setError] = useState(null);
   useEffect(() => {
      const get = async () => {
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
      get()
   }, []);
   return [state, isLoading, error];
};
export {useFetch};