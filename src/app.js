console.log('App is running')

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

let count = 0
const addOne = () => {
    count++
    renderCounterApp()
}
const minusOne = () => {
    count--
    renderCounterApp()
}
const reset = () => {
    count = 0
    renderCounterApp()
}

const appRoot = document.getElementById('app')



const renderCounterApp = () => {
    const templateThree = (

        <div>
            <h1>Count: {count}</h1>
            <button onClick={addOne}>+1</button>
            <button onClick={minusOne}>-1</button>
            <button onClick={reset}>reset</button>
        </div>
    )
    ReactDOM.render(templateThree, appRoot)
}

renderCounterApp()

