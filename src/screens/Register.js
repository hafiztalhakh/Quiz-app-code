import React from 'react';
import firebase from '../config/Firebase';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import myAlert from 'sweetalert';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

// import MenuItem from '@material-ui/core/MenuItem';

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

class Register extends React.Component {

    // componentDidMount() {
    //     const { loginTrue } = this.props;

    //     firebase.auth().onAuthStateChanged((user) => {
    //         if (user) {
    //             this.fbUsr = firebase.auth().currentUser.email;
    //             loginTrue();
    //             this.setState({
    //                 // userEmail: this.fbUsr,
    //                 // showMenu: true,
    //             })
    //         }
    //     })
    // }

    state = {
        name: undefined,
        userName: undefined,
        password: '',
        password2: '',
        // showMenu
    }

    registerAccount = () => {
        const { userName, password, password2, name, } = this.state;
        const { loginTrue } = this.props;
        if(password===password2){
            firebase.auth().createUserWithEmailAndPassword(userName, password)
            .then(() => {
                myAlert("You are Registered Successfully");
                const userID = firebase.auth().currentUser.uid;
                const dbRef = firebase.database().ref().child("Users").child(userID);
                dbRef.set({
                    Full_Name: name,
                    Email: userName,

                }).then(() => {
                    // console.log("Message Saved");
                }).catch((error) => {
                    console.log(error.message);
                    alert("database me bhand araha hai");
                })
                loginTrue();
            })
            .catch(error => {
                var errorMessage = error.message;
                myAlert(`Error ${errorMessage}`);
            });
        }
        else{
            myAlert(`Password does not match`);
        }
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
                <h1 className="form-heading">Sign Up</h1>
                <p className="info">Please fill out all fields</p>
                <TextField
                    id="outlined-name"
                    label="Full Name"
                    className={classes.textField}
                    name="name"
                    value={this.state.name}
                    margin="normal"
                    variant="outlined"
                    onChange={this.handle}
                />
                <TextField
                    id="outlined-email-input"
                    label="Email Address"
                    className={classes.textField}
                    type="email"
                    name="userName"
                    value={this.state.userName}
                    autoComplete="email"
                    margin="normal"
                    variant="outlined"
                    onChange={this.handle}
                />
                <br />
                <TextField
                    id="outlined-password-input"
                    label="Password"
                    className={classes.textField}
                    type="password"
                    name="password"
                    value={this.state.password}
                    autoComplete="current-password"
                    margin="normal"
                    variant="outlined"
                    onChange={this.handle}
                />
                <TextField
                    id="outlined-confrim-password-input"
                    label="Confirm Password"
                    className={classes.textField}
                    type="password"
                    name="password2"
                    value={this.state.password2}
                    autoComplete="current-password"
                    margin="normal"
                    variant="outlined"
                    onChange={this.handle}
                />
                <br />
                <div className="btnDiv">
                    <Button onClick={this.registerAccount} variant="contained" component="span" className="regBtn">Register</Button>

                </div>
            </div>
        );
    }
}

Register.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Register);
