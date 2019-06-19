import React, { Component, Fragment } from "react";
import "./styles.css";


class List extends Component {
    render() {
        return (
            <Fragment>
                <div id="Lista">
                    <div id="Topo">
                        <div className="img_lista">
                            <img src={this.props.Imagem} alt="Logo"></img>
                        </div>
                        <h1>{this.props.children}</h1>
                    </div>

                    <ul>
                        {this.props.description.map(item => {
                            return (
                            <li>
                               <p>{item}</p> 
                            </li>
                            );
                        })}
                    </ul>
                </div>
            </Fragment>
        );
    }
}

export default List;