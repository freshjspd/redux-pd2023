import React from 'react';
import { connect } from 'react-redux';
import ACTION_TYPES from '../actions/actionTypes';
import * as actionsCreators from '../actions/actionCreators';

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
        inc: () => dispatch(actionsCreators.inc()),
        dec: () => dispatch(actionsCreators.dec()),
    }
}

const mapStates = (state) => state.counterReducer;

export default connect(mapStates, mapAcrions)(Counter);
