import React, { createContext, useState, useEffect } from 'react';
import { foodData } from '../data/data';
import { useNavigate } from 'react-router-dom';

export const globalContext = createContext();


export const GlobalProvider = ({ children }) => {
  const Navigate = useNavigate();

 
  const [search, setSearch] = useState("");
  const [filteredData, setFilteredData] = useState(foodData);
  const [products, setProducts] = useState(foodData)
  const [show, setShow] = useState(null)
  const [user, setUser] = useState([]);
  const [dashbord, setDashBord] = useState(true);



  const handleLike = (id) => {
    const data = products.find((data) => data.id  === id)
    let alreadyExists = false;
  
    for (let item of show.likeItems) {
      if (item.id === data.id) {
        alreadyExists = true;
        break;
      }
    }
  
    if (!alreadyExists) {
      show.likeItems.push({ ...data, amount: 1 });
    }
  
  }
  
  const handleAdd = (id) => {
    const data = products.find((item) => item.id === id);
    let alreadyExists = false;
  
    for (let item of show.cartItems) {
      if (item.id === data.id) {
        alreadyExists = true;
        break;
      }
    }
  
    if (!alreadyExists) {
      show.cartItems.push({ ...data, amount: 1 });
    }
  
  };
  
  
  
  
  

  const handleSignup = (e) => {
    e.preventDefault();

    if (!/^[a-zA-Z]+([ ]?[a-zA-Z]+)*$/.test(e.target.name.value)) {
      alert('Please type a correct full name');
      return;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e.target.email.value)) {
      alert('Your email is wrong');
      return;
    } else if (e.target.password.value.length < 8) {
      alert('Password must be at least 8 characters long');
      return;
    }

    let name = e.target.name.value;
    let email = e.target.email.value;
    let password = e.target.password.value;

    const userName = { name, email,  password, likeItems: [], cartItems: []}

    setUser([...user, userName ])

    const existingUser = user.email === email;

    if (existingUser) {
      alert('User already exists');
      Navigate('/login');
    }

    Navigate('/login');
  };




  return (
    <globalContext.Provider value={[ handleAdd, handleLike, filteredData, setFilteredData, user, setUser, search, setSearch, handleSignup,show,setShow,products, setProducts,dashbord, setDashBord]}>
      {children}
    </globalContext.Provider>
  );
};
