import React from 'react';
import {Link} from 'react-router-dom';
import '../App.css'

export default function Header() {
    return (
        <nav class="navbar navbar-expand-lg">
            <Link class="navbar-brand navd" to="/">HUBX</Link>
            <button class="navbar-toggler navbar-light" style={{backgroundColor:"white"}} type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                <Link class="nav-item nav-link" to="/">Signup </Link>
                <Link class="nav-item nav-link" to="/login">Login </Link>
                <Link class="nav-item nav-link" to="/form">Form </Link>
                <Link class="nav-item nav-link" to="/data">Data</Link>
                <Link class="nav-item nav-link" to="/rating">Rating</Link>

                </div>
            </div>
        </nav>

    )
}
