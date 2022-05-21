import React, { Component } from 'react'
import './Product.css';
import StarIcon from '@material-ui/icons/Star';
class Product extends Component {
    render(){
        
        return (
            <div className='product'>
            <div className='product__info'>
                <p>{this.props.title}</p> 
                <p class="product__price">
                    <small>$</small>    
                    <strong>{this.props.price}</strong>
                </p>
                <div class="product__rating">
                    {
                        Array(this.props.rating).fill().map(
                            (_,i)=>(<p><StarIcon className='product__rating_star'/></p>)
                        )
                    }
                    
                </div>          
            </div>
            <img 
                className=''
                src={this.props.image}
                alt=""
            />
            <button>Add to Basket</button>
            </div>
        )
    }
}

export default Product
