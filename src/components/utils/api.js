import React, { useState, useContext} from 'react';
import { dataContext } from '../context/context-data';
import { INGREDIENTS_URL, HEADERS } from './constants';

export const GetIngredients = async ( setIsLoading, setError) => {
let data
    try {
      const response = await fetch(INGREDIENTS_URL, { headers: HEADERS });
      return  data = await response.json();
    } catch (err) {
      const errorMessage = "Error: " + err.message;
      setError(errorMessage);
      console.log(errorMessage);
    } finally {
      setIsLoading(false);
    }
    return data
  };

export default GetIngredients;