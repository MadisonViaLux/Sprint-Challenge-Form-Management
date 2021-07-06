import { useState } from "react";

export const useLocalStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    const item = localStorage.getItem(key);
    if(item){
        try{
            return JSON.parse(item)
        }catch{
            return item
        }
    }
    return initialValue;
  });
  const setValue = value => {
    localStorage.setItem(key, value);
    setStoredValue(value);
    
  };
  return [storedValue, setValue];
};

