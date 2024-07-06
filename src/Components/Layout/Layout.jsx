import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from '../Home';
import Tab1 from '../Tab1';
import Tab2 from '../Tab2';
import './Layout.css'

const NavBar = () => {
    return (
        <div className="navBar">
            <ul className="navList">
                <li className="navItem">
                    <Link className="navLink" to="/">
                        Home
                    </Link>
                </li>
                <li className="navItem">
                    <Link className="navLink" to="/tab1">
                        Tab 1
                    </Link>
                </li>
                <li className="navItem">
                    <Link className="navLink" to="/tab2">
                        Tab 2
                    </Link>
                </li>
            </ul>
        </div>
    )
}

const PageContent = () => {
    return (
        <div className="body">
            <Routes>
                <Route path="/" exact element={<Home />} />
                <Route path="/tab1" element={<Tab1 />} />
                <Route path="/tab2" element={<Tab2 />} />
            </Routes>
        </div>
    )
}

const Layout = () => {
    return (
        <Router>
            <div className="container">
                <NavBar />
                <PageContent />
            </div>
        </Router >
    );
};

export default Layout;