import marked from "marked";
import React, { useEffect } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

const GettingStarted = () => {
    useEffect(() => {
        document.querySelectorAll("a").forEach((link) => {
            link.setAttribute("target", "_blank");
        });
    }, []);

    return (
        <div>
            <h2 id="about">About</h2>
            <p>
                Inspired by the simplicity of <a href="https://github.com/Rapptz/discord.py">discord.py</a> and <a href="https://github.com/discordjs/discord.js">discord.js</a>,
                discord.cpp tries to make the process of interacting with the <a href="https://discord.com/developers/docs/intro">Discord API</a> easier, so you can worry less
                about all the socket connections under the hood, and focus on making your bot better.
            </p>
            <h2 id="example">Example</h2>
            <SyntaxHighlighter
                style={docco}
                language={"cpp"}
                children={
                    '#include <iostream>\n#include <dpp.h>\n\nint main()\n{\n const std::string token = "BOT_TOKEN_HERE";\n dpp::Client client;\n\n client.onReady = [&]() {\n  std::cout << "hello, c++!\\n";\n  std::cout << client.user.id << "\\n\\n";\n };\n\n client.onMessage = [&](const dpp::Message& message) {\n  if (message.content == "jaaj?") {\n   message.channel().send("jooj"); // or message.reply("jooj"), which mentions the message author\n  }\n };\n \n client.run(token);\n \n return 0;\n}'
                }
            ></SyntaxHighlighter>
            <h2 id="installation-and-set-up">Installation and set up</h2>
            <p>There are two ways of using discord.cpp. You can use the static library version (with the .lib file), or you can use the header only version.</p>
            <details>
                <summary>Static library</summary>
                <p>
                    {" "}
                    First of all, clone the repository to your machine in a directory of your choice (make sure you're cloning the <code>main</code> branch).
                </p>
                <p>
                    {" "}
                    To create your own project using discord.cpp you have to follow these steps, for this example I'll use Visual Studio, but the steps should be the same. Just
                    google the specifics for your IDE of choice.
                </p>
                <h4 id="create-your-solution">Create your solution</h4>
                <h4 id="add-a-source-file-and-paste-the-example-code">Add a source file and paste the example code</h4>
                <h4 id="add-the-compiler-include-path">Add the compiler include path:</h4>
                <p>
                    {" "}
                    To starting using discord.cpp and all its features, you first have to tell your IDE/compiler where you're importing it from. Here's how to do it in Visual
                    Studio:
                </p>
                <ol>
                    <li>
                        <p>
                            Right click your <em>project</em> name and select properties <br />{" "}
                            <img width={350} src="https://user-images.githubusercontent.com/68504851/97646641-f66ba680-1a2e-11eb-809b-b263b8428130.png" />
                        </p>
                    </li>
                    <li>
                        <p>Select "C/C++" </p>
                    </li>
                    <li>
                        <p>
                            Click "Additional Include Directories", selected the small arrow on the right and click "Edit" <br />{" "}
                            <img width={550} src="https://user-images.githubusercontent.com/68504851/97646811-67ab5980-1a2f-11eb-8667-ec9e1b6b135e.png" />
                        </p>
                    </li>
                    <li>
                        <p>
                            Click the new folder icon and then the three dots to starting browsing your file explorer. <br />{" "}
                            <img width={450} src="https://user-images.githubusercontent.com/68504851/97646868-9cb7ac00-1a2f-11eb-9527-26ea2df19536.png" />
                        </p>
                    </li>
                    <li>
                        <p>Select the "/src" folder in the directory that you installed discord.cpp</p>
                    </li>
                    <li>
                        <p>Click "Ok" and "Apply".</p>
                        <h4 id="add-the-linker-path">Add the linker path:</h4>
                        <p>
                            Now that you've added the include path, the compiler is able to find all the classes and functions declarations, but not really their definitions. For
                            that, we need to include an additional depencie to the linker. Here's how to do it in Visual Studio:
                        </p>
                    </li>
                    <li>
                        <p>Follow step 1 of "Add the compiler include path"</p>
                    </li>
                    <li>
                        <p>Select "Linker"</p>
                    </li>
                    <li>
                        <p>
                            Click "Additional Library Directories", selected the small arrow on the right and click "Edit" <br />{" "}
                            <img width={450} src="https://user-images.githubusercontent.com/68504851/97648131-c32b1680-1a32-11eb-9dfb-ff97f34e4ff4.png" />
                        </p>
                    </li>
                    <li>
                        <p>
                            Click the new folder icon and then the three dots to starting browsing your file explorer. <br />{" "}
                            <img width={450} src="https://user-images.githubusercontent.com/68504851/97648199-ebb31080-1a32-11eb-9218-9ed4a5e83a98.png" />
                        </p>
                    </li>
                    <li>
                        <p>Select the "/src/Release" folder in the directory that you installed discord.cpp</p>
                    </li>
                    <li>
                        <p>Click "Ok" and "Apply".</p>
                    </li>
                    <li>
                        <p>Now, go to the "Input" tab, still in the linker properties</p>
                    </li>
                    <li>
                        <p>
                            Select "Additional Dependencies", and edit the text string by adding "discord-cpp.lib;" to its beginning <br />{" "}
                            <img width={450} src="https://user-images.githubusercontent.com/68504851/97648393-62500e00-1a33-11eb-8eba-45eed1fcd837.png" />
                        </p>
                    </li>
                    <li style={{ marginBottom: "15px" }}>
                        <p>Hit "Apply" and "Ok" and you should be good to go.</p>
                        <h4 id="having-trouble">Having trouble?</h4>
                        <p>
                            Please report any bugs or issues you might have! You can do so by creating a <a href="https://guides.github.com/features/issues/">issue</a>
                        </p>
                    </li>
                </ol>
            </details>
            <details>
                <summary>Header only</summary>
                <p>
                    {" "}
                    First of all, clone the repository to your machine in a directory of your choice (make sure you're cloning the <code>header-only</code> branch).
                </p>
                <p>
                    {" "}
                    To create your own project using discord.cpp you have to follow these steps. For this example I'll use Visual Studio, but the steps should be the same. Just
                    google the specifics for your IDE of choice.
                </p>
                <h4 id="create-your-solution-1">Create your solution</h4>
                <h4 id="add-a-source-file-and-paste-the-example-code-1">Add a source file and paste the example code</h4>
                <h4 id="add-the-compiler-include-path-1">Add the compiler include path:</h4>
                <p>
                    {" "}
                    To starting using discord.cpp and all its features, you first have to tell your IDE/compiler where you're importing it from. Here's how to do it in Visual
                    Studio:
                </p>
                <ol>
                    <li>
                        <p>
                            Right click your <em>project</em> name and select properties <br />{" "}
                            <img width={350} src="https://user-images.githubusercontent.com/68504851/97646641-f66ba680-1a2e-11eb-809b-b263b8428130.png" />
                        </p>
                    </li>
                    <li>
                        <p>Select "C/C++" </p>
                    </li>
                    <li>
                        <p>
                            Click "Additional Include Directories", selected the small arrow on the right and click "Edit" <br />{" "}
                            <img width={550} src="https://user-images.githubusercontent.com/68504851/97646811-67ab5980-1a2f-11eb-8667-ec9e1b6b135e.png" />
                        </p>
                    </li>
                    <li>
                        <p>
                            Click the new folder icon and then the three dots to starting browsing your file explorer. <br />{" "}
                            <img width={450} src="https://user-images.githubusercontent.com/68504851/97646868-9cb7ac00-1a2f-11eb-9527-26ea2df19536.png" />
                        </p>
                    </li>
                    <li>
                        <p>Select the "/src" folder in the directory that you installed discord.cpp</p>
                    </li>
                    <li>
                        <p>Click "Ok" and "Apply", you should be good to go!</p>
                        <h4 id="having-trouble-1">Having trouble?</h4>
                        <p>
                            Please report any bugs or issues you might have! You can do so by creating a <a href="https://guides.github.com/features/issues/">issue</a>
                        </p>
                    </li>
                </ol>
            </details>
        </div>
    );
};
export default GettingStarted;
