import React from 'react';
import firebase from '../config/Firebase';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Card, Button } from 'react-bootstrap';
import myAlert from 'sweetalert';
import QuizScreen from './QuizScreen';

class MenuScreen extends React.Component {

    state = {
        course:null,
        Joined_courses: false,
    }

    quizloader = (course) => {
        console.log('working2');
        const { quizScreen } = this.props;
        quizScreen(course, 'true')
    }

    quizInitiator = (course) => {
        const { uid } = this.props;
        console.log(uid);
        this.setState({
            course:course,
            Joined_courses:true,
        });
        const dbRef = firebase.database().ref().child("Users").child(uid).child('Courses').child(course);
        dbRef.set({
            Joined: 'Yes',
            Quiz: {
                Quiz1: {
                    Q1: {
                        Q: 'HTML stands for: ',
                        choice1: 'Hyper Text Markup Language',
                        choice2: 'Hyper Text Markup Link',
                        choice3: 'Hover Text Making Link',
                        choice4: 'Hello Fraandz CHaaye pee lo'
                    },
                    Q2: {
                        Q: 'HTML stands for: ',
                        choice1: 'Hyper Text Markup Language',
                        choice2: 'Hyper Text Markup Link',
                        choice3: 'Hover Text Making Link',
                        choice4: 'Hello Fraandz CHaaye pee lo'
                    },
                    Q3: {
                        Q: 'HTML stands for: ',
                        choice1: 'Hyper Text Markup Language',
                        choice2: 'Hyper Text Markup Link',
                        choice3: 'Hover Text Making Link',
                        choice4: 'Hello Fraandz CHaaye pee lo'
                    },
                    Q4: {
                        Q: 'HTML stands for: ',
                        choice1: 'Hyper Text Markup Language',
                        choice2: 'Hyper Text Markup Link',
                        choice3: 'Hover Text Making Link',
                        choice4: 'Hello Fraandz CHaaye pee lo'
                    }
                }

            }

        }).then(() => {
            myAlert('hogya');
        });
        // const propertyRef = firebase.database().ref().child("Users").child(usr).child('Courses').child(course);
        // propertyRef.once('value', val => {
        //     // console.log(val.val().Quiz);
        //     const x = val.val().Joined;
        //     // console.log(quizArr);
        // });
        // setTimeout(() => {
        //     console.log(x);    
        // }, 100);
    }

    render() {
        const { usr, uid } = this.props;
        const {Joined_courses} = this.state;
        const JoinedCoursesArr = [];
        let x;
        let y;
        let z;
        const HTMLRef = firebase.database().ref().child("Users").child(uid).child('Courses').child('HTML');
        const CSSRef = firebase.database().ref().child("Users").child(uid).child('Courses').child('CSS');
        const JavaScriptRef = firebase.database().ref().child("Users").child(uid).child('Courses').child('JavaScript');
        HTMLRef.once('value', val => {
            // console.log(val.val().Quiz);
            x = val.val().Joined;
            // console.log(quizArr);
        });
        CSSRef.once('value', val => {
            // console.log(val.val().Quiz);
             y = val.val().Joined;
            // console.log(quizArr);
        });
        JavaScriptRef.once('value', val => {
            // console.log(val.val().Quiz);
             z = val.val().Joined;
            // console.log(quizArr);
        });
        setTimeout(() => {
            console.log(x);
               JoinedCoursesArr.push(x,y,z);
               console.log(JoinedCoursesArr);
        }, 1000);
        
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
                                <Card.Body className="display-none"><Card.Title>You have not join any courses yet</Card.Title></Card.Body>
        {Joined_courses && <JoinedCourses course={this.state.course}/> }
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
        const {course} = this.props;
        return (
            <Card.Body>
                <Card.Title className="inline-item">{course}</Card.Title>
                <Button onClick={() => this.quizloader("HTML")} className="courseBtn">Open</Button>
            </Card.Body>
        );
    }
}

export default MenuScreen;


