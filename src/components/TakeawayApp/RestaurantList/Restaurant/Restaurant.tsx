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
    sortingValues?: {}// TODO: correct when sorting interface defined
}

/**
 * Render a restaurant entry.
 *
 * @class Restaurant
 *
 * @author Anirvan Bhaduri
 * @since 9th Dec 2018
 * @version 0.0.1
 */
export const Restaurant = (props: RestaurantProps) => {
    return (
        <div>
            {props.name} {props.status}
        </div>
    );
};
