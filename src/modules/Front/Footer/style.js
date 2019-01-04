const styles = {
    footer:{
        height:370,
        backgroundImage: "url(assets/images/footer.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        zIndex: -1,
        overflow: "hidden",
    },
    footer_container:{
        textAlign:"center"
    },
    container_footer_bottom:{
        textAlign:"center"
    },
    container_footer_top:{
        padding:30,
        textAlign:"center"
    },
    Navigation: {
        fontSize: 16,
        padding:20,
        textAlign:"center"
    },
    NavigationList: {
        listStyle: 'none',
        margin: 0,
    },
    NavigationListItem: {
        display: 'inline-block',
        paddingLeft: 20,
        paddingRight: 20
    },
    NavigationListItemHover: {
        border:'1px solid #f428ff',
        transition: '0.5s',
        display: 'inline-block',
        paddingLeft: 10,
        paddingRight: 10,
        height: 40,
        color: 'white',
    },

}

export default styles;