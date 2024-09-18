import React, { useState } from 'react'
import Nav from './components/nav'
import {BrowserRouter} from 'react-router-dom'
import Rout from './components/rout'
import Footer from './components/footer'
import Homeproduct from './components/home_product'


const App = () => {
//Add to Cart
const [cart, setCart] = useState([])
// Shop Page product
const [shop, setShop] = useState(Homeproduct)
// Shop Search filter
  const [search, setSearch] = useState('')
// Shop category filter
const Filter =(x) =>
{
  const catefilter = Homeproduct.filter((product) =>{
    return product.cat === x
  })
  setShop(catefilter)
}
const allcatefilter = ()=>
{
  setShop(Homeproduct)
}
// Shop Search filter
const searchlength = (search || []).length === 0
  const searchProduct = () =>
  {
  if(searchlength)
  {
    alert("Please Search Something !")
    setShop(Homeproduct)
  }
  else
  {
    
      const searchfilter = Homeproduct.filter((x) => 
      {
        return x.cat === search
      })
      setShop(searchfilter)
  }
}

// Add to cart
const addtocart = (product)  =>
{
  const exit = cart.find((x)=>
  {
    return x.id === product.id
  })
  if(exit){
    alert("This product is already aded in cart")
  }
  else
  {
    setCart([...cart, {...product, qty:1}])
    alert("Added to Cart")
  }
}
console.log(cart)
  return (
    <>
    <BrowserRouter>
    <Nav search={search} setSearch={setSearch} searchProduct={searchProduct}/>
    <Rout setCart={setCart}  shop={shop} cart={cart} Filter={Filter} allcatefilter={allcatefilter} addtocart={addtocart}/>
    <Footer />
    </BrowserRouter>
    </>
    
  )
}

export default App