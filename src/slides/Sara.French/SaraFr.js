import React from 'react'

import sara from './../../assest/sara-2.png';

import speechBox from './../../assest/speech-box.png'

import { useStateValue } from './../../StateProvider';

import setOption from './../../actions';


const SaraFr = () => {

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
                    <div className='situation'>Comment puis-je vous aider?</div>
                    <div className='option-container'>
                        <input name='options' type='radio' className='option' id='1' value='Je recherche un site Web' onClick={e => hundleClick(e)} />
                        <label for='1' type='text' className='label'>Je recherche un site Web</label>
                    </div>
                    <div className='option-container'>
                        <input name='options' type='radio' className='option' id='2' value="Je veux rencontrer Monsieur Omar Alsadi" onClick={e => hundleClick(e)} />
                        <label for='2' type='text' className='label'>Je veux rencontrer Monsieur Omar Alsadi</label>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default SaraFr