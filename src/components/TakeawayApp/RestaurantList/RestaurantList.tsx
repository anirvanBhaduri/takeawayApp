import * as React from 'react';

import {Restaurant, RestaurantProps} from "./Restaurant/Restaurant";
import {sortables} from "../Filter/Sort/Sortables";

/**
 * Defines the format for a RestaurantList object.
 *
 * @interface RestaurantListProps
 *
 * @property array<Restaurant> An array containing only Restaurants.
 */
export interface RestaurantListProps {
    restaurants: [];
    filterCriteria?: {
        [index: string]: any;
    };
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
     * Initialise state with restaurants.
     *
     * @property state
     */
    state: {
        restaurants: [],
    };

    /**
     * RestaurantList constructor.
     *
     * Load in the restaurants here.
     *
     * @param props
     */
    constructor(props: any) {
        super(props);

        // Initialise state.
        this.state = {
            restaurants: this.props.restaurants,
        };

        // Bind event handlers.
        this.handleFavouriteClick = this.handleFavouriteClick.bind(this);
    }

    /**
     * Handle the event when someone clicks the favourite
     * button for a restaurant.
     *
     * @param e
     */
    handleFavouriteClick(e: any) {
        const restaurantName = e.target.value;
        const {restaurants} = this.state;

        restaurants.map((restaurant: RestaurantProps) => {
            if (restaurant.name !== restaurantName) {
                return restaurant;
            }

            // We can now be sure the name is the same
            if (restaurant.favourite === null) {
                restaurant.favourite = true;
            } else {
                // We invert the value if its already set.
                restaurant.favourite = !restaurant.favourite;
            }
        });

        this.setState({restaurants: restaurants});
    }

    /**
     * Filter the restaurant list using the filter criteria
     * passed to this object.
     *
     * @return JSX.Element[]
     */
    filter(
        restaurants: [],
        criteria: {[index: string]: any}
    ): JSX.Element[] {
        let orderedRestaurants = restaurants;

        Object.keys(criteria).map((key: string): void => {
            orderedRestaurants = criteria[key].applyFilter(orderedRestaurants);
        });

        const sortType = criteria.sort.getSortType();

        return orderedRestaurants.map((props: RestaurantProps) => {
            return <Restaurant
                key={props.name}
                sortValue={sortables[sortType].sortValue(props, sortType)}
                sortName={sortables[sortType].title}
                clickHandler={this.handleFavouriteClick}
                favourite={props.favourite}
                name={props.name}
                status={props.status}
            />;
        });
    }

    /**
     * Render the component.
     *
     * @return JSX
     */
    render() {
        const restaurants = this.filter(
            this.state.restaurants,
            this.props.filterCriteria
        );

        return (
            <div className={'restaurant-list'} >
                {restaurants}
            </div>
        )
    }
}
