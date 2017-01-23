import React from 'react'
import { connect } from 'react-redux'

// Material UI
import MuiDrawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'

// componetns
import SearchRepositoriesForm from './SearchRepositoriesForm'

// actions
import { toggleDrawer } from '../../actions/theme-actions'
import { navigateToSearch } from '../../actions/repository-actions'

const Drawer = props => (
  <MuiDrawer open={props.isOpenDrawer} docked={false}>
    <SearchRepositoriesForm onSubmit={props.handleSearchBox} />
    <MenuItem onTouchTap={props.toggleDrawer}>Close</MenuItem>
  </MuiDrawer>
)

const mapStateToProps = (state, ownProps) => ({
  isOpenDrawer: state.theme.isOpenDrawer,
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  toggleDrawer: () => dispatch(toggleDrawer()),
  handleSearchBox: ({query}) => {
    dispatch(navigateToSearch(query))
    dispatch(toggleDrawer())
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(Drawer)
