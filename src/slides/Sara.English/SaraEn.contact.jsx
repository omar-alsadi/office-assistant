import React from 'react'

import sara from './../../assest/sara-4.png';

import speechBox from './../../assest/speech-box.png';

import { useStateValue } from '../../StateProvider';

import setOption from '../../actions';

const SaraEn2B = () => {

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
                    <div className='situation'>Sure. How would you like to contact
                    with him?</div>
                    <div className='option-container'>
                        <input name='options' type='radio' className='option' id='1' value='By Phone' onClick={e => hundleClick(e)} />
                        <label for='1' type='text' className='label'>By Phone</label>
                    </div>
                    <div className='option-container'>
                        <input name='options' type='radio' className='option' id='2' value='By Email' onClick={e => hundleClick(e)} />
                        <label for='2' type='text' className='label'>By Email</label>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default SaraEn2B