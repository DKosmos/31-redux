'use strict';

import React from 'react';

class ExpForm extends React.Component{
  constructor(props){
    super(props);
    let categoryID = this.props.category.id;
    this.state = this.props.expense ? {...props.expense} : {name: '', amt: 0, categoryID};
    
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillReceiveProps(props){
    if(props.category){
      this.setState(props.category);
    }
    if(props.expense){
      this.setState(props.expense);
    }
  }

  handleChange(e){
    this.setState({[e.target.name]: e.target.value});
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.onComplete({...this.state});

    if(!this.props.expense){
      this.setState({name: '', amt: 0})
    }
  }

  render(){
    return(
      <form className='exp-form' onSubmit={this.handleSubmit}>
        <input
          name='name'
          type='text'
          placeholder='expense name'
          value={this.state.name}
          onChange={this.handleChange} />
        <input
          name='amt'
          type='number'
          placeholder='expense amount'
          value={this.state.amt}
          onChange={this.handleChange} />
        <button type='submit'>{this.props.buttonText}</button>
      </form>
    )
  }
}

export default ExpForm;