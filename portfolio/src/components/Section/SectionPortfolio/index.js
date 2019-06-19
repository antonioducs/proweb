import React, { Component, Fragment } from "react";
import "./styles.css";
import axios from "axios";

class SectionPortfolio extends Component {

    state = {
        projetos: []
    };

    loadProjetos = async () => {
        const response = await axios.get("http://localhost:9999/api/projetos", {
            crossDomain: true
        }); 
        this.setState({
            projetos: response.data
        })
    };

    componentDidMount(){
        this.loadProjetos();
    }

    render() {
        return (
            <Fragment>
                <div id="Portfolio">
                    <h1>Portfólio</h1>
                    <div className="body">
                        {this.state.projetos.map(item => {
                            return (
                                <div className="image">
                                    <a href={item.url} target="_blank" rel="noopener noreferrer"><img src={item.img} alt="work"></img></a>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </Fragment >
        );
    }
}

export default SectionPortfolio;