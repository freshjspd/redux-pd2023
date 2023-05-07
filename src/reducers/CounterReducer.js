import ACTION_TYPES from "../actions/actionTypes";

const initialState = {
    value: 0,
}

const counterReducer = (state = initialState, action) => {
    switch(action.type){
        case ACTION_TYPES.INC: return {value: state.value + 1};
        case ACTION_TYPES.DEC: return {value: state.value - 1};
        default: return state;
    }

};

export default counterReducer;