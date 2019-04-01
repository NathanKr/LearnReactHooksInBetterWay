import React from 'react';
import './ChatPanel.css'

const ChatPanel = () => {
    return (
        <div className='ChatPanel'>
            <div>room1</div>
            <div style={{flexGrow:1}}>messages</div>
            <div>send messages</div>
        </div>
    );
};

export default ChatPanel;