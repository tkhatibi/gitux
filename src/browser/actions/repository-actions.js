import { browserHistory } from 'react-router'

import * as TYPES from '.'
import axios from '../lib/expands/axios'

export const getCurrentUserRepositories = (params = {
  visibility : 'all',
  // Can be one of all, public, or private
  
  affiliation : 'owner,collaborator,organization_member',
  // Comma-separated list of values.
  
  type : 'all',
  // Can be one of all, owner, public, private, member. 
  // Will cause a 422 error if used in the same request as visibility or affiliation.
  
  sort : 'full_name',
  // Can be one of created, updated, pushed, full_name
  
  direction : 'asc',
  // Can be one of asc or desc.
  // when using full_name: asc; otherwise desc
}) => {
  if (params.type) {
    delete params.visibility
    delete params.affiliation
  }
  return {
    type: TYPES.GET_CURRENT_USER_REPOSITORIES,
    shouldCallAPI: state => state.repository.current === null,
    callAPI: () => axios().get(`/user/repos`, { params }),
    params,
  }
}

export const search = query => ({
  type: TYPES.SEARCH_REPOSITORIES,
  callAPI: () => axios().get(`/search/repositories?q=${encodeURI(query)}`),
  query,
})

export const navigateToSearch = q => (dispatch, getState) => {
  browserHistory.push({pathname: '/search', query: {q}})
}
