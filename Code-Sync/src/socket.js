// src/socket.js

import { io } from 'socket.io-client';

export const initSocket = (roomId, username) => {
  const options = {
    reconnectionAttempts: Infinity,
    timeout: 10000,
    transports: ['websocket'],
  };

  const socket = io(process.env.REACT_APP_BACKEND_URL, options);

  // Handling socket connection errors
  socket.on('connect_error', (err) => {
    console.error('Socket connection error:', err);
    throw new Error('Socket connection failed');
  });

  // Joining room on socket connection
  socket.on('connect', () => {
    socket.emit(ACTIONS.JOIN, {
      roomId,
      username,
    });
  });

  return socket;
};

