import React from 'react';
import '../css/Subtotal.css';
import CurrencyFormat from 'react-currency-format';
import useStateValue from '../StateProvider';
//import getBasketTotalValue from '../reducer';
import history from '../History';
function Subtotal() {
  const[{basket,basketTotal}] = useStateValue();  
  
  let totalPrice = 0;
  basket.map((item)=>(totalPrice=Number(Number(totalPrice) + Number(item.price))))
  return (
    <div className='subtotal'>
      <CurrencyFormat
        renderText={(value) => (
            <>
                <p>
                    Subtotal ({basket?.length} items):
                    <strong>
                      {                        
                        value
                      }
                    </strong>
                </p>
                <small className='subtotal__gift'>
                    <input type="checkbox"/>This order contains a gift
                </small>
            </>
        )}
        decimalScale={2}
        value={basketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />          
      <button onClick={(e)=>{history.push('payment');}}>Proceed to Checkout</button>
    </div>
  )
} 
export default Subtotal