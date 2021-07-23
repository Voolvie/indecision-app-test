import React from 'react'
import ReactDOM from 'react-dom'
import IndecisionApp from './components/IndecisionApp'
const appRoot = document.getElementById('app')
ReactDOM.render(<IndecisionApp />, document.getElementById('app'))

// class Header extends React.Component {
//    render() {
//        return(
//            <div>
//                <h1>{this.props.title}</h1>
//                <h2>{this.props.subtitle}</h2>
//            </div>
//        )
//    }
// }



// class Action extends React.Component {

//     render() {
//         return(
//             <div>
//                 <button
//                 onClick={this.props.handlePick}
//                 disabled={!this.props.hasOptions}
//                 >
//                 Randomize
//                 </button>
//             </div>
//         )
//     }
// }


// class Options extends React.Component {

//     render() {
//         return(
//             <div>
//                 <button onClick={this.props.handleRemoveAll}>Remove all</button>
//                 Options length: {this.props.options.length}
//                 {this.props.options.map((option) => <Option key={option} optionText={option}/>)}
//             </div>
//         )
//     }
// }


// class Option extends React.Component {
//     render(){
//         return(
//             <div>
//                Option: {this.props.optionText}
//             </div>
//         )
//     }
// }


// const User = (props) => {
//     return (
//         <div>
//             <p>Name: {props.name}</p>
//             <p>Age: {props.age}</p>
//         </div>
//     )
// }

