import React, { Component } from 'react';

import { Collapse, Navbar, NavbarToggler, Nav, NavItem, NavLink } from 'reactstrap';

export default class Header extends Component {

    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        return (
            <div>
                <div style={{height: '150px'}}>
                    <img src={require('../../assets/img/helper.jpeg')} alt="House Helper" height="150px" />
                </div>
                <Navbar light expand="md" style={{backgroundColor: '#0078d7'}}>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav navbar>
                            <NavItem>
                                <NavLink href="#/" style={{color: 'white'}}>Home</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="#" style={{color: 'white'}}>Comprar</NavLink>
                            </NavItem>         
                            <NavItem>
                                <NavLink href="#" style={{color: 'white'}}>Alugar</NavLink>
                            </NavItem>         
                            <NavItem>
                                <NavLink href="#" style={{color: 'white'}}>Em destaque</NavLink>
                            </NavItem>         
                            <NavItem>
                                <NavLink href="#" style={{color: 'white'}}>Novos</NavLink>
                            </NavItem>         
                            <NavItem>
                                <NavLink href="#" style={{color: 'white'}}>Contato</NavLink>
                            </NavItem>         
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }

}