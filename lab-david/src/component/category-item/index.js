'use strict';

import React from 'react';
import {connect} from 'react-redux';
import {categoryUpdate, categoryDelete} from '../../action/category-actions.js';
import CategoryForm from '../category-form';
import category from '../../reducer/category.js';

class CategoryItem extends React.Component{
  render(){
    let {category, categoryUpdate, categoryDelete} = this.props;
    return(
      <section className='category-item'>
        <div>
          <div className='content'>
            <h2>{category.name}</h2>
            <h3>{category.budget}</h3>
            <button onClick={() => categoryDelete(category)}>X</button>
          </div>
          <div className='edit'>
            <CategoryForm
              buttonText='update'
              category={category}
              onComplete={categoryUpdate} />
          </div>
        </div>
      </section>
    )
  }
}

let mapDispatchToProps = dispatch => ({
  categoryUpdate: (category) => dispatch(categoryUpdate(category)),
  categoryDelete: (category) => dispatch(categoryDelete(category))
});

export default connect(null, mapDispatchToProps)(CategoryItem);