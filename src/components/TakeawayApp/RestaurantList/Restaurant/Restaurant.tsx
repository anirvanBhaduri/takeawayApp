import * as React from 'react';

/**
 * Restaurant Statuses.
 *
 * The following are the allowed status a restaurant can be in.
 *
 * @enum Status
 */
export const Status: {[index: string]: number} = {
    'open': 0,
    'closed': 1,
    'order ahead': 2,
};

/**
 * Favourite Props interface.
 *
 * Ensures a click handler is passed through to the
 * Favourite component.
 *
 * @interface FavouriteProps
 */
interface FavouriteProps {
    clickHandler: (e: any) => void;
    name: string;
    favourite?: boolean;
}

/**
 * Defines the format for a Restaurant object.
 *
 * @interface RestaurantProps
 *
 * @property string name
 * @property Status status
 * @property SortValues sortingValues
 */
export interface RestaurantProps extends FavouriteProps {
    status: string;
    sortingValues?: {
        [index: string]: number,
    };
}

/**
 * Favourite me message.
 *
 * @var string
 */
const favouriteMe = 'Favourite Me!';

/**
 * Un Favourite me message.
 *
 * @var string
 */
const unFavouriteMe = 'Un favourite me!';

/**
 * Render the favourite button.
 *
 * @param props
 *
 * @return JSX
 */
export const Favourite = (props: FavouriteProps) => {
    // For simplicity, we are going to make this a text based button
    // instead of an image.
    const favourite: string = props.favourite ? unFavouriteMe : favouriteMe;

    return (
        <button
            value={props.name}

            // We can also place a modifier here to change the appearance of the
            // button depending on the favourite state. To keep things simple,
            // we are going to omit the modifier here.
            className={'favourite'}

            onClick={props.clickHandler}
        >
            {favourite}
        </button>
    );
};

/**
 * Render a restaurant entry.
 *
 * @param props
 *
 * @return JSX
 */
export const Restaurant = (props: RestaurantProps) => {
    return (
        <div className={'restaurant'} >
            <div className={'restaurant__name'} >
                {props.name}
            </div>
            <div className={'restaurant__status'} >
                {props.status}
            </div>
            <Favourite
                name={props.name}
                favourite={props.favourite}
                clickHandler={props.clickHandler}
            />
        </div>
    );
};
