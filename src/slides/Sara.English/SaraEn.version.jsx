import React from 'react'

import sara from './../../assest/sara-4.png';

import speechBox from './../../assest/speech-box.png';

import { useStateValue } from '../../StateProvider';

import setOption from '../../actions';

const SaraEnV = () => {

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
                    <div className='situation'>First of all, would you like to continue on this version or want to know more about Storybook verison ?</div>
                    <div className='option-container'>
                        <input name='options' type='radio' className='option' id='1' value='I want to continue on this version' onClick={e => hundleClick(e)} />
                        <label for='1' type='text' className='label'>I want to continue on this version please</label>
                    </div>
                    <div className='option-container'>
                        <input name='options' type='radio' className='option' id='2' value='Tell me more about Storybook verison please' onClick={e => hundleClick(e)} />
                        <label for='2' type='text' className='label'>Tell me more about Storybook verison please</label>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default SaraEnV