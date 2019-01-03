import React, { Component } from 'react';
import styles from './style'
class Hero extends Component{
    render(){
        return(
            <section className="hero" style={styles.heroBackground}>
                <div className="container">                    
                    <div className="row">
                        <div className=" hero-object col-12 col-lg-6" >
                            <div className="image-object">
                                <img src="./assets/images/iPhone 7.png" style={styles.heroImage} alt="iphone" />
                            </div>
                        </div>                        
                        <div className="hero-text col-lg-6">
                            <div className="hero-text">
                                <h1 className="hero-text_heading">
                                    The Only Platform You’ll Need to Run Smart Coworking Spaces & Serviced Offices
                                </h1>
                                <p>
                                    Oqulo is built to sell, manage and grow your commercial real estate business.
                                    Collect payments, manage clients and run reports using our booking app. 
                                    Engage members using our community messaging feature.                         
                                </p>
                                <br/>
                                <p>
                                    Be the first in line to take Oqulo for a test drive!
                                </p>
                                <form className="form-group">
                                    <input className="input-form notify" type="text"/>
                                    <button>NOTIFY ME</button>
                                </form>
                                <p className="hero-text_spam">
                                    *No spam, that’s a promise.            
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
export default Hero;
