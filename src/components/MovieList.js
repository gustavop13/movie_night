import React from 'react';

class MovieList extends React.Component {
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
    this.props.onAddMovie(this.props.rn, this.state.value);
    this.setState({value: ''});
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        {this.props.movies.map((item, index) => (
          <button key={index}>
            {item}
          </button>))}
        <label>
          <input type="text" placeholder='Other Movie' value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Add Movie" />
      </form>
    );
  }
}

export default MovieList;
