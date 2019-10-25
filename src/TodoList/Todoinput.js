import React, { Component } from 'react'

export default class Tdoinput extends Component {
    constructor(){
        super();
        this.state={
            
        }
    }
    handleInput=(e)=>{
        if(e.keyCode === 13){
            this.props.addTodo(e.target.value);
        }
    }
    handleChange=(e)=>{
        this.setState({
            n1: e.target.value
        })
    }
    render() {
        return (
            <div>
                <input name="n1" onChange={this.handleChange} onKeyDown={(e)=>this.handleInput(e)} type="text"/>
            </div>
        )
    }
}
