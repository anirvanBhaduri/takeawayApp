import * as React from 'react';
import {shallow} from "enzyme";

// SUT
import {Sort} from "../Sort";
import {RestaurantProps} from "../../../RestaurantList/Restaurant/Restaurant";
import {sortables, sortFilter, topRestaurant} from "../Sortables";

/**
 * An example subset of RestaurantProps for
 * use during tests.
 */
const exampleRestaurantProps: RestaurantProps[] = [
    {
        name: "Tanoshii Sushi",
        status: "open",
        clickHandler: () => {},
        sortingValues: {
            bestMatch: 0.0,
            newest: 96.0,
            ratingAverage: 4.5,
            distance: 1190,
            popularity: 17.0,
            averageProductPrice: 1536,
            deliveryCosts: 200,
            minCost: 1000
        }
    },
    {
        name: "Tandoori Express",
        status: "closed",
        clickHandler: () => {},
        sortingValues: {
            bestMatch: 1.0,
            newest: 266.0,
            ratingAverage: 4.5,
            distance: 2308,
            popularity: 123.0,
            averageProductPrice: 1146,
            deliveryCosts: 150,
            minCost: 1300
        }
    }
];

/**
 * Sort component tests.
 *
 * @covers Sort
 */
describe('Sort Component Tests', () => {

    /**
     * Test the Sort filter correctly sorts given RestaurantProps.
     *
     * @covers Sortables.sortFilter
     */
    it('Should sort given RestaurantProps from highest to lowest', () => {
        const sortDirection = sortFilter(
            exampleRestaurantProps[0],
            exampleRestaurantProps[1],
            'bestMatch'
        );

        // The sort direction should be positive, indicating we want the highest value to
        // go to the top (first entry) of the list.
        expect(sortDirection).toBeGreaterThan(0);
        expect(sortDirection).toBe(1);
    });

    /**
     * Test the topRestaurant sortFilter correctly calculates
     * topRestaurant scores.
     *
     * @covers Sortables.sortables.topRestaurant.sortValue
     */
    it('Should calculate the top restaurant score for ' +
        'the given restaurant props',
        () => {
            const sortValue = sortables.topRestaurant.sortValue(
                exampleRestaurantProps[0],
                'topRestaurant'
            );

            // The sort value should be: 20234.5
            expect(sortValue).toBe(20234.5);
        }
    );

    /**
     * Test the Top Restaurant Filter correctly sorts given RestaurantProps.
     *
     * @covers Sortables.topRestaurant
     */
    it('Should sort given RestaurantProps from highest to lowest' +
        'according to the top restaurant score',
        () => {
            const sortDirection = topRestaurant(
                exampleRestaurantProps[1],
                exampleRestaurantProps[0]
            );

            // The sort direction should be negative, indicating we want the highest value to
            // go to the top (first entry) of the list.
            //
            // formula: (distance * popularity) + ratingAverage;
            expect(sortDirection).toBeLessThan(0);
            expect(sortDirection).toBe(-263654);
        }
    );

    /**
     * Sort renders correctly.
     *
     * @covers Sort.render
     */
    it('should render correct snapshot of Sort Component', () => {
        const wrapper = shallow(
            <Sort sortType={'bestMatch'} filterHandler={() => {}}/>
        );

        expect(wrapper).toMatchSnapshot();
    });
});
