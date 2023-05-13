import { createSlice } from "@reduxjs/toolkit";
import CONSTS from '../constans';

const themeSlice = createSlice({
    name: 'theme',
    initialState: {theme: CONSTS.THEME.LIGHT,},
    reducers: {
        setTheme(state, actions){
            if(state.theme === CONSTS.THEME.LIGHT) {
                state.theme = CONSTS.THEME.DARK;
            } else {
                state.theme = CONSTS.THEME.LIGHT;
            }
        }
    },
});

const {reducer, actions} = themeSlice;
export const {setTheme} = actions;
export default reducer;