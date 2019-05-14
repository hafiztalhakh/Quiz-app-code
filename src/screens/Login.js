import React from 'react';
import firebase from '../config/Firebase';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import myAlert from 'sweetalert';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';


const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
    },
    dense: {
        marginTop: 16,
    },
    menu: {
        width: 200,
    },
});

class Login extends React.Component {

    state = {
        userName: undefined,
        password: '',
        // showMenu
    }

    login = () => {
        const { userName, password } = this.state;
        // const { loginTrue } = this.props;
        firebase.auth().signInWithEmailAndPassword(userName, password)
            .then(() => {
                // myAlert("Welcme");
                // loginTrue();
            })
            .catch(error => {
                var errorMessage = error.message;
                myAlert(`Error ${errorMessage}`);
            });
    }

    handle = event => {
        this.setState({
            [event.target.name]: event.target.value,
        })
    }



    render() {
        const { classes } = this.props;
        return (
            <div className="formReg">
            <h1 className="form-heading" style={{marginBottom:10}}>Login</h1>
                <TextField
                    id="outlined-email-input"
                    label="Email"
                    className={classes.textField}
                    type="email"
                    name="userName"
                    autoComplete="email"
                    margin="normal"
                    variant="outlined"
                    onChange={this.handle}
                />
                <TextField
                    id="outlined-password-input"
                    label="Password"
                    className={classes.textField}
                    type="password"
                    name="password"
                    autoComplete="current-password"
                    margin="normal"
                    variant="outlined"
                    onChange={this.handle}
                />
                <br />
                <div className="btnDiv">
                <Button onClick={this.login} variant="contained" component="span" className="regBtn">Login</Button>

                </div>
            </div>
        );
    }
}

Login.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Login);
