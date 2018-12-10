# Takeaway.com Assignment

The best takeaway.com assignment in the history of man. Known as the hello world.

## Getting Started

The assignment itself appears to be quite focused on frontend and does not really need a backend.
To keep things simple and spend a reasonable amount of time on this assignment, we are going to 
omit having a database and backend. A front end (javascript only) will be sufficient to meet the 
requirements.

We are also going to omit the use of Redux in this assignment, as it is quite simple and does
not really require it. If I was to extend the assignment further to have further nested components
etc, then redux was become essential for good maintainability.

The frontend look has been kept very simple and aims to demonstrate the way css would be structured
in a larger project. Usually, one would use css frameworks and build on them. I have decided to go
for a bare bones approach for this assignment, as I aim to demostrate understanding of sass/css.

You may notice most react files import react as 
```javascript
import * as React from 'react';
```
This is required by the ts-loader (in my case the awesome-ts-loader, which is very similar apart 
from a few efficiency tweaks), hence I am having to load the whole module instead of just what I
need.

### Prerequisites

You will need `npm`.

### Installing

Install the dependencies using `npm`.

```bash
npm install
npm run build
```

## Running the Assignment

Run using
```bash
npm run dev-server
```

## Running Tests

Tests can be run using
```bash
npm run test
```

### Coding Style

This project uses [`this`](https://github.com/airbnb/javascript/tree/master/react) as its styling guide.

## Built With

* [Javascript](https://www.javascript.com/)
* [React](https://reactjs.org/)

## Versions 

We use [SemVer](http://semver.org/) for versioning. For this project, we'll keep the versions to < 0.1.0.

## Authors

* _**Anirvan Bhaduri**_

## Acknowledgements

Thank you to Takeaway.com for reviewing this assignment and its contents.
