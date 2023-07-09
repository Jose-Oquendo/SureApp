import React from 'react';

function useLocalStorage(itemName, initialValue){
    const [item, setItem] = React.useState(initialValue);
    const [load, setLoad] = React.useState(true);
    const [error, setError] = React.useState(false);

    React.useEffect(() => {
      setTimeout(() => {
        try{
          const localItem = localStorage.getItem(itemName);
          let parsedItem;
          if(!localItem){
            localStorage.setItem(itemName, JSON.stringify(initialValue));
            parsedItem = initialValue;
          } else {
            parsedItem = JSON.parse(localItem);
            setItem(parsedItem)
          }
          setLoad(false);
          setError(false)
        } catch(error) {
          setLoad(false);
          setError(true)
        }
      }, 2000);
    }, []);
  
    const saveItem = (newItem) => {
      setItem(newItem);
      localStorage.setItem(itemName, JSON.stringify(newItem));
    }
  
    return {
      item, saveItem, load, error
    };
  }

export { useLocalStorage };
