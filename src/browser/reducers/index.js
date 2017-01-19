/**
 * Root Reducer
 */
import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

// Import Reducers
import auth from './auth-reducer'
import main from './main-reducer'
import panel from './panel-reducer'

// Combine all reducers into one root reducer
export default combineReducers({
  auth,
  main,
  panel,
  routing: routerReducer,
})
