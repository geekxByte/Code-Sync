import { io } from 'socket.io-client';

export const initSocket = async () => {
    const options = {
        reconnectionAttempts: Infinity,
        timeout: 10000,
        transports: ['websocket'],
    };

    try {
        const socket = io('https://code-sync-olive.vercel.app/', options);
        return socket;
    } catch (error) {
        console.error('Socket connection error:', error);
        throw error; // Propagate the error to handle it elsewhere if needed
    }
};

