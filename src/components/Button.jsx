// Button1.jsx
import React from "react";

function Button1() {
  const handleClick = () => {
    // Create a script element
    const script = document.createElement("script");

    // Set the source for the Botpress web chat script
    script.src = "https://cdn.botpress.cloud/webchat/v1/inject.js";
    script.async = true;

    // Append the script to the document head
    document.head.appendChild(script);

    // Set up a callback for when the script is loaded
    script.onload = () => {
      // Initialize the Botpress web chat with the updated configuration
      window.botpressWebChat.init({
        "composerPlaceholder": "Type here",
        "botConversationDescription": "Mood-lifting Interactive Nexus of Delight",
        "botId": "3a21ca07-90f4-476c-878f-b672251bd7d9",
        "hostUrl": "https://cdn.botpress.cloud/webchat/v1",
        "messagingUrl": "https://messaging.botpress.cloud",
        "clientId": "3a21ca07-90f4-476c-878f-b672251bd7d9",
        "webhookId": "328f1e01-02ac-4a11-af1d-fd4847e51bee",
        "lazySocket": true,
        "themeName": "prism",
        "botName": "M.I.N.D.",
        "avatarUrl": "https://thumbs.dreamstime.com/z/funny-happy-chat-bot-yellow-112159101.jpg?ct=jpeg",
        "stylesheet": "https://webchat-styler-css.botpress.app/prod/code/51544756-e75d-4a3a-8ffe-044db7fe9782/v80295/style.css",
        "frontendVersion": "v1",
        "useSessionStorage": true,
        "theme": "prism",
        "themeColor": "#2563eb"
      });
    };
  };

  return (
    <button
      className="bg-blue-600  rounded-md hover:bg-blue-800 uppercase
      transition duration-200 text-2xl dark:text-white font-semibold  py-4 px-8  w-full mb-4"
      onClick={handleClick}
    >
      Chat with M.I.N.D.
    </button>
  );
}

export default Button1;
