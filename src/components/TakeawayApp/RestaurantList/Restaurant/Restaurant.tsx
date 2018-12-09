import * as React from 'react';

/**
 * Restaurant Statuses.
 *
 * The following are the allowed status a restaurant can be in.
 *
 * @enum Status
 */
export enum Status {
    Open = 'open',
    Closed = 'closed',
    OrderAhead = 'order ahead',
}

/**
 * Defines the format for a Restaurant object.
 *
 * @interface RestaurantProps
 *
 * @property string name
 * @property Status status
 * @property array sortingValues // TODO: correct this when sorting is defined
 */
export interface RestaurantProps {
    name: string;
    status: string;
    sortingValues: []; // TODO: correct when sorting interface defined
}

/**
 * The Restaurant class represents a restaurant and
 * is responsible for rendering the restaurant's detail.
 *
 * @class Restaurant
 *
 * @author Anirvan Bhaduri
 * @since 9th Dec 2018
 * @version 0.0.1
 */
export class Restaurant extends React.Component<RestaurantProps, {}> {

    // TODO: do we need more here? if not, turn it into a function

    render() {
        return (
            <div>
                {this.props.name} {this.props.status}
            </div>
        )
    }
}
