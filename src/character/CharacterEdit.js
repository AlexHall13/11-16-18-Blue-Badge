import React from 'react';
import { Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody, Row, Col } from 'reactstrap';

class CharacterEdit extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            id: '',
            name: '',
            race: '',
            homeplanet: '',
            gender: '',
            weapons: '',
            biography: '',
        };
    }

    componentWillMount() {
        this.setState({
            id: this.props.character.id,
            name: this.props.character.name,
            race: this.props.character.race,
            homeplanet: this.props.character.homeplanet,
            gender: this.props.character.gender,
            weapons: this.props.character.weapons,
            biography: this.props.character.biography,

        })
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.update(event, this.state)
    }

    render() {
        return (
        <div>
           <Modal isOpen={true} >
            <ModalHeader >Uhh..</ModalHeader>
            <ModalBody>
                <Row>
                    <Col xs='12'>
                        <h1>Lets Write A character...</h1>
                        <p>Everyrace Loves Stories</p>
                        <Form onSubmit={this.handleSubmit}>
                             <FormGroup>
                                 <Label for="name">Go ahead give this baby a name</Label>
                                  <Input id="name" type="text" name="name" value={this.state.name} placeholder="10000 words into a few" onChange={this.handleChange}></Input>
                             </FormGroup>
                             <FormGroup>
                                 <Label for="race">Now lets create...</Label>
                                  <Input  id="race" type="text" name="race" value={this.state.race} placeholder="?" onChange={this.handleChange}></Input>
                            </FormGroup>
                            <FormGroup>
                                <Label for="homeplanet">homeplanet this baby</Label>
                                 <Input id="homeplanet" type="homeplanet" name="homeplanet" value={this.state.homeplanet} onChange={this.handleChange}></Input>
                             </FormGroup>
                             <FormGroup>
                                <Label for="gender">homeplanet this baby</Label>
                                 <Input id="gender" type="gender" name="gender" value={this.state.gender} onChange={this.handleChange}></Input>
                             </FormGroup>
                             <FormGroup>
                                <Label for="weapons">weapons this baby</Label>
                                 <Input id="weapons" type="weapons" name="weapons" value={this.state.weapons} onChange={this.handleChange}></Input>
                             </FormGroup>
                             <FormGroup>
                                <Label for="biography">biography this baby</Label>
                                 <Input id="biography" type="biography" name="biography" value={this.state.biography} onChange={this.handleChange}></Input>
                             </FormGroup>
                             <Button type="submit" color="primary">Submit</Button>
                        </Form>
                    </Col>
                </Row>
            </ModalBody>
        </Modal>
        </div>
        )
    }

}

export default CharacterEdit;