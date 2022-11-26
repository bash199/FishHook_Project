import {useState} from "react";
import axios from "axios";
const baseUrl = "https://6377843f5c477765121fffdd.mockapi.io/spot";
const useCRUD = () => {
   const [state, setState] = useState(null);
   const [error, setError] = useState(null);
   const [isLoading, setIsLoading] = useState(false);
   const create = async (obj) => {
      setIsLoading(true);
      try {
         console.log(obj);
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
   return {create, readById, update, deleteCatch, state, error, isLoading};
};
export {useCRUD};
