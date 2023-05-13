import React, {useState} from 'react';
import { connect } from 'react-redux';
import ACTION_TYPES from '../../actions/actionTypes';
import * as actionsCreators from '../../actions/actionCreators';
import CONSTS from '../../constans';

const styleThemes = {
    [CONSTS.THEME.LIGHT]: {backgroundColor: 'white', color: 'black'},
    [CONSTS.THEME.DARK]: {backgroundColor: 'black', color: 'white'}
};

const ThemeSwitcher = (props) => {
    const [theme, setTheme] = useState(CONSTS.THEME.LIGHT);
    
    const switchTheme = () => {
        setTheme(theme == CONSTS.THEME.LIGHT ? CONSTS.THEME.DARK : CONSTS.THEME.LIGHT);
    };
    
    return(
        <div style={styleThemes[theme]}>
            <button onClick={switchTheme}>switch theme</button>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto autem sapiente quidem praesentium omnis, obcaecati odio tempore dolorem corporis nisi nulla! Unde, placeat ipsa, iusto praesentium aperiam animi tempora laborum ipsam tenetur suscipit repellat temporibus illo provident corporis velit perferendis consequuntur fugiat, ducimus dolores id nihil sed! Repellendus culpa pariatur impedit cupiditate ipsum, aliquam et aut atque id nihil rerum esse voluptatibus blanditiis voluptas iste consequuntur ut explicabo deserunt voluptatem iusto sequi. Sunt a illum dignissimos doloremque omnis voluptas iusto nulla unde cum. Debitis aliquid illum totam nostrum excepturi cumque animi eveniet est repellendus, quisquam nulla facere perferendis amet. Consequuntur.</p>
        </div>
    );
}

export default ThemeSwitcher;