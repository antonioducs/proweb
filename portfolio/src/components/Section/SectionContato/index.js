import React, { Component, Fragment } from "react";
import Button from "../../Button"
import "./styles.css";
import axios from "axios";

class SectionContato extends Component {

    state = {
        contatos: [{
            email: "",
            telefone: "",
            face: "",
            insta: "",
            imgFace: "",
            imgInsta: ""
        }]
    };

    loadContatos = async () => {
        const response = await axios.get("http://localhost:9999/api/contatos", {
            crossDomain: true
        });
        this.setState({
            contatos: response.data
        });
    };

    componentDidMount(){
        this.loadContatos();
    }

    render() {
        return (
            <Fragment>
                <div id="Contato">
                    <h1>Contato</h1>
                    <div className="item">
                        <h2>Entre em contato</h2>
                        <p>Entre em contato pelo formulário, pelo e-mail ou pelo telefone.</p>
                        <p>{this.state.contatos[0].email}</p>
                        <p>{this.state.contatos[0].telefone}</p>
                    </div>

                    <form action="https://formspree.io/antonioduarte.cs@gmail.com" method="POST">
                        <input type="text" id="nome" placeholder="Nome" name="name" />
                        <input type="text" id="email" placeholder="E-mail" name="_replyto" />
                        <input type="text" id="assunto" placeholder="Assunto" name="subject" />
                        <textarea placeholder="Mensagem" name="message"></textarea>
                        <Button type="submit">Enviar</Button>
                    </form>

                    

                    <div className="redes_sociais">
                        <h3>Redes sociais</h3>
                        <p>Entre em contato comigo por minhas redes sociais.</p>

                        <a href={this.state.contatos[0].insta} target="_blank" rel="noopener noreferrer"><img src={this.state.contatos[0].imgInsta} alt="instagram"></img></a>
                        <a href={this.state.contatos[0].face} target="_blank" rel="noopener noreferrer"><img src={this.state.contatos[0].imgFace} alt="facebook"></img></a>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default SectionContato;