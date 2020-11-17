import React from 'react'

import sara from './../../assest/sara-3.png';

import speechBox from './../../assest/speech-box.png';

import { useStateValue } from './../../StateProvider';

import setOption from './../../actions';

const SaraEn1A = () => {

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
                    <div className='situation'>Good. Do you want your website as</div>
                    <div className='option-container'>
                        <input name='options' type='radio' className='option' id='1' value='A Single-application page' onClick={e => hundleClick(e)} />
                        <label for='1' type='text' className='label'>A Single-application page</label>
                    </div>
                    <div className='option-container'>
                        <input name='options' type='radio' className='option' id='2' value='An E-commerce page' onClick={e => hundleClick(e)} />
                        <label for='2' type='text' className='label'>An E-commerce page</label>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default SaraEn1A