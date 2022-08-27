import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import TodoInput from './component/TodoInput'
import TodoList from './component/TodoList'


export default class App extends Component {
    state={
        items:[],
        id:0,
        item: "",
        editItem:false
    }
    handleItem = e => {
        this.setState({
      item: e.target.value
        })
    }
    handleSubmit = e => {
        e.preventDefault();

        const newItem = {

            item: this.state.item,
            id: this.state.id
        }
        const updateItems = [...this.state.items, newItem];

        this.setState({
            items:updateItems,
            id:this.state.id +111,
            item: "",
            editItem: false
        })
    }
    clearList = () => {
      this.setState({
       items:[] 
      })
    }
   handleDelete = (id) => {
     const sortedItems = this.state.items.filter(item => item.id !== id)
     this.setState({
       items:sortedItems
     })
   } 
   
   handleEdit = (id) => {
     const filterItems = this.state.items.filter(item=> item.id !== id)
     const selectedItem = this.state.items.find(item=>item.id === id )
     this.setState({
       items:filterItems,
       item:selectedItem.item,
       editItem:true,
       id:id
     })
    
   }
    
  render() {
    return (
      <div className='container'>
      <div className='row'>
      <div  className='col-10 mx-auto col-md-8 mt-4'>
      <h3 className='text-capitalize text-center'>
      Todo-Input     
      </h3>
      <TodoInput 
      item={this.state.item} 
      handleItem={this.handleItem} 
      handleSubmit={this.handleSubmit}
      editItem={this.state.editItem}
      />

        <TodoList 
        items={this.state.items} 
        clearList={this.clearList} 
        handleDelete={this.handleDelete} 
        handleEdit={this.handleEdit}
       />   
      </div>  
        </div> 
      </div>
    )
  }
}
