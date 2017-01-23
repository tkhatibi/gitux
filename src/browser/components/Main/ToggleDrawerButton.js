import React from 'react'
import { connect } from 'react-redux'

// Material UI
import IconButton from 'material-ui/IconButton'
import MenuIcon from 'material-ui/svg-icons/navigation/menu'

// components
import Drawer from './Drawer'

// actions
import { toggleDrawer } from '../../actions/theme-actions'

const ToggleDrawerButton = props => (
  <div>
    <IconButton onTouchTap={props.toggleDrawer} >
      <MenuIcon />
    </IconButton>
    <Drawer />
  </div>
)

const mapStateToProps = (state, ownProps) => ({
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  toggleDrawer: () => dispatch(toggleDrawer()),
})

export default connect(mapStateToProps, mapDispatchToProps)(ToggleDrawerButton)
