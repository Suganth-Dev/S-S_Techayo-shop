import React, { useEffect, useState } from 'react'
import './home.css'
import { Link } from 'react-router-dom'
import Homeproduct from './home_product'
import { FaEye, FaHeart, FaLinkedin, FaGithubSquare, FaCartPlus   } from "react-icons/fa";
import myphoto from './image/suga_photo.png'
import banner1 from './image/Banner-1.avif'
import banner2 from './image/Multi-banner-2.avif'
import banner3 from './image/Multi-Banner-3.webp'
import banner4 from './image/Multi-banner-4.avif'
import banner5 from './image/Multi-Banner-5.webp'

const Home = ({addtocart}) => {
    //Product category
    const [newProduct, setNewProduct] = useState([])
    const [featuredProduct, setFeaturedProduct] = useState([])
    const [topProduct, setTopProduct] = useState([])

    // Trending product
    const [trendingProduct, setTrendingProduct] = useState(Homeproduct)
    //filter of trending products
    const filtercate = (x) =>
    {
        const filterproduct = Homeproduct.filter((curElm)=>
        {
            return curElm.type === x
        }
        )
        setTrendingProduct(filterproduct)
    }
    // all trending products
    const allTrendingProduct = () =>
    {
        setTrendingProduct(Homeproduct)
    }

    //product type
    useEffect(()=>
    {
      productcategory()  
    })
    const productcategory = () =>
    {
        // New product
        const newcategory = Homeproduct.filter((x) =>
        {
            return x.type === 'new'
        })
        setNewProduct(newcategory)

        // featured Product
        const featuredcategory = Homeproduct.filter((x)=>
        {
          return  x.type === 'featured'
        })
        setFeaturedProduct(featuredcategory)

        // Top Product
        const topcategory = Homeproduct.filter((x) =>
        {
            return x.type ==='top'
        })
        setTopProduct(topcategory)
    }


    return (
    <>
        <div className='home'>
            <div className='top_banner'>
                <div className='contant'>
                    <h3>silver aluminum</h3>
                    <h2>Apple Watch</h2>
                    <p>30% off at your first odder</p>
                    <Link to='/shop' className='link'  >Shop Now</Link>
                </div>
            </div>
            <div className='trending'>
                <div className='container'>
                    <div className='left_box'>
                        <div className='header'>
                            <div className='heading'>
                                <h2 onClick={() => allTrendingProduct()}>trending product</h2>
                            </div>
                            <div className='cate'>
                                <h3 onClick={() => filtercate ('new')}>New</h3>
                                <h3 onClick={() => filtercate ('featured')}>Feature</h3>
                                <h3 onClick={() => filtercate ('top')}>top selling</h3>
                            </div>
                        </div>
                        <div className='products'>
                            <div className='container'>
                                    {
                                        trendingProduct.map((curElm) =>
                                        {
                                            return(
                                                <>
                                                    <div className='box'>
                                                        <div className='img_box'>
                                                            <img src={curElm.image} alt='' ></img>
                                                            <div className='icon'>
                                                                <div className='icon_box'>
                                                                    <FaEye />
                                                                </div>
                                                                <div className='icon_box'>
                                                                    <FaHeart />
                                                                </div>    
                                                            </div>     
                                                        </div>
                                                        <div className='info'>
                                                            <h3>{curElm.Name}</h3>
                                                            <p>${curElm.price}</p>
                                                            <button className='btn' onClick={() => addtocart (curElm)} >Add to cart</button>
                                                        </div>
                                                        
                                                    </div>
                                                </>
                                            )
                                        })
                                    }
                            </div>
                            <button>Show More</button>
                        </div>
                    </div>
                    <div className='right_box'>
                        <div className='right_container'>
                            <div className='testimonial'>
                                <div className='head'>
                                    <h3>our testimonial</h3>
                                </div>
                                <div className='detail'>
                                    <div className='img_box'>
                                        <img src={myphoto} alt='testmonial'></img>
                                    </div>
                                    <div className='info'>
                                        <h3>Sugan</h3>
                                        <h4>Web Designer</h4>
                                        <p>I'm a front-end developer using react.js.</p>
                                    </div>
                                </div>
                            </div>
                            <div className='newsletter'>
                                <div className='head'>
                                        <h3>newsletter</h3>
                                    </div>
                                    <div className='form'>
                                        <p>join our mailling list</p>
                                        <input type='email' placeholder='E-mail' autoComplete='off'></input>
                                        <button>subscribe</button>
                                         <div className='icon_box'>   
                                            <div className='icon'>
                                                <FaLinkedin />
                                            </div>
                                            <div className='icon'>
                                                <FaGithubSquare  />
                                            </div>
                                        </div>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='banners'>
                <div className='container'>
                    <div className='left_box'>
                        <div className='box'>
                            <img src={banner1} alt='banner1'></img>
                        </div>
                        <div className='box'>
                            <img src={banner2} alt='banner2'></img>
                        </div>
                     </div>
                     <div className='right_box'>
                        <div className='top'>
                            <img src={banner3} alt='banner3'></img>
                            <img src={banner4} alt='banner4'></img>
                        </div>
                        <div className='bottom'>
                            <img src={banner5} alt='banner5'></img>
                        </div>
                     </div>
                 </div>
            </div>
            <div className='product_type'>
                <div className='container'>
                        <div className='box'>
                            <div className='header'>
                                <h2>New Product</h2>
                            </div>
                            {
                                newProduct.map((curElm)=>
                                {
                                    return(
                                        <>
                                            <div className='productbox'>
                                                <div className='img-box'>
                                                    <img src={curElm.image} alt=''></img>
                                                </div>
                                                <div className='detail'>
                                                    <h3>{curElm.Name}</h3>
                                                    <p>${curElm.price}</p>
                                                    <div className='icon'>
                                                        <button><FaEye /></button>
                                                        <button><FaHeart /></button>
                                                        <button onClick={() => addtocart (curElm)}><FaCartPlus /></button>
                                                    </div>
                                                </div>
                                            </div>
                                        </>
                                    )
                                })
                            }
                        
                    </div>
                    <div className='box'>
                            <div className='header'>
                                <h2>Featured Product</h2>
                            </div>
                            {
                                featuredProduct.map((curElm)=>
                                {
                                    return(
                                        <>
                                            <div className='productbox'>
                                                <div className='img-box'>
                                                    <img src={curElm.image} alt=''></img>
                                                </div>
                                                <div className='detail'>
                                                    <h3>{curElm.Name}</h3>
                                                    <p>${curElm.price}</p>
                                                    <div className='icon'>
                                                        <button><FaEye /></button>
                                                        <button><FaHeart /></button>
                                                        <button onClick={() => addtocart (curElm)}><FaCartPlus /></button>
                                                    </div>
                                                </div>
                                            </div>
                                        </>
                                    )
                                })
                            }
                        
                    </div>
                    <div className='box'>
                            <div className='header'>
                                <h2>Top Product</h2>
                            </div>
                            {
                                topProduct.map((curElm)=>
                                {
                                    return(
                                        <>
                                            <div className='productbox'>
                                                <div className='img-box'>
                                                    <img src={curElm.image} alt=''></img>
                                                </div>
                                                <div className='detail'>
                                                    <h3>{curElm.Name}</h3>
                                                    <p>${curElm.price}</p>
                                                    <div className='icon'>
                                                        <button><FaEye /></button>
                                                        <button><FaHeart /></button>
                                                        <button onClick={() => addtocart (curElm)}><FaCartPlus /></button>
                                                    </div>
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
    </>
  )
}

export default Home