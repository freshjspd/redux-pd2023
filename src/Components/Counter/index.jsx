import React from 'react';
import { connect } from 'react-redux';
import ACTION_TYPES from '../../actions/actionTypes';
import * as actionsCreators from '../../actions/actionCreators';

function Counter(props) {
  const {value, inc, dec, step, setStep} = props;

  const stepHandler = (event) => {
    setStep(Number(event.target.value));
  }

  return (
    <>
        <h1>{value}</h1>
        <input type='number' value={step} onChange={stepHandler} />
        <button onClick={inc}>+</button>
        <button onClick={dec}>-</button>
    </>
  )
}

const mapAcrions = (dispatch) => {
    return{
        inc: () => dispatch(actionsCreators.inc()),
        dec: () => dispatch(actionsCreators.dec()),
        setStep: (newValue) => dispatch(actionsCreators.setStep(newValue))
    }
}

const mapStates = (state) => state.counterReducer;

export default connect(mapStates, mapAcrions)(Counter);
