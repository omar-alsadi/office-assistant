import setOption from './actions'

it('should create an action to set the option value to the state', () => {
    const text = 'Hello';

    const expectedAction = {
        type: 'SET_OPTION',
        payload: text
    }
    expect(setOption(text)).toEqual(expectedAction)
})