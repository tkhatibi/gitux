import * as types from '../actions'

const initialState = {
  current: null,
  others: null,
}

export default function(state = initialState, action) {
  switch (action.type) {
    case `${types.GET_CURRENT_USER_PROFILE}_SUCCESS`:
      return {...state, current: action.response.data}
    default:
      return state
  }
}
