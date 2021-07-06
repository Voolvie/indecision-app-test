'use strict';

console.log('App is running');

var object = {
    title: 'Book title',
    subtitle: 'Book subtitle',
    options: ['one', 'two']
};

var onFormSubmit = function onFormSubmit(e) {
    e.preventDefault(); //stop page refresh
    console.log('form submitted');

    var option = e.target.elements.option.value;

    if (option) {
        object.options.push(option);
        e.target.elements.option.value = '';
        renderFormApp();
    }
};
var wipeData = function wipeData(e) {
    e.preventDefault();
    console.log('data deleted');

    object.options = [];
    renderFormApp();
};

var renderFormApp = function renderFormApp() {
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
            ),
            React.createElement(
                'li',
                null,
                object.options[2]
            ),
            React.createElement(
                'li',
                null,
                object.options[3]
            ),
            React.createElement(
                'li',
                null,
                object.options[4]
            ),
            React.createElement(
                'li',
                null,
                object.options[5]
            ),
            React.createElement(
                'li',
                null,
                object.options[6]
            )
        ),
        React.createElement(
            'p',
            null,
            object.options.length
        ),
        React.createElement(
            'form',
            { onSubmit: onFormSubmit },
            React.createElement('input', { type: 'text', name: 'option' }),
            React.createElement(
                'button',
                null,
                'Add option'
            ),
            React.createElement(
                'button',
                { onClick: wipeData },
                'Wipe options'
            )
        )
    );
    ReactDOM.render(template, appRoot);
};

var appRoot = document.getElementById('app');

renderFormApp();
