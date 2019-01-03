const styles = {
    Header: {
        padding: 60,
        position: 'absolute',
        top: 0,
        left: 0,
        transition: '0.5s',
        zIndex: 1,
        width: '100%'
    },
    Logo: {
        width: 150
    },
    LogoImg: {
        width: '100%'
    },
    Navigation: {
        fontSize: 16
    },
    NavigationList: {
        listStyle: 'none',
        margin: 0,
        float: 'right'
    },
    NavigationListItem: {
        display: 'inline-block',
        paddingLeft: 10,
        paddingRight: 10
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