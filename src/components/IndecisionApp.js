import React from 'react'
import AddOption from './AddOption'
import Options from './Options'
import Action from './Action'
import Header from './Header'

export default class IndecisionApp extends React.Component {
    constructor(props){
        super(props)
        this.handleRemoveAll = this.handleRemoveAll.bind(this)
        this.handlePick = this.handlePick.bind(this)
        this.handleDeleteOption = this.handleDeleteOption.bind(this)
        this.handleAddOption = this.handleAddOption.bind(this)
        this.state = {
           options: props.options
        }
    }
    componentDidMount(){
        try {
            const json = localStorage.getItem('options')
            const options = JSON.parse(json)
            
            if (options){
                this.setState(()=> ({options}))
            }
        } catch (e) {
            //Do Nothing :)
        }
        
    }
    componentDidUpdate(prevProps, prevState){
            if (prevState.options.length != this.state.options.length){
                const json = JSON.stringify(this.state.options)
                localStorage.setItem('options', json)
            }
    }
    componentWillUnmount(){
        console.log('component will unmount')
    }
    handleRemoveAll() {
        this.setState(() => ({options: []}))  
    }
    handleAddOption(option){
        if(!option){
            return 'Enter valid value'
        } else if (this.state.options.indexOf(option) > -1){
            return 'This option already exists'
        } 
        this.setState((prevState)=> ({options: prevState.options.concat([option])}))
    }
    handleDeleteOption(optionToRemove) {
        this.setState((prevState)=> ({
            options: prevState.options.filter((option)=> optionToRemove !== option )
        }))
    }
    handlePick() {
        const randomOption = Math.floor(Math.random() * this.state.options.length)  
        const option = this.state.options[randomOption]
        alert(option)
    }
    render(){
        const subtitle = 'Randomize your tasks'
        
        return(
        <div>
            <Header subtitle={subtitle}/>
            <Action
             hasOptions={this.state.options.length > 0}
             handlePick={this.handlePick}
             />
            <Options
             options={this.state.options}
             handleRemoveAll={this.handleRemoveAll}
             handleDeleteOption={this.handleDeleteOption}
            />
            <AddOption
             handleAddOption={this.handleAddOption}
            />
        </div>

        )
    }
}

IndecisionApp.defaultProps = {
    options: []
}