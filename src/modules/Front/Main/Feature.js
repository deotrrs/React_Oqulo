import React, {Component, Fragment} from 'react';
import styles from './style'
class Feature extends Component{
    render(){
        return(
            <section className="section3">
                <div style={styles.sectionHeader}>
                    <h1>Oqulo Features at a Glance</h1>
                    <p>Powerful functionalities that changes the way you do business.</p>
                </div>
                <div className="section3-body">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 order-lg-0 order-sm-0">
                                <div className="feature feature--right">
                                    <div className="feature__icon">
                                        <img src="./assets/images/finger-touching-tablet-screen.png" alt="table" /> 
                                    </div>
                                    <div className="feature__content">
                                        <h5><b>Powerful Space Management</b></h5>
                                        <p>Manage meeting room and desk bookings, create events, sell tickets, schedule private office showings, automate invoicing and connect with members --- all in one central dashboard.</p> 
                                    </div>
                                </div>
                                <div className="feature feature--right">
                                    <div className="feature__icon">
                                        <img src="./assets/images/hand-graving-smartphone.png" alt="hand_graving" />
                                        </div>
                                    <div className="feature__content">
                                        <h5><b>Painless Integration</b></h5>
                                        <p>No matter what your website is built on, Oqulo is easy to setup and integrate with CRM and payment gateways. Go live in a matter of days.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 order-lg-1 order-sm-2 text-center">
                                <div className="feature--image" >
                                        <img src="./assets/images/screen.png" style={styles.featureImage} alt="screen" />
                                </div>                            
                            </div>
                            <div className="col-lg-4 order-lg-2 order-sm-1">
                                <div className="feature feature--left" style={styles.feature}>
                                    <div className="feature__icon" style={styles.featureIconRight}>
                                        <img src="./assets/images/mobile-application.png" alt="mobile_app" /> 
                                    </div>
                                    <div className="feature__content" style={styles.featureContentRight}>
                                        <h5><b>User-Friendly Interface</b></h5>
                                        <p>Clients will find it easy to book and pay for their space, thanks to Oqulo’s easy navigation and pixel-perfect design. Keep members up to date with Oqulo’s community board and help desk features.</p>                                    </div>
                                </div>
                                <div className="feature feature--left" style={styles.feature}>
                                    <div className="feature__icon" style={styles.featureIconRight}>
                                            <img src="./assets/images/smartphone-blocked.png" alt="smartphone_blocked"/>
                                        </div>
                                    <div className="feature__content" style={styles.featureContentRight}>
                                        <h5><b>Secure Data & White Label Branding</b></h5>
                                        <p>Get peace of mind in knowing that client information and sales data are stored in a secure server. Our white label service allows you to market this platform as your own.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={styles.sectionFooter}>                  
                </div>
            </section>
        );
    }
}
export default Feature