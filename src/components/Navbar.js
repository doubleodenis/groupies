import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
const List = styled.ul`
  list-style-type: none;
  display: flex;
  margin: 0;
  height: inherit;
  line-height: 40px;
`;


const ListItem = styled.li`
    color: white;
    padding: 5px 10px;
    cursor: pointer;
    font-size: 16px;
    &:hover {
        background-color:rgba(255, 255, 255, 0.226);
        transition: ease-in .3s;
    }
`;


const Nav = styled.nav`
    width: 100%;
    height: 50px;
    background: transparent;
    background-color: rgba(0,0,0,.4);
`;

function toggleNightMode() {

}

const Navbar = () => {
    return (
        <Nav>
            <List >
                <NavItem to="/members">MEMBERS</NavItem>
                <NavItem to="/skwop">SKWOP</NavItem>
                <NavItem to="/cars">CARS</NavItem>
                <NavItem to="/gallery">GALLERY</NavItem>
                {/* <NavItem to="/dev">DEV</NavItem> */}

                <li className="toggleNightMode" onClick={toggleNightMode}>
                    {/* <svg id="nightModeOff" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 172 172" style="{{fill: rgb(0, 0, 0); display: none;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g fill="#ffffff"><path d="M126.13333,120.4c-37.9948,0 -68.8,-30.8052 -68.8,-68.8c0,-11.18 2.72333,-21.70067 7.45333,-31.0288c-27.606,8.944 -47.58667,34.84147 -47.58667,65.4288c0,37.9948 30.8052,68.8 68.8,68.8c26.82053,0 49.99467,-15.3768 61.34667,-37.7712c-6.68507,2.1672 -13.80587,3.3712 -21.21333,3.3712z"></path></g></g>
                    </svg>    
                    
                    <svg id="nightModeOn" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 172 172" style="fill: rgb(0, 0, 0); display: block;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g fill="#ffffff"><path d="M78.83333,0v21.5h14.33333v-21.5zM30.26237,20.12826l-10.13411,10.13411l15.20117,15.20117l10.13411,-10.13411zM141.73763,20.12826l-15.20117,15.20117l10.13411,10.13411l15.20117,-15.20117zM86,35.83333c-27.6214,0 -50.16667,22.54527 -50.16667,50.16667c0,27.6214 22.54527,50.16667 50.16667,50.16667c27.6214,0 50.16667,-22.54527 50.16667,-50.16667c0,-27.6214 -22.54527,-50.16667 -50.16667,-50.16667zM86,50.16667c19.87509,0 35.83333,15.95824 35.83333,35.83333c0,19.87509 -15.95825,35.83333 -35.83333,35.83333c-19.87509,0 -35.83333,-15.95825 -35.83333,-35.83333c0,-19.87509 15.95824,-35.83333 35.83333,-35.83333zM0,78.83333v14.33333h21.5v-14.33333zM150.5,78.83333v14.33333h21.5v-14.33333zM35.32943,126.53646l-15.20117,15.20117l10.13411,10.13411l15.20117,-15.20117zM136.67057,126.53646l-10.13411,10.13411l15.20117,15.20117l10.13411,-10.13411zM78.83333,150.5v21.5h14.33333v-21.5z"></path></g></g>
                    </svg>   */}
                </li>
            </List>
        </Nav>
    )
}

const NavItem = ({ to, children }) => {
    return (
        <>
            <ListItem ><Link style={{ textDecoration: 'none', color: 'white', fontSize: '14px', fontWeight: 600 }} to={to}>{children}</Link></ListItem>
        </>
    )
}
export default Navbar;


{/* <div class="hero-image">
    <nav>
        <ul>
            <li><a href="/team">THE TEAM</a></li>
            <li><a href="/skwop">SKWOP</a></li>
            <li><a href="/voting">VOTING</a></li>
            <li><a href="/test">DEV</a></li>
            <li><a href="/gallery">GALLERY</a></li>

            <li class="toggleNightMode" onclick="toggleNightMode()">
                <svg id="nightModeOff" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 172 172" style="fill: rgb(0, 0, 0); display: none;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g fill="#ffffff"><path d="M126.13333,120.4c-37.9948,0 -68.8,-30.8052 -68.8,-68.8c0,-11.18 2.72333,-21.70067 7.45333,-31.0288c-27.606,8.944 -47.58667,34.84147 -47.58667,65.4288c0,37.9948 30.8052,68.8 68.8,68.8c26.82053,0 49.99467,-15.3768 61.34667,-37.7712c-6.68507,2.1672 -13.80587,3.3712 -21.21333,3.3712z"></path></g></g>
                </svg>    
                
                <svg id="nightModeOn" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 172 172" style="fill: rgb(0, 0, 0); display: block;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g fill="#ffffff"><path d="M78.83333,0v21.5h14.33333v-21.5zM30.26237,20.12826l-10.13411,10.13411l15.20117,15.20117l10.13411,-10.13411zM141.73763,20.12826l-15.20117,15.20117l10.13411,10.13411l15.20117,-15.20117zM86,35.83333c-27.6214,0 -50.16667,22.54527 -50.16667,50.16667c0,27.6214 22.54527,50.16667 50.16667,50.16667c27.6214,0 50.16667,-22.54527 50.16667,-50.16667c0,-27.6214 -22.54527,-50.16667 -50.16667,-50.16667zM86,50.16667c19.87509,0 35.83333,15.95824 35.83333,35.83333c0,19.87509 -15.95825,35.83333 -35.83333,35.83333c-19.87509,0 -35.83333,-15.95825 -35.83333,-35.83333c0,-19.87509 15.95824,-35.83333 35.83333,-35.83333zM0,78.83333v14.33333h21.5v-14.33333zM150.5,78.83333v14.33333h21.5v-14.33333zM35.32943,126.53646l-15.20117,15.20117l10.13411,10.13411l15.20117,-15.20117zM136.67057,126.53646l-10.13411,10.13411l15.20117,15.20117l10.13411,-10.13411zM78.83333,150.5v21.5h14.33333v-21.5z"></path></g></g>
                </svg>  

            </li>
        </ul>
    </nav>
    <div class="hero-overlay">
    
        <div class="groupies-header">Groupies</div>
    </div>
</div> */}