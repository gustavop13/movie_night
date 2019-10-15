import React from 'react';
import { connect } from 'react-redux';
import MovieList from './MovieList';

function Counter(props) {
  if(props.place === 'lobby') {
    return (
      <div className='boxu'>
        <button onClick={props.onCreate}>Create</button>
        <button onClick={props.onJoin}>Join</button>
      </div>
    )
  } else if(props.place === 'hallway') {
    return (
      <div className='boxu'>
        <input id='rn' placeholder='Enter room number' onKeyDown={props.join_room('1234')}></input>
        <button onClick={props.onExit}>Exit</button>
      </div>
    )
  } else if(props.place === 'room') {
    return (
      <div className='boxu'>
        <div>Room Number: {props.room_number}</div>
        <MovieList movies={props.movies}/>
        <input placeholder='Other Movie'></input>
        <button onClick={props.onExit}>Exit</button>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    movies: state.movies,
    place: state.place,
    room_number: state.room_number
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onCreate: () => {
      const action = {type: 'server/CREATE'};
      dispatch(action);
    },
    onJoin: (room_number) => {
      const action = {type: 'server/JOIN'};
      dispatch(action);
    },
    join_room: (room_number) => {
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
