import React from 'react'
import '../css/Product.css';
import StarIcon from '@material-ui/icons/Star';
import useStateValue from '../StateProvider';

    function Product(props){
        const[{basket}, dispatch] = useStateValue();
        const addToBasket = ()=>{
            //dispatch item to data layer (basket)
            dispatch({
                type:'ADD_To_BASKET',
                item:{
                    id:props.id,
                    title:props.title,
                    description:props.description,
                    price:props.price,
                    rating:props.rating,
                    image:props.image
                }
            })
        };

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
            <div className='product'>
            <div className='product__info'>
                <p className='product__title'>{props.title}</p> 
                <p className='product__description'>{props.description}</p> 
                <p class="product__price">
                    <small>$</small>    
                    <strong>{props.price}</strong>
                </p>
                <div className="product__rating">
                    {
                        Array(props.rating).fill().map(
                            (_,i)=>(<p><StarIcon className='product__rating_star'/></p>)
                        )
                    }
                    
                </div>          
            </div>
            <img 
                className=''
                src={props.image}
                alt=""
            />
            {
                basket.find((element)=>(element.id === props.id))?<button onClick={removeFromBasket}>Remove From Basket</button> : <button onClick={addToBasket}>Add to Basket</button>
                    
                
            }
            
            </div>
        )
    }


export default Product
