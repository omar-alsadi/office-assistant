import React from 'react'

import sara from './../../assest/sara-bye.png';

import speechBox from './../../assest/speech-box.png';

import { useStateValue } from '../../StateProvider';

import setOption from '../../actions';

const SaraEnBye = () => {

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
                    <div className='situation'>You're welcome</div>
                    <div className='situation'>Have a nice day, bye bye</div>
                </div>


            </div>
        </div>
    )
}

export default SaraEnBye