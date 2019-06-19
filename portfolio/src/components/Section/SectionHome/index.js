import React, { Component, Fragment } from "react";
import Button from "../../Button";
import List from "../../List";
import "./styles.css";
import axios from "axios";


class SectionHome extends Component {
    state = {
        curriculos: [{
            curriculo: ""
        }],
        imgsPerfil: [{
            imgPerfil: ""
        }],
        lists: []
    };

    loadCurriculo = async () => {
        const response = await axios.get("http://localhost:9999/api/curriculo", {
            crossDomain: true
        });
        this.setState({
            curriculos: response.data
        });
    };

    loadImgPerfil = async () => {
        const response = await axios.get("http://localhost:9999/api/imgPerfil", {
            crossDomain: true
        });
        this.setState({
            imgsPerfil: response.data
        });
    };

    loadList = async () => {
        const response = await axios.get("http://localhost:9999/api/lists", {
            crossDomain: true
        });
        this.setState({
            lists: response.data
        });
    };

    componentDidMount() {
        this.loadCurriculo();
        this.loadImgPerfil();
        this.loadList();
    }

    render() {
        return (
            <Fragment>
                <div id="List">
                    <div id="ListDir">
                        <div className="perfilImg">
                            <img src={this.state.imgsPerfil[0].imgPerfil} alt="perfil"></img>
                        </div>
                        <h2> Olá, sou
                        <span className="Nome"> Antonio César Duarte</span>
                            . Estudante de Engenharia de Computação pela UTFPR-CP,
                        nasci em Paranaíba - MS, atualmente moro em Cornélio Procópio - PR.</h2>

                        <a href={this.state.curriculos[0].curriculo} target="_blank" rel="noopener noreferrer"><Button>CURRÍCULO COMPLETO</Button></a>
                    </div>
                    <div id="ListEsq">
                        <h1 className="item-1">Antonio Cesar Duarte</h1>
                        {this.state.lists.map(item => {
                            return (
                                <List description={item.description} Imagem={item.img}>{item.title}</List>
                            );
                        })}
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default SectionHome;