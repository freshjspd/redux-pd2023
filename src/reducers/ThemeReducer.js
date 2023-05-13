import ACTION_TYPES from "../actions/actionTypes";
import CONSTS from '../constans';

const initialState = {
    theme: CONSTS.THEME.LIGHT,
};

const themeReducer = (state = initialState, action) => {
    switch(action.type){
        case ACTION_TYPES.SET_THEME: return {
            ...state,
            theme: state.theme == CONSTS.THEME.LIGHT ? CONSTS.THEME.DARK : CONSTS.THEME.LIGHT
        };
        default: return state;

    }
};

export default themeReducer;