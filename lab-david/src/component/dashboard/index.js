'use strict';

import React from 'react';
import {connect} from 'react-redux';
import {categoryCreate as categoryActionCreate} from '../../action/category-actions.js';
import CategoryForm from '../category-form';
import CategoryItem from '../category-item';
import category from '../../reducer/category.js';

class Dashboard extends React.Component{
  componentDidMount(){
    this.props.categoryCreate({name: 'test1', budget: 100});
    this.props.categoryCreate({name: 'test2', budget: 200});
  }

  render(){
    return(
      <main className='dashboard'>
        <h2>Dashboard</h2>
        <CategoryForm
          buttonText='create category'
          onComplete={this.props.categoryCreate} />
        {this.props.categories.map(item =>
          <CategoryItem key={item.id} category={item} />)}
      </main>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    categories: state.categories
  }
}

const mapDispatchToProps = (dispatch, getState) => {
  return {
    categoryCreate: (category) => dispatch(categoryActionCreate(category)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);