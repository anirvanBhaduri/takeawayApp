import * as React from 'react';
import {shallow} from "enzyme";

// SUT
import {Sort} from "../Sort";

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
 * Sort component tests.
 *
 * @covers Sort
 */
describe('Sort Component Tests', () => {

    // /**
    //  * Apply the Sort filter.
    //  *
    //  * @covers Sort.applyFilter
    //  */
    // it('should apply the search filter to the restaurant props array', () => {
    //     const search = new Sort({
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
