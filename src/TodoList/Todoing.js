import React, { Component } from 'react'

export default class Todoing extends Component {
    constructor(){
        super();
        this.state={
            
        }
    }
    render() {
        return (
            <div>
                <h3>正在进行-----{this.props.todoCount}</h3>
                <ul>
                    {
                        this.props.todo.map((item,index)=>{
                            if(!item.done){
                                return (
                                    <li key={index} style={{background:'white'}}>
                                        <input type="checkbox" checked={item.done} style={{width:20,height:20}} onChange={()=>this.props.chaTodo(index)}/>
                                        {item.todo}---<button style={{width:20,height:20,background:'#ddd',border:1}} onClick={()=>this.props.delTodo(index)}></button>
                                    </li>
                                )
                            }
                        })
                    }
                </ul>
            </div>
        )
    }
}
