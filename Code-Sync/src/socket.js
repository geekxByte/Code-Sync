import { io } from 'socket.io-client';

export const initSocket = async () => {
    const options = {
        reconnectionAttempts: Infinity,
        timeout: 10000,
        transports: ['websocket'],
    };

    try {
        const socket = io(process.env.REACT_APP_BACKEND_URL, options);
        return socket;
    } catch (error) {
        console.error('Socket connection error:', error);
        throw error; // Propagate the error to handle it elsewhere if needed
    }
};

