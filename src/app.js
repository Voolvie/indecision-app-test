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
var appRoot = document.getElementById('app')

ReactDOM.render(template, appRoot)