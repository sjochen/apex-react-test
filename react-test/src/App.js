import React from "react";
import ItemCard from "./components/itemCard";
import { connect } from "react-redux";

function App(props) {
  
  return (
    <div>
      {props.state.addCart.map(card => {
        return <ItemCard card= {card} key={card.number} />
      })}
    </div>
  );
}

const mapStateToProps = (state) =>{
  return {
    state
  }
}

export default connect(mapStateToProps)(App);