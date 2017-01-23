import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'

// Material UI
import IconMenu from 'material-ui/IconMenu'
import IconButton from 'material-ui/IconButton'
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert'
import MenuItem from 'material-ui/MenuItem'

// actions
import { logout } from '../../actions/auth-actions'

const LoggedUserMenu = props => (
  <IconMenu
    iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
    targetOrigin={{horizontal: 'right', vertical: 'top'}}
    anchorOrigin={{horizontal: 'right', vertical: 'top'}}
  >
    <MenuItem
      primaryText="Dashboard"
      containerElement={<Link to="/panel" />}
    />
    <MenuItem
      primaryText="Repositories"
      containerElement={<Link to="/panel/repos" />}
    />
    <MenuItem
      primaryText="Sign out"
      onTouchTap={props.logout}
    />
  </IconMenu>
)

LoggedUserMenu.muiName = 'IconMenu'

const mapStateToProps = (state, ownProps) => ({
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  logout: () => dispatch(logout()),
})

export default connect(mapStateToProps, mapDispatchToProps)(LoggedUserMenu)
