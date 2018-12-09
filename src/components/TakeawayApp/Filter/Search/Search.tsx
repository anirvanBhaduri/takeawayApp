import * as React from 'react';

import {Filter, FilterProps} from "../Filter";
import {RestaurantProps} from "../../RestaurantList/Restaurant/Restaurant";

/**
 * The searchTerm is required to ensure
 * we can search.
 *
 * @interface SearchProps
 */
interface SearchProps extends FilterProps {
    searchTerm: string;
}

/**
 * Search using a string.
 *
 * Used to filter RestaurantProps.
 *
 * @class Search
 * @package TakeawayApp
 *
 * @author Anirvan Bhaduri
 * @since 9th Dec 2018
 * @version 0.0.1
 */
export class Search extends Filter<SearchProps> {

    /**
     * The search term used to filter the results.
     */
    searchTerm: string;

    /**
     * Search constructor.
     *
     * @param props
     */
    constructor(props: any) {
        super(props);

        this.searchTerm = this.props.searchTerm;
    }

    /**
     * Set the search term.
     *
     * @param searchTerm
     */
    setSearchTerm(searchTerm: string) {
        this.searchTerm = searchTerm;
    }

    /**
     * Get the current search term.
     *
     * @return string
     */
    getSearchTerm(): string {
        return this.searchTerm;
    }

    /**
     * Apply the search filter.
     *
     * @param list
     *
     * @return RestaurantProps
     */
    applyFilter(list: RestaurantProps[]): RestaurantProps[] {
        // Do some filter logic here using searchTerm
        // ... should mainly remove elements

        // When we don't have a search term, we don't want to filter at all
        if (!this.searchTerm) {
            return list;
        }

        const searchTerm = this.searchTerm.toLowerCase();
        return list.filter(
            (value: RestaurantProps): boolean => {
                return value.name.toLowerCase().indexOf(searchTerm) >= 0;
            }
        );
    }

    /**
     * Render the search component.
     *
     * @return JSX
     */
    render() {
        const handler = this.props.filterHandler;
        const searchTerm = this.props.searchTerm;

        return (
            <div>
                <input
                    onChange={handler}
                    value={searchTerm}
                    type="input"
                />
            </div>
        );
    }
}
