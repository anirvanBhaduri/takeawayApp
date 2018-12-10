import * as React from 'react';
import { shallow } from 'enzyme';

// SUT
import {RestaurantList} from '../RestaurantList';
import {RestaurantProps} from "../Restaurant/Restaurant";
import {Sort} from "../../Filter/Sort/Sort";

/**
 * RestaurantList component tests.
 *
 * @covers RestaurantList
 */
describe('RestaurantList Component Tests', () => {

    /**
     * RestaurantList filters correctly.
     *
     * @covers RestaurantList.filter.
     */
    it('should filter using filter criteria', () => {
        // Mock RestaurantProps
        const restaurantProps = jest.fn<RestaurantProps>(() => ({
            sortingValues: {
                bestMatch: 1.0,
            }
        }));

        // Mock Sort
        const sort =  jest.fn<Sort>(() => ({
            applyFilter: jest.fn((list: RestaurantProps[]) => list),
            getSortType: jest.fn(() => 'bestMatch')
        }));

        // Create a sample filterCriteria using mocks
        const filterCriteria = {
            sort: new sort(),
        };

        shallow(
            <RestaurantList
                restaurants={[new restaurantProps()]}
                filterCriteria={filterCriteria}
            />
        );

        expect(filterCriteria.sort.applyFilter).toHaveBeenCalled();
        expect(filterCriteria.sort.getSortType).toHaveBeenCalled();
    });

    /**
     * RestaurantList renders correctly.
     *
     * @covers RestaurantList.render
     */
    it('should render correct snapshot of RestaurantList', () => {
        // Mock RestaurantProps
        const restaurantProps = jest.fn<RestaurantProps>(() => ({
            sortingValues: {
                bestMatch: 1.0,
            }
        }));

        const wrapper = shallow(
            <RestaurantList
                restaurants={[new restaurantProps()]}
                filterCriteria={{}}
            />
        );

        expect(wrapper).toMatchSnapshot();
    });
});
