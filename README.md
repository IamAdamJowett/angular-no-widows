# No Widows for AngularJS
An AngularJS directive that ensures single words do not wrap onto a new line (widows).

## What does No Widows do?

The angular-no-widows directive when placed on a text element will ensure at least two words wrap to a new line, avoiding single word wraps (called widows).

## Installation

There are three easy ways to install the angular-no-widows directive:

#### Node

To install via npm, run:

    npm install @iamadamjowett/angular-no-widows

#### Bower

To install via Bower, run:

    bower install angular-no-widows

#### Manual download

Download the `no-widows.directive.js` folder, and include it in your index.html file with something like:

    <script type="text/javascript" src="/path/to/no-widows.directive.js"></script>

Also be sure to include the module in your app.js file with:

    angular.module('yourAppName', ['angular-no-widows'])

## Usage

To use the angular-no-widows directive, place the no-widows attribute onto a text element, such as a heading or paragraph e.g.

    <h2 no-widows>
        This is a long heading but there will always be at least two words wrapping to the next line
    </h2>

or

    <p no-widows>
        This is long paragraph text but there will always be at least two words wrapping to the next line
    </p>

## Licence

MIT, free to use in personal and commercial projects.
