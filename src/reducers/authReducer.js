const initialState = {
    user: null,
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'authUserLogin':
            return {
                ...state,
                user: action.user,
            };
        default:
            return state;
    }
};

export default authReducer;
