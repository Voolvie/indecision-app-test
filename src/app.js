const appRoot = document.getElementById('app')
class IndecisionApp extends React.Component {
    render(){
        const title = 'Indecision'
        const subtitle = 'Randomize your tasks'
        const options = ['one', 'two', 'three']
        return(
        <div>
            <Header title={title} subtitle={subtitle}/>
            <Action/>
            <Options options={options}/>
            <AddOption/>
        </div>

        )
    }
}

class Header extends React.Component {
   render() {
       return(
           <div>
               <h1>{this.props.title}</h1>
               <h2>{this.props.subtitle}</h2>
           </div>
       )
   }
}
class Action extends React.Component {
    handlePick(){
        alert('handlePick')
    }
    render() {
        return(
            <div>
                <button onClick={this.handlePick}>Randomize</button>
            </div>
        )
    }
}
class Options extends React.Component {
    handleRemoveAll(){
        alert('Removing all')
    }
    render() {
        return(
            <div>
                <button onClick={this.handleRemoveAll}>Remove all</button>
                Options length: {this.props.options.length}
                {this.props.options.map((option) => <Option key={option} optionText={option}/>)}
                {/* {this.props.options.map((option) => {
                    return <p key={option}>Option: {option}</p>
                })} */}
            </div>
        )
    }
}
class Option extends React.Component {
    render(){
        return(
            <div>
               Option: {this.props.optionText}
            </div>
        )
    }
}
class AddOption extends React.Component {
    handleAddOption(e){
        e.preventDefault()
        
        const option = e.target.elements.option.value.trim()

        if (option) {
            alert(option)
        }
    }
    render(){
        return(
            <div>
                <form onSubmit={this.handleAddOption}>
                <input type="text" name="option"></input>
                <button>Add option</button>
                </form>
            </div>
        )
    }
}
ReactDOM.render(<IndecisionApp />, document.getElementById('app'))