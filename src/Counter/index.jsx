import React from 'react';
import { connect } from 'react-redux';
import ACTION_TYPES from '../actions/actionTypes';

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
        inc: () => dispatch({type: ACTION_TYPES.INC}),
        dec: () => dispatch({type: ACTION_TYPES.DEC}),
    }
}

const mapStates = (state) => state.counterReducer;

export default connect(mapStates, mapAcrions)(Counter);
