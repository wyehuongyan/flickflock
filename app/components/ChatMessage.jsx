import React from 'react';

class ChatMessage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <li>
                <div className="message-data align-right">
                    <span className="message-data-time" >10:10 AM, Today</span> &nbsp; &nbsp;
                    <span className="message-data-name" >Olia</span> <i className="fa fa-circle me"></i>

                </div>
                <div className="message other-message float-right">
                    Hi Vincent, how are you? How is the project coming along?
                </div>
            </li>
        );
    }
}

export default ChatMessage;