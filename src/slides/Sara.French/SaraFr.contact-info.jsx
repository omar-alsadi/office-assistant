import React from 'react'

import sara from './../../assest/sara-5.png';

import speechBox from './../../assest/speech-box.png';

import { useStateValue } from '../../StateProvider';

import setOption from '../../actions';

const SaraFr3 = ({ info }) => {

    const [state, dispatch] = useStateValue();

    const hundleClick = e => {
        dispatch(setOption(e.target.value));
        return state;
    }

    return (


        <div className='slide'>
            <img src={sara} className='sara' alt='sara' />
            <div className='speechBox'>
                <img src={speechBox} className='sp-box-details' alt='speechBox' />
                <div className='speechTextwithInfo'>
                    <div className='situation'>Super! Vous pouvez lui contacter sur ce numero {info}</div>
                    <div className='situation'>Avez-vous besoin de quelque chose d'autre?</div>
                    <div className='option-container'>
                        <input name='options' type='radio' className='option' id='1' value='Non, Merci' onClick={e => hundleClick(e)} />
                        <label for='1' type='text' className='label'>Non, Merci.</label>
                    </div>
                    <div className='option-container'>
                        <input name='options' type='radio' className='option' id='2' value='Oui, je cherche le site web' onClick={e => hundleClick(e)} />
                        <label for='2' type='text' className='label'>Oui, je chreche le site web</label>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default SaraFr3