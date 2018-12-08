import * as React from 'react';

/**
 * Defines the format of props allowed
 * as an input to the Hello component.
 *
 * @interface HelloProps
 */
export interface HelloProps {
    compiler: string;
    framework: string;
}

/**
 * The Hello class that prints Hello World.
 *
 * @class Hello
 *
 * @author Anirvan Bhaduri
 * @since 7th Dec 2018
 * @version 0.0.1
 */
export class Hello extends React.Component<HelloProps, {}> {
    render() {
       return (
           <div className={'hello'}>
               <h2>Hello World</h2>
           </div>
        )
    }
}