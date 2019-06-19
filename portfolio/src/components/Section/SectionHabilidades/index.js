import React, { Component, Fragment } from "react";
import "./styles.css";
import axios from "axios";

class SectionHabilidades extends Component {
    state = {
        habilidades: [{
            Habilidades: ""
        }
        ]
    };

    loadHabilidades = async () => {
        const response = await axios.get("http://localhost:9999/api/habilidades", {
            crossDomain: true
        });
        this.setState({
            habilidades: response.data
        });
    };

    componentDidMount() {
        this.loadHabilidades();
    }


    render() {
        return (
            <Fragment>
                <div id="skills">
                    <div className="item-1">
                        <h1>Habilidades</h1>
                        <p className="item-3">Segue uma lista de algumas habilidades profissionais.</p>
                    </div>
                    <div className="item-2">
                        {this.state.habilidades.map(item => {
                            return (
                                <p className="item-4">{item.Habilidades}</p>
                            );
                        })}
                    </div>
                </div>

            </Fragment>
        );
    }
}

export default SectionHabilidades;