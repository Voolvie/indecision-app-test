const appRoot = document.getElementById('app')
class IndecisionApp extends React.Component {
    constructor(props){
        super(props)
        this.handleRemoveAll = this.handleRemoveAll.bind(this)
        this.handlePick = this.handlePick.bind(this)
        this.handleAddOption = this.handleAddOption.bind(this)
        this.state = {
           options:  []
        }
    }
    handleRemoveAll() {
        this.setState(()=> {
            return{
                options: []
            }
        })   
    }
    handleAddOption(option){
        if(!option){
            return 'Enter valid value'
        } else if (this.state.options.indexOf(option) > -1){
            return 'This option already exists'
        } 
        this.setState((prevState)=> {
            return{
             options: prevState.options.concat([option])    
            }
        })
    }
    handlePick() {
        const randomOption = Math.floor(Math.random() * this.state.options.length)  
        const option = this.state.options[randomOption]
        alert(option)
    }
    render(){
        const title = 'Indecision'
        const subtitle = 'Randomize your tasks'
        
        return(
        <div>
            <Header title={title} subtitle={subtitle}/>
            <Action
             hasOptions={this.state.options.length > 0}
             handlePick={this.handlePick}
             />
            <Options
             options={this.state.options}
             handleRemoveAll={this.handleRemoveAll}
            />
            <AddOption
             handleAddOption={this.handleAddOption}
            />
        </div>

        )
    }
}

const Header = (props) => {
    return(
        <div>
            <h1>{props.title}</h1>
            <h2>{props.subtitle}</h2>
        </div>
    ) 
}

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

const Action = (props) => {
    return(
        <div>
            <button
            onClick={props.handlePick}
            disabled={!props.hasOptions}
            >
            Randomize
            </button>
        </div>
    )
}

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

const Options = (props) => {
    return(
        <div>
            <button onClick={props.handleRemoveAll}>Remove all</button>
            Options length: {props.options.length}
            {props.options.map((option) => <Option key={option} optionText={option}/>)}
        </div>
    )
}
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

const Option = (props) => {
    return(
        <div>
           Option: {props.optionText}
        </div>
    )
}
// class Option extends React.Component {
//     render(){
//         return(
//             <div>
//                Option: {this.props.optionText}
//             </div>
//         )
//     }
// }
class AddOption extends React.Component {
    constructor(props){
        super(props)
        this.handleAddOption = this.handleAddOption.bind(this)
        this.state = {
            error: undefined
        }
    }
    handleAddOption(e){
        e.preventDefault()
        
        const option = e.target.elements.option.value.trim()
        const error = this.props.handleAddOption(option)

        this.setState(() => {
            return { error  }
        })

    }
    render(){
        return(
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAddOption}>
                <input type="text" name="option"></input>
                <button>Add option</button>
                </form>
            </div>
        )
    }
}

// const User = (props) => {
//     return (
//         <div>
//             <p>Name: {props.name}</p>
//             <p>Age: {props.age}</p>
//         </div>
//     )
// }

ReactDOM.render(<IndecisionApp />, document.getElementById('app'))