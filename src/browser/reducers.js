/**
 * Root Reducer
 */
import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

// Import Reducers

// Combine all reducers into one root reducer
export default combineReducers({
  routing: routerReducer,
})
