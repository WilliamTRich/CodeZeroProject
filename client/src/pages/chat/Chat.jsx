import React, { useState, useEffect } from 'react'; 
// import io from 'socket.io-client';


function Chat() {

    const [socket] = useState(() => io(":8000"));

    //useEffect to make sure we dont create new socke servers on every refresh
    useEffect(()=> {
        console.log("Is this running?");
        socket.on("Welcome", data =>
            console.log(data));
        return () => socket.off("Welcome");
    }, [socket]);

    return (
        <div>

        </div>
    )
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
