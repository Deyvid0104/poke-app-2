import React from 'react';
import { Button, Modal } from 'react-bootstrap';

const PokeModal = ({ show, handleClose, pokemon }) => {
    if (!pokemon) return null; // Asegúrate de que haya un Pokémon para mostrar

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>{pokemon.nombre}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <img src={pokemon.img} alt={pokemon.nombre} />
                <p>ID: {pokemon.id}</p>
                <p>HP: {pokemon.hp}</p>
                <p>Ataque: {pokemon.ataque}</p>
                <p>Defensa: {pokemon.defensa}</p>
                {/* <link rel="stylesheet" href="/" > Siguiente </link> */}

            </Modal.Body>
            <Modal.Footer>
                <link rel="stylesheet" href="/" />
                <Button variant="secondary" onClick={handleClose}>
                    siguiente
                </Button>
                <Button variant="secondary" onClick={handleClose}>
                    Anterior
                </Button>
                <Button variant="secondary" onClick={handleClose}>
                    Cerrar
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default PokeModal;