import React, { Component, Fragment } from "react";
import "./styles.css"
import axios from "axios";

class SectionBlog extends Component {

    state = {
        blogs: [
            {
                title: "",
                img: "",
                description: "",
                fonte: ""
            }
        ]
    };

    loadBlogs = async () => {
        const response = await axios.get("http://localhost:9999/api/blogs", {
            crossDomain: true
        }); 
        this.setState({
            blogs: response.data
        })
    };

    componentDidMount(){
        this.loadBlogs();
    }

    render() {
        return (
            <Fragment>
                <div id="Blog">
                    <h1>Blog</h1>
                    <div class="post">
                        {this.state.blogs.map(item =>{
                            return(
                                <div className="item">
                                    <h2>{item.title}</h2>
                                    <div className="img-blog">
                                        <img src={item.img} alt="img"></img>
                                    </div>
                                    <p>{item.description}</p>
                                    <h3>Fonte: {item.fonte}</h3>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default SectionBlog;