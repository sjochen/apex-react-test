import products from '../products.json'

const initalState = products;

const cart = (state = initalState , action) => {
    switch (action.type) {
        case 'ADD_CART':
            console.log(action.payload);
            return state
        
        default:
            return state
    }
}

export default cart;
