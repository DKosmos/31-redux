'use strict';

import React from 'react';
import {connect} from 'react-redux';
import {categoryUpdate, categoryDelete} from '../../action/category-actions.js';
import CategoryForm from '../category-form';
import CategoryItem from '../category-item';
import category from '../../reducer/category.js';

class CategoryList extends React.Component{
  constructor(props){
    super(props);
    this.renderList = this.renderList.bind(this);
  }

  renderList(){
    return this.props.categories.map(item => 
      <CategoryItem
        catId={item.id}
        handleUpdate={this.props.categoryUpdate}
        handleDelete={this.props.categoryDelete}
        name={item.name}
        budget={item.budget}
        timestamp={item.timestamp} />
    )
  }

  render(){
    if(this.props.categories){
      return(
        <div className='category-list'>
          <h2>categories.</h2>
          <ul>{this.renderList}</ul>
        </div>
      )
    }
  }
}

const mapStateToProps = (state) => {
  return {
    categories: state
  }
}

const mapDispatchToProps = (dispatch, getState) => {
  return{
    categoryUpdate: (category) => dispatch(categoryUpdate(category)),
    categoryDelete: (category) => dispatch(categoryDelete(category))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryList);