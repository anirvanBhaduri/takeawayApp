import * as React from 'react';

import {Restaurant} from "./Restaurant/Restaurant";

/**
 * Defines the format for a RestaurantList object.
 *
 * @interface RestaurantListProps
 *
 * @property array<Restaurant> An array containing only Restaurants.
 */
export interface RestaurantListProps {
    restaurants: JSX.Element[];
    sortCriteria?: any; // TODO: change this to sortCriteria object later
}

/**
 * The RestaurantList is responsible for arranging
 * a list of restaurants based on a sort criteria.
 *
 * @class RestaurantList
 *
 * @author Anirvan Bhaduri
 * @since 9th Dec 2018
 * @version 0.0.1
 */
export class RestaurantList extends React.Component<RestaurantListProps, {}> {

    /**
     * Render the component.
     *
     * @return JSX
     */
    render() {
        return (
            <div>
                {this.props.restaurants}
            </div>
        )
    }
}
