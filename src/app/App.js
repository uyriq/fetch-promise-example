import { useEffect, useState } from 'react';
import '.././styles.css';
import GetIngredients from '../components/utils/api';


export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setError] = useState(null);
  const [data, setData] = useState(null)

  useEffect(() => {
    GetIngredients()
    return () => {
      setIsLoading(false)
    };
  }, []);

  if (isLoading) return "Loading...";
  if (isError) return isError

  return ( !isLoading && !isError && <>
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
    </>
  );
}
