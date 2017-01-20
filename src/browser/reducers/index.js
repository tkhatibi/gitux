/**
 * Root Reducer
 */
import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { reducer as formReducer } from 'redux-form'

// Import Reducers
import auth from './auth-reducer'

// Combine all reducers into one root reducer
export default combineReducers({
  auth,
  form: formReducer,
  routing: routerReducer,
})
