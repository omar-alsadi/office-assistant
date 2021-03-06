import React from 'react'

import sara from './../../assest/sara-2.png';

import speechBox from './../../assest/speech-box.png';

import { useStateValue } from './../../StateProvider';

import setOption from './../../actions';

const SaraEn = () => {

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
                    <div className='situation'>How can I help you?</div>
                    <div className='option-container'>
                        <input name='options' type='radio' className='option' id='1' value='I’m looking for a website' onClick={e => hundleClick(e)} />
                        <label for='1' type='text' className='label'>I’m looking for a website</label>
                    </div>
                    <div className='option-container'>
                        <input name='options' type='radio' className='option' id='2' value='I wanna meet Mr.Omar Alsadi' onClick={e => hundleClick(e)} />
                        <label for='2' type='text' className='label'>I wanna meet Mr.Omar Alsadi</label>
                    </div>
                </div>


            </div>
        </div>
    )

}

export default SaraEn