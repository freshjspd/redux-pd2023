const initialState = {
    value: 0,
}

const counterReducer = (state = initialState, action) => {
    switch(action.type){
        case 'INC': return {value: state.value + 1};
        case 'DEC': return {value: state.value - 1};
        default: return state;
    }

};

export default counterReducer;