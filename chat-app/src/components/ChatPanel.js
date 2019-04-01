import React from 'react';
import './ChatPanel.css'

const ChatPanel = () => {
    return (
        <div className='ChatPanel'>
            <div>room1</div>
            <div style={{flexGrow:1}}>
            <ul>
                <li>message 1</li>
                <li>message 2</li>
                <li>message 3</li>
                <li>message 4</li>
            </ul>
            </div>
            <div style={{display:'flex'}}>
                <input style={{flexGrow:1}} placeholder="insert message ..."/>
                <button>SendMessage</button>
            </div>
        </div>
    );
};

export default ChatPanel;