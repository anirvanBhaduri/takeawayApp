import * as React from 'react';

import {RestaurantProps} from "../RestaurantList/Restaurant/Restaurant";

/**
 * Filter props.
 *
 * We'll use this to ensure all filterables get
 * passed a filter handler.
 *
 * @interface FilterProps
 */
export interface FilterProps {
    filterHandler: (e: any) => void;
}

/**
 * Define the format for filterables.
 *
 * @class Filter
 */
export abstract class Filter<T extends FilterProps> extends React.Component<T, {}> {

    /**
     * Apply the filter on the restaurant list and return
     * a modified copy.
     *
     * @param list
     *
     * @return RestaurantProps
     */
    abstract applyFilter(list: RestaurantProps[]): RestaurantProps[];
}
