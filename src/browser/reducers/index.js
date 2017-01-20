/**
 * Root Reducer
 */
import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { reducer as formReducer } from 'redux-form'

// Import Reducers
import auth from './auth-reducer'
import user from './user-reducer'

// Combine all reducers into one root reducer
export default combineReducers({
  auth,
  user,
  form: formReducer,
  routing: routerReducer,
})
