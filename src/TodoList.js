import React, { Component ,Fragment} from 'react'
import TodoItem from './TodoItem'


class TodoList extends Component{
    constructor(props){
        super(props);
        this.state={
            list:[],
            inputval:''
        }
        this.inputChange = this.inputChange.bind(this);
        this.btnClick = this.btnClick.bind(this);
        this.removeItem = this.removeItem.bind(this);
        this.rmItem = this.rmItem.bind(this);
    }
    inputChange(e){
        this.setState({
            inputval : e.target.value
        })
    }
    btnClick(){
       this.setState({
        list : [...this.state.list,this.state.inputval],
        inputval : ''
       })
    }
    removeItem(index){
        const list = [...this.state.list];
        list.splice(index,1)
       this.setState({list})
    }

    rmItem(index){
        const list = [...this.state.list];
        list.splice(index,1)
       this.setState({list})
    }
    getTodoItems(){
        return(
            this.state.list.map((item,index) => {
                //return <li key={index} onClick={this.removeItem.bind(this)}>{item}</li>
                return(
                    <TodoItem 
                    key={index} 
                    content={item} 
                    index={index} 
                    delete={this.rmItem}
                    />
        
                )
            })
        )
    }

    render(){

        return(
            <Fragment>
                <input value={this.state.inputval} onChange={this.inputChange}></input>
                <button style={{backgroundColor:'red',color:'#fff'}} onClick={this.btnClick}>add</button>
                <button className='red-btn'>css test</button>
                <div>
                    <ul>
                        {
                            //  this.state.list.map((item,index) => {
                            //     //return <li key={index} onClick={this.removeItem.bind(this)}>{item}</li>
                            //     return(
                            //         <TodoItem 
                            //         key={index} 
                            //         content={item} 
                            //         index={index} 
                            //         delete={this.rmItem}
                            //         />
                        
                            //     )
                            // })
                            this.getTodoItems()
                        }
                       
                    </ul>
                </div>
                </Fragment>
        )
    }
}
export default TodoList