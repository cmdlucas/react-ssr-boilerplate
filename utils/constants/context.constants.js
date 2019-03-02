import React from 'react';

export const WindowContext = React.createContext({ 
    getWidth: () => 1200, 
    windowWidth: 1200 
});