import * as React from 'react';
import {shallow} from "enzyme";
import {Restaurant} from "../Restaurant";

// SUT

/**
 * Expected data that is pre sorted. Output from
 * test should result in this expected data.
 */
export const sortedData = [
    {
        favourite: false,
        name: 'what',
        status: 'open',
    }
];

/**
 * Restaurant component tests.
 *
 * @covers Restaurant
 */
describe('Restaurant Component Tests', () => {

    // /**
    //  * Apply the Restaurant filter.
    //  *
    //  * @covers Restaurant.applyFilter
    //  */
    // it('should apply the search filter to the restaurant props array', () => {
    //     const search = new Restaurant({
    //         searchTerm: 'wh',
    //         filterHandler: () => {}
    //     });
    //
    //     const sorted = search.applyFilter([
    //         {
    //             favourite: false,
    //             name: 'what',
    //             status: 'open',
    //             clickHandler: () => {},
    //         },
    //         {
    //             favourite: true,
    //             name: 'test',
    //             status: 'closed',
    //             clickHandler: () => {},
    //         }
    //     ]);
    //
    //     // Deep copy check using convoluted cloning logic.
    //     // I think we need to do this because the objects themselves have interesting
    //     // props being added to them somehow... perhaps a side effect of
    //     // using typescript?
    //     expect(JSON.parse(JSON.stringify(sorted))).toEqual(sortedData);
    // });

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
