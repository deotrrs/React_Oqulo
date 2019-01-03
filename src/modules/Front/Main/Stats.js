import React, {Component, Fragment} from 'react';
import styles from './style'
class Stats extends Component{
    render(){
        return(
            <section style={styles.section4}>
                <div style={styles.sectionHeader}>
                        <div style={styles.sectionHeader__text}>
                            <h1>Stats Delivery Beautifully</h1>
                            <p>View sales charts, booking ratio and user behavior using Oqulo’s visual reporting feature.</p>
                        </div>
                </div>
                <div style={styles.sectionContainer}>                    
                    <div class="section4-img">                       
                        <img src="./assets/images/statistics.png" alt="" class="img-fluid" />
                    </div> 
                </div>
                <div style={styles.sectionFooter}>

                </div>
            </section>
        );
    }
}
export default Stats