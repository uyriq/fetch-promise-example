/* require('react-dom');
window.React2 = require('react');
console.log(window.React1 === window.React2);
*/

import React, { useEffect, useState, useContext } from 'react';
import { dataContext } from '../context/context-data';
import GetIngredients from '../utils/api';
import "./../../styles.css"

export default function App() {

  const [isLoading, setIsLoading] = useState(
    true, function setIsLoading(value) {
    return (value)
  });
  const [isError, setError] = useState(
    null, function setError(error) {
    return (error)
  });
 const { data, setData } = useContext(dataContext)


  useEffect(() => {
    let res= ( GetIngredients( setIsLoading, setError))
    setData(res)
    return () => {

      setIsLoading(false)
    };
  }, []);

  if (isLoading) return "Loading...";
  if (isError) return isError

  return (!isLoading && !isError &&
    <div className="App">
      <dataContext.Provider value={{ data, setData }}>
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </dataContext.Provider>
    </div>
  );
}
