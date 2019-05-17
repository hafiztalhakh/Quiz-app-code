import React from 'react';
// import logo from './logo.svg';
import pic from './images/background.jpg';
import './App.css';
import Navbar from './screens/Navbar';
import Register from './screens/Register';
import firebase from 'firebase';
import Login from './screens/Login';
import MenuScreen from './screens/Courses'
import QuizScreen from './screens/QuizScreen';

class App extends React.Component {

  state = {
    userEmail: undefined,
    uID: 'null',
    showLogin: true,
    showAdmin: false,
    userStatus: false,
    showRegisterationForm: false,
    showQuizComponent: false,
    courseVar:null,
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged((user) => {
    let uId = 'null';
    let uEmail = 'null';
      if (user) {
       uId = firebase.auth().currentUser.uid;
       uEmail = firebase.auth().currentUser.email;
        this.setState({
          userEmail: uEmail,
          uID: uId,
          // showMenu: true,
        })
        this.loginTrue();
      }
      // console.log(this.state.uID);
    })
  }
  
  registerForm = () => {
    this.setState({
      showRegisterationForm: true,
      showLogin: false,
      userStatus: true,
    });
  }

  logOutTrue = (status, loginVal) => {
    this.setState({
      showLogin: loginVal,
      userStatus: status,
      showMenu: false,
    })
    // console.log(status);
  }

  loginTrue = () => {
    this.setState({
      showLogin: false,
      showMenu: true,
      userStatus: true,
    })
    // console.log("working");
  }

  showQuizScreen = (course,check) =>{
    this.setState({
      showLogin: false,
      showMenu: false,
      showQuizComponent: check,
      userStatus: true,
      showRegisterationForm: false,
      courseVar: course,
    })
  }

  render() {
    const { showLogin, showMenu, userStatus, showRegisterationForm, showQuizComponent } = this.state;
    return (
      <React.Fragment>
        <Navbar usrStatus={this.state.userStatus} logOutCheck={this.logOutTrue} regForm={this.registerForm} usr={this.state.userEmail}/>
        <div className="body">
          {showLogin && <div className="myFormDiv">
            <Login loginTrue={this.loginTrue} />
          </div>}
          {
            showRegisterationForm && <div className="myFormDiv">
              <Register loginTrue={this.loginTrue} />
            </div>
          }
          {showMenu && <MenuScreen quizScreen={this.showQuizScreen} usr={this.state.userEmail} uid={this.state.uID} />}
          {showQuizComponent && <QuizScreen usr={this.state.uID} course={this.state.courseVar} />}
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
