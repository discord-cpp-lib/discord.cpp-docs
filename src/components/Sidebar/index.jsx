import React from "react";
import "./style.css";

const Sidebar = ({ selectedMd = "", selectMd = () => {} }) => {
    const topics = {
        General: ["Getting started"],
        Examples: ["Simple BOT", "Embeds", "Webhooks"],
        Classes: ["Client", "Message", "Channel", "User", "Guild", "Role"],
    };
    return (
        <div className="sidebar">
            <ul>
                {Object.keys(topics).map((key, index) => (
                    <li className="sidebar-li" key={index} id={key.toLowerCase()}>
                        <h4>{key}</h4>
                        {topics[key].map((topic, index) => (
                            <p
                                key={index}
                                onClick={() => {
                                    selectMd(topic.toLowerCase().split(" ").join("_"));
                                }}
                                className={topic.toLowerCase().split(" ").join("_") === selectedMd ? "selected-topic" : ""}
                            >
                                {topic}
                            </p>
                        ))}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Sidebar;
