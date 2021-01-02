import React from 'react';
import styled from 'styled-components';

const ListItem = styled.li`
  font-weight: 700;
  &:hover {
      
  }
`;


const Nav = styled.nav`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;
    background-color: #a3dfe0;
`;


const Navbar = () => {
    return (
        <Nav>
            <ul style={{ listStyleType: 'none', padding: '.25rem 1rem'}}>
                <NavItem href="/cars">CARS</NavItem>
            </ul>
        </Nav>
    )
}

const NavItem = ({ href, children }) => {
    return (
        <>
            <ListItem ><a style={{ textDecoration: 'none' }} href={href}>{children}</a></ListItem>
        </>
    )
}
export default Navbar;