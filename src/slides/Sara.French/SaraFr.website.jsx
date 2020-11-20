import React from 'react'

import sara from './../../assest/sara-3.png';

import speechBox from './../../assest/speech-box.png';

import { useStateValue } from '../../StateProvider';

import setOption from '../../actions';

const SaraFr1A = () => {

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
                    <div className='situation'>Super. comment vous voulez que votre site web va paraître</div>
                    <div className='option-container'>
                        <input name='options' type='radio' className='option' id='1' value={'Une seul page d\'application'} onClick={e => hundleClick(e)} />
                        <label for='1' type='text' className='label'>Une seul page d'application</label>
                    </div>
                    <div className='option-container'>
                        <input name='options' type='radio' className='option' id='2' value='Une page e-commerce' onClick={e => hundleClick(e)} />
                        <label for='2' type='text' className='label'>Une page e-commerce</label>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default SaraFr1A