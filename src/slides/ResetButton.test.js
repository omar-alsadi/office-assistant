import React, { useState } from 'react'
import Reset from './../assest/reset.png'

import { configure, shallow } from "enzyme";

import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter });


const ResetButton = () => {

    const [state, setOption] = useState('Hello');

    const hundleClick = e => {
        setOption(e);
        console.log(state);
    }

    return (
        <div>
            <img className='Reset' id='Reset' src={Reset} alt='reset' title='Reset' value='' onClick={() => hundleClick('')} />
        </div>
    )
}


describe('expect to render ResetButton Component', () => {

    expect(shallow(<ResetButton />)).toMatchSnapshot();

    it('reset state to undefined', () => {

        const wrapper = shallow(<ResetButton />);

        // testing state with Hooks

        wrapper.find('[id="Reset"]').simulate('click');

        expect(wrapper.find('[id="Reset"]').prop('value')).toEqual('');
    })
})