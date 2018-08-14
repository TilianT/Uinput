import React from 'react';
import '../App.css';

class Input extends React.Component {
  constructor(props) {
    super(props);

    this.state = {inputClass: ""};

    this.changeHandler = this.changeHandler.bind(this);
    this.focusHandler = this.focusHandler.bind(this);
    this.blurHandler = this.blurHandler.bind(this);
  }
  blurHandler(event) {
    if(event.target.value.length === 0)
      this.setState({inputClass: ""});
  }
  focusHandler() {
    this.setState({inputClass: "active"});
  }
  changeHandler(event) {
    var newClass = "active";
    if(event.target.value.search('^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$') === 0) {
      newClass = "success";
    }
    this.setState({inputClass: newClass});
  }
  render() {
    return (
      <div  className={`input_block ${this.state.inputClass}`} >
        <span>{this.props.label}</span>
        <input className="input" onChange={this.changeHandler} onFocus={this.focusHandler} onBlur={this.blurHandler} />
      </div>
    )
  }
}

export default Input;