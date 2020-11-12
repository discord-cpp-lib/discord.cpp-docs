(this["webpackJsonpdiscord.cpp-docs"]=this["webpackJsonpdiscord.cpp-docs"]||[]).push([[0],{146:function(e,t,n){},360:function(e,t,n){"use strict";n.r(t);var s=n(0),i=n(1),c=n.n(i),o=n(52),r=n.n(o),d=(n(66),n(17)),a=n(3),l=(n(67),function(){return Object(i.useEffect)((function(){document.title="discord.cpp"}),[]),Object(s.jsxs)("div",{className:"home",children:[Object(s.jsx)("img",{src:"https://camo.githubusercontent.com/640b98b021c6efb8c909e62dae5dfc816082e7c2/68747470733a2f2f692e696d6775722e636f6d2f46764b733448722e706e67",alt:""}),Object(s.jsx)("h1",{children:"A Discord API wrapper for making C++ bots"}),Object(s.jsx)(d.b,{to:"/documentation/content",className:"docs-link",children:"see the docs"})]})}),h=n(58),b=(n(73),n(74),function(e){var t=e.selectedMd,n=void 0===t?"":t,i=e.selectMd,c=void 0===i?function(){}:i,o={General:["Getting started"],Examples:["Simple BOT","Embeds","Commands","Webhooks"],Classes:["Client","Message","Channel","User","Embed","Guild","Role","Webhook"]};return Object(s.jsx)("div",{className:"sidebar",children:Object(s.jsx)("ul",{children:Object.keys(o).map((function(e,t){return Object(s.jsxs)("li",{className:"sidebar-li",id:e.toLowerCase(),children:[Object(s.jsx)("h4",{children:e}),o[e].map((function(e,t){return Object(s.jsx)("p",{onClick:function(){c(e.toLowerCase().split(" ").join("_"))},className:e.toLowerCase().split(" ").join("_")===n?"selected-topic":"",children:e},t)}))]},t)}))})})}),u=n(54),p=n.n(u),j=n(362),m=n(361),g=(n(146),function(){return Object(s.jsx)("div",{className:"header",children:Object(s.jsxs)("div",{className:"header-content",children:[Object(s.jsx)("div",{className:"header-title",children:Object(s.jsx)(d.b,{to:"/documentation",style:{textDecoration:"none",color:"#fff"},children:Object(s.jsx)("h1",{children:"discord.cpp"})})}),Object(s.jsx)("div",{className:"header-links",children:Object(s.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://github.com/luccanunes/discord.cpp",children:"GitHub"})})]})})}),O=(n(147),function(){return Object(i.useEffect)((function(){document.querySelectorAll("a").forEach((function(e){e.setAttribute("target","_blank")}))}),[]),Object(s.jsxs)("div",{children:[Object(s.jsx)("h2",{id:"about",children:"About"}),Object(s.jsxs)("p",{children:["Inspired by the simplicity of ",Object(s.jsx)("a",{href:"https://github.com/Rapptz/discord.py",children:"discord.py"})," and ",Object(s.jsx)("a",{href:"https://github.com/discordjs/discord.js",children:"discord.js"}),", discord.cpp tries to make the process of interacting with the ",Object(s.jsx)("a",{href:"https://discord.com/developers/docs/intro",children:"Discord API"})," easier, so you can worry less about all the socket connections under the hood, and focus on making your bot better."]}),Object(s.jsx)("h2",{id:"example",children:"Example"}),Object(s.jsx)(j.a,{style:m.a,language:"cpp",children:'#include <iostream>\n#include <dpp.h>\n\nint main()\n{\n const std::string token = "BOT_TOKEN_HERE";\n dpp::Client client;\n\n client.onReady = [&]() {\n  std::cout << "hello, c++!\\n";\n  std::cout << client.user.id << "\\n\\n";\n };\n\n client.onMessage = [&](const dpp::Message& message) {\n  if (message.content == "jaaj?") {\n   message.channel().send("jooj"); // or message.reply("jooj"), which mentions the message author\n  }\n };\n \n client.run(token);\n \n return 0;\n}'}),Object(s.jsx)("h2",{id:"installation-and-set-up",children:"Installation and set up"}),Object(s.jsx)("p",{children:"There are two ways of using discord.cpp. You can use the static library version (with the .lib file), or you can use the header only version."}),Object(s.jsxs)("details",{children:[Object(s.jsx)("summary",{children:"Static library"}),Object(s.jsxs)("p",{children:[" ","First of all, clone the repository to your machine in a directory of your choice (make sure you're cloning the ",Object(s.jsx)("code",{children:"main"})," branch)."]}),Object(s.jsxs)("p",{children:[" ","To create your own project using discord.cpp you have to follow these steps, for this example I'll use Visual Studio, but the steps should be the same. Just google the specifics for your IDE of choice."]}),Object(s.jsx)("h4",{id:"create-your-solution",children:"Create your solution"}),Object(s.jsx)("h4",{id:"add-a-source-file-and-paste-the-example-code",children:"Add a source file and paste the example code"}),Object(s.jsx)("h4",{id:"add-the-compiler-include-path",children:"Add the compiler include path:"}),Object(s.jsxs)("p",{children:[" ","To starting using discord.cpp and all its features, you first have to tell your IDE/compiler where you're importing it from. Here's how to do it in Visual Studio:"]}),Object(s.jsxs)("ol",{children:[Object(s.jsx)("li",{children:Object(s.jsxs)("p",{children:["Right click your ",Object(s.jsx)("em",{children:"project"})," name and select properties ",Object(s.jsx)("br",{})," ",Object(s.jsx)("img",{width:350,src:"https://user-images.githubusercontent.com/68504851/97646641-f66ba680-1a2e-11eb-809b-b263b8428130.png"})]})}),Object(s.jsx)("li",{children:Object(s.jsx)("p",{children:'Select "C/C++" '})}),Object(s.jsx)("li",{children:Object(s.jsxs)("p",{children:['Click "Additional Include Directories", selected the small arrow on the right and click "Edit" ',Object(s.jsx)("br",{})," ",Object(s.jsx)("img",{width:550,src:"https://user-images.githubusercontent.com/68504851/97646811-67ab5980-1a2f-11eb-8667-ec9e1b6b135e.png"})]})}),Object(s.jsx)("li",{children:Object(s.jsxs)("p",{children:["Click the new folder icon and then the three dots to starting browsing your file explorer. ",Object(s.jsx)("br",{})," ",Object(s.jsx)("img",{width:450,src:"https://user-images.githubusercontent.com/68504851/97646868-9cb7ac00-1a2f-11eb-9527-26ea2df19536.png"})]})}),Object(s.jsx)("li",{children:Object(s.jsx)("p",{children:'Select the "/src" folder in the directory that you installed discord.cpp'})}),Object(s.jsxs)("li",{children:[Object(s.jsx)("p",{children:'Click "Ok" and "Apply".'}),Object(s.jsx)("h4",{id:"add-the-linker-path",children:"Add the linker path:"}),Object(s.jsx)("p",{children:"Now that you've added the include path, the compiler is able to find all the classes and functions declarations, but not really their definitions. For that, we need to include an additional depencie to the linker. Here's how to do it in Visual Studio:"})]}),Object(s.jsx)("li",{children:Object(s.jsx)("p",{children:'Follow step 1 of "Add the compiler include path"'})}),Object(s.jsx)("li",{children:Object(s.jsx)("p",{children:'Select "Linker"'})}),Object(s.jsx)("li",{children:Object(s.jsxs)("p",{children:['Click "Additional Library Directories", selected the small arrow on the right and click "Edit" ',Object(s.jsx)("br",{})," ",Object(s.jsx)("img",{width:450,src:"https://user-images.githubusercontent.com/68504851/97648131-c32b1680-1a32-11eb-9dfb-ff97f34e4ff4.png"})]})}),Object(s.jsx)("li",{children:Object(s.jsxs)("p",{children:["Click the new folder icon and then the three dots to starting browsing your file explorer. ",Object(s.jsx)("br",{})," ",Object(s.jsx)("img",{width:450,src:"https://user-images.githubusercontent.com/68504851/97648199-ebb31080-1a32-11eb-9218-9ed4a5e83a98.png"})]})}),Object(s.jsx)("li",{children:Object(s.jsx)("p",{children:'Select the "/src/Release" folder in the directory that you installed discord.cpp'})}),Object(s.jsx)("li",{children:Object(s.jsx)("p",{children:'Click "Ok" and "Apply".'})}),Object(s.jsx)("li",{children:Object(s.jsx)("p",{children:'Now, go to the "Input" tab, still in the linker properties'})}),Object(s.jsx)("li",{children:Object(s.jsxs)("p",{children:['Select "Additional Dependencies", and edit the text string by adding "discord-cpp.lib;" to its beginning ',Object(s.jsx)("br",{})," ",Object(s.jsx)("img",{width:450,src:"https://user-images.githubusercontent.com/68504851/97648393-62500e00-1a33-11eb-8eba-45eed1fcd837.png"})]})}),Object(s.jsxs)("li",{style:{marginBottom:"15px"},children:[Object(s.jsx)("p",{children:'Hit "Apply" and "Ok" and you should be good to go.'}),Object(s.jsx)("h4",{id:"having-trouble",children:"Having trouble?"}),Object(s.jsxs)("p",{children:["Please report any bugs or issues you might have! You can do so by creating a ",Object(s.jsx)("a",{href:"https://guides.github.com/features/issues/",children:"issue"})]})]})]})]}),Object(s.jsxs)("details",{children:[Object(s.jsx)("summary",{children:"Header only"}),Object(s.jsxs)("p",{children:[" ","First of all, clone the repository to your machine in a directory of your choice (make sure you're cloning the ",Object(s.jsx)("code",{children:"header-only"})," branch)."]}),Object(s.jsxs)("p",{children:[" ","To create your own project using discord.cpp you have to follow these steps. For this example I'll use Visual Studio, but the steps should be the same. Just google the specifics for your IDE of choice."]}),Object(s.jsx)("h4",{id:"create-your-solution-1",children:"Create your solution"}),Object(s.jsx)("h4",{id:"add-a-source-file-and-paste-the-example-code-1",children:"Add a source file and paste the example code"}),Object(s.jsx)("h4",{id:"add-the-compiler-include-path-1",children:"Add the compiler include path:"}),Object(s.jsxs)("p",{children:[" ","To starting using discord.cpp and all its features, you first have to tell your IDE/compiler where you're importing it from. Here's how to do it in Visual Studio:"]}),Object(s.jsxs)("ol",{children:[Object(s.jsx)("li",{children:Object(s.jsxs)("p",{children:["Right click your ",Object(s.jsx)("em",{children:"project"})," name and select properties ",Object(s.jsx)("br",{})," ",Object(s.jsx)("img",{width:350,src:"https://user-images.githubusercontent.com/68504851/97646641-f66ba680-1a2e-11eb-809b-b263b8428130.png"})]})}),Object(s.jsx)("li",{children:Object(s.jsx)("p",{children:'Select "C/C++" '})}),Object(s.jsx)("li",{children:Object(s.jsxs)("p",{children:['Click "Additional Include Directories", selected the small arrow on the right and click "Edit" ',Object(s.jsx)("br",{})," ",Object(s.jsx)("img",{width:550,src:"https://user-images.githubusercontent.com/68504851/97646811-67ab5980-1a2f-11eb-8667-ec9e1b6b135e.png"})]})}),Object(s.jsx)("li",{children:Object(s.jsxs)("p",{children:["Click the new folder icon and then the three dots to starting browsing your file explorer. ",Object(s.jsx)("br",{})," ",Object(s.jsx)("img",{width:450,src:"https://user-images.githubusercontent.com/68504851/97646868-9cb7ac00-1a2f-11eb-9527-26ea2df19536.png"})]})}),Object(s.jsx)("li",{children:Object(s.jsx)("p",{children:'Select the "/src" folder in the directory that you installed discord.cpp'})}),Object(s.jsxs)("li",{children:[Object(s.jsx)("p",{children:'Click "Ok" and "Apply", you should be good to go!'}),Object(s.jsx)("h4",{id:"having-trouble-1",children:"Having trouble?"}),Object(s.jsxs)("p",{children:["Please report any bugs or issues you might have! You can do so by creating a ",Object(s.jsx)("a",{href:"https://guides.github.com/features/issues/",children:"issue"})]})]})]})]})]})}),x=function(e){var t=e.value,n=e.language;return Object(s.jsx)(j.a,{language:n,style:m.a,children:t||""})},f=function(){var e=Object(i.useState)("getting_started"),t=Object(h.a)(e,2),n=t[0],c=t[1],o={simple_bot:'## Simple Bot\nIn this example we\'re going to create a very simple bot using discord.cpp, that simply checks for an emoji  inside a message, and, if it exists, reacts to the message with that emoji.\n\nLet\'s check the code out:\n```cpp\n#include <iostream>\n#include <dpp.h> // include discord.cpp\n\nint main()\n{\n  dpp::Client client; // create a client instance \n  \n  // onReady function is not really necessary, but quite usual\n  client.onReady = [&client]() {\n    std::cout << "hello, dpp" << std::endl;\n    std::cout << client.user.id << std::endl;\n  };\n  \n  client.onMessage = [](const dpp::Message& message){\n    if (message.author.bot) return; // checks wheter the message is from a bot\n    \n    if (message.content.find("\ud83d\ude0e") != std::string::npos) // checks if "\ud83d\ude0e" is in the message\n      message.add_reaction("\ud83d\ude0e"); // reacts to the message with "\ud83d\ude0e"\n  };\n  \n  const std::string token = "BOT_TOKEN_HERE"; // you might want to get this from another file\n  client.run(token); // actually initializes the bot, everything after this is unreachable\n  \n  return 0;\n}\n```\n### Result:\n<img src="https://i.ibb.co/gW976F8/Screenshot-1.png">\n\n### Note\nIn case you\'re somewhat new to C++, don\'t be afraid of that JavaScript-arrow-function-like syntax, those are [lambda functions](https://www.geeksforgeeks.org/lambda-expression-in-c/). Please visit this article if you want to know more about them.',embeds:'## Embeds\nIn this example we\'re going to create a very simple bot using [embeds](https://discord.com/developers/docs/resources/channel#embed-limits), that responds to simple commands in order to show all the ways of working with embeds.\n\nLet\'s check the code out:\n```cpp\n#include <iostream>\n#include <dpp.h> // "import" discord.cpp\n\nint main()\n{\n  dpp::Client client; // create a client instance\n  \n  // onReady function is not really necessary, but quite usual\n  client.onReady = [&client]() {\n    std::cout << "hello, dpp" << std::endl;\n    std::cout << client.user.id << std::endl;\n  };\n  \n  client.onMessage = [](const dpp::Message& message){\n    if (message.author.bot) return; // checks wheter the message is from a bot\n    \n    if (message.content == "1") {\n\tdpp::Embed embed; // instantiate a Embed object\n\tembed.setTitle("Sending only an embed"); // set its title\n\tembed.setDescription("With no plain text content"); // set its description\n\tmessage.channel().send(embed); // send only the embed\n    } else if (message.content == "2") {\n\tdpp::Embed embed; \n\tembed.setTitle("Sending an embed"); \n\tembed.setDescription("With plain text content as well");\n\tmessage.channel().send("Hello!!", embed); // send the embed with a message*\n    } else if (message.content == "3") {\n\tdpp::Embed embed;\n\tembed.setTitle("Sending an embed");\n\tembed.setDescription("With *COLOUUUR!!!*");\n\tembed.setColour("#21b879"); // "#" is optional, you can also use rgb**\n\tmessage.channel().send(embed);\n    }\n  };\n  \n  const std::string token = "BOT_TOKEN_HERE"; // you might want to get this from another file\n  client.run(token); // actually initializes the bot, everything after this is unreachable\n  \n  return 0;\n}\n```\n### Result:\n<img src="https://i.ibb.co/6rMZZbC/image.png">\n\n### Notes\n \n * It\'s **crucial** that, if you\'re sending an embed and normal text, the **text comes first**. Maybe we\'ll add an overload that enables you to use whatever order you want, but for now this is how you do it.\n * Check the Embed class section to see how to use rgb.',webhooks:'## Webhooks\nIn this example we\'re going to create a very simple bot using [webhooks](https://discord.com/developers/docs/resources/webhook).\n\nLet\'s check the code out:\n```cpp\n#include <dpp.h> // "import" discord.cpp\n\nint main()\n{\n  // https://discordapp.com/api/webhooks/773192673122135/nl1Owjht3AxrCI2D-eovHdG\n  //                                     ^^^^^^^^^^^^^^^ ^^^^^^^^^^^^^^^^^^^^^^^ \n  //                                       webhook id         webhook token\n  dpp::Webhook wh("HOOK_ID_HERE","HOOK_TOKEN_HERE"); \n  // alternatively: const dpp::Webhook wh("FULL_HOOK_URL_HERE");\n  wh.setName("Julia");\n  wh.setAvatarUrl("https://pbs.twimg.com/media/EdOUUnLWkAA8ULI.jpg");\n\t  \n  wh.send("My name is Julia"); // * Check the notes\n  \n  return 0;\n}\n```\n### Result:\n<img src="https://i.ibb.co/bJZ9QZg/image.png">\n\n### Notes\n \n * You can use the send method just like you would use `Channel::send`, but be aware: `Webhook:send` takes in an `std::vector<Embed>` as a parameter, not a single `Embed`.\n * If you don\'t set any webhook property, you can declare it as `const`\n * Check the Webhook class section to get more information on how to use it',commands:'## Commands\nIn this example we\'re gonna be covering, not all of, the `Command` class. \nLet\'s check some code out:\n```cpp\n#include <dpp.h> // "import" discord.cpp\n\nint main() \n{\n  dpp::Client client; // create a client instance\n  \n  // create the command\n  dpp::Command help("help", [](const dpp::Message& message) { \n    message.reply("here\'s some help!");\n  });\n\n  client.add_command(help); // add the command to the client, so it can recognize it\n\n  client.run("BOT_TOKEN_HERE"); // actually initializes the bot, everything after this is unreachable\n  \n  return 0;\n}\n```\nAs you might have noticed:\n- `Command` takes in two arguments, `std::string name` and `std::function<void(const Message& message)> callback` (lambda function)\n- A new method has been added to `Client`: `add_command`. This is, of course, crucial. If you forget to add the command, it will never be triggered.\n\n### Note\nYou can still use `Client::onMessage`, and if you do, it\'ll be executed before any `Command`'};return Object(s.jsxs)("div",{children:[Object(s.jsx)(g,{}),Object(s.jsx)("div",{className:"docs",children:Object(s.jsxs)("div",{className:"docs-content",children:[Object(s.jsx)(b,{selectMd:function(e){c(e)},selectedMd:n}),Object(s.jsx)("div",{className:"docs-info",children:"getting_started"===n?Object(s.jsx)(O,{}):Object(s.jsx)(p.a,{linkTarget:"_blank",allowDangerousHtml:!0,children:o[n],renderers:{code:x}})})]})})]})},y=function(){return Object(s.jsx)("div",{className:"App",children:Object(s.jsx)(d.a,{children:Object(s.jsxs)(a.c,{children:[Object(s.jsx)(a.a,{path:"/documentation/content",component:f}),Object(s.jsx)(a.a,{path:"/documentation",component:l})]})})})},w=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,363)).then((function(t){var n=t.getCLS,s=t.getFID,i=t.getFCP,c=t.getLCP,o=t.getTTFB;n(e),s(e),i(e),c(e),o(e)}))};r.a.render(Object(s.jsx)(c.a.StrictMode,{children:Object(s.jsx)(y,{})}),document.getElementById("root")),w()},66:function(e,t,n){},67:function(e,t,n){},73:function(e,t,n){},74:function(e,t,n){}},[[360,1,2]]]);
//# sourceMappingURL=main.098e044a.chunk.js.map