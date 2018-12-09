import * as React from 'react';

import {sampleLoad} from "./SampleLoad/SampleLoad";
import {RestaurantList} from "./RestaurantList/RestaurantList";

// The sample data.
const sample = require('../../../dist/Sample.json');

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
     * A list of restaurants.
     *
     * @property array<RestaurantList> restaurants
     */
    restaurants: JSX.Element[];

    /**
     * Takeaway App constructor.
     *
     * Lets load in the sample JSON here.
     *
     * @param props
     */
    constructor(props: any) {
        super(props);

        // Load in the restaurants.
        this.restaurants = sampleLoad(sample);
    }

    /**
     * Render the TakeawayApp.
     *
     * TODO: place the search/sort component in the render
     *
     * @return JSX
     */
    render() {
        return (
            <div>
                <RestaurantList restaurants={this.restaurants} />
            </div>
        )
    }
}
