import React from 'react'
import { connect } from 'react-redux'

// Material UI
import IconButton from 'material-ui/IconButton'
import MenuIcon from 'material-ui/svg-icons/navigation/menu'
import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'

// actions
import { toggleDrawer } from '../../actions/theme-actions'

const ToggleDrawerButton = props => (
  <div>
    <IconButton onTouchTap={props.toggleDrawer} >
      <MenuIcon />
    </IconButton>
    <Drawer open={props.isOpenDrawer}>
      <MenuItem onTouchTap={props.toggleDrawer}>Close</MenuItem>
      <MenuItem>Menu Item</MenuItem>
      <MenuItem>Menu Item 2</MenuItem>
    </Drawer>
  </div>
)

const mapStateToProps = (state, ownProps) => ({
  isOpenDrawer: state.theme.isOpenDrawer,
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  toggleDrawer: () => dispatch(toggleDrawer()),
})

export default connect(mapStateToProps, mapDispatchToProps)(ToggleDrawerButton)
