import React from 'react'
import '../css/Checkout.css';
import Subtotal from './Subtotal';
import CheckoutProduct from './CheckoutProduct';
import useStateValue from '../StateProvider';
function Checkout() {
  const[{basket}] = useStateValue();
  return (
    <div className='checkout'>
        <div class="checkout__left">
            <img class="checkout__ad" src="https://www.wordstream.com/wp-content/uploads/2021/07/banner-ads-examples-aws.jpg" alt=""/>
            <div>
                <h2 className='checkout__title'>Your Shopping Basket</h2>
            </div>            
            {
              basket.map((item)=>(
                <div className='home__row'>
                  <CheckoutProduct 
                    id={item.id}
                    title={item.title}
                    description={item.description}
                    price={item.price}
                    image={item.image}
                    rating={item.rating}            
                  />
                </div>
              ))
            }
        </div>        
        <div class="checkout__right">
            <Subtotal/>            
        </div>        
    </div>
  )
}

export default Checkout
