import React, { useState, useEffect } from 'react'; 
import { Nav } from '../../components/Nav';
import io from 'socket.io-client';


function Chat() {

    const [socket] = useState(() => io(":8000"));
    const [messages, setMessages] = useState([]);
    const [message, setMessage] = useState('');

    const sendMessage = () => {
        if (message) {
          // Send message to the server
            socket.emit('newMessageFromClient', message);
            console.log("I am in the send message constant: " + message)

            setMessage('');
        }
    };

    useEffect(() => {
        socket.on("connect", () => {
            console.log("Connected to server");
        });
    
        return () => {
            socket.disconnect();
            console.log("Disconnected from server");
        };
    }, [socket]);
    
 // useEffect to make sure we don't create new socket servers on every refresh
    useEffect(() => {
        // Listen for messages from the server
        socket.on("newMessageFromServer", msg => {
            setMessages(prevMessages => [msg, ...prevMessages]);
            console.log("I am in the useEffect msg: " + msg)
            console.log("I am in the useEffect setMessages: " + setMessages)

        });
        console.log("Connected to server");
        // Clean up the socket connection when the component unmounts
        return () => {
            socket.disconnect();
        };
        }, [socket]);



    return (

    <div className="max-w-md mx-auto my-8 p-4 rounded-lg shadow-lg bg-gray-100">
        <div className="">
            <Nav/>
        </div>
        <div className="h-48 overflow-y-auto border border-gray-300 rounded p-4">
            {messages.map((msg, index) => (
                <div key={index} className="mb-2">{msg}</div>
            ))}
        </div>
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
    );
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
