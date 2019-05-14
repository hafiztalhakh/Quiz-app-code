import React from 'react';
import firebase from '../config/Firebase';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
// import Panel from 'react-bootstrap/Panel'
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardHeader, MDBBtn, MDBContainer } from "mdbreact";



class MenuScreen extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Container>
                    <Row>
                        <Col md={4}>
                            <h1>Quiz App</h1>
                        </Col>
                        <Col md={{ span: 4, offset: 4 }}>{`md={{ span: 4, offset: 4 }}`}</Col>
                    </Row>
                </Container>
                <PanelPage/>
                {/* <MDBContainer>
                    <MDBCard style={{ width: "22rem", marginTop: "1rem" }}>
                        <MDBCardHeader color="deep-orange lighten-1">Featured</MDBCardHeader>
                        <MDBCardBody>
                            <MDBCardTitle>Special title treatment</MDBCardTitle>
                            <MDBCardText>
                                With supporting text below as a natural lead-in to additional
                                content.
      </MDBCardText>
                            <MDBBtn color="deep-orange">go somewhere</MDBBtn>
                        </MDBCardBody>
                    </MDBCard>
                </MDBContainer> */}
            </React.Fragment>
        )
    }
}
const PanelPage = props => {
    return (
        <MDBContainer>
            <MDBCard style={{ width: "22rem", marginTop: "1rem" }}>
                <MDBCardHeader color="primary-blue">Featured</MDBCardHeader>
                <MDBCardBody>
                    <MDBCardTitle>Special title treatment</MDBCardTitle>
                    <MDBCardText>
                        With supporting text below as a natural lead-in to additional
                        content.
          </MDBCardText>
                    <MDBBtn color="primary">go somewhere</MDBBtn>
                </MDBCardBody>
            </MDBCard>
        </MDBContainer>
    );
};
export default MenuScreen;

 
