import React from 'react';
import firebase from '../config/Firebase';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Card, Button, ListGroup, ListGroupItem, Form, } from 'react-bootstrap'

class QuizScreen extends React.Component {

    state = {
        taken:false,
    }

    render() {
        const { usr, course } = this.props;

        const {taken} =this.state;
        const JoinedCoursesArr = [
            {
                Name: 'HTML',
                Joined: 'Yes',
                Taken: 'Yes',
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
            },
            {
                Name: 'CSS',
                Joined: 'Yes',
                Taken: 'No',
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
            },
            {
                Name: 'JavaScript',
                Joined: 'No',
                Taken: 'No',
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
            },
        ];

        console.log(JoinedCoursesArr[0].Taken);
        // let x = JoinedCoursesArr[0].Taken;
        // if(JoinedCoursesArr[0].Taken != 'No'){
        //     this.setState({
        //         taken:true,
        //     })
        // }
        // else{
        //     this.setState({
        //         taken:false,
        //     })
        // }
        return (
            <React.Fragment>
                <div className="box-quiz">
                    <Row>
                        <Col md={3} className="quiz-menu">
                            <Card>
                                <Card.Header as="h5">Quiz Title: </Card.Header>
                                <Card.Body>
                                    <ListGroup>
                                        <ListGroupItem><Card.Link href="#">Quiz 1</Card.Link></ListGroupItem>
                                        <ListGroupItem><Card.Link href="#">Quiz 2</Card.Link></ListGroupItem>
                                    </ListGroup>
                                    {/* {
                                        quizArr.map((value, index) => {
                                            console.log(value.map(val2 => {console.log(val2)}));
                                            return (
                                                <ListGroup key={index}>
                                                    <ListGroupItem><Card.Link href="#">{value}</Card.Link></ListGroupItem>
                                                </ListGroup>
                                            )
                                        })
                                    } */}
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={8} className="quiz-body">
                            <h3>Welcome to HTML Quiz</h3>
                            <br />
                            <div className="quiz-info-display">
                                <p><b>Quiz Title: HTML Quiz 1</b></p>
                                <p><b>Passing Score: 50%</b></p>
                                <p><b>Quiz Duration: 7 Minutes</b></p>
                                <p><b>Total Questions: 4</b></p>
                            </div>
                            <Row>
                                <Col className="quiz-continue-display">
                                    <Button className="myBtnQuiz1">Continue</Button>
                                </Col>
                                <Col>

                                    <Button className="myBtnQuiz1">Back</Button>
                                </Col>
                            </Row>
                            <br />
                            <br />
                            {taken && <Row>
                                <Col md={8}>
                                    <ResultComponent/>
                                </Col>
                            </Row>
                        }
                        </Col>
                    </Row>
                    <br />
                </div>
                {/* <QuizProductKeyComponent /> */}
                {/* <QuizComponent /> */}
            </React.Fragment >
        )
    }
}

class ResultComponent extends React.Component{
    render() {
        return (
            <React.Fragment>
                <Card className="panel-card">
                    <Card.Header as="h5">Result</Card.Header>
                    <Card.Body>
                        <Card.Title>Quiz Title: HTML Quiz 1</Card.Title>
                        <Card.Title>Correct Questions:4 out of 4</Card.Title>
                        <Card.Title>Marks: 100%</Card.Title>
                    </Card.Body>
                </Card>
            </React.Fragment >
        );
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


