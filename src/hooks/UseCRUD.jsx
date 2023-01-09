import {useState} from "react";
import axios from "axios";
const baseUrl =
   "https://bashapi.onrender.com/api/doc/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2I4NDdlN2M2NWExMGM4NDc5OWQ5ZTEiLCJpYXQiOjE2NzMyNjkxNTl9.1GsJwbjXly3d7rrWpRf0iHzLpKPcNXozdsW0wbNLbiQ/spot";
const useCRUD = () => {
   const [state, setState] = useState(null);
   const [error, setError] = useState(null);
   const [isLoading, setIsLoading] = useState(false);
   const create = async (obj) => {
      setIsLoading(true);
      try {
         const {data} = await axios.post(baseUrl, obj);
         setState(data);
      } catch (err) {
         setError(err);
      }
      setIsLoading(false);
   };
   const update = async (obj) => {
      setIsLoading(true);
      try {
         const {data} = await axios.put(`${baseUrl}/${obj.id}`, obj);
         setState(data);
      } catch (err) {
         setError(err);
      }
      setIsLoading(false);
   };
   const deleteCatch = async (id) => {
      setIsLoading(true);
      try {
         const {data} = await axios.delete(`${baseUrl}/${id}`);
         setState(data);
      } catch (err) {
         setError(err);
      }
      setIsLoading(false);
   };
   const readById = async (id) => {
      setIsLoading(true);
      try {
         const {data} = await axios.get(`${baseUrl}/${id}`);
         setState(data);
      } catch (err) {
         setError(err);
      }
      setIsLoading(false);
   };
   return {
      create,
      readById,
      update,
      deleteCatch,
      setState,
      state,
      error,
      isLoading,
   };
};
export {useCRUD};
