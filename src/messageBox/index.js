import React from 'react'; 
import './style.css';

class MessageBox extends React.Component {  
  renderMessages = () => (
    this.props.messages.map((message, index) => 
      <li key={index} className="message">
        {message}
      </li>
    )
  )
  render () { 
    return (
      <div className="messageBox">  
        <ul className="messages-list"><h3>Message Box</h3>
          {this.renderMessages()}
        </ul> 
      </div>
    )
  }
}

export default MessageBox;
