import React, { Component } from "react";
class TodoItem extends Component{
    constructor(props){
        super(props);
        this.removeitem = this.removeitem.bind(this);
    }

    //子组件想向父组件传值，要调用父组件传递过来的方法
    removeitem(){
       this.props.delete(this.props.index)
     
    }

    render(){
        const {content} = this.props;
        return(
            <div onClick={this.removeitem}>{content}</div>
        )
    }

}
export default TodoItem;