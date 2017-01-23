import * as TYPES from '../actions'

const initialState = {
  current: null,
  others: null,
}

export default function(state = initialState, action) {
  switch (action.type) {
    case `${TYPES.GET_CURRENT_USER_REPOSITORIES}_SUCCESS`:
      return {...state, current: action.response.data}
    default:
      return state
  }
}
