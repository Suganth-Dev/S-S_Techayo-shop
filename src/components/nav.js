import React from 'react'
import { MdLocalShipping } from 'react-icons/md';
import { AiOutlineSearch } from "react-icons/ai";
import { BiLogIn } from "react-icons/bi";
import { useAuth0 } from "@auth0/auth0-react";
import { BiLogOut, BiUser} from "react-icons/bi";
import {Link} from "react-router-dom";
import './nav.css'
import logo from './image/logo.webp'


const Nav = ({search, setSearch, searchProduct}) => {
  const { loginWithRedirect, logout, user, isAuthenticated  } = useAuth0();

  return (
    <>
    <div className='header'>
        <div className='top_header'>
          <div className='icon'>
              <MdLocalShipping />
          </div>
            <div className='info'>
                <p>Free Shipping when whopping upto $1000</p>
            </div>

        </div>
        <div className='mid_header'>
            <div className='logo'>
              <img src={logo} alt='logo'></img>

            </div>
            <div className='search_box'>
             <input type='text' value={search} placeholder='search' onChange={(e) => setSearch(e.target.value)}></input>
            <button onClick={searchProduct}><AiOutlineSearch /></button>
            </div>
            {
              isAuthenticated ?
              // logout button
              <div className='user'>
                  <div className='icon'>
                      <BiLogOut />
                  </div>
                    <div className='btn'>
                        <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
                          Logout
                        </button>
                    </div>
                  </div>
              :
          // login button
                  <div className='user'>
                        <div className='icon'>
                            <BiLogIn />
                        </div>
                  <div className='btn'>
                      <button onClick={() => loginWithRedirect()}>
                        Login
                      </button>
                  </div>
            </div>
            }
            </div>
            <div className='last_header'>
                <div className='user_profile'>
                   {
                    // user profile will show here
                    isAuthenticated ?
                    <>
                    <div className='icon'>
                      <BiUser />
                    </div>
                    <div className='info'>
                        <h2>{user.name}</h2>
                        <p>{user.email}</p>
                    </div>
                   
                    </>
                    :
                    <>
                     <div className='icon'>
                      <BiUser />
                    </div>
                    <div className='info'>
                      <p>Please Login</p>
                    </div>
                    </>

                   }
                </div>
                  <div className='nav'>
                    <ul>
                      <li><Link to='/' className='link'>Home</Link></li>
                      <li><Link to='/shop' className='link'>Shop</Link></li>
                      <li><Link to='/cart' className='link'>Cart</Link></li>
                      <li><Link to='/about' className='link'>About</Link></li>
                      <li><Link to='/contact' className='link'>Contact</Link></li>
                    </ul>
                  </div>
                  <div className='offer'>
                    <p>flat 10% over all iphone</p>
                  </div>
            </div>
    </div>
        
    </>
  )
}

export default Nav