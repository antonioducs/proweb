import React, { Component, Fragment } from "react";
import "./styles.css";
import axios from "axios";

class SectionInfo extends Component {

    state = {
        infos: [{
            img: "",
            linkGit: "",
            biografia: "",
            profissao: ""
        }]
    };

    loadInfo = async () => {
        const response = await axios.get("http://localhost:9999/api/infos", {
            crossDomain: true
        });
        this.setState({
            infos: response.data
        });
    };

    componentDidMount(){
        this.loadInfo();
    }

    render() {
        return (
            <Fragment>
                <div id="Info">
                    <h1>Mais Informações</h1>
                    <div className="body">
                        <div className="bio">
                            <h2>Biografia</h2>
                            <p>{this.state.infos[0].biografia}</p>
                        </div>
                        <div className="work">
                            <h2>Profissão</h2>
                            <p>{this.state.infos[0].profissao}</p>
                        </div>
                    </div>
                    <div className="image">
                        <a href={this.state.infos[0].linkGit} target="_blank" rel="noopener noreferrer"><img src={this.state.infos[0].img} alt="git"></img></a>
                    </div>
                    <p className="git">GitHub</p>
                </div>
            </Fragment>
        );
    }
}

export default SectionInfo;