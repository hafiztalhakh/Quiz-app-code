import React from 'react';
// import logo from './logo.svg';
import pic from './images/background.jpg';
import './App.css';
import Navbar from './screens/Navbar';
import Register from './screens/Register';
import firebase from 'firebase';
import Login from './screens/Login';
import MenuScreen from './screens/Courses'

class App extends React.Component {

  state = {
    userEmail: undefined,
    showLogin: true,
    showAdmin: false,
    userStatus: false,
    showRegisterationForm: false,
  }

  componentDidMount() {

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({
          userEmail: firebase.auth().currentUser.email,
          // showMenu: true,
        })
        this.loginTrue();
      }
    })
  }

  registerForm = () =>{
    this.setState({
      showRegisterationForm: true,
      showLogin: false,
      userStatus:true,
    });
  }

  logOutTrue = (status,loginVal) =>{
    this.setState({
      showLogin: loginVal,
    userStatus: status,
    showMenu : false,
    })
    // console.log(status);
  }

  loginTrue = () => {
    this.setState({
      showLogin: false,
      showMenu: true,
      userStatus: true,
    })
    console.log("working");
  }

  render() {
    const { showLogin, showMenu, userStatus, showRegisterationForm, } = this.state;
    return (
      <React.Fragment>
        <Navbar usrStatus={this.state.userStatus} logOutCheck={this.logOutTrue} regForm={this.registerForm} usr={this.state.userEmail}/>
        <div className="body">
          {showMenu && <MenuScreen />}
          {showLogin && <Login loginTrue={this.loginTrue} />}
          {showRegisterationForm && <Register loginTrue={this.loginTrue}/>}
        </div>
      </React.Fragment>
    )
  }
}

const MainBody = () => {

  return (
    <React.Fragment>
      <h1 className="App-heading">Quizz App</h1>
    </React.Fragment>
  )
}

export default App;
