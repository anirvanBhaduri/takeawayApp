import * as React from 'react';

// SUT
import {OpeningState} from "../OpeningState";

/**
 * Expected data that is pre sorted. Output from
 * test should result in this expected data.
 */
export const sortedData = [
    {
        favourite: true,
        name: 'test',
        status: 'open',
    },
    {
        favourite: false,
        name: 'test',
        status: 'closed',
    }
];

/**
 * OpeningState component tests.
 *
 * @covers OpeningState
 */
describe('OpeningState Component Tests', () => {

    /**
     * Apply the OpeningState filter.
     *
     * @covers OpeningState.applyFilter
     */
    it('should apply the opening state filter to the restaurant props array', () => {
        const openingState= new OpeningState({
            filterHandler: () => {}
        });

        const sorted = openingState.applyFilter([
            {
                favourite: false,
                name: 'test',
                status: 'closed',
                clickHandler: () => {},
            },
            {
                favourite: true,
                name: 'test',
                status: 'open',
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
