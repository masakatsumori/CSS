import React, { useState, useEffect } from 'react';

const SSEComponent: React.FC = () => {
    const [messages, setMessages] = useState<Array<string>>([]);

    useEffect(() => {
        const eventSource = new EventSource('http://localhost:3000/sse-endpoint');

        eventSource.onmessage = (event: MessageEvent) => {
            const newMessage = event.data;
            setMessages(prevMessages => [...prevMessages, newMessage]);
        };

        eventSource.onerror = (error) => {
            console.error('SSE error:', error);
        };

        return () => {
            eventSource.close();
        };
    }, []);

    return (
        <div>
            <h1>SSEからのメッセージ</h1>
            <ul>
                {messages.map((msg, index) => (
                    <li key={index}>{msg}</li>
                ))}
            </ul>
        </div>
    );
};

export default SSEComponent;
