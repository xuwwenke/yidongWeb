import React, { Component } from 'react'

export default class Todone extends Component {
    constructor(){
        super();
        this.state={

        }
    }
    render() {
        return (
            <div>
                <h3>已经完成-----{this.props.doneCount}</h3>
                <ul>
                    {
                        this.props.todo.map((item,index)=>{
                            if(item.done){
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
