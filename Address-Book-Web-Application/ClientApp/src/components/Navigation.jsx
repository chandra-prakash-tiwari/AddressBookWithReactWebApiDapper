import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import BlogImg from '../Image/blog-icon.png'

export default class Navigation extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-sm navbar-dark">
                    <div className="collapse navbar-collapse" id="collapsibleNavId">
                        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                            <li className="nav-item active">
                                <Link to="/" id="home"><b>HOME </b><span className="sr-only">(current)</span></Link>
                            </li>
                            <li className="nav-item active">
                                <Link to="/add" id="add"><b>+ADD </b><span className="sr-only">(current)</span></Link>
                            </li>
                            <Link to="/a"></Link>
                        </ul>
                        <img src={BlogImg} alt='Blog' />
                    </div>
                </nav>
            </div>
        )
    }
}
