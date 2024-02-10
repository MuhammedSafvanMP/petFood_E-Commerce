import React, { createContext, useState, useEffect } from 'react';
import { foodData } from '../data/data';

export const globalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [likeItem, setLikeItem] = useState([]);
  const [addCart, setAddCart] = useState([]);


  const handleAdd = (id) => {
    const cart = foodData.find((data) => data.id == id);
    if (!addCart.some((item) => item.id === cart.id)) {
      setAddCart([...addCart, cart]);
    }
}


const handleLike = (id) => {
  const result = foodData.find((data) => data.id == id);
  if (!likeItem.some((item) => item.id === result.id)) {
    setLikeItem([...likeItem, result]);
  }
}

useEffect(() => {   
}, [handleLike, handleAdd]);
 

  return (
    <globalContext.Provider value={[likeItem, setLikeItem, addCart, setAddCart,handleAdd, handleLike]}>
      {children}
    </globalContext.Provider>
  );
};
