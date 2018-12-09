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

interface RestaurantListState {
    restaurants: JSX.Element[];
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
     * Component state.
     *
     * @property state
     *
     * - restaurants - this value will be updated whenever the filter
     *                  criteria changes.
     */
    state: RestaurantListState = {
        restaurants: [],
    };

    /**
     * RestaurantList constructor.
     *
     * @param props
     */
    constructor(props: RestaurantListProps) {
        super(props);

        this.state.restaurants = this.props.restaurants.map(
            ({name, status, sortingValues}): JSX.Element => {
                return <Restaurant
                    key={name}
                    name={name}
                    status={status}
                    sortingValues={sortingValues}
                />;
            }
        );
    }

    /**
     * Render the component.
     *
     * @return JSX
     */
    render() {
        return (
            <div>
                {this.state.restaurants}
            </div>
        )
    }
}
