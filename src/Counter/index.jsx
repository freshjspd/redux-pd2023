import React from 'react';
import { connect } from 'react-redux';

function Counter(props) {
  const {value, inc, dec} = props;
  return (
    <>
        <h1>{value}</h1>
        <button onClick={inc}>+</button>
        <button onClick={dec}>-</button>
    </>
  )
}

const mapAcrions = (dispatch) => {
    return{
        inc: () => dispatch({type: 'INC'}),
        dec: () => dispatch({type: 'DEC'}),
    }
}

const mapStates = (state) => state.counterReducer;

export default connect(mapStates, mapAcrions)(Counter);
