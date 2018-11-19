import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import CharacterCreate from './CharacterCreate';
import CharacterEdit from './CharacterEdit';
import CharacterVault from './CharacterVault';


class CharacterIndex extends Component {

    constructor(props) {
        super(props)
        this.state = {
            characters: [],
            updatePressed: false,
            characterToUpdate: {}
        }
    }

    componentWillMount() {
        this.fetchcharacters()
    }

    fetchcharacters = () => {
        fetch("http://localhost:3000/Character/get", {
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': this.props.token
            })
        })
            .then((res) => res.json())
            .then((logData) => {
                console.log(logData)
                return this.setState({ characters: logData })
            })
    }

    characterDelete = (event) => {
        fetch(`http://localhost:3000/Character/delete/:id${event.target.id}`, {
            method: 'DELETE',
            body: JSON.stringify({ character: { id: event.target.id } }),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': this.props.token
            })
        })
            .then((res) => this.fetchcharacters())
    }

    characterUpdate = (event, character) => {
        fetch(`http://localhost:3000/Character/update/${character.id}`, {
            method: 'PUT',
            body: JSON.stringify({ character: character }),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': this.props.token
            })
        })
            .then((res) => {
                this.fetchcharacters();
                this.setState({ updatePressed: false })
            })
    }

    setUpdatedcharacter = (event, character) => {
        this.setState({
            characterToUpdate: character,
            updatePressed: true
        })
    }


    render() {

        return (
            <Container>
                <Row>
                    <Col xs='12'>
                        <CharacterCreate token={this.props.token} updateCharactersArray={this.fetchcharacters} />
                    </Col>
                </Row>
                <Col md="12">
                    {
                        this.state.updatePressed ? <CharacterEdit t={this.state.updatePressed} update={this.characterUpdate} character={this.state.characterToUpdate} />
                            : <div></div>
                    }
                </Col>
                <Row>
                    <Col md="9">
                        <CharacterVault characters={this.state.characters} delete={this.characterDelete} update={this.setUpdatedcharacter} />
                    </Col>
                </Row>
            </Container>
        )

    }
}

export default CharacterIndex;