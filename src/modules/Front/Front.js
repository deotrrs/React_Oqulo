import React, { Component } from 'react';
import './Front.css'
import { Nav } from './Header';
import { Hero,Resource,Feature,Stats,Signup } from './Main';

class Front extends Component {
    render () {
        return (
            <div className="app">
                <Nav />
                <Hero />
                <Resource />
                <Feature />
                <Stats />
                <Signup />
            </div>
        )
    }
}

export default Front;