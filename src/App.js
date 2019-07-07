import React from 'react';
// import logo from './logo.svg';
import pic from './images/background.jpg';
import './App.css';
import Navbar from './screens/Navbar';
import Register from './screens/Register';
import firebase from './config/Firebase';
import Login from './screens/Login';
import MenuScreen from './screens/Courses'
import QuizScreen from './screens/QuizScreen';

class App extends React.Component {

  state = {
    userEmail: undefined,
    uID: 'null',
    showLogin: false,
    showAdmin: false,
    userStatus: false,
    showRegisterationForm: false,
    showQuizComponent: false,
    courseVar: null,
    quizArr: [],
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged((user) => {
      let uId = 'null';
      let uEmail = 'null';
      let myArr2 = [
        {
          Name: 'test',
          Test : 'test'
        }
      ];
      // console.log(myArr2);
      if (user) {
        uId = firebase.auth().currentUser.uid;
        uEmail = firebase.auth().currentUser.email;
        const fbRef = firebase.database().ref().child("Users").child(uId).child('Courses');
        fbRef.on('value', val => {
                console.log(val.val())
                myArr2.push(val.val().CSS.Name)
            });
            this.setState({
              userEmail: uEmail,
              uID: uId,
              quizArr: myArr2,
              // showMenu: true,
            })
        // setTimeout( ()=>{
          
        // },2000);

        this.loginTrue();
        
      } else {
        this.setState({
          showLogin: true,
        })
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

  showQuizScreen = (course, check) => {
    this.setState({
      showLogin: false,
      showMenu: false,
      showQuizComponent: true,
      userStatus: true,
      showRegisterationForm: false,
      courseVar: course,
      // myArr: arr,
    })
    let taken = check;
    // console.log('test');
  }

  render() {
    const { showLogin, showMenu, userStatus, showRegisterationForm, showQuizComponent } = this.state;
    const testArr = [
      {
          Joined: 'Yes',
          Name: 'HTML',
          taken: 'Yes',
          Quiz: {
              Quiz1: {
                  Title: 'Quiz 1',
                  Duration: '10 Minutes',
                  Passing: '50%',
                  Total_Ques: '4',
                  Q1: {
                      Q: 'HTML stands for: ',
                      choice1: 'Hyper Text Markup Language',
                      choice2: 'Hyper Text Markup Link',
                      choice3: 'Hover Text Making Link',
                      choice4: 'Hello Fraandz CHaaye pee lo',
                      correct: 'Hyper Text Markup Language'
                  },
                  Q2: {
                      Q: 'HTML stands for: ',
                      choice1: 'Hyper Text Markup Language',
                      choice2: 'Hyper Text Markup Link',
                      choice3: 'Hover Text Making Link',
                      choice4: 'Hello Fraandz CHaaye pee lo',
                      correct: 'Hyper Text Markup Language'
                  },
                  Q3: {
                      Q: 'HTML stands for: ',
                      choice1: 'Hyper Text Markup Language',
                      choice2: 'Hyper Text Markup Link',
                      choice3: 'Hover Text Making Link',
                      choice4: 'Hello Fraandz CHaaye pee lo',
                      correct: 'Hyper Text Markup Language'
                  },
                  Q4: {
                      Q: 'HTML stands for: ',
                      choice1: 'Hyper Text Markup Language',
                      choice2: 'Hyper Text Markup Link',
                      choice3: 'Hover Text Making Link',
                      choice4: 'Hello Fraandz CHaaye pee lo',
                      correct: 'Hyper Text Markup Language'
                  },
                  result: {
                    correct_ques: null,
                    score: null,
                }
              },
              Quiz2: {
                Title: 'Quiz 2',
                Duration: '15 Minutes',
                Passing: '60%',
                Total_Ques: '4',
                Q1: {
                    Q: 'HTML stands for: ',
                    choice1: 'Hyper Text Markup Language',
                    choice2: 'Hyper Text Markup Link',
                    choice3: 'Hover Text Making Link',
                    choice4: 'Hello Fraandz CHaaye pee lo',
                    correct: 'Hyper Text Markup Language'
                },
                Q2: {
                    Q: 'HTML stands for: ',
                    choice1: 'Hyper Text Markup Language',
                    choice2: 'Hyper Text Markup Link',
                    choice3: 'Hover Text Making Link',
                    choice4: 'Hello Fraandz CHaaye pee lo',
                    correct: 'Hyper Text Markup Language'
                },
                Q3: {
                    Q: 'HTML stands for: ',
                    choice1: 'Hyper Text Markup Language',
                    choice2: 'Hyper Text Markup Link',
                    choice3: 'Hover Text Making Link',
                    choice4: 'Hello Fraandz CHaaye pee lo',

                    correct: 'Hyper Text Markup Language'
                },
                Q4: {
                    Q: 'HTML stands for: ',
                    choice1: 'Hyper Text Markup Language',
                    choice2: 'Hyper Text Markup Link',
                    choice3: 'Hover Text Making Link',
                    choice4: 'Hello Fraandz CHaaye pee lo',
                    correct: 'Hyper Text Markup Language'
                },
                result: {
                  correct_ques: null,
                  score: null,
              }
            }

          }
      }]
    return (
      <React.Fragment>
        <Navbar usrStatus={this.state.userStatus} logOutCheck={this.logOutTrue} regForm={this.registerForm} usr={this.state.userEmail} />
        <div className="body">
          {showLogin && <div className="myFormDiv">
            <Login loginTrue={this.loginTrue} />
          </div>}
          {
            showRegisterationForm && <div className="myFormDiv">
              <Register loginTrue={this.loginTrue} />
            </div>
          }
          {showMenu && <MenuScreen quizScreen={this.showQuizScreen} usr={this.state.userEmail} arr={this.state.quizArr} uid={this.state.uID} />}
          {showQuizComponent && <QuizScreen usr={this.state.uID} course={this.state.courseVar} arr={testArr} />}
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
