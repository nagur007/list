import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => (
    <div className="navbar-wrapper">
        <nav className="navbar navbar-inverse navbar-static-top">
            <div className="container">
                <div id="navbar" className="navbar-collapse collapse">
                    <ul className="nav navbar-nav">
                        <li ><Link to='/'>Home</Link></li>
                        <li ><Link to='/list'>Articles</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
);

export default Home;