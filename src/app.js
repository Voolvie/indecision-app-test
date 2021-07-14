console.log('App is running')

const object = {
    title: 'Book title',
    subtitle: 'Book subtitle',
    options: []
}

const numbers = [11, 22, 33]

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
        <p>{object.options.length > 0 ? 'Opcje:' : 'Brak opcji'}</p>
        <p>{object.options.length}</p>
        <form onSubmit={onFormSubmit}>
            <input type="text" name="option"/>
            <button>Add option</button>
            <button onClick={wipeData}>Wipe options</button>
            {/* {
                numbers.map((number) => {
                    return <p key={number}>Number: {number}</p>
                })
            } */}
            <ol>
                {object.options.map((option) => {
                    return <li key={option}>Opcja: {option}</li>
                })}
            </ol>
        </form>
    </div>
)
ReactDOM.render(template, appRoot)
}

const appRoot = document.getElementById('app')

renderFormApp()



