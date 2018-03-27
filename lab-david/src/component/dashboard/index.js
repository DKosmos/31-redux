'use strict';

import React from 'react';
import {connect} from 'react-redux';
import {categoryCreate} from '../../action/category-actions.js';
import CategoryForm from '../category-form';
import CategoryList from '../category-list';
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
        <CategoryList />
      </main>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    categories: state
  }
}

const mapDispatchToProps = (dispatch, getState) => {
  return {
    categoryCreate: (category) => dispatch(categoryCreate(category))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);