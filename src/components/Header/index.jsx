import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

const Header = () => (
    <div className="header">
        <div className="header-content">
            <div className="header-title">
                <Link to="/" style={{ textDecoration: "none", color: "#fff" }}>
                    <h1>discord.cpp</h1>
                </Link>
            </div>
            <div className="header-links">
                <a target="_blank" rel="noreferrer" href="https://github.com/luccanunes/discord.cpp">
                    GitHub
                </a>
                {/* <Link to="/docs">Docs</Link> */}
            </div>
        </div>
    </div>
);

export default Header;
