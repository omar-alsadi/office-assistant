import React from 'react'

import sara from '../assest/sara-1.png';

import speechBox from '../assest/speech-box.png'

import { useStateValue } from './../StateProvider';

import setOption from './../actions';

const Sara1 = () => {

    const [state, dispatch] = useStateValue();

    const hundleClick = e => {
        dispatch(setOption(e.target.value));
        return state;
    }


    return (
        <div className='slide'>
            <img src={sara} className='sara' alt='sara' />
            <div className='speechBox'>
                <img src={speechBox} className='sp-box' alt='speechBox' />
                <div className='speechText'>
                    <div className='situation'>{ }</div>
                    <div className='option-container'>
                        <input name='options' type='radio' className='option' id='1' value='Hello' onClick={e => hundleClick(e)} />
                        <label for='1' type='text' className='label'>Hello</label>
                    </div>
                    <div className='option-container'>
                        <input name='options' type='radio' className='option' id='2' value="Bonjour" onClick={e => hundleClick(e)} />
                        <label for='2' type='text' className='label'>Bonjour</label>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default Sara1