const ACTION_TYPES = {
    'INC': 'INC',
    'DEC': 'DEC',
    'USER_UPDATE': Symbol(), 
    'SET_STEP': 'SET_STEP',
    'SET_THEME': 'SET_THEME',
     // user crud
     'CREATE_USER': 'CREATE_USER',
     'READ_USER': 'READ_USER', // GET_USER
     'UPDATE_USER': 'UPDATE_USER',
     'DELETE_USER': 'DELETE_USER',
}

export default ACTION_TYPES;