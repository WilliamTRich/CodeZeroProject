import { useEffect, useContext, useState } from 'react';
import { Nav } from '../../components/Nav.jsx';
import io from 'socket.io-client';
import { UserContext } from '../../contexts/UserContext.jsx';
import socket from './Socket.jsx';

//when run the front end with socket.io imported it throws an error does not throw error when removed. socket.io already installed in backend and imported to the project.

function Chat() {
    // const [socket] = useState(() => io(":8000"));
    const [messages, setMessages] = useState([]);
    const [message, setMessage] = useState('');

    // const socket = io(':8000');
    // socket.on('connect', () => {
    //     console.log('Connected to server');
    // });
    // socket.emit('newMessageFromClient', 'Hello, server!'); //this works

    const sendMessage = () => {
        if (message) {
            // Send message to the server
            socket.emit('newMessageFromClient', message);
            console.log('I am in the send message constant: ' + message);
            setMessage('');
        }
    };

    // useEffect(() => {
    //     socket.on("connect", () => {
    //         console.log("Connected to server");
    //     });

    //     return () => {
    //         socket.disconnect();
    //         console.log("Disconnected from server");
    //     };
    // }, [socket]);

    // useEffect to make sure we don't create new socket servers on every refresh
    useEffect(() => {
        console.log('I am in the useEffect to post messages but oustide socket.on');
        // Listen for messages from the server
        // socket.on("connection", () => {
        //     console.log("Connected to server");
        // });
        socket.on('newMessageFromServer', (msg) => {
            socket.emit('newMessageFromClient', 'Hello, server!');

            console.log('I am in the socket.on');
            setMessages((prevMessages) => [msg, ...prevMessages], console.log('I am in the setmessage creation'));
            console.log('I am in the useEffect msg: ' + msg);
            console.log('I am in the useEffect setMessages: ' + setMessages);
        });
        return () => {
            socket.off('newMessageFromServer');
            socket.disconnect();
            console.log('Disconnected from server');
        };
    }, []);
    // Clean up the socket connection when the component unmounts
    // return () => {
    //     socket.disconnect();
    //     console.log("Disconnected from server");
    // };
    // }, [socket]);

    const { user } = useContext(UserContext);

    return (

        <div className={'flex bg-background h-screen w-screen'}>
            <div className="fixed h-screen w-48 flex flex-col justify-evenly items-center bg-accent-dark left-0 top-0">
                <Nav user={user} />
            </div>
            <div className="flex-1 flex flex-col p-4 rounded-lg shadow-lg bg-background text-white ml-48 mr-4">
                <h1 className="text-5xl font-semibold mb-4 border-b-2 border-primary w-full text-end">
                    Messages
                </h1>
                <div className="h-48 overflow-y-auto border border-gray-300 rounded p-4 mb-4">

                    {messages.map((msg, index) => (
                        <div key={index} className="mb-2">
                            {msg}
                        </div>
                    ))}
                </div>

                <div id="message-container" className=" mx-6 mb-6">
                    <form id="send-container" className="mt-4 flex">
                        <input
                            type="text"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            className="flex-1 rounded-l p-2 focus:outline-none"
                        />
                        <button
                            onClick={sendMessage}
                            className="rounded-r bg-blue-500 hover:bg-blue-600 text-white p-2"
                            type="button"
                        >
                            Send
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )

    {/*
        <div>
            <form className="mt-4">
                <div className="flex">
                    <input
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="flex-1 rounded-l p-2 focus:outline-none"
                    />
                    <button
                        onClick={sendMessage}
                        className="rounded-r bg-blue-500 hover:bg-blue-600 text-white p-2"
                        type="button"
                    > Send
                    </button>
                </div>
            </form>
        </div>
        */}

}

export default Chat;

//************************************************************************** HACKERMOON VERSION******************************************************** */

// function useWebSocket() {
//     const [messages, setMessages] = useState([]);
//     const [error, setError] = useState(null);
//     useEffect(() => {
//         const socket = io('http://localhost:3000');
//         socket.on('connect', () => {
//             console.log('Connected to server!');
//         });
//         socket.on('disconnect', () => {
//             console.log('Disconnected from server');
//         });
//         socket.on('error', (error) => {
//             setError(error);
//         });
//         socket.on('message', (message) => {
//             setMessages((prevMessages) => [...prevMessages, message]);
//         });
//         return () => {
//             socket.disconnect();
//         };
//     }, []);
//         const sendMessage = (message) => {
//             if (socket.connected) {
//                 socket.send(message);
//             }   };
//             return { messages, sendMessage, error
//         };
//     }

// function Chat() {
//     const { messages, sendMessage, error } = useWebSocket();

//     if (error) {
//         return <div>Error: {error.message}</div>;
//     }
//     return (
//     <div>
//         <ul>
//             {messages.map((message) => (
//             <li>{message}</li>
//             ))}
//         </ul>
//         <form onSubmit={(event) => {
//             event.preventDefault();
//             const messageInput = event.target.elements.message;
//             sendMessage(messageInput.value);
//             messageInput.value = '';
//             }}>
//             <input name="message" />
//             <button type="submit">Send</button>
//         </form>
//     </div>
//     )
// }

// export default Chat;

//************************************************************************** HACKERMOON VERSION******************************************************** */
