import React, { useEffect, useState } from "react";
import "./style.css";
import Sidebar from "../../components/Sidebar/index";
import ReactMarkDown from "react-markdown";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import Header from "../../components/Header/index";
import gettingStarted from "./markdown/getting-started";

const Docs = () => {
    const [selectedMd, setSelectedMd] = useState("getting_started");

    const sections = {
        getting_started: gettingStarted,
    };

    useEffect(() => {
        document.title = "Docs | discord.cpp";
    }, []);

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
