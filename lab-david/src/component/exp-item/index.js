'use strict';

import React from 'react';
import {connect} from 'react-redux';
import {expUpdate, expDelete} from '../../action/exp-actions.js';
import ExpForm from '../exp-form';

class ExpItem extends React.Component{
  render(){
    let{category, expense, expUpdate, expDelete} = this.props;
    return(
      <section className='exp-item'>
        <div className='content'>
          <h4>{expense.name}</h4>
          <h5>{expense.amt}</h5>
          <button onClick={() => expDelete(expense)}>X</button>
        </div>
        <div className='edit'>
          <ExpForm
            buttonText='update expense'
            category={category}
            expense={expense}
            onComplete={this.props.expUpdate} />
        </div>
      </section>
    )
  }
}

let mapDispatchToProps = dispatch => ({
  expUpdate: (expense) => dispatch(expUpdate(expense)),
  expDelete: (expense) => dispatch(expDelete(expense))
});

export default connect(null, mapDispatchToProps)(ExpItem);