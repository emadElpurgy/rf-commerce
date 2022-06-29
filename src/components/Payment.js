import React , {useEffect, useState} from 'react'
import useStateValue from '../StateProvider';
import FlipMove from 'react-flip-move';
import CheckoutProduct from './CheckoutProduct';
import { Link } from 'react-router-dom';
import CurrencyFormat from 'react-currency-format';
import '../css/Payment.css';
import {CardElement, useStripe , useElements } from '@stripe/react-stripe-js';
import { Dialpad } from '@material-ui/icons';
import axios from '../axios';
import history from '../History';
function Payment() {
    const[{basket,user,basketTotal}, dispatch] = useStateValue();
    const stripe = useStripe();
    const elements = useElements();
    const [error,setError] = useState(null);
    const [disabled,setDisabled] = useState(null);
    const [processing,setProcessing] = useState(null);
    const [succeeded,setSucceeded] = useState(null);
    const [clientSecret,setClientSecret] = useState(null);
    
    useEffect(()=>{
        //generate stripe secret
        const getClientSecret = async ()=>{
            const response = await axios({
                method : 'post',
                //stripe expect total in sub curency
                url : '/payments/create?total=${(basketTotal(basket) * 100)}'
            });
            setClientSecret(response.data.clientSecret);
        }
        getClientSecret();
    },[basket]);

    const handelSubmit = async(event) => {
        /****** handel stripe submit  ***/
        event.prventDefault();
        setProcessing(true);
        const payload = await stripe.confirmCardPayment(clientSecret,{
            payment_method:{
                card:elements.getElement({CardElement})
            }
        }).then(({paymentIntent}) => {
                //paymentIntent is the payment confirmed
                setSucceeded(true);
                setError(null);
                setProcessing(false);            
                history.push('./orders');
            }
        )
    }
    const handelChange = event => {
        /****** handel stripe card data change *****/
        //listen for changes inside card element
        // and display any errors as the customer write card information
        setDisabled(event.empty);
        setError(event.error ? event.error.message : "");
    }

    return (
        <div className='payment'>            
            <div className='payment__container'>
                <h1>Checkout : (<Link to="/checkout">{basket?.length}</Link>)</h1>
                {/********** address  *********/}
                <div className='payment__section'>
                    <div className='payment__title'>
                        <h3>Delivery Address</h3>
                    </div>
                    <div className='payment__address'>
                        <p>{user?.email}</p>
                        <p>123 street</p>
                        <p>city country</p>
                    </div>
                </div>
                {/********** item review  *********/}
                <div className='payment__section'>
                    <div className='payment__title'>
                        <h3>Review Items and delivery</h3>
                    </div>
                    <div className='payment__items'>
                        {
                            <FlipMove>
                                {
                                    basket.map((item)=>(
                                    <div className='home__row' key={item.id}>
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
                            </FlipMove>                        
                        }
                    </div>
                </div>
                {/********** payment  *********/}
                <div className='payment__section'>
                    <div className='payment__title'>
                        <h3>Payment Method</h3>
                    </div>
                    <div className='payment__details'>
                        {/******** stripe magic *********/}
                        <form onSubmit={handelSubmit}>
                            <CardElement onChange={handelChange}/>
                            <div className='payment__priceContainer'>
                                <CurrencyFormat
                                    renderText={(value) => (
                                        <h3>Order Total: {value}</h3>
                                    )}
                                    decimalScale={2}
                                    value={basketTotal(basket)}
                                    displayType={"text"}
                                    thousandSeparator={true}
                                    prefix={"$"}
                                />
                                <button disabled={processing || disabled || succeeded}>
                                    <span>{processing ? <p>processing</p> :"Buy Now"}</span>
                                </button>
                            </div>
                            {/*** display errors ***/}
                            {
                                error && <div>{error}</div> 
                            }
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payment
