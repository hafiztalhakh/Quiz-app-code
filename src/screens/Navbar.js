import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import firebase from '../config/Firebase';

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};



class NavBar extends React.Component {

  state = {

  } 

  renderJoinNow = () => {
    return (
      <Button onClick={this.showRegisterForm} color="inherit">Sign up</Button>
    )
  }

  showRegisterForm = () => {
    const { regForm } = this.props;
    regForm();
  }

  renderLogout = () => {
    return (
      <Button onClick={this.logout} color="inherit">Logout</Button>
    )
  }

  logout = () =>{
    const { logOutCheck } = this.props;

    firebase.auth().signOut().then(function() {
      // Sign-out successful.
      const status = "false";
      const loginVal = "true";

      logOutCheck(status,loginVal);
      //usrStatus==false krna hai componentDidMount chalega wapis to Navbar b render hogi wapis to Join Now liikha ajaeag
    }).catch(function(error) {
      // An error happened.
    });
  }

  render() {

    const { classes, usrStatus, usr } = this.props;
    // console.log(usrStatus);
    return (
      <div className={classes.root}>
        <AppBar position="static" color="inherit">
          <Toolbar>
            {/* <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
              <MenuIcon />
            </IconButton> */}
            <Typography variant="h6" color="default" className={classes.grow}>
            {/* {usr ? 'Welcome: ' + usr :  'Quiz App'} */}
            Quiz App
            </Typography>
            <span>
              {usrStatus ? this.renderLogout() : this.renderJoinNow()}
            </span>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

NavBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NavBar);
