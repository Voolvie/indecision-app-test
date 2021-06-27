console.log('App is running')

var template = (
    <div>
        <h1>Does change?</h1>
        <p>yeee</p>
        <ol>
            <li>item 1</li>
            <li>item 2</li>
        </ol>
    </div>
)
var templateTwo = (
    <div>
        <h1>temp2</h1>
        <p>age:22</p>
        <p>location:lol</p>
    </div>
)
var appRoot = document.getElementById('app')

ReactDOM.render(templateTwo, appRoot)

