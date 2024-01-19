import React, { useState } from 'react';

export default function Journal(props) {
    const [text, setText] = useState('');
    const [thoughts, setThoughts] = useState([]);

    const handleOnChange = (event) => {
        setText(event.target.value);
    };

    const handleSaveClick = () => {
        setThoughts([...thoughts, text]);
        setText('');
    };

    const handleOpenChatbot = () => {
        const script = document.createElement('script');
        script.src = 'https://cdn.botpress.cloud/webchat/v1/inject.js';
        script.async = true;

        script.onload = () => {
            window.botpressWebChat.init({
                "composerPlaceholder": "Type here",
                "botConversationDescription": "Mood-lifting Interactive Nexus of Delight",
                "botId": "a1104d05-ceb5-4d67-a53a-45bf26d88564",
                "hostUrl": "https://cdn.botpress.cloud/webchat/v1",
                "messagingUrl": "https://messaging.botpress.cloud",
                "clientId": "a1104d05-ceb5-4d67-a53a-45bf26d88564",
                "webhookId": "8aebb72e-9926-4c6a-9a6f-cc585bde4b1a",
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

        document.head.appendChild(script);
    };

    return (
        <>
            <div className="container mx-auto px-40 py-10">
                <h1 className="text-2xl font-bold my-4 text-center">Write your thoughts here </h1>
                <div className="mb-3">
                    <textarea
                        className="form-control resize-none border rounded-md w-full h-64"
                        value={text}
                        onChange={handleOnChange}
                        id="myBox"
                    ></textarea>
                </div>
                <div className="flex justify-center">
                    <button
                        className="btn btn-primary mx-1 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        onClick={handleSaveClick}
                    >
                        Save my Thoughts
                    </button>
                    <button
                        className="btn btn-primary mx-1 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        onClick={handleOpenChatbot}
                    >
                        Let's talk
                    </button>
                </div>
            </div>
            <div className="container mx-auto px-4 my-3">
                {/* <h2 className="text-xl font-bold my-2 text-center">My Thoughts</h2> */}
                {thoughts.map((thought, index) => (
                    <div
                        key={index}
                        className="btn btn-primary text-center my-2 mx-40 bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    >
                        {thought}
                    </div>
                ))}
            </div>
        </>
    );
}
