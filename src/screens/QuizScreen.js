import React from 'react';
import firebase from '../config/Firebase';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import myAlert from 'sweetalert';
import { Card, Button, ListGroup, ListGroupItem, Form, } from 'react-bootstrap'

class QuizScreen extends React.Component {

    state = {
        takenCheck: false,
        showQuizDetals: false,
        showQuizDetailsPage: true,
        showQuizKeyComponentCheck: false,
        showQuizComponent: false,
    }

    showQuizKeyComponent = () => {
        this.setState({
            showQuizKeyComponentCheck: true,
            showQuizDetailsPage: false,
        })
        console.log("testing 111");
    }

    startQuiz = () => {
        const { usr, course, arr } = this.props;
    }

    showQuiz = () => {
        const { usr, course, arr } = this.props;
        let taken = arr[0].taken;
        if (taken === 'Yes') {
            this.setState({
                showQuizDetals: true,
                takenCheck: true,
            });
        }
        else {
            this.setState({
                showQuizDetals: true,
            });
        }
    }

    checkKeyFunc = (val1) => {
        this.setState({
            showQuizComponent: val1,
            showQuizKeyComponentCheck : false
        })
    }

    render() {

        const { usr, course, arr } = this.props;
        // let taken = arr[0].taken;
        const { takenCheck, showQuizDetals, showQuizKeyComponentCheck, showQuizDetailsPage, showQuizComponent } = this.state;
        // console.log(arr[0].taken);

        return (
            <React.Fragment>
                {
                    showQuizDetailsPage && <div className="box-quiz">
                        <Row>
                            <Col md={3} className="quiz-menu">
                                <Card>
                                    <Card.Header as="h5">Quiz Title: </Card.Header>
                                    <Card.Body>
                                        <ListGroup>
                                            <ListGroupItem><Card.Link href="#" onClick={this.showQuiz}>Quiz 1</Card.Link></ListGroupItem>
                                            <ListGroupItem><Card.Link href="#" onClick={this.showQuiz}>Quiz 2</Card.Link></ListGroupItem>
                                        </ListGroup>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col md={8} className="quiz-body">
                                <h3>Welcome to HTML Quiz</h3>
                                <br />
                                {
                                    showQuizDetals && <div className="quiz-info-display">
                                        <p><b>Quiz Title: HTML Quiz 1</b></p>
                                        <p><b>Passing Score: 50%</b></p>
                                        <p><b>Quiz Duration: 7 Minutes</b></p>
                                        <p><b>Total Questions: 4</b></p>
                                    </div>
                                }
                                <Row>
                                    {
                                        showQuizDetals && <Col className="quiz-continue-display">
                                            <Button className="myBtnQuiz1" onClick={this.showQuizKeyComponent}>Continue</Button>
                                        </Col>
                                    }
                                    <Col>

                                        <Button className="myBtnQuiz1">Back</Button>
                                    </Col>
                                </Row>
                                <br />
                                <br />
                                {takenCheck && <Row>
                                    <Col md={8}>
                                        <ResultComponent />
                                    </Col>
                                </Row>
                                }
                            </Col>
                        </Row>
                        <br />
                    </div>}
                {showQuizKeyComponentCheck && <QuizProductKeyComponent checkKeyFunc={this.checkKeyFunc} />}
                {showQuizComponent && <QuizComponent />
                }
            </React.Fragment >
        )
    }
}

class ResultComponent extends React.Component {
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

    state = {
        key: undefined,
    }

    checkKey = () => {
        const { checkKeyFunc } = this.props;
        const { key } = this.state;
        if (key === '12345') {
            checkKeyFunc('ture');
        } else {
            myAlert('The Key is Invalid');
        }
    }

    handle = event => {
        this.setState({
            [event.target.name]: event.target.value,
        })
    }

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
                                    <Form.Control type="password" name="key" onChange={this.handle} placeholder="Enter Product Key" />
                                </Form>
                                <Row>
                                    <Col md={6}>
                                        <Button className="prdctBtn" onClick={this.checkKey}>Next</Button>
                                    </Col>
                                    <Col md={6}>
                                        <Button className="prdctBtn" onClick={this.backToQuizDetailsPage}>Back</Button>
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


