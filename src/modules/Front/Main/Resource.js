import React, { Component } from 'react';
import styles from './style'
class Resource extends Component{
    render(){
        return(
            <section className="section2" style={styles.section2}>
                <div className="container">
                    <div className="row contents">
                        <div className="col-lg-5 order-2">
                            <div className="d-none d-lg-block">
                                <h1>Tried & Tested Space Management Software</h1>
                            </div>                            
                            <p>Oqulo is a homegrown app that’s been tested by real-life businesses. Whether you operate on a single building or in multiple locations, Oqulo is designed to make your space leasing operations hassle-free.</p>
                            <p>Your clients will have a smooth booking & online payment experience, and your concierge staff will be able to view occupancy stats and generate reports at a click of a button.</p>
                        </div>                        
                        <div className="col-lg-7 order-1">
                            <div className=" d-lg-none d-sm-block">
                                <h1>Tried & Tested Space Management Software</h1>
                            </div>
                            <div className="image-object">
                                <img src="./assets/images/resources.png" alt="resources" />
                            </div>
                            
                        </div>                    
                    </div>
                </div>
            </section>
        );
    }
}
export default Resource