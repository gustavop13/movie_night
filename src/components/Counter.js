import React from 'react';
import { connect } from 'react-redux';

function Counter(props) {
  return (
    <div className='boxu'>
      <button onClick={props.onCreate}>Create</button>
      <button onClick={props.onJoin}>Join</button>
    </div>
  )
}

function mapStateToProps(state) {
  return {
    count: state.count
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onIncrementClick: () => {
      const action = { type: 'INCREMENT'};
      dispatch(action);
    },
    onCreate: () => {
      const action = {type: 'CREATE'};
      dispatch(action);
    },
    onJoin: () => {
      const action = {type: 'JOIN'};
      dispatch(action);
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
