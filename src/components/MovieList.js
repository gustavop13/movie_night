import React from 'react';
import { connect } from 'react-redux';

function Counter(props) {
  return props.movies.map((item, index) => (
    <div className="list" key={index}>
      {item}
    </div>
  ));
}

function mapStateToProps(state) {
  return {
    movies: state.movies
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onIncrementClick: () => {
      const action = { type: 'INCREMENT'};
      dispatch(action);
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
