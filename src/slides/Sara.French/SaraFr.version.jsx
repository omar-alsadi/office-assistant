import React from 'react'

import sara from './../../assest/sara-4.png';

import speechBox from './../../assest/speech-box.png';

import { useStateValue } from '../../StateProvider';

import setOption from '../../actions';

const SaraFrV = () => {

    const [state, dispatch] = useStateValue();

    const hundleClick = e => {
        dispatch(setOption(e.target.value));
        return state;
    }

    return (


        <div className='slide'>
            <img src={sara} className='sara' alt='sara' />
            <div className='speechBox'>
                <img src={speechBox} className='sb-box' alt='speechBox' />
                <div className='speechTextSB'>
                    <div className='situation'>Premièrement, voulez voulez-vous continuer sur cette version ou bien vous voulez essayer la version Storybook?</div>
                    <div className='option-container'>
                        <input name='options' type='radio' className='option' id='1' value='Je veux continuer sur cette version s’il vous plaît' onClick={e => hundleClick(e)} />
                        <label for='1' type='text' className='label'>Je veux continuer sur cette version s’il vous plaît</label>
                    </div>
                    <div className='option-container'>
                        <input name='options' type='radio' className='option' id='2' value='J’aimerais bien savoir plus sur la version Storybook s’il vous plaît' onClick={e => hundleClick(e)} />
                        <label for='2' type='text' className='label'>J’aimerais bien savoir plus sur la version Storybook s’il vous plaît</label>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default SaraFrV