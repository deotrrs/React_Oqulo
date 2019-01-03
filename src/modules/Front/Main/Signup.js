import React, {Component, Fragment} from 'react';
import styles from './style'
class Signup extends Component{
    render(){
        return(
            <section style={styles.section5}>
                 <div className="container">
                    <div style={styles.sectionHeader}>
                        <h1>Launching Soon</h1>                        
                    </div>
                    <div style={styles.sectionContainer}>
                            <h6>Sign up to get updates on Oqulo’s public release.</h6>
                        <form className="form-group">
                            <input style={styles.inputForm} type="text"/>
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