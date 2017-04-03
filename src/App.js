import React from 'react'
import TodoForm from './TodoForm'
import ItemList from './ItemList'
import {generate as id} from 'shortid'

const styles = {
  form: {
    width:400,
    marginTop:200,
    background: 'rgb(244,244,244)',
    height:500,
    margin:'auto',
    
  },
  title: {
    fontSize:100,
    textAlign:'center',
    fontWeight:100,
    color:'rgb(235,218,218)',
    paddingLeft:20,
  },
}


export default React.createClass({
  getInitialState() {
    return {
      items: []
    }
  },
  updateList(task){
    this.setState({
      items: [...this.state.items, {
        title: task,
        id: "id" + id()
      }]
    })  
  },
  deleteItem(id){
    this.setState({
      items: this.state.items.filter(item=>{
        return item.id !== id
      })
    })
  },
  render() {
    return (
      <div style={styles.form}>
        <h1 style={styles.title}>todos</h1>
        <TodoForm updateList={this.updateList} />
        <ItemList deleteItem={this.deleteItem} items={this.state.items} />
      </div>
    )

  }
})