import React, { Component } from "react";
import NotesList from "./components/NotesList/NotesList";
import FormCadastro from "./components/FormCadastro/FormCadastro";
import "./assets/App.css";
import './assets/index.css';
class App extends Component {

  constructor() {
    super();
    this.state = {
      notas: []
    }
  }

  criarNota(titulo, texto) {
    const novaNota = {titulo, texto};
    const novoArrayNotas = [...this.state.notas, novaNota];
    const novoEstado = {
      notas: novoArrayNotas
    };
    this.setState(novoEstado);
  }

  render() {
    return (
      <section className="conteudo">
        <FormCadastro criarNota={this.criarNota.bind(this)}/>
        <NotesList notas={this.state.notas} />
      </section>
    );
  }
}

export default App;