import React from 'react'

import sara from './../../assest/sara-bye.png';

import speechBox from './../../assest/speech-box.png';

import { useStateValue } from '../../StateProvider';

import setOption from '../../actions';

const SaraEnSB = () => {

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
                <div className='speechText' style={{ width: '350px' }}>
                    <div className='situation'>La version du livre d'histoires vous donne la possibilité de personnaliser les composants de l'interface utilisateur. Pour plus de détails, veuillez visiter</div>
                    <a href='https://github.com/omar-alsadi/office-assistance-storybook' className='situation link' value='No, thanks'
                        target="_blank" onClick={e => hundleClick(e)}>
                        https://github.com/omar-alsadi/office-assistance-storybook</a>
                </div>

            </div>
        </div>
    )
}

export default SaraEnSB