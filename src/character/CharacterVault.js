import React from 'react';
import { Table, Button } from 'reactstrap';
import './Character.css';

const CharacterVault = (props) => {

    return (
        <div>
            <h3>Character</h3>
            <hr />
            <Table striped>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Race</th>
                        <th>Home Planet</th>
                        <th>Gender</th>
                        <th>Weapons</th>
                        <th>Biography</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.characters.map((character, id) => {
                            return (
                                <tr key={id}>
                                    <th scope="row">{character.id}</th>
                                    <td>{character.name}</td>
                                    <td>{character.race}</td>
                                    <td>{character.homeplanet}</td>
                                    <td>{character.gender}</td>
                                    <td>{character.weapons}</td>
                                    <td>{character.biography}</td>
                                    <td>
                                        <Button id={character.id} onClick={props.delete} color="danger">Delete</Button>
                                        <Button id={character.id} onClick={e => props.update(e, character)} color="warning">Update</Button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </Table>
        </div>
    );
}

export default CharacterVault;