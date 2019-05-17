import React from 'react';
import firebase from '../config/Firebase';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Card, Button, ListGroup, ListGroupItem, Form, } from 'react-bootstrap'

class QuizScreen extends React.Component {

    resultComponent() {
        return (
            <React.Fragment>
                <Card className="panel-card">
                    <Card.Header as="h5">Result</Card.Header>
                    <Card.Body>
                        <Card.Title>Quiz Title: HTML Quiz 1</Card.Title>
                        <Card.Title>Correct Questions: 4 out of 4</Card.Title>
                        <Card.Title>Marks: 100%</Card.Title>
                    </Card.Body>
                </Card>
            </React.Fragment >
        );
    }

    render() {
        const { usr, course } = this.props;
        const quizArr = ['a'];

        const testArr = [
            {
                Quiz1:{
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
                },
                Quiz2:{
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
        ]

        const propertyRef = firebase.database().ref().child("Users").child(usr).child('Courses').child(course);
        propertyRef.once('value', val => {
            // console.log(val.val().Quiz);
            // quizArr.push('yes');
            // quizArr.push(val.val().Quiz);
            // console.log(quizArr);
        });
        // console.log(quizArr);
        return (
            <React.Fragment>
                <div className="box-quiz">
                    <Row>
                        <Col md={3} className="quiz-menu">
                            <Card>
                                <Card.Header as="h5">Quiz Title: </Card.Header>
                                <Card.Body>
                                    {
                                        quizArr.map((value, index) => {
                                            console.log('test');
                                            return (
                                                <ListGroup key={index}>
                                                    <ListGroupItem><Card.Link href="#">{value}</Card.Link></ListGroupItem>
                                                    {/* <ListGroupItem><Card.Link href="#">{value}</Card.Link></ListGroupItem> */}
                                                </ListGroup>
                                            )
                                        })
                                    }
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={8} className="quiz-body">
                            <h3>Welcome to HTML Quiz</h3>
                            <br />
                            <div className="">
                                <p><b>Quiz Title: HTML Quiz 1</b></p>
                                <p><b>Passing Score: 50%</b></p>
                                <p><b>Quiz Duration: 7 Minutes</b></p>
                                <p><b>Total Questions: 4</b></p>
                            </div>
                            <Row>
                                <Col>
                                    <Button className="myBtnQuiz1">Continue</Button>
                                </Col>
                                <Col>

                                    <Button className="myBtnQuiz1">Back</Button>
                                </Col>
                            </Row>
                            <br />
                            <br />
                            <Row>
                                <Col md={8}>
                                    {this.resultComponent()}
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <br />
                    {/* <Row><Col>{
                        quizArr.map((value, index) => {
                            console.log('test');
                            return (
                                <ul key={index}>
                                    <li>{value}</li>
                                </ul>
                            )
                        })
                    }</Col></Row> */}
                </div>
                {/* {<QuizProductKeyComponent /> */}
                {/* <QuizComponent /> */}
            </React.Fragment>
        )
    }
}

class QuizProductKeyComponent extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Container>
                    <Row>
                        <Col md={2}></Col>
                        <Col md={8}>
                            <div className="productkey-div">
                                <h5>Quiz Title: HTML Quiz 1</h5>
                                <br />
                                <Form>
                                    <Form.Control type="password" placeholder="Enter Product Key" />
                                </Form>
                                <Row>
                                    <Col md={6}>
                                        <Button className="prdctBtn">Next</Button>
                                    </Col>
                                    <Col md={6}>
                                        <Button className="prdctBtn">Back</Button>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                        {/* <col md={2}></col> */}
                    </Row>
                </Container>
            </React.Fragment>
        )
    }
}

class QuizComponent extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Container>
                    <Row>
                        <Col md={2}></Col>
                        <Col md={8}>
                            <br />
                            <Card className="panel-card">
                                <Card.Header as="h5">Question</Card.Header>
                                <Card.Body>
                                    <Card.Title>HTML stands for: </Card.Title>
                                    <Form.Check type="radio" aria-label="radio 1" label="choice 1" />
                                    <Form.Check type="radio" aria-label="radio 2" label="choice 2" />
                                    <Form.Check type="radio" aria-label="radio 3" label="choice 3" />
                                    <Form.Check type="radio" aria-label="radio 4" label="choice 4" />
                                    <Button className="myBtnQuiz1">Next</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </React.Fragment >
        )
    }
}

export default QuizScreen;


