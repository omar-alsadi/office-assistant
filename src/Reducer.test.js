import reducer from './Reducer';

describe('options', () => {

    const initialState = {
        option: ''
    }

    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual(initialState)
    })

    it('should handle SET_OPTION action', () => {
        expect(reducer(initialState, {
            type: 'SET_OPTION',
            payload: 'Hello'
        })).toEqual({
            option: 'Hello'
        })
    })

})