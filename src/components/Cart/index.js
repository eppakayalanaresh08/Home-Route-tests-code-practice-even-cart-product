import Cookies from 'js-cookie'

import {Redirect} from 'react-router-dom'

import Header from '../Header'

import './index.css'

const Cart = () => {
  const jwtToke = Cookies.get('jwt_token')
  if (jwtToke === undefined) {
    return <Redirect to="/login" />
  }
  return (
    <>
      <Header />
      <div className="bg-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-img.png"
          alt="cart"
          className="image-cart"
        />
      </div>
    </>
  )
}

export default Cart
