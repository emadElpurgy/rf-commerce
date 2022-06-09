export const initialState = {
    basket:[],
    basketTotal : (basket)=>(basket?.reduce((amount,item) => Number(Number(amount) + Number(item.price)) ,0)),
    user:null
};

//selector (not working)
export const getBasketTotalValue = (basket)=>basket?.reduce((amount,item) => (amount + item.price) ,0);
    
const reducer = (state,action)=>{
    switch(action.type){
        case 'ADD_To_BASKET':
            return {
                ...state,
                basket:[...state.basket,action.item],
            };
            case 'REMOVE_FROM_BASKET':
                return {
                    ...state,
                    basket:[...state.basket.filter(item=>item.id !== action.item.id)],
                };
            case 'SET_USER':
                return{
                    ...state,
                    user:action.user
                };
        default:
            return state;
    }
}


export default reducer;
