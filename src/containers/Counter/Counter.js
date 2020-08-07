import React from 'react'
import { connect } from 'react-redux'
import * as actionTypes from '../../store/actions'

import CounterControl from '../../components/CounterControl/CounterControl'
import CounterOutput from '../../components/CounterOutput/CounterOutput'

const Counter = ({
  onIncrementCounter,
  onDecrementCounter,
  onAddCounter,
  onSubtractCounter,
  ctr,
  storedResults,
  onStoreResult,
  onDeleteResult,
}) => {
  return (
    <div>
      <CounterOutput value={ctr} />
      <CounterControl label='Increment' clicked={onIncrementCounter} />
      <CounterControl label='Decrement' clicked={onDecrementCounter} />
      <CounterControl label='Add 10' clicked={onAddCounter} />
      <CounterControl label='Subtract 15' clicked={onSubtractCounter} />
      <hr />
      <button onClick={() => onStoreResult(ctr)}>Store Result</button>
      <ul>
        {storedResults.map((str) => (
          <li key={str.id} onClick={() => onDeleteResult(str.id)}>
            {str.value}
          </li>
        ))}
      </ul>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    ctr: state.ctrr.counter,
    storedResults: state.resr.results,
  }
}

// this needs to be moved into the actions folder
const mapDispatchToProps = (dispatch) => {
  return {
    onIncrementCounter: () => dispatch({ type: actionTypes.INCREMENT }),
    onDecrementCounter: () => dispatch({ type: actionTypes.DECREMENT }),
    onAddCounter: () => dispatch({ type: actionTypes.ADD, payload: 10 }),
    onSubtractCounter: () =>
      dispatch({ type: actionTypes.SUBTRACT, payload: 15 }),
    onStoreResult: (result) =>
      dispatch({ type: actionTypes.STORE_RESULT, payload: result }),
    onDeleteResult: (id) =>
      dispatch({ type: actionTypes.DELETE_RESULT, payload: id }),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)
