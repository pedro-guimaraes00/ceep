import React, { Component } from 'react';
import NoteCard from '../NoteCard/NoteCard';
import "./NotesList.css";


class NotesList extends Component {
    render() {
        return (
          <ul className="lista-notas">
            {this.props.notas.map((nota, index) => {
              return (
                <li className="lista-notas_item" key={index}>
                  <NoteCard titulo={nota.titulo} texto={nota.texto}/>
                </li>
              );
            })}
          </ul>
        );
      }
    }
    
export default NotesList;