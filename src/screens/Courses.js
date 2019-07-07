import React from 'react';
import firebase from '../config/Firebase';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Card, Button } from 'react-bootstrap';
import myAlert from 'sweetalert';
import QuizScreen from './QuizScreen';
import { nfapply } from 'q';

class MenuScreen extends React.Component {

    // componentWillMount(){
    //     const {uid} = this.props;
    //     let myArrTest = [];
    //     const fbRef = firebase.database().ref().child("Users").child(uid).child('Courses');
    //     fbRef.once('value', val => {
    //             // console.log(val.val().CSS)
    //             // this.myArr2.push(val.val())
    //         })
    // }

    state = {
        //         Joined_courses: false,
        // reload : false,
    }

    quizloader = (course) => {
        console.log('working2');
        const { quizScreen } = this.props;
        quizScreen(course, 'true')
    }

    quizInitiator = (course) => {
        const { uid } = this.props;
        // console.log(uid);
        this.setState({
            course: course,
            Joined_courses: true,
        });

        const dbRef = firebase.database().ref().child("Users").child(uid).child('Courses').child(course);
        dbRef.set({
            Joined: 'Yes',
            Name: course,
            taken: true,
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

        }).then(() => {
            myAlert('hogya');
        });
    }
    render() {

        const { usr, uid, arr } = this.props;
        console.log(arr);
        return (
            <React.Fragment>
                {/* <Container className="test"> */}
                <div className="test">
                    <Row>
                        <Col md={4}>
                            <Card>
                                <Card.Header as="h5">Logged in User</Card.Header>
                                <Card.Body>
                                    <Card.Title>Welcome: {usr} </Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <br />
                    <Row>
                        <Col md={5}>
                            <Card>
                                <Card.Header as="h5">Joined Courses</Card.Header>
                                <JoinedCourses course={this.state.course} quizArr={arr} quizloader={this.quizloader} />
                            </Card>
                        </Col>
                    </Row>
                    <br />
                    <Row>
                        <Col md={12}>
                            <Card>
                                <Card.Header as="h5">Recomended Courses</Card.Header>
                                <Card.Body>
                                    <Card.Title className="inline-item">HTML</Card.Title>
                                    <Button onClick={() => this.quizInitiator("HTML")} className="courseBtn">Join</Button>
                                </Card.Body>
                                <Card.Body>
                                    <Card.Title className="inline-item">CSS</Card.Title>
                                    <Button onClick={() => this.quizInitiator("CSS")} className="courseBtn">Join</Button>
                                </Card.Body>
                                <Card.Body>
                                    <Card.Title className="inline-item">JavaScript</Card.Title>
                                    <Button onClick={() => this.quizInitiator("JavaScript")} disabled className="courseBtn">Join</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    {/* </Container> */}
                </div>
            </React.Fragment>
        )
    }
}

class JoinedCourses extends React.Component {
    render() {
        const { quizArr, quizloader } = this.props;
        const myArr2 = quizArr;
        console.log(myArr2[1]);
        const hello = [
        ]
        return (
            <React.Fragment>
                {
                    quizArr.map((value, index) => {
                        return (
                            <Card.Body key={index}>
                                <Card.Title className="inline-item">{value.Name}</Card.Title>
                                <Button onClick={() => quizloader("CSS")} className="courseBtn">Open</Button>
                            </Card.Body>)
                    })
                }
                <h1>hello</h1>
            </React.Fragment>
            // <Card.Body>
            //     <Card.Title className="inline-item">{course}</Card.Title>
            //     <Button onClick={() => this.quizloader("HTML")} className="courseBtn">Open</Button>
            // </Card.Body>
        );

    }
}

export default MenuScreen;


