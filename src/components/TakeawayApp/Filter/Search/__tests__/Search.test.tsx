import * as React from 'react';
import {shallow} from "enzyme";

// SUT
import {Search} from "../Search";

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
 * Search component tests.
 *
 * @covers Search
 */
describe('Search Component Tests', () => {

    /**
     * Apply the Search filter.
     *
     * @covers Search.applyFilter
     */
    it('should apply the search filter to the restaurant props array', () => {
        const search = new Search({
            searchTerm: 'wh',
            filterHandler: () => {}
        });

        const sorted = search.applyFilter([
            {
                favourite: false,
                name: 'what',
                status: 'open',
                clickHandler: () => {},
            },
            {
                favourite: true,
                name: 'test',
                status: 'closed',
                clickHandler: () => {},
            }
        ]);

        // Deep copy check using convoluted cloning logic.
        // I think we need to do this because the objects themselves have interesting
        // props being added to them somehow... perhaps a side effect of
        // using typescript?
        expect(JSON.parse(JSON.stringify(sorted))).toEqual(sortedData);
    });

    /**
     * Search renders correctly.
     *
     * @covers Search.render
     */
    it('should render correct snapshot of Search Component', () => {
        const wrapper = shallow(
            <Search searchTerm={'at'} filterHandler={() => {}} />
        );

        expect(wrapper).toMatchSnapshot();
    });
});
