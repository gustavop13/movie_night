import React from 'react';

class RoomForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    this.props.onNumEnter(this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Enter room number:
          <input type="text" value={this.state.value} onChange={this.handleChange} maxLength='4'/>
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default RoomForm;
