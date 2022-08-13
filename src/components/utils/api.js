import React, { useState } from 'react';

import { INGREDIENTS_URL, HEADERS } from './constants';
 const GetIngredients = async () => {
    try {
      const response = await fetch(INGREDIENTS_URL, { headers: HEADERS });
      const data = await response.json();
      setData(data);
    } catch (err) {
      const errorMessage = "Error: " + err.message;
      setError(errorMessage);
      console.log(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

export default GetIngredients;