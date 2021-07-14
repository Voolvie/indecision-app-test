'use strict';

var appRoot = document.getElementById('app');

var visibility = false;

var toggleVisibility = function toggleVisibility(e) {
    e.preventDefault();
    visibility = !visibility;
    render();
};
var render = function render() {
    var template = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            'Visibility toggle'
        ),
        React.createElement(
            'form',
            null,
            React.createElement(
                'button',
                { onClick: toggleVisibility },
                visibility ? 'Hide details' : 'Show details'
            ),
            React.createElement(
                'p',
                null,
                visibility ? 'Hidden text' : ''
            )
        )
    );
    ReactDOM.render(template, appRoot);
};
render();
