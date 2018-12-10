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
    sortValue: (props: RestaurantProps, sortKey: string) => number;
}

/**
 * A generic sort filter method.
 *
 * Used for most sorts. For this filter function,
 * we are going with the assumption that the HIGHER number should be
 * closer to the top and the LOWER should be close to the bottom.
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
    return secondList.sortingValues[sortKey] - firstList.sortingValues[sortKey];
};

/**
 * Filter method for sorting by top restaurants.
 *
 * @param firstList
 * @param secondList
 *
 * @return number
 */
const topRestaurant = (
    firstList: RestaurantProps,
    secondList: RestaurantProps
): number => {
    // extract values required for formula - firstList
    const {
        distance: fDistance,
        popularity: fPopularity,
        ratingAverage: fRatingAverage
    } = firstList.sortingValues;

    // extract values required for formula - secondList
    const {
        distance: sDistance,
        popularity: sPopularity,
        ratingAverage: sRatingAverage
    } = secondList.sortingValues;

    const fTotal = (fDistance * fPopularity) + fRatingAverage;
    const sTotal = (sDistance * sPopularity) + sRatingAverage;
    return sTotal - fTotal;
};

/**
 * Generic sortValue function.
 *
 * Gets the sortValue based on a sortKey and a given RestaurantProp.
 *
 * @param props
 * @param sortKey
 *
 * @return number
 */
const sortValue = (props: RestaurantProps, sortKey: string): number => {
    return props.sortingValues[sortKey];
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
        sortValue: sortValue,
    },
    newest: {
        title: 'Newest',
        filter: sortFilter,
        sortValue: sortValue,
    },
    ratingAverage: {
        title: 'Rating Average',
        filter: sortFilter,
        sortValue: sortValue,
    },
    distance: {
        title: 'Distance',
        filter: sortFilter,
        sortValue: sortValue,
    },
    popularity: {
        title: 'Popularity',
        filter: sortFilter,
        sortValue: sortValue,
    },
    averageProductPrice: {
        title: 'Average Product Price',
        filter: sortFilter,
        sortValue: sortValue,
    },
    deliveryCosts: {
        title: 'Delivery Costs',
        filter: sortFilter,
        sortValue: sortValue,
    },
    minCost: {
        title: 'Min Cost',
        filter: sortFilter,
        sortValue: sortValue,
    },
    topRestaurant: {
        title: 'Top Restaurant',
        filter: topRestaurant,
        sortValue: (props: RestaurantProps): number => {
            const {
                distance,
                popularity,
                ratingAverage
            } = props.sortingValues;

            return (distance * popularity) + ratingAverage;
        }
    }
};
