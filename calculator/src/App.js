import {useReducer} from 'react';
import DigitBtn from './DigitBtn';
import OperationBtn from './OperationBtn';
import './styles.css';


export const ACTIONS = {
  ADD_DIGIT: 'add-digit',
  CHOOSE_OPERATION: 'choose-operation',
  CLEAR: 'clear',
  DELETE_DIGIT: 'delete-digit',
  EVALUATE: 'evaluate'
}
function reducer(state, {type, payload}) {
  switch(type) {
    case ACTIONS.ADD_DIGIT:
      if (payload.digit === '0' && state.currentOperand === '0') return state
      if (payload.digit === '.' && state.currentOperand.includes('.')) return state
      return {
        ...state,
        currentOperand: `${state.currentOperand || ''}${payload.digit}`
      }
    case ACTIONS.CLEAR:
      return {}
    case ACTIONS.CHOOSE_OPERATION:
      if (state.currentOperand == null && state.previousOperand == null) return state
      if (state.previousOperand == null) {
        return {
          ...state,
          operation: payload.operation,
          previousOperand: state.currentOperand,
          currentOperand: null,
        }
      }
  }
}

function App() {
  const [{currentOperand, previousOperand, operation}, dispatch] = useReducer(reducer, {})
  return (
    <div className="calculator-grid">
      <div className="output">
        <div className="previous-operand">{previousOperand} {operation}</div>
        <div className="current-operand">{currentOperand}</div>
      </div>
      <button className="span-two" onClick={() => dispatch({type: ACTIONS.CLEAR})}>AC</button>
      <button>DEL</button>
      <OperationBtn operation='÷' dispatch={dispatch }/>
      <DigitBtn digit='1' dispatch={dispatch }/>
      <DigitBtn digit='2' dispatch={dispatch }/>
      <DigitBtn digit='3' dispatch={dispatch }/>
      <OperationBtn operation='*' dispatch={dispatch }/>
      <DigitBtn digit='4' dispatch={dispatch }/>
      <DigitBtn digit='5' dispatch={dispatch }/>
      <DigitBtn digit='6' dispatch={dispatch }/>
      <OperationBtn operation='+' dispatch={dispatch }/>
      <DigitBtn digit='7' dispatch={dispatch }/>
      <DigitBtn digit='8' dispatch={dispatch }/>
      <DigitBtn digit='9' dispatch={dispatch }/>
      <OperationBtn operation='-' dispatch={dispatch }/>
      <DigitBtn digit='.' dispatch={dispatch }/>
      <DigitBtn digit='0' dispatch={dispatch }/>
      <button className="span-two">=</button>
    </div>
  )
}

export default App
// 21_13