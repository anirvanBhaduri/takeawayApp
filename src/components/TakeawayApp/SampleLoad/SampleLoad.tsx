import * as React from 'react';
import {Restaurant} from "../RestaurantList/Restaurant/Restaurant";

/**
 * The data being loaded in must have the
 * restaurants prop.
 *
 * @interface LoadableData
 */
export interface LoadableData {
    restaurants: [];
}

/**
 * The SampleLoad class. Accepts sample data and
 * transforms it into a load that is usable
 * by the application.
 *
 * @author Anirvan Bhaduri
 * @since 9th Dec 2018
 * @version 0.0.1
 */
export const sampleLoad = (sample: LoadableData): JSX.Element[] => {
    return sample.restaurants.map(
        ({name, status, sortingValues}) => {
            return <Restaurant
                key={name}
                name={name}
                status={status}
                sortingValues={sortingValues}
            />;
        }
    );
};
