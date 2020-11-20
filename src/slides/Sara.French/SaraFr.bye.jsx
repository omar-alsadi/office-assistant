import React from 'react'

import sara from './../../assest/sara-bye.png';

import speechBox from './../../assest/speech-box.png';


const SaraFrBye = () => {

    return (

        <div className='slide'>
            <img src={sara} className='sara' alt='sara' />
            <div className='speechBox'>
                <img src={speechBox} className='sp-box' alt='speechBox' />
                <div className='speechText'>
                    <div className='situation'>Vous êtes le bienvnu</div>
                    <div className='situation'>Bonne journée,au revoir</div>
                </div>

            </div>
        </div>
    )
}

export default SaraFrBye