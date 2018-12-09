import * as React from 'react';

import {Filter, FilterProps} from "../Filter";
import {sortables} from "./Sortables";
import {RestaurantProps} from "../../RestaurantList/Restaurant/Restaurant";

/**
 * Defines props required by Sort.
 *
 * We need filterType to determine which
 * filter method to run.
 *
 * @interface SortProps
 */
interface SortProps extends FilterProps {
    filterType: string,
}

/**
 * Render the sort component.
 *
 * @return JSX
 */
export class Sort extends Filter<SortProps> {

    /**
     * A list of sortables.
     *
     * @property sortables
     */
    sortables: JSX.Element[];

    /**
     * The filter type.
     *
     * Determines which filter method to run for sorting.
     *
     * @property filterType
     */
    filterType: string;

    /**
     * Sort constructor.
     *
     * Lets populate sortables here.
     *
     * @param props
     */
    constructor(props: any) {
        super(props);

        this.filterType = this.props.filterType;
        this.sortables = Object.keys(sortables).map((key) => {
            return (
                <option
                    key={key}
                    value={key}
                >
                    {sortables[key].title}
                </option>
            );
        });
    }

    /**
     * Apply the sort filter.
     *
     * @param list
     *
     * @return RestaurantProps
     */
    applyFilter(list: RestaurantProps[]): RestaurantProps[] {

        list.sort((first: RestaurantProps, second: RestaurantProps): number => {
            return sortables[this.filterType].filter(first, second, this.filterType);
        });

        return list;
    }

    /**
     * Render the Sort dropdown.
     *
     * @return JSX
     */
    render() {
        const handler = this.props.filterHandler;

        return (
            <select onChange={handler}>
                {this.sortables}
            </select>
        );
    }
}