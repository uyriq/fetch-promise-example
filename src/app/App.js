import { useEffect, useState } from 'react';
import '.././styles.css';

import { INGREDIENTS_URL, HEADERS } from '../components/utils/constants';

export const getIngredients = async () => {
  let data = [];
  let isLoading = true;
  let isError = false;
  try {
    new Promise(() => {
      fetch(INGREDIENTS_URL, { headers: HEADERS }).then((response) => {
        if (response.ok) {
          isLoading = false;
          isError = false;
          return {
            data: response.json(),
            isLoading: isLoading,
            isError: isError
          };
        }
        throw Object.assign(new Error(`Ошибка ${response.statusText}`), {
          code: `${response.status}`
        });
      });
    });
  } catch (error) {
    isError = true;
    isLoading = false;
    console.log('fetch error!');
  } finally {
    return { data: data, isLoading: isLoading, isError: isError };
  }
};

export default function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const getData = async () => {
      // setIsLoading(true);
      const { data, isLoading, isError } = getIngredients();
      // setIsLoading(isloading);
      // setIsError(iserror);
      console.log(`${JSON.stringify(data)} - ${isLoading} -- ${isError}`);
    };

    getData();
    return () => {
      //
    };
  }, []);

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
