import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, Container, Row, Col } from 'reactstrap';

class CharacterCreate extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            race: '',
            homeplanet: '',
            gender: '',
            weapons: '',
            biography: '',
        };
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        fetch(`http://localhost:3000/Character/create`, {
            method: 'POST',
            body: JSON.stringify({ character: this.state }),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': this.props.token
            })
        })
            .then((res) => res.json())
            .then((logData) => {
                this.props.updateCharactersArray()
                this.setState({
                    name: '',
                    race: '',
                    homeplanet: '',
                    gender: '',
                    affiliation: '',
                    weapons: '',
                    biography: '',
                })
            })
    }


    render() {
        return (
            <Container className='main'>
                <Row>
                    <Col xs='12'>
                        <h1>Create your Hero!...or Villain!</h1>
                        <Form onSubmit={this.handleSubmit}>
                        <FormGroup>
                                 <Label for="name">Name</Label>
                                  <Input id="name" type="text" name="name" value={this.state.name} placeholder="10000 words into a few" onChange={this.handleChange}></Input>
                             </FormGroup>
                             <FormGroup>
                                 <Label for="race">Race</Label>
                                  <Input  id="race" type="text" name="race" value={this.state.race} placeholder="?" onChange={this.handleChange}></Input>
                            </FormGroup>
                            <FormGroup>
                                <Label for="homeplanet">Home Panet</Label>
                                 <Input id="homeplanet" type="homeplanet" name="homeplanet" value={this.state.homeplanet} onChange={this.handleChange}></Input>
                             </FormGroup>
                             <FormGroup>
                                <Label for="gender">gender</Label>
                                 <Input id="gender" type="gender" name="gender" value={this.state.gender} onChange={this.handleChange}></Input>
                             </FormGroup>
                             <FormGroup>
                                <Label for="weapons">Weapons</Label>
                                 <Input id="weapons" type="weapons" name="weapons" value={this.state.weapons} onChange={this.handleChange}></Input>
                             </FormGroup>
                             <FormGroup>
                                <Label for="biography">Biography</Label>
                                 <Input id="biography" type="biography" name="biography" value={this.state.biography} onChange={this.handleChange}></Input>
                             </FormGroup>
                            <Button type="submit" color="primary">Save</Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        )
    }


}

export default CharacterCreate;