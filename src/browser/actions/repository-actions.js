import * as TYPES from '.'
import axios from '../lib/expands/axios'

export const getCurrentUserRepositories = (parameters = {
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
}) => ({
  type: TYPES.GET_CURRENT_USER_REPOSITORIES,
  shouldCallAPI: state => state.repository.current === null,
  callAPI: () => axios().get(`/user/repos`, parameters),
  parameters,
})
