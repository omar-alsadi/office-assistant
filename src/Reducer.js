export const INITIAL_STATE = { option: '' }

const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'SET_OPTION':
            return { ...state, option: action.payload };
        default:
            return state;
    }
}

export default reducer;
