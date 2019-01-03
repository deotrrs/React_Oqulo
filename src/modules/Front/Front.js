import React, { Component } from 'react';
import './Front.css'
import { Nav } from './Header';
import { Hero } from './Main';

class Front extends Component {
    render () {
        return (
            <div className="app">
                <Nav />
                <Hero />
            </div>
        )
    }
}

export default Front;