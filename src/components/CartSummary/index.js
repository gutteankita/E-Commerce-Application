// Write your code here
import {Component} from 'react'
import CartContext from '../../context/CartContext'

import './index.css'

class CartSummary extends Component {
  render() {
    return (
      <CartContext.Consumer>
        {value => {
          const {cartList} = value

          let totalPrice = 0
          cartList.forEach(item => {
            const {quantity, price} = item
            const itemTotal = quantity * price
            totalPrice += itemTotal
          })

          const cartItemCount = cartList.length
          return (
            <div className="cart-summary-container">
              <div className="total-count-cart-item">
                <h1 className="cart-total">
                  Order Total:{' '}
                  <span className="cart-items-total-price">
                    {' '}
                    Rs {totalPrice}/-
                  </span>
                </h1>
                <p className="cart-item-count">{cartItemCount} Items in Cart</p>
              </div>
              <button className="checkout-btn">Checkout</button>
            </div>
          )
        }}
      </CartContext.Consumer>
    )
  }
}
export default CartSummary
