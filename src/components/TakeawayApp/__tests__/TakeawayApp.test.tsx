import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

// SUT
import {TakeawayApp} from '../TakeawayApp';
import {Search} from "../Filter/Search/Search";

/**
 * TakeawayApp component tests.
 *
 * @covers TakeawayApp
 */
describe('Takeaway Component Tests', () => {

    /**
     * TakeawayApp should render the correct components.
     *
     * @covers TakeawayApp.render
     */
    it('should render a Search, Sort and Restaurant List', () => {
        const wrapper = shallow(<TakeawayApp />);

        expect(wrapper.find('Search').exists()).toBe(true);
    });

    /**
     * TakeawayApp renders correctly.
     *
     * @covers TakeawayApp.render
     */
    it('should render correct snapshot', () => {
        const wrapper = shallow(<TakeawayApp />);

        expect(wrapper).toMatchSnapshot();
    })
});