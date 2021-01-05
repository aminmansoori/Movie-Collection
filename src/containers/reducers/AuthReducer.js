const InitialState = {
    loading: true,
    token: ''
}
export default (state = InitialState, action) => {
    switch (action.type) {
        case 'set_loading':
            return { ...state, loading: action.payload };
        case 'user_token': {
            return { ...state, token: action.payload };
        }
        default:
            return state;
    }
}