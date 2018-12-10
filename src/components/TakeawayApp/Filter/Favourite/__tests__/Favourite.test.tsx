import * as React from 'react';

// SUT
import {Favourite} from "../Favourite";

/**
 * Expected data that is pre sorted. Output from
 * test should result in this expected data.
 */
export const sortedData = [
    {
        favourite: true,
        name: 'test',
        status: 'closed',
    },
    {
        favourite: false,
        name: 'test',
        status: 'open',
    }
];

/**
 * Favourite component tests.
 *
 * @covers Favourite
 */
describe('Favourite Component Tests', () => {

    /**
     * Apply the Favourite filter.
     *
     * @covers Favourite.applyFilter
     */
    it('should apply the favourite filter to the restaurant props array', () => {
        const favourite = new Favourite({
            filterHandler: () => {}
        });

        const sorted = favourite.applyFilter([
            {
                favourite: false,
                name: 'test',
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
});
