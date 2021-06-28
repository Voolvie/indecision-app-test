'use strict';

console.log('App is running');

var object = {
    title: 'Book title',
    subtitle: 'Book subtitle',
    options: ['one', 'two']
};
var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        object.title
    ),
    object.subtitle ? React.createElement(
        'p',
        null,
        'Subtitle: ',
        object.subtitle
    ) : 'No subtitle',
    object.options.length && object.options.length > 0 && React.createElement(
        'ol',
        null,
        React.createElement(
            'li',
            null,
            object.options[0]
        ),
        React.createElement(
            'li',
            null,
            object.options[1]
        )
    )
);
var user = {
    name: 'Koks',
    age: 22,
    location: 'Gce'
};
function getLocation(location) {
    if (location) {
        return React.createElement(
            'p',
            null,
            'Location: ',
            location
        );
    }
}
var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        user.name ? user.name : 'Anonymous'
    ),
    user.age && user.age >= 18 && React.createElement(
        'p',
        null,
        'Age:',
        user.age
    ),
    getLocation(user.location)
);
var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
