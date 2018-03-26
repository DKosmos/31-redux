'use strict';

import React from 'react';
import CategoryForm from '../category-form';

class CategoryItem extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      editing: false,
      name: this.props.name,
      budget: this.props.budget,
      catId: this.props.catId,
      timestamp: this.props.timestamp
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleSubmit(category){
    this.props.handleSubmit(category);
  }

  handleDelete(e){
    this.props.handleDelete(Object.assign({},this.state));
  }

  render(){
    return(
      <li key={this.props.catId} className='catitem'>
        {!this.state.editing ?
          <div>
            <div onClick={() => this.setState({editing: true})}>
              <h4>{this.props.name}</h4>
              <p>Budget: {this.props.budget}</p>
            </div>
            <button onClick={this.handleDelete}>Delete</button>
          </div>
          :
          <CategoryForm
            category={this.state}
            onComplete={this.handleSubmit}
            buttonText='Update Category' />
        }
      </li> 
    )
  }
}

export default CategoryItem;