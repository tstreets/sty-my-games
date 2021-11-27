const initialState = {
    user: null,
};

export function setUser(user) {
    return { type: 'authSetUser', user };
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'authSetUser':
            return {
                ...state,
                user: action.user,
            };
        default:
            return state;
    }
};

export default authReducer;
