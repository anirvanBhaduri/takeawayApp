import * as React from 'react';
import * as ReactDOM from 'react-dom';

import {TakeawayApp} from "./components/TakeawayApp/TakeawayApp";

// Lets render are app on the DOM.
ReactDOM.render(
    <TakeawayApp />,
    document.getElementById("takeaway-app")
);