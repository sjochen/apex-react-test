import React from 'react';
import { connect } from 'react-redux';
import {addCart} from '../actions'

const ItemCard = (props) => {
    console.log(props);
    
    return (
        <div>
            <img src={props.card.img} alt='Battery'/>
            <h2>{props.card.name}</h2>
            <p>{props.card.number}</p>
            <p>{props.card.pricing}</p>
            <button onClick={() => props.btnClick()}>Add to Cart</button>
        </div>
    )
}

const mapDispatchToProps = (dispatch, ownProps) =>{
    return{
        btnClick: () => dispatch(addCart({partNo: ownProps.card.number, price: ownProps.card.pricing}))
     }
}

export default connect(null, mapDispatchToProps)(ItemCard);