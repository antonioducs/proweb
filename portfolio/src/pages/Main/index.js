import React, { Component, Fragment } from 'react';
import Menu from '../../components/Menu';
import SectionHome from "../../components/Section/SectionHome";
import SectionHabilidades from "../../components/Section/SectionHabilidades";
import SectionPortfolio from "../../components/Section/SectionPortfolio";
import SectionInfo from "../../components/Section/SectionInfo";
import SectionBlog from '../../components/Section/SectionBlog';
import SectionContato from "../../components/Section/SectionContato";
import "./styles.css";



class App extends Component {
  state = {
    logo: "https://github.com/antonioducs/proweb/blob/master/img/portifolio/logo.png?raw=true",
     links : [
      { label: 'Home', link: '#home'},
      { label: 'Habilidades', link: '#habilidades' },
      { label: 'Portfólio', link: '#portfolio' },
      { label: 'Infos', link: '#infos' },
      { label: 'Blog', link: '#blog' },      
      { label: 'Contato', link: '#contact-us' },
     ]
  };

  render(){
    return (
      <Fragment >

        <div className="header">
          <Menu links={this.state.links} logo={this.state.logo} />
        </div>

        <section id="home">
          <SectionHome />
        </section>

        <section id="habilidades">
          <SectionHabilidades />
        </section>

        <section id="portfolio">
          <SectionPortfolio />
        </section>

        <section id="infos">
          <SectionInfo />
        </section>

        <section id="blog">
          <SectionBlog />
        </section>

        <section id="contact-us">
          <SectionContato />
        </section>

        <div className="rodape">
          <p>Antonio Cesar Duarte</p>
          <p>antonioduarte.cs@gmail.com</p>
          +55 (067) 998 493 707
        </div>

      </Fragment >
    );
  }
}

export default App;