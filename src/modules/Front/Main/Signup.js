import React, { Component } from 'react';
import styles from './style'

class Signup extends Component{
    render(){
        return(
            <section style={styles.section5}>
                 <div className="container">
                    <div style={styles.sectionHeader}>
                        <h2>Launching Soon</h2>                        
                    </div>
                    <div style={styles.sectionContainer}>
                            <h6>Sign up to get updates on Oqulo’s public release.</h6>
                        <form className="form-group">
                            <input style={styles.inputForm} type="text" placeholder="Email address"/>
                                <button style={styles.buttonInput}>Try the beta</button>
                        </form>
                    </div>
                    <div className="section-footer"></div>
                </div>
            </section>
        );
    }
}
export default Signup