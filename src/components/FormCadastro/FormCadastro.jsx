import React, { Component } from "react";
import "./FormCadastro.css";
class FormCadastro extends Component {

  constructor(props) {
    super(props);
    this.titulo = "";
    this.texto = "";
  }

  handleMudancaTitulo(evento) {
    this.titulo = evento.target.value;
    console.log(this.titulo);
  }

  handleMudancaTexto(evento) {
    this.texto = evento.target.value;
    console.log(this.texto);
  }
  
  criarNota(evento) {
    evento.preventDefault();
    evento.stopPropagation();
    this.props.criarNota(this.titulo, this.texto);
  }

  render() {
    return (
      <form className="form-cadastro " 
      onChange={this.handleMudancaTexto.bind(this)}
      onSubmit={this.criarNota.bind(this)}
      >

        <input
          type="text"
          placeholder="Título"
          className="form-cadastro_input"
          onChange={this.handleMudancaTitulo.bind(this)}
        />
        <textarea
          rows={15}
          placeholder="Escreva sua nota..."
          className="form-cadastro_input"
        />
        <button className="form-cadastro_input form-cadastro_submit">
          Criar Nota
        </button>
      </form>
    );
  }
}

export default FormCadastro;