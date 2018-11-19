import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, Container, Row, Col } from "reactstrap";

class FactionCreate extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            baseplanet: '',
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }


    handleSubmit = (event) => {
        fetch(`http://localhost:3000/Faction/create`, {
            method: 'POST',
            body: JSON.stringify({ faction: this.state }),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': this.props.token
            })
        })
            .then((res) => res.json())
            .then((LogData) => {
                this.props.updateCharactersArray()
                this.setState({
                    name: '',
                    baseplanet: '',
                })
            })
    }

    render() {
        return (
            <Container className='main'>
                <Row>
                    <Col xs='12'>
                        <h1>Create your Faction!</h1>
                        <Form onSubmit={this.handleSubmit}>
                            <FormGroup>
                                <Label for="name">Name</Label>
                                <Input id="name" type="text" name="name" value={this.state.name} placeholder="10000 words into a few" onChange={this.handleChange}></Input>
                            </FormGroup>
                            <FormGroup>
                                <Label for="baseplanet">Base Planet</Label>
                                <Input id="baseplanet" type="text" name="baseplanet" value={this.state.baseplanet} placeholder="?" onChange={this.handleChange}></Input>
                            </FormGroup>
                            <Button type="submit" color="primary">Save</Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        )

    }
}    
export default FactionCreate;