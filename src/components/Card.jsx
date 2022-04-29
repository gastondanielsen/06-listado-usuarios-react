import React from 'react';
import './card.css';

const Card = ({usuarios}) => {

    return (
        <div className="cardContainer">
            {usuarios.map(usuario => (
                <div className='card'>
                    <p> <strong>Nombre: </strong> {usuario.name} </p>
                    <p> <strong>Email: </strong> {usuario.email} </p>
                    <p> <strong>Website: </strong> {usuario.website} </p>             
                </div>
            ))}
        </div>
    );
}
 
export default Card;