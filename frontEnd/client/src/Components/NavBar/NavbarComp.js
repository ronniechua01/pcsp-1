import React, { Component, useState } from 'react';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';

import HomePage from '../HomePage/HomePage';
import AboutUs from '../AboutUsPage/AboutUs';
import ReportPage from '../ReportPage/ReportPage';
import AdminPage from '../AdminPage/AdminPage';
import Resources from '../ResourcesPage/Resources';
import securityTopics from '../ResourcesPage/CyberSecurityTopicsPage/cyberSecuritytopics'
import CyberSecurityTopicsPage from '../ResourcesPage/CyberSecurityTopicsPage/CyberSecurityTopicsPage'

import './NavbarComp.css';

export default class NavbarComp extends Component {

    render() {

        return (
            <Router>
                <div>
                    <Navbar variant="dark" expand="lg" className="NavbarComp">
                        <Navbar.Brand href="/home">PCSP</Navbar.Brand>
                        <Navbar.Brand href="/home">Philippine Cyber Security Portal</Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll" className="MenuItems">
                            <Nav
                                className="mr-auto my-2 my-lg-0"
                                style={{ maxHeight: '154px' }}
                                navbarScroll
                            >
                                <Nav.Link as={Link} to="/home">Home</Nav.Link>
                                <NavDropdown
                                    title="Resources"
                                    id="collasible-nav-dropdown"
                                    renderMenuOnMount={true}
                                    //onToggle={() => { window.location.href = '/resources' }}
                                >
                                    <NavDropdown.Item as={Link} to="/cybersecurity">Cyber Security Topics</NavDropdown.Item>
                                    <NavDropdown.Item href="#action4">News and Updates</NavDropdown.Item>
                                </NavDropdown>
                                <Nav.Link as={Link} to="/about">About Us</Nav.Link>
                            </Nav>
                            {/* Search Bar */}
                            <Form className="SearchBar">
                                <FormControl
                                    type="search"
                                    placeholder="Search"
                                    className="mr-2"
                                    aria-label="Search"
                                />
                            </Form>

                        </Navbar.Collapse>

                        {/* Report Here Button */}
                        <Button className="ReportButton" as={Link} to="/report">Report Here</Button>

                    </Navbar>
                </div>

                {/* Links to other pages */}
                <div>
                    <Switch>
                        <Route path="/home">
                            <HomePage />
                        </Route>
                        <Route path="/report">
                            <ReportPage />
                        </Route>
                        <Route path="/admin">
                            <AdminPage />
                        </Route>
                        <Route path="/about">
                            <AboutUs />
                        </Route>
                        <Route path="/resources">
                            <Resources />
                        </Route>
                        <Route path="/cybersecurity">
                            <CyberSecurityTopicsPage />
                        </Route>
                    </Switch>
                </div>
            </Router>
        )
    }
}




