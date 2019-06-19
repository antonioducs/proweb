import React, { Component, Fragment } from "react";
import "./styles.css";
import axios from "axios";

class EditHome extends Component {

    state = {
        valueInput: "",
        curriculos: [],
        imgsPerfil: [],
        lists: []
    };

    handleValueInputChange = event => {
        this.setState({ valueInput: event.target.value })
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

    salvarImg = async img => {
        await axios.put(
            `http://localhost:9999/api/imgPerfil/${img._id}`,
            {
                imgPerfil: this.state.valueInput,
                crossDomain: true
            }
        );
        this.loadImgPerfil();
    }

    excluirImg = async img => {
        await axios.delete(
            `http://localhost:9999/api/imgPerfil/${img._id}`,
            {
                crossDomain: true
            }
        );
        this.loadImgPerfil();
    };

    adicionarImg = async () => {
        await axios.post(
            "http://localhost:9999/api/imgPerfil/",
            {
                imgPerfil: this.state.valueInput,
                crossDomain: true
            }
        );
        this.loadImgPerfil();
    }

    salvarCurriculo = async curriculo => {
        await axios.put(
            `http://localhost:9999/api/curriculo/${curriculo._id}`,
            {
                curriculo: this.state.valueInput,
                crossDomain: true
            }
        );
        this.loadCurriculo();
    }

    excluirCurriculo = async curriculo => {
        await axios.delete(
            `http://localhost:9999/api/curriculo/${curriculo._id}`,
            {
                crossDomain: true
            }
        );
        this.loadCurriculo();
    };

    adicionarCurriculo = async () => {
        await axios.post(
            "http://localhost:9999/api/curriculo/",
            {
                curriculo: this.state.valueInput,
                crossDomain: true
            }
        );
        this.loadCurriculo();
    }

    salvarSessaoTitle = async sessao => {
        await axios.put(
            `http://localhost:9999/api/lists/${sessao._id}`,
            {
                title: this.state.valueInput,
                crossDomain: true
            }
        );
        this.loadList();
    }

    excluirSessao = async sessao => {
        await axios.delete(
            `http://localhost:9999/api/lists/${sessao._id}`,
            {
                crossDomain: true
            }
        );
        this.loadList();
    };

    adicionarSessaoTitle = async () => {
        await axios.post(
            "http://localhost:9999/api/lists/",
            {
                title: this.state.valueInput,
                img: " ",
                description: [],
                crossDomain: true
            }
        );
        this.loadList();
    }

    salvarSessaoImg = async sessao => {
        await axios.put(
            `http://localhost:9999/api/lists/${sessao._id}`,
            {
                img: this.state.valueInput,
                crossDomain: true
            }
        );
        this.loadList();
    }
    //////////////////
    salvarSessaoLista = async (sessao, index) => {
        sessao.description[index] = this.state.valueInput;
        
        await axios.put(
            `http://localhost:9999/api/lists/${sessao._id}`,
            {
                description: sessao.description,
                crossDomain: true
            }
        );
        this.loadList();
    }

    excluirSessaoList = async (sessao, index) => {
        var desc = sessao.description;
        desc.splice(index);
        await axios.put(
            `http://localhost:9999/api/lists/${sessao._id}`,
            {
                description: desc,
                crossDomain: true
            }
        );
        this.loadList();
    };

    adicionarSessaoLista= async sessao => {
        var desc = sessao.description;
        desc.push(this.state.valueInput);
        await axios.put(
            `http://localhost:9999/api/lists/${sessao._id}`,
            {
                description: desc,
                crossDomain: true
            }
        );
        this.loadList();
    }


    render() {
        return (
            <Fragment>
                <div id="EditHome">
                    <h1>Imagem Perfil</h1>
                    <ul>
                        {this.state.imgsPerfil.map(item => {
                            return (
                                <li>
                                    <p>{item.imgPerfil}</p>
                                    <input type="text" placeholder="Novo valor" onChange={this.handleValueInputChange} />
                                    <button onClick={() => {
                                        this.salvarImg(item)
                                    }
                                    }>Salvar</button>
                                    <button onClick={() => {
                                        this.excluirImg(item)
                                    }
                                    }>Excluir</button>
                                </li>
                            );
                        })}
                        <h2>--Adicionar nova Imagem</h2>
                        <input type="text" placeholder="Url imagem" onChange={this.handleValueInputChange} />
                        <button onClick={() => {
                            this.adicionarImg()
                        }
                        }>Adicionar</button>
                    </ul>

                    <h1>Curriculo</h1>
                    <ul>
                        {this.state.curriculos.map(item => {
                            return (
                                <li>
                                    <p>{item.curriculo}</p>
                                    <input type="text" placeholder="Novo valor" onChange={this.handleValueInputChange} />
                                    <button onClick={() => {
                                        this.salvarCurriculo(item)
                                    }
                                    }>Salvar</button>
                                    <button onClick={() => {
                                        this.excluirCurriculo(item)
                                    }
                                    }>Excluir</button>
                                </li>
                            );
                        })}
                        <h2>--Adicionar novo currículo</h2>
                        <input type="text" placeholder="Url curriculo" onChange={this.handleValueInputChange} />
                        <button onClick={() => {
                            this.adicionarCurriculo()
                        }
                        }>Adicionar</button>
                    </ul>

                    <h1>Listas de detalhes</h1>
                    <ul>
                        {this.state.lists.map(item => {
                            return (
                                <li>
                                    <h2>Seção title: {item.title}</h2>
                                    <input onChange={this.handleValueInputChange} type="text" placeholder="Alterar titulo da lista" />
                                    <button onClick={() => {
                                        this.salvarSessaoTitle(item)
                                    }
                                    }>Salvar</button>
                                    <button onClick={() => {
                                        this.excluirSessao(item)
                                    }
                                    }>Excluir</button>
                                    <p>Img: {item.img}</p>
                                    <input onChange={this.handleValueInputChange} type="text" placeholder="Alterar url para imagem" />
                                    <button onClick={() => {
                                        this.salvarSessaoImg(item)
                                    }
                                    }>Salvar</button>
                                    <ul>
                                        {item.description.map((desc, index) => {
                                            return (
                                                <li>
                                                    <p>Lista: {desc}</p>
                                                    <input onChange={this.handleValueInputChange} type="text" placeholder="Nova desc" />
                                                    <button onClick={() => {
                                                        this.salvarSessaoLista(item, index)
                                                    }
                                                    }>Salvar</button>
                                                    <button onClick={() => {
                                                        this.excluirSessaoList(item, index)
                                                    }
                                                    }>Excluir</button>
                                                </li>
                                            );
                                        })}
                                        <input onChange={this.handleValueInputChange} type="text" placeholder="Adicionar valor a lista" />
                                        <button onClick={() => {
                                            this.adicionarSessaoLista(item)
                                        }
                                        }>Adicionar</button>
                                    </ul>
                                </li>
                            );
                        })}
                        <h2>--Adicionar nova Lista</h2>
                        <input onChange={this.handleValueInputChange} type="text" placeholder="Título da Lista" />
                        <button onClick={() => {
                            this.adicionarSessaoTitle()
                        }
                        }>Adicionar</button>
                    </ul>
                </div>
            </Fragment>
        );
    }
}

export default EditHome;