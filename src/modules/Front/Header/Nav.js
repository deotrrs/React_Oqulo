import React, { Component } from 'react';
import { NavItem } from './index';
import styles from './style';

class Nav extends Component {
    handleOnScroll (element) {
        document.addEventListener('scroll', function (event) {
            if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
                element.className = 'app-header-active';
            } else {
                element.className = 'app-header';
            }
        });
    }

    render () {
        const navItems = [
            { name: 'DISCOVER OQULO', href: '/' },
            { name: 'FEATURES', href: '/' },
            { name: 'CONTACT', href: '/' },
        ]
        return (
            <header className="app-header" ref={this.handleOnScroll}>
                <nav className="container navbar-toggleable-md">
                    <div className="row">
                        <div className="col-6 col-sm-6 col-md-4 col-lg-2">
                            <div style={styles.Logo}>
                                <img style={styles.LogoImg} src="/assets/images/logo.png" alt="Logo" />
                            </div>
                        </div>
                        <div className="col-6 col-sm-6 col-md-8 d-block d-lg-none">
                            <button className="navbar-toggler" style={{float:"right"}} type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                <i className="fa fa-bars"></i>
                            </button>
                           
                        </div>
                        <div className="col-12 col-lg-10">
                            <div style={styles.Navigation} className="collapse navbar-collapse" id="navbarNav"> 
                                <ul className="app-header__list-item" style={styles.NavigationList}>
                                   {navItems.map((item, i) => <NavItem data={item} styles={styles} key={i}/>)}
                                </ul>
                            </div> 
                        </div>
                    </div>
                </nav>
            </header>
        )
    }

}

export default Nav;