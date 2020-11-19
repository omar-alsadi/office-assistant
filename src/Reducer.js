export const INITIAL_STATE = { option: '', isConfused: false }

const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'SET_OPTION':
            return { ...state, option: action.payload };
        case 'IS_CONFUSED':
            return { ...state, isConfused: action.payload };
        default:
            return state;
    }
}

export default reducer;
