'use strict';

console.log('App is running');

var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        'Does change?'
    ),
    React.createElement(
        'p',
        null,
        'yeee'
    ),
    React.createElement(
        'ol',
        null,
        React.createElement(
            'li',
            null,
            'item 1'
        ),
        React.createElement(
            'li',
            null,
            'item 2'
        )
    )
);
var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        'temp2'
    ),
    React.createElement(
        'p',
        null,
        'age:22'
    ),
    React.createElement(
        'p',
        null,
        'location:lol'
    )
);
var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);
