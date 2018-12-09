import * as React from 'react';

import {RestaurantList} from "./RestaurantList/RestaurantList";
import {Search} from "./Filter/Search/Search";

// The sample data.
const sample = require('../../../dist/Sample.json');

/**
 * Define the format for the TakeawayApp state.
 *
 * @interface TakeawayAppState
 */
interface TakeawayAppState {
    restaurants: [];
    filterCriteria: {};
}

/**
 * The Takeaway app.
 *
 * This is the top level container. For the purpose
 * of this assignment, we will not use Redux due to the app's simplicity.
 * However, as this app grows, it will likely become necessary
 * to move the logic to redux actions, reducers etc.
 *
 * @class TakeawayApp
 * @package TakeawayApp
 *
 * @author Anirvan Bhaduri
 * @since 9th Dec 2018
 * @version 0.0.1
 */
export class TakeawayApp extends React.Component {

    /**
     * A list of restaurants
     *
     * @property [] restaurants
     */
    restaurants: [] = [];

    /**
     * Initialise app state.
     *
     * @property TakeawayAppState state
     *
     * - searchCriteria - a list of search criteria defining what to display
     *                      and the order to display them
     * - restaurants - a list of restaurants. This is expected to stay constant through
     *                  this app.
     */
    state: TakeawayAppState = {
        filterCriteria: {},
        restaurants: [],
    };

    /**
     * Construct TakeawayApp.
     *
     * Lets load in the restaurants here.
     *
     * @param props
     */
    constructor(props: any) {
        super(props);

        // Load sample restaurants.
        const { restaurants } = sample;
        this.state.restaurants = restaurants;

        // Set default sort criteria
        // ...

        // Bind handlers.
        this.handleSearchChange = this.handleSearchChange.bind(this);
    }

    /**
     * Using the event, change the search filterCriteria
     * to use the updated search value.
     *
     * Empty means no search.
     *
     * @param e
     */
    handleSearchChange(e: any) {
        if (e.valueOf() === null) {
            // Lets remove the search sort criteria if this is the case.
            // ...
        }

        // Otherwise lets override the sort filter criteria for search.
        this.setState({});
    }

    /**
     * Render the TakeawayApp.
     *
     * TODO: place the search/sort component in the render
     *
     * @return JSX
     */
    render() {
        const filterCriteria = this.state.filterCriteria;
        const restaurants = this.state.restaurants;

        return (
            <div>
                <Search filterHandler={this.handleSearchChange} />
                <RestaurantList restaurants={restaurants} filterCriteria={filterCriteria} />
            </div>
        )
    }
}
