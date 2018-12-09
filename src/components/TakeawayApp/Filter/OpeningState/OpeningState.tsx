import * as React from 'react';

import {Filter, FilterProps} from "../Filter";
import {RestaurantProps, Status} from "../../RestaurantList/Restaurant/Restaurant";

/**
 * The opening state filter.
 *
 * Used to sort restaurants based on opening state.
 *
 * @class OpeningState
 * @package TakeawayApp
 *
 * @author Anirvan Bhaduri
 * @since 10th Dec 2018
 * @version 0.0.1
 */
export class OpeningState extends Filter<FilterProps> {

    /**
     * Apply the opening state filter.
     *
     * @param list
     *
     * @return RestaurantProps
     */
    applyFilter(list: RestaurantProps[]): RestaurantProps[] {
        list.sort(
            (first: RestaurantProps, second: RestaurantProps): number => {
                // basically, if the status is an invalid status, then put it at the end!
                // can go last in line because its not allowed here
                const firstStatus = Status[first.status] || 9999;
                const secondStatus = Status[second.status] || 9999;

                return secondStatus - firstStatus;
            }
        );

        return list;
    }
}
