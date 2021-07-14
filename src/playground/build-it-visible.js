const appRoot = document.getElementById('app')

let visibility = false

const toggleVisibility = (e) => {
    e.preventDefault()
    visibility = !visibility
    render()
}
const render = () => {
    const template = (
    <div>
        <h1>Visibility toggle</h1>
        <form>
            <button onClick={toggleVisibility}>{visibility ? 'Hide details' : 'Show details'}</button>
            <p>{visibility ? 'Hidden text' : ''}</p>
        </form>
    </div>
    )
    ReactDOM.render(template, appRoot)
}
render()


