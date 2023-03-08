import React, { Component } from 'react'
import CardList from './components/card-list/card-list.components';
import SearchBox from './components/search-box/saerch-box.components';


export class ClassComp extends Component {

    constructor(){
      console.log('constructor')
        super()
        this.state = {
          monsters: [],
          searchField:''
        };
    }

    componentDidMount(){
      console.log('componentDidMount')
      fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then((users) => this.setState(()=>{
          return {monsters: users}
        }, () => {
          console.log(this.state)
        }
        ))
    }

 onSearchChange = (event) => {
  const searchField = event.target.value.toLocaleLowerCase();

  this.setState(()=>{
    return {searchField}
  })
  }

  render() {

    const {monsters, searchField} = this.state
    const {onSearchChange} = this

    const filteredMonsters = monsters.filter((monster)=>{
      return monster.name.toLocaleLowerCase().includes(this.state.searchField);
  });
    // console.log('render')
    return (
      <div>
        <h1 className='app-title'>Monsters Rolodox</h1>
        <SearchBox onChangeHandler={onSearchChange} 
        placeholder='search monsters' className='monsters-search-box' />
        {/* <input className='search-box' type='search' 
        placeholder='search monsters' onChange={onSearchChange}
        /> */}
{/*   
        {filteredMonsters.map((monster)=>{
            return (<h1 key={monster.id}>{monster.name}</h1>)
        })} */}
        <CardList monsters={filteredMonsters}/>
      </div>
    )
  }
}

export default ClassComp