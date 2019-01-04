// import Background from "/images/hero_bg.png"
const styles = {
    heroBackground:{
        backgroundImage: "url(assets/images/hero_bg.png)",
        backgroundPosition: "center",
        zIndex: -1,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        overflow: "hidden",
    },
    heroImage:{
        height: 750,
        objectFit: "cover"
    },
    heroText:{
        color:"white",
        fontFamily: '"Lucida Grande", "Lucida Sans Unicode", Arial, sans-serif',
        letterSpacing: -1
    },
    heroText_spam:{
        opacity: 0.5
    },
    inputForm:{
        height:50,
        border: "none",
        padding: 20,
        borderRadius: 30,
        width: 320
    },
    buttonInput:{
        backgroundColor:"#e76d56",
        border:"none",
        borderRadius: 30,
        width:170,
        height:50,
        textDecoration: "none",
        display: "inline-block",
        color:"white"
    },
    sectionHeader:{
        textAlign: "center",
        paddingTop: 70
    },
    sectionHeading__text:{
        paddingTop:90
    },    
    sectionContainer:{
        textAlign:"center",
        paddingBottom: 30
    },
    sectionFooter:{
        textAlign: "center",
        paddingBottom: 70
    },
    section2:{
        paddingTop:70
    },
    section4:{
        height:1000
    },
    section5:{
        height:370,
        backgroundImage: "url(assets/images/hero_bg.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        zIndex: -1,
        overflow: "hidden",
    },
    feature:{
        display: "flex"
    }, 
    featureContentRight:{
        order: "2",
        textAlign: "left"
    },
    featureImage:{
        textAlign:"center",
        width: 300
    },        
    featureIconRight:{
        marginRight: 40,
        marginLeft: 0,
        order: "1",
    },
   
    
    

}
export default styles