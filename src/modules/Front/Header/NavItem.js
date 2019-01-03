import React from 'react';

const NavItem = (props) => (
    <li style={props.styles.NavigationListItem} className="nav-item app-header__list-item">
        <a style={props.styles.NavigationListItem} className="nav-link" href="">{props.name}</a>
    </li>
);

export default NavItem;