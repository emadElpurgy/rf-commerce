import React from 'react'
import '../css/CheckoutProduct.css';
import StarIcon from '@material-ui/icons/Star';
import useStateValue from '../StateProvider';

function CheckoutProduct(props) {
  const[{basket}, dispatch] = useStateValue();
  const removeFromBasket =  ()=>{
    //dispatch item to data layer (basket)
    dispatch({
        type:'REMOVE_FROM_BASKET',
        item:{
            id:props.id,
            title:props.title,
            description:props.description,
            price:props.price,
            rating:props.rating,
            image:props.image
        }
    })
  }
  return (
    <div className='CheckoutProduct'>
      <img className='CheckoutProduct__image' src={props.image} alt={props.title}/>
      <div className='CheckoutProduct__info'>
        <p className='CheckoutProduct_title'>{props.title}</p>        
        <p className='CheckoutProduct__description'>{props.description}</p> 
        <p className='CheckoutProduct__price'>
          <small>$</small>
          <strong>{props.price}</strong>
        </p>
        <div className='CheckoutProduct__rating'>
          {
            Array(props.rating).fill().map(
              (_,i)=>(<div><StarIcon className='CheckoutProduct__rating_star'/></div>)
            )
          }
        </div>
        <button onClick={removeFromBasket}>Remove From Basket</button>
      </div>
    </div>
  )
}

export default CheckoutProduct
