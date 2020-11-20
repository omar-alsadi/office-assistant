import React from 'react'

import sara from './../../assest/sara-6.png';

import speechBox from './../../assest/speech-box.png';

import { useStateValue } from '../../StateProvider';

import setOption from '../../actions';

const SaraFr1B = () => {

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
                    <div className='situation'>Je suis vraiment désolé mais Ms.Omar est partie
                 . puis je vous aidez?</div>
                    <div className='option-container'>
                        <input name='options' type='radio' className='option' id='1' value='Oui, je cherche le site web' onClick={e => hundleClick(e)} />
                        <label for='1' type='text' className='label'>Oui, je cherche le site web</label>
                    </div>
                    <div className='option-container'>
                        <input name='options' type='radio' className='option' id='2' value='Puis-je le contacter directement?' onClick={e => hundleClick(e)} />
                        <label for='2' type='text' className='label'>Puis-je le contacter directement?</label>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default SaraFr1B