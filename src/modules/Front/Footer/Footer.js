import React, { Component } from 'react';
import { NavItem } from './index';
import styles from './style';

class Footer extends Component {
    render () {
        const navItems = [
            { name: 'DISCOVER OQULO' },
            { name: 'FEATURES' },
            { name: 'CONTACT' },
        ]
        return (
            <footer style={styles.footer} >
                <div style={styles.container_footer_top}>
                        
                </div>
                <div style={styles.footer_container}>                    
                        <img src="./assets/images/logo2.png" alt="footer_logo"/>
                        <div className="">
                            <nav style={styles.Navigation}>
                            <ul className="app-header__list-item" style={styles.NavigationList}>
                                   {navItems.map((item, i) => <NavItem name={item.name} styles={styles} key={i}/>)}
                                </ul>
                            </nav>            
                        </div>
                </div>
                <div style={styles.container_footer_bottom}>                
                    <p>Copyright © Oqulo 2018. All rights reserved.</p>
                </div>
            </footer>
        )
    }

}

export default Footer;