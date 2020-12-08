import React from 'react'

import Reset from './../assest/reset.png'

import { useStateValue } from './../StateProvider'

import setOption from './../actions'

const ResetButton = () => {

    const [state, dispatch] = useStateValue();

    const hundleClick = e => {
        dispatch(setOption(e.target.value));
        return state;
    }

    return (
        <div>
            <img className='Reset arrow' src={Reset} alt='reset' title='Reset' value='' onClick={e => hundleClick(e)} />
        </div>
    )
}

export default ResetButton