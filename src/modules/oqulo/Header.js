import React, {Component} from 'react';
class Header extends Component{

    render() {
        var globalStyle = {
            app:{
              position:'relative',
            }
          }
          const nav = <nav></nav>
          const header = <header>{nav}</header>
        return(
            <div style={globalStyle.app}>
            {header}
            </div>
        );
    }
}
export default Header;