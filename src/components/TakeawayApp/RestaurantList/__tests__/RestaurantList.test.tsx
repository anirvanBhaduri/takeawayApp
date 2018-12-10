import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

// SUT
import {RestaurantList} from '../RestaurantList';
import {Search} from "../../Filter/Search/Search";

/**
 * Load data to use on the SUT.
 */
const loadedData = require('../../../../../dist/Sample.json');

/**
 * RestaurantList component tests.
 *
 * @covers RestaurantList
 */
describe('RestaurantList Component Tests', () => {

    /**
     * RestaurantList renders correctly.
     *
     * @covers RestaurantList.render
     */
    it('should render correct snapshot', () => {
        const {restaurants} = loadedData;
        const filterCriteria = {
            search: new Search({
                searchTerm: '',
                filterHandler: () => {}
            })
        };

        const wrapper = shallow(
            <RestaurantList
                restaurants={restaurants}
                filterCriteria={filterCriteria}
            />
        );

        expect(wrapper).toMatchSnapshot();
    })
});
