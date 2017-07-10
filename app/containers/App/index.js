/**
 *
 * App.react.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Container from 'components/Container';
import Helmet from 'react-helmet';

// Material UI Support
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import Subheader from 'material-ui/Subheader';
import NavigationMenuIcon from 'material-ui/svg-icons/navigation/menu';
import ProfileMenuIcon from 'material-ui/svg-icons/social/person';

import { setUsername, setTheme } from './actions';
import { toggleLoginDialog, toggleServicesDrawer } from '../Main/actions';
import { DARK, LIGHT } from '../../styles/themes';

export class App extends React.Component { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    children: React.PropTypes.node,
  };

  constructor(props) {
    super(props);
    this.handleLogin = this.handleLogin.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
    this.toggleServicesDrawer = this.toggleServicesDrawer.bind(this);
    this.handleSetTheme = this.handleSetTheme.bind(this);
  }

  componentDidMount() {
    // nudge set theme to dark...
    this.props.onChangeTheme('DARK', DARK);
  }

  handleLogout() {
    this.props.onSetUsername('');
    this.props.onToggleLoginDialog(true);
  }

  handleLogin() {
    this.props.onToggleLoginDialog(true);
  }

  handleSetTheme(name, theme) {
    this.props.onChangeTheme(name, theme);
  }

  toggleServicesDrawer() {
    this.props.onToggleServicesDrawer(!this.props.showServicesDrawer);
  }

  render() {
    const profileMenu = (<IconMenu
      value={this.props.currentThemeName}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
      iconButtonElement={
        <IconButton tooltip={this.props.currentUsername}>
          <ProfileMenuIcon />
        </IconButton>}
    >
      <Subheader>ACTIONS</Subheader>
      <MenuItem
        primaryText="LOGOUT"
        onTouchTap={this.handleLogout}
      />
      <Subheader>THEME</Subheader>
      <MenuItem
        primaryText="LIGHT"
        value="LIGHT"
        onTouchTap={() => this.handleSetTheme('LIGHT', LIGHT)}
      />
      <MenuItem
        primaryText="DARK"
        value="DARK"
        onTouchTap={() => this.handleSetTheme('DARK', DARK)}
      />
    </IconMenu>);
    const loginButton = (<FlatButton
      label="Login"
      onTouchTap={this.handleLogin}
    />);
    return (
      <MuiThemeProvider muiTheme={getMuiTheme(this.props.currentTheme)}>
        <div>
          <Helmet
            title="Moxy Proxy"
            meta={[
              { name: 'description', content: 'Moxy Proxy Application' },
            ]}
          />
          <AppBar
            zDepth={2}
            style={{ position: 'fixed' }}
            title="Moxy Proxy"
            iconElementLeft={<IconButton><NavigationMenuIcon /></IconButton>}
            iconElementRight={this.props.currentUsername ? profileMenu : loginButton}
            onLeftIconButtonTouchTap={this.toggleServicesDrawer}
          />
          <Container withDrawer={this.props.showServicesDrawer} themeName={this.props.currentThemeName}>
            {React.cloneElement(this.props.children, { muiTheme: this.props.currentThemeName })}
          </Container>
        </div>
      </MuiThemeProvider>
    );
  }
}

App.propTypes = {
  children: React.PropTypes.node,
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.bool,
  ]),
  currentUsername: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool,
  ]),
  currentTheme: PropTypes.object,
  currentThemeName: PropTypes.string,
  showServicesDrawer: PropTypes.bool,
  onToggleLoginDialog: PropTypes.func,
  onToggleServicesDrawer: PropTypes.func,
  onSetUsername: PropTypes.func,
  onChangeTheme: PropTypes.func,
};

const mapStateToProps = (state) => {
  const global = state.get('global');
  const main = state.get('main');
  return {
    loading: global.get('loading'),
    error: global.get('error'),
    currentUsername: global.get('currentUsername'),
    currentTheme: global.get('currentTheme'),
    currentThemeName: global.get('currentThemeName'),
    showServicesDrawer: main.get('showServicesDrawer'),
  };
};

function mapDispatchToProps(dispatch) {
  return {
    onSetUsername: (value) => dispatch(setUsername(value)),
    onChangeTheme: (name, value) => dispatch(setTheme(name, value)),
    onToggleLoginDialog: (value) => dispatch(toggleLoginDialog(value)),
    onToggleServicesDrawer: (value) => dispatch(toggleServicesDrawer(value)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
