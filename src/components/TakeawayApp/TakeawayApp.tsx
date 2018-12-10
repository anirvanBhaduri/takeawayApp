import * as React from "react";

import {RestaurantList} from "./RestaurantList/RestaurantList";
import {Search} from "./Filter/Search/Search";
import {Sort} from "./Filter/Sort/Sort";
import {sortables} from "./Filter/Sort/Sortables";
import {OpeningState} from "./Filter/OpeningState/OpeningState";
import {Favourite} from "./Filter/Favourite/Favourite";

// The sample data.
const sample = require('../../../dist/Sample.json');

/**
 * Define the format for the TakeawayApp state.
 *
 * @interface TakeawayAppState
 */
interface TakeawayAppState {
    restaurants: [];
    filterCriteria: {[index: string]: any};
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
     *                  - the list sorts/filters top down, where top is of least importance and
     *                      bottom the most
     * - restaurants - a list of restaurants. This is expected to stay constant through
     *                  this app.
     */
    state: TakeawayAppState = {
        filterCriteria: {
            search: new Search({
                searchTerm: '',
                filterHandler: () => {}
            }),
            sort: new Sort({
                sortType: Object.keys(sortables)[0],
                filterHandler: () => {}
            }),
            openingState: new OpeningState({
                filterHandler: () => {}
            }),
            favourite: new Favourite({
                filterHandler: () => {}
            }),
        },
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
        const {restaurants} = sample;
        this.state.restaurants = restaurants;

        // Bind handlers.
        this.handleSearchChange = this.handleSearchChange.bind(this);
        this.handleSortChange = this.handleSortChange.bind(this);
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
        const {filterCriteria} = this.state;

        filterCriteria.search.setSearchTerm(e.target.value);

        this.setState({filterCriteria: filterCriteria});
    }

    /**
     * Using the event, change the sort filterCriteria
     * to use the updated sort value.
     *
     * @param e
     */
    handleSortChange(e: any) {
        // Lets handle the sort selection here.
        // ...
        const sortValue = e.target.value;
        const {filterCriteria} = this.state;

        filterCriteria.sort.setSortType(sortValue);
        this.setState({filterCriteria: filterCriteria});
    }

    /**
     * Render the TakeawayApp.
     *
     * @return JSX
     */
    render() {
        const filterCriteria = this.state.filterCriteria;
        const restaurants = this.state.restaurants;
        const search = this.state.filterCriteria.search;

        return (
            <div className={'takeaway-app'} >
                <h2 className={'takeaway-app__title'} >Find a Restaurant</h2>
                <div className={'takeaway-app__body'} >
                    <Search searchTerm={search.getSearchTerm()} filterHandler={this.handleSearchChange} />
                    <Sort sortType={''} filterHandler={this.handleSortChange} />
                    <RestaurantList restaurants={restaurants} filterCriteria={filterCriteria} />
                </div>
            </div>
        )
    }
}
