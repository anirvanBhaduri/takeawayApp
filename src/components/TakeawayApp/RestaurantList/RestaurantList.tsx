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
    restaurants: [];
    filterCriteria?: {};
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
     * Filter the restaurant list using the
     *
     */
    filter(
        restaurants: [],
        criteria: {[index: string]: any}
    ): JSX.Element[] {
        let orderedRestaurants = restaurants;

        Object.keys(criteria).map((key: string): void => {
            orderedRestaurants = criteria[key].applyFilter(orderedRestaurants);
        });

        return orderedRestaurants.map(({name, status}) => {
            return <Restaurant
                key={name}
                name={name}
                status={status}
            />
        });
    }

    /**
     * Render the component.
     *
     * @return JSX
     */
    render() {
        const restaurants = this.filter(
            this.props.restaurants,
            this.props.filterCriteria
        );

        return (
            <div>
                {restaurants}
            </div>
        )
    }
}
