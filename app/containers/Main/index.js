/*
 *
 * Main
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
// import Paper from 'material-ui/Paper';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import Dialog from 'material-ui/Dialog';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';
import ContentAddIcon from 'material-ui/svg-icons/content/add';
// import Checkbox from 'material-ui/Checkbox';
// import RaisedButton from 'material-ui/RaisedButton';
// import ActionFavorite from 'material-ui/svg-icons/action/favorite';
// import ActionFavoriteBorder from 'material-ui/svg-icons/action/favorite-border';

import AvatarPic from './images/housty_avatar.jpg';
import ScenicPic from './images/scenic_mountains.jpg';


import { changeUsername, toggleLoginDialog } from './actions';
import { setUsername } from '../App/actions';

export class Main extends React.Component { // eslint-disable-line react/prefer-stateless-function

  constructor(props) {
    super(props);
    this.openLoginDialog = this.openLoginDialog.bind(this);
    this.closeLoginDialog = this.closeLoginDialog.bind(this);
    this.handleLoginEntry = this.handleLoginEntry.bind(this);
  }

  componentDidMount() {
    if (!this.props.currentUsername) {
      this.props.onToggleLoginDialog(true);
    }
  }

  openLoginDialog() {
    this.props.onToggleLoginDialog(true);
  }

  closeLoginDialog() {
    this.props.onToggleLoginDialog(false);
  }

  handleLoginEntry() {
    // TODO: attempt to get services info via saga middleware
    this.props.onSetUsername(this.props.username);
    this.props.onToggleLoginDialog(false);
  }

  render() {
    const loginActions = [
      <FlatButton
        label="Cancel"
        secondary
        onTouchTap={this.closeLoginDialog}
      />,
      <FlatButton
        label="Login"
        primary
        onTouchTap={this.handleLoginEntry}
      />,
    ];
    // TODO: Wrap material-ui buttons withs ours in components for consistency
    const buttonStyles = {
      margin: 12,
    };
    return (
      <div>
        <Dialog
          open={this.props.showLoginDialog}
          modal
          title="Moxy Proxy Login"
          actions={loginActions}
          onRequestClose={this.closeLoginDialog}
        >
          <TextField
            fullWidth
            hintText="Login Name"
            name="login"
            onKeyPress={this.props.onChangeUsername}
          />
        </Dialog>
        {/* this drawer will show services for profile */}
        <Drawer open={this.props.showServicesDrawer} containerStyle={{ top: '64px' }} zDepth={1}>
          <Subheader>Services</Subheader>
          <MenuItem>Task Service</MenuItem>
          <MenuItem>Engagement Service</MenuItem>
          <Divider />
          <MenuItem primaryText="Add" rightIcon={<ContentAddIcon />} />
        </Drawer>
        <div>
          <Card>
            <CardHeader
              title="URL Avatar"
              subtitle="Subtitle"
              avatar={AvatarPic}
            />
            <CardMedia
              overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle" />}
            >
              <img src={ScenicPic} alt="" />
            </CardMedia>
            <CardTitle title="Card title" subtitle="Card subtitle" />
            <CardText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
              Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
              Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
              <br />
              <FlatButton label="Default" style={buttonStyles} />
              <FlatButton label="Primary" primary style={buttonStyles} />
              <FlatButton label="Secondary" secondary style={buttonStyles} />
              <br />
              <RaisedButton label="Default" style={buttonStyles} />
              <RaisedButton label="Primary" primary style={buttonStyles} />
              <RaisedButton label="Secondary" secondary style={buttonStyles} />
            </CardText>
            <CardActions>
              <FlatButton label="Action1" />
              <FlatButton label="Action2" />
            </CardActions>
          </Card>
        </div>
      </div>
    );
  }
}

Main.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.bool,
  ]),
  showLoginDialog: PropTypes.bool,
  showServicesDrawer: PropTypes.bool,
  currentUsername: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool,
  ]),
  username: PropTypes.string,
  onToggleLoginDialog: PropTypes.func,
  onChangeUsername: PropTypes.func,
  onSetUsername: PropTypes.func,
};

const mapStateToProps = (state) => {
  const global = state.get('global');
  const main = state.get('main');
  return {
    loading: global.get('loading') || main.get('loading'),
    error: global.get('error') || main.get('error'),
    currentUsername: global.get('currentUsername'),
    username: main.get('username'),
    showLoginDialog: main.get('showLoginDialog'),
    showServicesDrawer: main.get('showServicesDrawer'),
  };
};

function mapDispatchToProps(dispatch) {
  return {
    onChangeUsername: (evt) => dispatch(changeUsername(evt)),
    onToggleLoginDialog: (value) => dispatch(toggleLoginDialog(value)),
    onSetUsername: (value) => dispatch(setUsername(value)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
