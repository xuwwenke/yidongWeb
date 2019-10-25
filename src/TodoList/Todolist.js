import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Todoing from './Todoing';
import Todoinput from './Todoinput';
import Todone from './Todone';

// var t=0;
export default class Todolist extends Component {
    constructor(){
        super();
        this.state={
            todo:JSON.parse(localStorage.getItem('t'))||[],
            todoCount:0,
            doneCount:0
        }
    }
    //添加
    add=(msg)=>{
        var value={todo:msg,done:false};
        var todo=[...this.state.todo,value];
        this.Count();
        this.setState(
            {todo:todo},
            this.Count.bind(this)
        )
        // var time=new Date().getTime();
        // t=time;
        localStorage.setItem('t',JSON.stringify(todo));
        // console.log(todo.length);
    }
    //删除
    del=(a)=>{
        var todo=[...this.state.todo];
        todo.splice(a,1);
        this.setState(
            {todo:todo},
            this.Count.bind(this)
        )
        // localStorage.clear();
        // localStorage.removeItem('re',JSON.stringify(todo));
        localStorage.setItem('t',JSON.stringify(todo));
    }
    //修改
    changDone=(b)=>{
        var todo=[...this.state.todo];
        if(todo[b].done==true){
            todo[b].done=false;
        }else{
            todo[b].done=true;
        }
        this.setState(
            {todo:todo},
            this.Count.bind(this)
        )
        localStorage.setItem('t',JSON.stringify(todo));
    }
    //统计数量
    Count=()=>{
        var todoCount=0,doneCount=0;
        this.state.todo.map((item)=>{
            if(!item.done){
                todoCount++;
            }else{
                doneCount++;
            }
        });
        this.setState(
            {todoCount:todoCount,doneCount:doneCount}
        )
    }
    //
    componentDidMount() {
        var todo=JSON.parse(localStorage.getItem('t'))
        if(todo){
            this.setState({
                todo: todo
            })
        }
        this.Count();
    }
    render() {
        return (
            <div>
                <h1>TodoList</h1>
                <Todoinput addTodo={this.add}/>
                <Todoing todo={this.state.todo} delTodo={this.del} chaTodo={this.changDone} todoCount={this.state.todoCount}/>
                <Todone todo={this.state.todo} delTodo={this.del} chaTodo={this.changDone} doneCount={this.state.doneCount}/>
            </div>
        )
    }
}
