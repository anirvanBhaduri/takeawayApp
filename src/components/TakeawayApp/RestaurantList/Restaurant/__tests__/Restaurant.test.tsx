import * as React from 'react';
import {shallow} from "enzyme";
import {Restaurant} from "../Restaurant";

// SUT

/**
 * Restaurant component tests.
 *
 * @covers Restaurant
 */
describe('Restaurant Component Tests', () => {

    /**
     * Restaurant renders correctly.
     *
     * @covers Restaurant.render
     */
    it('should render correct snapshot of Restaurant Component', () => {
        const wrapper = shallow(
            <Restaurant
                status={'open'}
                clickHandler={() => {}}
                name={'My Restaurant.com!'}
            />
        );

        expect(wrapper).toMatchSnapshot();
    });
});
