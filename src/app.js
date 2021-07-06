console.log('App is running')

const object = {
    title: 'Book title',
    subtitle: 'Book subtitle',
    options: ['one', 'two']
}

const onFormSubmit = (e) => {
    e.preventDefault() //stop page refresh
    console.log('form submitted')

    const option = e.target.elements.option.value

    if (option) {
        object.options.push(option)
        e.target.elements.option.value = ''
        renderFormApp()
    }
}
const wipeData = (e) => {
    e.preventDefault()
    console.log('data deleted')

    object.options = []
    renderFormApp()
}

const renderFormApp = () => {
const template = (
    <div>
        <h1>{object.title}</h1>
        {object.subtitle ? <p>Subtitle: {object.subtitle}</p> : 'No subtitle'}
        {(object.options.length && object.options.length > 0) && 
        <ol>
            <li>{object.options[0]}</li>
            <li>{object.options[1]}</li>
            <li>{object.options[2]}</li>
            <li>{object.options[3]}</li>
            <li>{object.options[4]}</li>
            <li>{object.options[5]}</li>
            <li>{object.options[6]}</li>
        </ol>
        }
        <p>{object.options.length}</p>
        <form onSubmit={onFormSubmit}>
            <input type="text" name="option"/>
            <button>Add option</button>
            <button onClick={wipeData}>Wipe options</button>
        </form>
    </div>
)
ReactDOM.render(template, appRoot)
}

const appRoot = document.getElementById('app')

renderFormApp()



