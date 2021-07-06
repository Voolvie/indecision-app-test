'use strict';

console.log('App is running');

// const object = {
//     title: 'Book title',
//     subtitle: 'Book subtitle',
//     options: ['one', 'two']
// }
// const template = (
//     <div>
//         <h1>{object.title}</h1>
//         {object.subtitle ? <p>Subtitle: {object.subtitle}</p> : 'No subtitle'}
//         {(object.options.length && object.options.length > 0) && 
//         <ol>
//             <li>{object.options[0]}</li>
//             <li>{object.options[1]}</li>
//         </ol>
//         }
//     </div>
// )
// const user = {
//     name: 'Koks',
//     age: 22,
//     location: 'Gce'
// }
// function getLocation(location) {
//     if (location) {
//         return <p>Location: {location}</p>
//     }
// }
// const templateTwo = (
//     <div>
//         <h1>{user.name ? user.name : 'Anonymous'}</h1>
//         {(user.age && user.age >= 18) && <p>Age:{user.age}</p>}
//         {getLocation(user.location)}
//     </div>
// )

var count = 0;
var addOne = function addOne() {
    count++;
    renderCounterApp();
};
var minusOne = function minusOne() {
    count--;
    renderCounterApp();
};
var reset = function reset() {
    count = 0;
    renderCounterApp();
};

var appRoot = document.getElementById('app');

var renderCounterApp = function renderCounterApp() {
    var templateThree = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            'Count: ',
            count
        ),
        React.createElement(
            'button',
            { onClick: addOne },
            '+1'
        ),
        React.createElement(
            'button',
            { onClick: minusOne },
            '-1'
        ),
        React.createElement(
            'button',
            { onClick: reset },
            'reset'
        )
    );
    ReactDOM.render(templateThree, appRoot);
};

renderCounterApp();
