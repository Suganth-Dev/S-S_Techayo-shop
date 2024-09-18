import React, { useState } from 'react'
import './shop.css' 
import { FaHeart, FaEye } from "react-icons/fa";
import { MdOutlineClose } from "react-icons/md";


const Shop = ({shop, Filter, allcatefilter, addtocart}) => {
 // Toggle Product Detail
  const [showDetail, setShowDetail] = useState(false)
 // Detail page data 
  const [detail, setDetail] = useState([])
 // Showing detail Box
  const detailpage = (product) =>
  {
    const detaildata = ([{product}])
    const productdetail = detaildata[0]['product']
    //console.log(productdetail)
    setDetail(productdetail)
    setShowDetail(true)
  }
  
  const closedetail = () =>
  {
    setShowDetail(false)
  }
  return (
    <>
    {
        showDetail ?
        <>
              <div className='product_detail'>
                    <button className='close_btn' onClick={closedetail} ><MdOutlineClose /></button>
                    <div className='container'>
                      <div className='img_box'>
                        <img src={detail.image} alt='' ></img>
                      </div>
                      <div className='info'>
                        <h4># {detail.cat}</h4>
                        <h2>{detail.Name}</h2>
                        <p>"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."</p>
                        <h3>$ {detail.price}</h3>
                        <button onClick={() => addtocart (detail)}>Add to cart</button>
                      </div>
                    </div>
              </div>
        </>
        : null
    }
  
    <div className='shop'>
      <h2># shop</h2>
      <p>Home . shop</p>
      <div className='container'>
        <div className='left_box'>
            <div className='category'>
              <div className='header'>
                <h3>All Categories</h3>
                </div>
                  <div className='box'>
                    <ul>
                      <li onClick={()=> allcatefilter ()}># All</li>
                      <li onClick={() => Filter ("tv")}># tv</li>
                      <li onClick={() => Filter ("laptop")}># laptop</li>
                      <li onClick={() => Filter ("watch")}># watch</li>
                      <li onClick={() => Filter ("speaker")}># speaker</li>
                      <li onClick={() => Filter ("electronics")}># electronics</li>
                      <li onClick={() => Filter ("headphone")}># headphone</li>
                      <li onClick={() => Filter ("phone")}># phone</li>
                    </ul>
                  </div>
              </div>
            <div className='banner'>
              <div className='img_box'>
                <img src='image/shop_left.avif' alt='banner'></img>
              </div>
            </div>
        </div>
        <div className='right_box'>
          <div className='banner'>
            <div className='img_box'>
              <img src='image/shop_top.webp' alt='right banner'></img>
            </div>
          </div>
          <div className='product_box'>
            <h2>Shop Product</h2>
            <div className='product_container'>
              {
                shop.map((curElm)=> 
                {
                  return(
                    <>
                      <div className='box'>
                        <div className='img_box'>
                          <img src={curElm.image} alt='rightimage'></img>
                          <div className='icon'>
                              <li><FaHeart /></li>
                              <li onClick={()=> detailpage(curElm)} ><FaEye /></li>
                          </div>
                        </div>
                          <div className='detail'>
                              <h3>{curElm.Name}</h3>
                              <p>$ {curElm.price}</p>
                              <button onClick={() => addtocart (curElm)}>Add To Cart</button>
                          </div>
                      </div>
                    </>
                  )
                })
              }
           
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Shop