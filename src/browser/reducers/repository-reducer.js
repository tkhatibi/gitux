import * as TYPES from '../actions'

const initialState = {
  current: null,
  forkFilter: false,
  search: {
    result: null,
    // lastTime: Date.now(),
    requesting: false,
    error: null,
  },
}

export default function(state = initialState, action) {
  switch (action.type) {
    case `${TYPES.GET_CURRENT_USER_REPOSITORIES}_SUCCESS`:
      return {
        ...state,
        current: action.response.data,
      }
    case `${TYPES.TOGGLE_FORK_FILTER}`:
      return {
        ...state,
        forkFilter: !state.forkFilter,
      }
    case `${TYPES.SEARCH_REPOSITORIES}_REQUEST`:
      return {
        ...state,
        search: {
          ...state.search,
          requesting: true,
        },
      }
    case `${TYPES.SEARCH_REPOSITORIES}_SUCCESS`:
      return {
        ...state,
        search: {
          ...state.search,
          result: action.response.data,
          requesting: false,
        },
      }
    case `${TYPES.SEARCH_REPOSITORIES}_FAILURE`:
      return {
        ...state,
        search: {
          ...state.search,
          error: action.error,
          requesting: false,
        },
      }
    default:
      return state
  }
}
