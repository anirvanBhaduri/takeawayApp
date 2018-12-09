import * as React from 'react';

import {Filter, FilterProps} from "../Filter";
import {RestaurantProps} from "../../RestaurantList/Restaurant/Restaurant";

/**
 * The favourite filter.
 *
 * Used to sort restaurants based on favourites.
 *
 * @class Favourite
 * @package TakeawayApp
 *
 * @author Anirvan Bhaduri
 * @since 10th Dec 2018
 * @version 0.0.1
 */
export class Favourite extends Filter<FilterProps> {

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
                // if its a favourite, move it up the search order, simple as that
                const firstFav = first.favourite ? 1 : 0;
                const secondFav = second.favourite ? 1 : 0;

                return secondFav - firstFav;
            }
        );

        return list;
    }
}
