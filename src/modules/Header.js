import React, {Component} from 'react';
class Header extends Component {
    render() {
        var _style = {
            marginTop: '100px',
            border: '1px solid black'
        };


        var globalStyles = {
            content: {
                marginTop: '100px'
            }
        };

        var content = <div style={globalStyles.content}>content...</div>
        var header = <nav>{content}</nav>;

        return (
            <div>
                {header}
            </div>
        )
    }
}

export default Header;