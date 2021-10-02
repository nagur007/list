import React, {useState} from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {NavLink} from 'react-router-dom';
import './mystyle.css';
import Logo from './images/logo.png';

function Navbar() {
        const [show, setshow] = useState(false);
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light nav-bg fixed-top">
                <div className="container">
                    <NavLink className="navbar-brand" to="/"><img width="auto" height="30px" className="img-responsive" src={Logo} alt="Fittr" /></NavLink>
                    <button onClick = {()=>setshow(!show)} className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className={`collapse navbar-collapse ${show ? "show" : ""}`}>
                        <ul className="navbar-nav m-auto mt-2 mt-lg-0">
                            <li className="nav-item ">
                                <NavLink className="nav-link" to="/" exact>Home</NavLink>
                            </li>
                            <li className="nav-item ">
                                <NavLink className="nav-link" to="/list" exact>List</NavLink>
                            </li>
                            {/* <li className="nav-item ">
                                <NavLink className="nav-link" to="/Item" exact>Item</NavLink>
                            </li> */}
                        </ul>
                        <form className="form-inline my-2 d-flex my-lg-0">
                        <NavLink className="btn btn btn-outline-primary button_color m-2 my-sm-0" to="/Registration" type="logIn">Registration Now</NavLink> 
                            <NavLink className="btn btn btn-outline-primary button_color m-2 my-sm-0" to="/Login" type="logIn">Login Here</NavLink>
                            <NavLink className="btn btn btn-outline-primary button_color m-2 my-sm-0" to="/Fordemo" type="logIn">For Demo</NavLink>
                        </form>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar