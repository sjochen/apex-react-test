import cart from './cart'
import {combineReducers} from 'redux'

const allReducers = combineReducers({
    addCart: cart
})

export default allReducers;