import React, { Component } from 'react'
import './search-box.styles.css';

export class SearchBox extends Component {
  render() {
    return (
      <div>
        <input 
            className='search-box' 
            type={`search-box ${this.props.className}`}
            placeholder={this.props.placeholder}
            onChange={this.props.onChangeHandler}
         />
      </div>
    )
  }
}

export default SearchBox