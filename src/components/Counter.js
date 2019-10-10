import React from 'react';
import { connect } from 'react-redux';
import MovieList from './MovieList';

function Counter(props) {
  if(props.joined) {
    return (
      <div className='boxu'>
        <MovieList movies={props.movies}/>
        <input placeholder='Other Movie'></input>
        <button onClick={props.onExit}>Exit</button>
      </div>
    )
  } else {
    return (
      <div className='boxu'>
        <button onClick={props.onCreate}>Create</button>
        <button onClick={props.onJoin}>Join</button>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    movies: state.movies,
    joined: state.joined
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onCreate: () => {
      const action = {type: 'server/CREATE'};
      dispatch(action);
    },
    onJoin: () => {
      const action = {type: 'server/JOIN'};
      dispatch(action);
    },
    onExit: () => {
      const action = {type: 'server/EXIT'};
      dispatch(action);
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
