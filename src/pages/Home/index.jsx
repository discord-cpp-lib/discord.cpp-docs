import React, { useEffect } from "react";
import "./style.css";
import { Link } from "react-router-dom";

const Home = () => {
    useEffect(() => {
        document.title = "discord.cpp";
    }, []);

    return (
        <div className="home">
            <img src="https://camo.githubusercontent.com/640b98b021c6efb8c909e62dae5dfc816082e7c2/68747470733a2f2f692e696d6775722e636f6d2f46764b733448722e706e67" alt="" />
            <h1>A Discord API wrapper for making C++ bots</h1>
            <Link to="/documentation/content" className="docs-link">
                see the docs
            </Link>
        </div>
    );
};

export default Home;
