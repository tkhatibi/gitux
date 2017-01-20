/**
 * After passing it once to applyMiddleware(...middlewares),
 * you can write all your API-calling action creators the simple way
 *
 * @example this.props.getListAction()
 * @see http://redux.js.org/docs/recipes/ReducingBoilerplate.html
 */
export default ({ dispatch, getState }) => next => action => {
  const {
    type,
    callAPI,
    shouldCallAPI = () => true,
    ...payload
  } = action

  if (!type || !callAPI) {
    // Normal action: pass it on
    return next(action)
  }

  if (typeof type !== 'string') {
    throw new Error('Expected type to be a string.')
  }

  if (typeof callAPI !== 'function') {
    throw new Error('Expected callAPI to be a function.')
  }

  // if (current route rendered by server) {
  //   return
  // }

  if (!shouldCallAPI(getState())) {
    return
  }

  const REQUEST = `${type}_REQUEST`
  const SUCCESS = `${type}_SUCCESS`
  const FAILURE = `${type}_FAILURE`

  // next({ ...payload, type: REQUEST })
  dispatch({ ...payload, type: REQUEST })
  
  // return callAPI
  return callAPI(payload)
    .then(response => {
      // next({ ...payload, response, type: SUCCESS })
      dispatch({ ...payload, response, type: SUCCESS })
      
      return true
    })
    .catch(error => {
      // next({ ...payload, error, type: FAILURE })
      dispatch({ ...payload, error, type: FAILURE })
      
      // Another benefit is being able to log all failures here 
      console.log(error)
      return false
    })
}
