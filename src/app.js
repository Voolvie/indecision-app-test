console.log('App is running')

var object = {
    title: 'Book title',
    subtitle: 'Book subtitle',
    options: ['one', 'two']
}
var template = (
    <div>
        <h1>{object.title}</h1>
        {object.subtitle ? <p>Subtitle: {object.subtitle}</p> : 'No subtitle'}
        {(object.options.length && object.options.length > 0) && 
        <ol>
            <li>{object.options[0]}</li>
            <li>{object.options[1]}</li>
        </ol>
        }
    </div>
)
var user = {
    name: 'Koks',
    age: 22,
    location: 'Gce'
}
function getLocation(location) {
    if (location) {
        return <p>Location: {location}</p>
    }
}
var templateTwo = (
    <div>
        <h1>{user.name ? user.name : 'Anonymous'}</h1>
        {(user.age && user.age >= 18) && <p>Age:{user.age}</p>}
        {getLocation(user.location)}
    </div>
)
var appRoot = document.getElementById('app')

ReactDOM.render(template, appRoot)

