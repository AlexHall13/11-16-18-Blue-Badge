import React from 'react';
import { Table, Button } from 'reactstrap';
import './Faction.css';

const FactionVault = (props) => {

    return (
        <div>
            <h3>Faction</h3>
            <hr />
            <Table striped>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Base Planet</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.faction.map((faction, id) => {
                            return (
                            <tr key={id}>
                                <th scope="row">{faction.id}</th>
                                <td>{faction.name}</td>
                                <td>{faction.baseplanet}</td>
                                <td>
                                    <Button id={faction.id} onClick={props.delete} color="danger">Delete</Button>
                                    <Button id={faction.id} onClick={e => props.update(e, faction)} color="warning">Update</Button>
                                </td>
                            </tr>
                        )
                        }) 
                    }
                </tbody>
            </Table>

        </div>
    )
}
export default FactionVault;