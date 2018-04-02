'use strict';

import React from 'react';
import {connect} from 'react-redux';
import {categoryUpdate, categoryDelete} from '../../action/category-actions.js';
import {expCreate} from '../../action/exp-actions.js';
import CategoryForm from '../category-form';
import ExpForm from '../exp-form';
import ExpItem from '../exp-item';
import category from '../../reducer/category.js';

class CategoryItem extends React.Component{
  render(){
    let {category, categoryUpdate, categoryDelete} = this.props;
    return(
      <section className='category-item'>
        <div>
          <div className='content'>
            <h2>Category Name: {category.name}</h2>
            <h3>Budget: {category.budget}</h3>
            <button onClick={() => categoryDelete(category)}>X</button>
          </div>
          <div className='edit'>
            <CategoryForm
              buttonText='update'
              category={category}
              onComplete={categoryUpdate} />
          </div>
          <div className='exp-form'>
            <ExpForm
              buttonText='new expense'
              category={category}
              onComplete={this.props.expCreate} />
          </div>
          {this.props.exp[this.props.category.id].map(item =>
            <ExpItem key={item.id} category={this.props.category} expense={item} />)}
        </div>
      </section>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    categories: state.categories,
    exp: state.exp
  }
}

let mapDispatchToProps = dispatch => ({
  categoryUpdate: (category) => dispatch(categoryUpdate(category)),
  categoryDelete: (category) => dispatch(categoryDelete(category)),
  expCreate: (expense) => dispatch(expCreate(expense))
});

export default connect(mapStateToProps, mapDispatchToProps)(CategoryItem);