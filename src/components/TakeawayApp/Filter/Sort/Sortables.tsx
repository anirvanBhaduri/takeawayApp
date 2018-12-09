import * as React from 'react';

import {RestaurantProps} from "../../RestaurantList/Restaurant/Restaurant";

/**
 * Defines the content of sortables.
 *
 * Each sortable has a title and a filter method.
 *
 * @interface SortFilterProps
 */
export interface SortFilterProps {
    title: string;
    filter: (
        firstList: RestaurantProps,
        secondList: RestaurantProps,
        sortKey: string
    ) => number;
}

/**
 * A generic sort filter method.
 *
 * Used for most sorts.
 *
 * @param firstList
 * @param secondList
 * @param sortKey
 *
 * @return number
 */
const sortFilter = (
    firstList: RestaurantProps,
    secondList: RestaurantProps,
    sortKey: string
): number => {

    if (firstList.sortingValues[sortKey] > 0) {
        console.log('asdfadf');
    }

    return -1;
};

/**
 * Sort types.
 *
 * This object defines the title and filter method for the sort
 * values.
 */
export const sortables: {[index: string]: SortFilterProps} = {
    bestMatch: {
        title: 'Best Match',
        filter: sortFilter,
    },
    newest: {
        title: 'Newest',
        filter: sortFilter,
    },
    ratingAverage: {
        title: 'Rating Average',
        filter: sortFilter,
    },
    distance: {
        title: 'Distance',
        filter: sortFilter,
    },
    popularity: {
        title: 'Popularity',
        filter: sortFilter,
    },
    averageProductPrice: {
        title: 'Average Product Price',
        filter: sortFilter,
    },
    deliveryCosts: {
        title: 'Delivery Costs',
        filter: sortFilter,
    },
    minCost: {
        title: 'Min Cost',
        filter: sortFilter,
    }
};
