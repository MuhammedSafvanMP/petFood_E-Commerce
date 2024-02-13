import React, { useContext, useState, useEffect } from 'react';
import { globalContext } from '../context/GlobalContext';
import { useNavigate } from 'react-router-dom';

export default function SignUp() {
  const Navigate = useNavigate();
  const [
    likeItem,
    setLikeItem,
    addCart,
    setAddCart,
    handleAdd,
    handleLike,
    filteredData,
    setFilteredData,
    formData,
    setFormData,
    loginData,
    setLoginData,
    user,
    setUser,
  ] = useContext(globalContext);

 

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem('user')));
 }, []);

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

  const newUser = {
    email: e.target.email.value,
    password: e.target.password.value,
    userVisit: { cartItems: addCart, likeItems: likeItem },
  };

  if (!localStorage.getItem('user')) {
    localStorage.setItem('user', JSON.stringify([newUser]));
  } else {
    const existingUsers = JSON.parse(localStorage.getItem('user'));

    // Check if the email already exists in the stored users
    const existingUser = existingUsers.find((user) => user.email === newUser.email);

    if (existingUser) {
      alert('User already exists');
      Navigate('/login');
    } else {
      // Add the new user to the existing users
      existingUsers.push(newUser);
      localStorage.setItem('user', JSON.stringify(existingUsers));
      Navigate('/');
    }
  }
};

console.log(user);


  
  // useEffect(() => {
  //   // Log the updated user state after it has been updated
  //   console.log('User signed up:', user);
  //   setRegisteredUsers(JSON.parse(localStorage.getItem('users')) || []);

  //   // Log the updated userVisit state after it has been updated
  //   console.log('User visits:', userVisit);
  // }, [user, userVisit]);

  return (
    <section className="login-tabs padding-large">
      <div className="container my-5 py-5">
        <div className="row">
          <div className="col-lg-8 offset-lg-2 mt-5">
            <p className="mb-0">Sign-Up With Email</p>
            <hr className="my-1" />

            <form id="form1" className="form-group flex-wrap" onSubmit={(e) => handleSignup(e)}>
              <div className="form-input col-lg-12 my-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Your full name"
                  className="form-control mb-3 p-4"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your email address"
                  className="form-control mb-3 p-4"
                />
                <input
                  type="password"
                  name="password"
                  placeholder="Set your password"
                  className="form-control mb-3 p-4"
                />

                <div className="d-grid my-3">
                  <button type="submit" className="btn btn-dark btn-lg rounded-1">
                    Sign Up
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
