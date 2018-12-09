import * as React from 'react';

import {Filter} from "../Filter";
import {RestaurantProps} from "../../RestaurantList/Restaurant/Restaurant";

/**
 * Render the search component.
 *
 * @return JSX
 */
export class Search extends Filter {

    /**
     * The search term used to filter the results.
     */
    searchTerm: string;

    /**
     * Apply the search filter.
     *
     * @param list
     *
     * @return RestaurantProps
     */
    applyFilter(list: RestaurantProps): RestaurantProps {
        // Do some filter logic here using searchTerm

        return {
            name: this.searchTerm,
            status: '',
            sortingValues: [],
        };
    }

    /**
     * Render the search component.
     *
     * @return JSX
     */
    render() {
        const handler = this.props.filterHandler;

        return (
            <div>
                <input onClick={handler} type="input"/>
            </div>
        );
    }
}
