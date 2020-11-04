import React, { useEffect, useState } from "react";
import "./style.css";
import Sidebar from "../../components/Sidebar/index";
import ReactMarkDown from "react-markdown";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import Header from "../../components/Header/index";
import gettingStarted from "./markdown/getting-started";
import simpleBot from "./markdown/simple-bot";
import embeds from "./markdown/embeds";

const Docs = () => {
    const [selectedMd, setSelectedMd] = useState("getting_started");

    const sections = {
        getting_started: gettingStarted,
        simple_bot: simpleBot,
        embeds: embeds,
    };

    useEffect(() => {
        document.title = "Docs | discord.cpp";
        document.querySelectorAll("a").forEach((a) => {
            a.target = "_blank";
        });
    }, [selectedMd]);

    return (
        <div>
            <Header />
            <div className="docs">
                <div className="docs-content">
                    <Sidebar
                        selectMd={(newMd) => {
                            setSelectedMd(newMd);
                        }}
                        selectedMd={selectedMd}
                    />
                    <div className="docs-info">
                        <ReactMarkDown allowDangerousHtml={true} children={sections[selectedMd]} renderers={{ code: Code }} />
                    </div>
                </div>
            </div>
        </div>
    );
};

const Code = ({ value, language }) => (
    <SyntaxHighlighter language={language} style={docco}>
        {value || ""}
    </SyntaxHighlighter>
);

export default Docs;
