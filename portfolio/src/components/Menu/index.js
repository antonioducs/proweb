import React, { Component } from 'react';
import './styles.css';

class Menu extends Component {
    render() {

        let linksMarkup = this.props.links.map((link, index) => {
            let linkMarkup =  <a className="menu__link" href={link.link}>{link.label}</a>
            return (
                <li key={index} className="menu__list-item">
                    {linkMarkup}
                </li>
            );
        });

        return (
            <nav className="menu">
                <h1 style={{
                backgroundImage: 'url(' + this.props.logo + ')'
                }} className="menu__logo">Epic Co.</h1>

                <div className="menu__right">
                    <ul className="menu__list">
                        {linksMarkup}
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Menu;