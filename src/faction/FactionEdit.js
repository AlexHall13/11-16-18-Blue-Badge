import React from 'react';
import { Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody, Row, Col } from 'reactstrap';

class FactionEdit extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            id: '',
            name: '',
            baseplanet: '',
        };
    }

    componentWillMount() {
        this.setState({
            id: this.props.faction.id,
            name: this.props.faction.name,
            baseplanet: this.props.faction.baseplanet,
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
            <ModalHeader >Character Update</ModalHeader>
            <ModalBody>
                <Row>
                    <Col xs='12'>
                        <h1>Lets Write A faction...</h1>
                        <p>Everyrace Loves Stories</p>
                        <Form onSubmit={this.handleSubmit}>
                             <FormGroup>
                                 <Label for="name">Go ahead give this baby a name</Label>
                                  <Input id="name" type="text" name="name" value={this.state.name} placeholder="10000 words into a few" onChange={this.handleChange}></Input>
                             </FormGroup>
                             <FormGroup>
                                 <Label for="baseplanet">Now lets create...</Label>
                                  <Input  id="baseplanet" type="text" name="baseplanet" value={this.state.baseplanet} placeholder="?" onChange={this.handleChange}></Input>
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

export default FactionEdit;