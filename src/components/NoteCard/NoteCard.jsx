import React, { Component }  from 'react';
import './NoteCard.css';

class NoteCard extends Component {
    render() {
        return(
            <section className="card-nota">
                <h3 className="card-nota_cabecalho">{this.props.titulo}</h3>
                <p className="card-nota_texto">{this.props.texto}</p>
            </section>
        );
    }
}

export default NoteCard;