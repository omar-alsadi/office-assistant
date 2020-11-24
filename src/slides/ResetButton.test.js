import React from 'react'
import ResetButton from './ResetButton'

import { useStateValue, StateProvider } from './../StateProvider'

import { configure, shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter });

describe('expect to render ResetButton Component', () => {
    // expect(shallow(<ResetButton />)).toMatchSnapshot();

    // useStateValue = { option: '' };

    let wrapper;

    beforeEach(() => {
        wrapper = shallow(
            <StateProvider>
                <ResetButton />
            </StateProvider>
        );
    }
    )

    it('reset state to undefined', () => {
        const dispatch = jest.fn();

        // wrapper = shallow(
        //     <StateProvider>
        //         <ResetButton />
        //     </StateProvider>
        // );

        // testing state
        wrapper.find('[className="Reset"]').simulate('click');
        // expect(wrapper.state()).toEqual({ option: '' })
        expect(dispatch).toBeCalledWith({
            type: 'SET_OPTION',
            payload: ''
        });

    })
})