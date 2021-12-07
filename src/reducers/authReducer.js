const initialState = {
    user: null,
    isAdmin: null,
};

export function setUser(user) {
    return { type: 'authSetUser', user };
}

export function setIsAdmin(isAdmin) {
    return { type: 'authSetIsAdmin', isAdmin };
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'authSetUser':
            return {
                ...state,
                user: action.user,
            };
        case 'authSetIsAdmin':
            return {
                ...state,
                isAdmin: action.isAdmin,
            };
        default:
            return state;
    }
};

export default authReducer;
