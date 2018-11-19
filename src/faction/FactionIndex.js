import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import FactionCreate from './FactionCreate';
import FactionEdit from './FactionEdit';
import FactionVault from './FactionVault';


class FactionIndex extends Component {

    constructor(props) {
        super(props)
        this.state = {
            factions: [],
            updatePressed: false,
            factionToUpdate: {}
        }
    }

    componentWillMount() {
        this.fetchfactions()
    }

    fetchfactions = () => {
        fetch("http://localhost:3000/Faction/get", {
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': this.props.token
            })
        })
            .then((res) => res.json())
            .then((logData) => {
                console.log(logData)
                return this.setState({ factions: logData })
            })
    }

    factionDelete = (event) => {
        fetch(`http://localhost:3000/Faction/delete/:id${event.target.id}`, {
            method: 'DELETE',
            body: JSON.stringify({ faction: { id: event.target.id } }),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': this.props.token
            })
        })
            .then((res) => this.fetchfactions())
    }

    factionUpdate = (event, faction) => {
        fetch(`http://localhost:3000/Faction/update/${faction.id}`, {
            method: 'PUT',
            body: JSON.stringify({ faction: faction }),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': this.props.token
            })
        })
            .then((res) => {
                this.fetchfactions();
                this.setState({ updatePressed: false })
            })
    }

    setUpdatedfaction = (event, faction) => {
        this.setState({
            factionToUpdate: faction,
            updatePressed: true
        })
    }


    render() {

        return (
            <Container>
                <Row>
                    <Col xs='12'>
                        <FactionCreate token={this.props.token} updateFactionsArray={this.fetchfactions} />
                    </Col>
                </Row>
                <Col md="12">
                    {
                        this.state.updatePressed ? <FactionEdit t={this.state.updatePressed} update={this.factionUpdate} faction={this.state.factionToUpdate} />
                            : <div></div>
                    }
                </Col>
                <Row>
                    <Col md="9">
                        <FactionVault faction={this.state.factions} delete={this.factionDelete} update={this.setUpdatedfaction} />
                    </Col>
                </Row>
            </Container>
        )

    }
}

export default FactionIndex;