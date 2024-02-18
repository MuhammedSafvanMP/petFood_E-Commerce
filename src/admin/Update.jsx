import React, {useContext, useState} from 'react'
import {  useNavigate, useParams } from 'react-router-dom'
import { globalContext } from '../context/GlobalContext';

export default function Update() {

  const [price, setPrice] = useState('')
  const [title, setTitle] = useState('')
  const [category, setCategory] = useState('')
  const [image, setImagae] = useState('')

  const [ handleAdd, handleLike, filteredData, setFilteredData, user, setUser, search, setSearch, handleSignup,show,setShow,products, setProducts] = useContext(globalContext)
  const {id} =  useParams();
  const Navigate = useNavigate();

  const result = products.find((data) => data.id == id);
console.log(result.image, "hisoieoiioe");
  
  const handleUpdate = (e) => {
    e.preventDefault();
    const updateProducts = products.map((pro) => {
      const upImage = image || pro.image;
      const upTitle = title || pro.title;
      const upCategory = category || pro.category;
      const upPrice = price || pro.price;
      if(pro.id == id) {
        return {
          ...products,
          id: pro.id,
          image: upImage,
          title: upTitle,
          price: upPrice,
          category: upCategory,
        }
      }else
      return pro;
    });
    setProducts(updateProducts)
    Navigate('/products')
  }

  return (

    <form className='container' onSubmit={(e) => handleUpdate(e)}>
    <div className="mb-3">
      <input type="text" className="form-control" onChange={(e) => setTitle(e.target.value)} placeholder={result.title}  />
    </div>

    <div className="mb-3">
      <input type="number" className="form-control" onChange={(e) => setPrice(e.target.value)} placeholder={result.price}  />
    </div>

    <div className="mb-3">
      <input type="text" className="form-control" onChange={(e) => setCategory(e.target.value)} placeholder={result.category} />
    </div>

    <div className="mb-3 d-flex ">
    <img src= {`.${result.image}`}  width={"140px"} />  
      <input type="text" className="form-control" onChange={(e) => setImagae(e.target.value)}  placeholder="Image url"  />
    </div>

    <button type="submit" className="btn btn-primary">ADD</button>
  </form>

  )
}
